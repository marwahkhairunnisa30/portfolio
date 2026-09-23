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

const SYSTEM_PROMPT = `You write BD cold outreach messages that feel like they came from a real person who genuinely knows the brand and the space — credible, personal, and worth replying to.

Format — each message must have exactly 2 paragraphs, separated by a blank line:
- Paragraph 1 (2–3 sentences): Brief, natural self-introduction (who you are, what you do) + one specific, personalized observation about the brand that shows you actually looked at them — not a generic compliment
- Paragraph 2 (2–3 sentences): Your value or relevant proof + a clear CTA proposing a 20-minute meeting or call to discuss further

Length: 130–180 words total. Detailed enough to be credible, tight enough to respect their time.

Hard rules — break any and the output fails:
- Never open with "Hi [name]", "I hope this finds you well", "I noticed that", "I came across", "Just wanted to reach out", or any AI opener
- Never use: leverage, synergy, seamless, cutting-edge, alignment, partnership opportunity, value proposition, mutually beneficial, would love to explore, excited to connect, I believe there's
- Contact name if provided: use it naturally mid-message, never as a standalone greeting opener
- Sender's name and company must appear naturally in paragraph 1 — not robotically ("My name is X from Y"), but woven in
- Bahasa Indonesia: natural code-switching BI/EN where it fits, not translated English patterns
- The CTA in paragraph 2 must be specific: propose a 20-minute meeting/call, not a vague "let me know if you're interested"

3 variations, each with different energy:
1. "Direct & Punchy" — confident, straight to the point, assertive CTA. No softening.
2. "Curiosity-led" — open with a specific brand observation that makes them think "they actually looked." Warm but direct CTA.
3. "Proof-first" — lead paragraph 1 with a concrete result or experience before the intro. CTA ties the proof to what you'd discuss.

Use approach type (Personal/Brand/Company) to decide who you're addressing.

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

  const { brand, industry, platform, approach_type, contact_name, tone, goal, language, sender_name, sender_company, owner_token } = req.body || {};

  const isOwner = owner_token && process.env.OWNER_TOKEN && owner_token === process.env.OWNER_TOKEN;
  const isLocalhost = ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1';

  if (!isOwner && !isLocalhost && !isAllowed(ip)) {
    return res.status(429).json({
      error: 'Sudah 3x generate hari ini. Coba lagi besok ya!',
    });
  }

  if (!brand || !industry || !platform || !tone || !goal || !language || !sender_name || !sender_company) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const userMessage = `Sender: ${sender_name} from ${sender_company}. Brand: ${brand}. Industry: ${industry}. Platform: ${platform}. Approach: ${approach_type || 'Personal'}. Contact name: ${contact_name || 'not provided'}. Tone: ${tone}. Goal: ${goal}. Write in ${language}.`;

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
