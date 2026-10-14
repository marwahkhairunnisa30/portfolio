const Anthropic = require('@anthropic-ai/sdk');
const ownerOk = require('./_owner');

// Prompts live server-side so this endpoint can't be used as a general-purpose LLM proxy.
const APPROACH = { Personal: 'To an individual — warm, peer-to-peer', Brand: 'To the brand — collaborative, friendly', Company: 'To the team — formal, outcome-focused' };
const TYPES = {
  'Testimoni': 'Review jujur dari pengalaman pribadi',
  'Create curiosity': 'Bikin penasaran, reveal belakangan',
  'Cerita pengalaman': 'Personal journey, produk jadi solusi',
  'Ketemu barang baru': 'Discovery story, excited tapi genuine',
  'Barang viral': 'Honest take soal barang yang lagi hype',
  'Tips kehidupan': 'Tips/hack, produk sebagai enabler'
};
const clip = (v, n) => String(v || '').slice(0, n).trim();

function tailoredPrompt(f) {
  const brand = clip(f.brand, 80);
  if (!brand) return { error: 'Add a brand name first.' };
  const approach = APPROACH[f.approach] ? f.approach : 'Brand';
  return { max: 1500, prompt: `You are a senior B2B business development writer for an Indonesian e-commerce enabler. Write 3 short, personalised outreach messages.
Sender: ${clip(f.name, 60) || 'the sender'} from ${clip(f.company, 80) || 'our team'}.
Target brand: ${brand} (${clip(f.industry, 40)}), selling on ${clip(f.platform, 40)}. Contact person: ${clip(f.contact, 60) || 'unknown'}.
Approach: ${approach} (${APPROACH[approach]}). Goal: ${clip(f.goal, 60)}. Tone: ${clip(f.tone, 20)}. Language: ${f.lang === 'EN' ? 'English' : 'Bahasa Indonesia'}.
Rules: outcome-first, specific to the brand and platform, no generic fluff, no emojis, no placeholders in brackets.
Return ONLY a JSON array of 3 objects: [{"label":"Opener","text":"..."},{"label":"Email pitch","subject":"...","text":"..."},{"label":"Follow-up","text":"..."}]` };
}

function threadsPrompt(f) {
  const idea = clip(f.idea, 1500);
  if (idea.length < 20) return { error: f.lang === 'EN' ? 'Idea needs at least 20 characters.' : 'Ide minimal 20 karakter.' };
  const type = TYPES[f.type] ? f.type : 'Testimoni';
  const count = ['3', '5', '7', '10'].includes(String(f.count)) ? String(f.count) : '5';
  return { max: 2000, prompt: `Kamu penulis konten afiliasi Shopee di X/Twitter yang natural dan tidak terasa seperti iklan.
Tulis thread ${count} tweet dalam ${f.lang === 'EN' ? 'casual English' : 'bahasa Indonesia santai ala Twitter Indonesia'}.
Format: ${type} — ${TYPES[type]}. Hook: ${!f.hook || f.hook === 'Auto' ? 'pilih yang paling cocok' : clip(f.hook, 30)}.
Ide / cerita awal: ${idea}
Deskripsi produk utama: ${clip(f.product, 1500) || '-'}
Produk complementary: ${clip(f.extra, 300) || '-'}
CTA: ${f.cta === 'Inline link' ? 'tulis [link] inline saat produk disebut' : 'arahkan ke link di bio di tweet terakhir'}.
Aturan: tiap tweet maks 270 karakter, tweet 1 hook kuat, minim hashtag dan emoji, terdengar seperti orang asli.
Balas HANYA dengan JSON array string: ["tweet 1","tweet 2"]` };
}

const KINDS = { tailored: tailoredPrompt, threads: threadsPrompt };

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Owner-Token');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ error: 'Server configuration error.' });
  if (!ownerOk(req)) return res.status(401).json({ error: 'Owner token required.' });

  const { kind, ...fields } = req.body || {};
  const build = KINDS[kind];
  if (!build) return res.status(400).json({ error: 'Invalid kind.' });
  const p = build(fields);
  if (p.error) return res.status(400).json({ error: p.error });

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: p.max,
      messages: [{ role: 'user', content: p.prompt }],
    });
    const text = response.content[0]?.text || '';
    const m = text.match(/\[[\s\S]*\]/);
    const items = JSON.parse(m ? m[0] : text);
    if (!Array.isArray(items)) throw new Error('Not an array.');
    return res.status(200).json({ items });
  } catch (err) {
    console.error('write error:', err);
    return res.status(500).json({ error: 'Couldn’t generate right now — try again.' });
  }
};
