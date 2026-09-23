const Anthropic = require('@anthropic-ai/sdk');

const rateLimit = new Map();
const PUBLIC_LIMIT = 3;
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

function isAllowed(ip) {
  const now = Date.now();
  const rec = rateLimit.get(ip);
  if (!rec || now > rec.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (rec.count >= PUBLIC_LIMIT) return false;
  rec.count++;
  return true;
}

const SYSTEM_PROMPT = `You write BD cold outreach that sounds like it came from a real person — someone who actually knows the brand, not someone filling in a template.

Hard rules — break any of these and the output fails:
- Max 80 words per variation. Shorter is better.
- Never open with: "Hi [name]", "I hope", "I noticed that", "I came across", "I've been following", "Just wanted to reach out", or anything that announces you're about to pitch
- Never use: leverage, synergy, seamless, cutting-edge, alignment, partnership opportunity, value proposition, mutually beneficial, would love to explore, excited to connect, I believe there's
- "I" must not be the first word of the message
- No framing language ("I'm writing because...", "The reason I'm reaching out...")
- Contact name if provided: weave it naturally mid-sentence, never as a standalone greeting opener
- Bahasa Indonesia: write the way real BD people in Jakarta actually message — direct, natural mix of BI and English where it fits, not translated English patterns

Write 3 variations, each with a different energy and opening style:
1. "Direct & Punchy" — 2–3 sentences max. Lead with the point. No setup, no buildup, no softening.
2. "Curiosity-led" — open with one specific observation or question that shows you actually looked at the brand. Not a generic compliment — something that would make them think "huh, they noticed that."
3. "Proof-first" — drop one concrete result or experience in the first sentence, then connect it to them in the second. Zero preamble.

Use the approach type (Personal/Brand/Company) to decide who you're addressing, not what you're saying.

Output as valid JSON only, no markdown, no explanation:
{"variations":[{"name":"Direct & Punchy","message":"..."},{"name":"Curiosity-led","message":"..."},{"name":"Proof-first","message":"..."}]}`;

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

  const { brand, industry, platform, approach_type, contact_name, tone, goal, language, owner_token } = req.body || {};

  const isOwner = owner_token && process.env.OWNER_TOKEN && owner_token === process.env.OWNER_TOKEN;

  if (!isOwner && !isAllowed(ip)) {
    return res.status(429).json({
      error: 'Sudah 3x generate hari ini. Coba lagi besok ya!',
    });
  }

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
