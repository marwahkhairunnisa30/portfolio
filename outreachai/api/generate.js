const Anthropic = require('@anthropic-ai/sdk');

// In-memory rate limit: Map<ip, {count, resetAt}>
const rateLimit = new Map();
const LIMIT = 10;
const WINDOW_MS = 60 * 60 * 1000;

function isAllowed(ip) {
  const now = Date.now();
  const rec = rateLimit.get(ip);
  if (!rec || now > rec.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (rec.count >= LIMIT) return false;
  rec.count++;
  return true;
}

const SYSTEM_PROMPT = `You are a BD specialist who has been doing outreach for years. You write messages that feel like they come from a real person — not a tool, not a template. Your messages have natural imperfections: sometimes you start mid-thought, use casual connectors, or reference something specific that shows you actually looked at the brand. Never start with 'Hi [name]' or 'I hope this finds you well'. Never use words like: leverage, synergy, seamless, cutting-edge, excited to connect, or any phrase that sounds like it came from a bot.

Generate 3 variations of a cold outreach message. Each max 100 words. Each must feel like it was written specifically for this brand by someone who genuinely knows the space.

Approach types:
- Personal: address the individual directly, reference their role or something they'd care about personally, feel like a peer reaching out
- Brand: speak to the brand identity and audience, feel collaborative
- Company: speak to business outcomes and team-level value, slightly more formal but still human

If a contact name is provided, weave it naturally into the message body — not just as a greeting opener.

Variation styles:
1. Direct & Punchy — one strong hook, straight to the point, confident
2. Curiosity-led — open with an observation or question about their brand that makes them want to respond
3. Proof-first — briefly mention something you've done that's relevant, then connect it to them

Output as valid JSON only, no markdown, no explanation:
{
  "variations": [
    { "name": "Direct & Punchy", "message": "..." },
    { "name": "Curiosity-led", "message": "..." },
    { "name": "Proof-first", "message": "..." }
  ]
}`;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error: ANTHROPIC_API_KEY is not set.' });
  }

  const forwarded = req.headers['x-forwarded-for'];
  const ip = (forwarded ? forwarded.split(',')[0] : req.socket?.remoteAddress || 'unknown').trim();

  if (!isAllowed(ip)) {
    return res.status(429).json({ error: 'Too many requests. Try again in a bit.' });
  }

  const { brand, industry, platform, approach_type, contact_name, tone, goal, language } = req.body || {};

  if (!brand || !industry || !platform || !tone || !goal || !language) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const userMessage = `Brand: ${brand}. Industry: ${industry}. Platform: ${platform}. Approach: ${approach_type || 'Personal'}. Contact name: ${contact_name || 'not provided'}. Tone: ${tone}. Goal: ${goal}. Write in ${language}.`;

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    });

    const text = response.content[0]?.text;
    if (!text) throw new Error('Empty response from model.');

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      const match = text.match(/\{[\s\S]*\}/);
      if (match) parsed = JSON.parse(match[0]);
      else throw new Error('Could not parse model response as JSON.');
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error('generate error:', err);
    const message = err.status === 401
      ? 'Invalid API key configuration.'
      : 'Failed to generate messages. Please try again.';
    return res.status(500).json({ error: message });
  }
};
