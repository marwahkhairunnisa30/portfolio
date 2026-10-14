const Anthropic = require('@anthropic-ai/sdk');
const ownerOk = require('./_owner');

const SALES_PROMPT = `You are a BD leads research assistant specializing in Indonesian e-commerce and brand ecosystem.

Given an Ideal Customer Profile (ICP), generate 8–10 realistic simulated brand leads that match the criteria.

IMPORTANT: All leads are simulated for demo purposes — names, contacts, and data are realistic in format but not real individuals or businesses.

OUTPUT FORMAT — return valid JSON only, no markdown, no explanation:

{
  "search_summary": "one line summarizing the search criteria",
  "leads": [
    {
      "brand": "Brand name",
      "category": "Product category",
      "platform": "Primary platform",
      "profile_url": "Realistic profile URL e.g. instagram.com/brandname",
      "followers": "e.g. 45K Instagram followers",
      "size_signal": "e.g. Est. 500–1000 orders/month",
      "email": "Realistic business email e.g. hello@brand.com",
      "whatsapp": "Indonesian format e.g. +62 812-3456-7890",
      "decision_maker": "e.g. Founder / Marketing Lead / BD Manager",
      "match_score": 85,
      "match_reason": "One sentence why this brand fits the ICP"
    }
  ]
}

RULES:
- Brand names: realistic emerging Indonesian brands — mix of English, Indonesian, hybrid
- Emails: hello@brand.com, cs@brand.id, founder@brand.com patterns
- WhatsApp: Indonesian format +62 8XX-XXXX-XXXX
- Follower counts proportional and realistic for the platform and category
- Match scores: 90–100 perfect fit, 75–89 strong, 60–74 worth exploring
- Sort leads by match_score descending
- Never use real brand names or real contact information
- Output must be valid JSON parseable with JSON.parse()`;

const JOB_PROMPT = `You are a recruitment leads research assistant specializing in the Indonesian job market.

Given a job seeker's target criteria, generate 8–10 realistic simulated companies and their recruiter contacts that match.

IMPORTANT: All data is simulated for demo purposes — company names, recruiter names, and contacts are realistic in format but not real.

OUTPUT FORMAT — return valid JSON only, no markdown, no explanation:

{
  "search_summary": "one line summarizing the job search criteria",
  "leads": [
    {
      "company": "Company name",
      "industry": "Industry / sector",
      "company_size": "e.g. 50–200 employees",
      "open_role": "Specific job title e.g. BD Manager - FMCG",
      "work_type": "Remote / Hybrid / WFO",
      "location": "City",
      "recruiter_name": "First Last",
      "recruiter_title": "e.g. Talent Acquisition / HR Manager / Hiring Manager",
      "linkedin_recruiter": "linkedin.com/in/firstname-lastname",
      "linkedin_company": "linkedin.com/company/company-slug",
      "email": "e.g. talent@company.com",
      "match_score": 88,
      "match_reason": "One sentence why this company fits the job seeker's criteria"
    }
  ]
}

RULES:
- Company names: realistic Indonesian companies — PT names, startups, established brands
- Recruiter names: realistic Indonesian names (mix of local and Westernized)
- LinkedIn URLs follow real format — linkedin.com/in/name or linkedin.com/company/slug
- Open roles must be specific: "BD Manager - FMCG" not just "Manager"
- Match scores: 90–100 near-perfect, 75–89 strong, 60–74 worth exploring
- Sort leads by match_score descending
- Never use real company names, real people's names, or real contact info
- Output must be valid JSON parseable with JSON.parse()`;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Owner-Token');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  if (!ownerOk(req)) {
    return res.status(401).json({ error: 'Owner token required.' });
  }

  const { mode, ...fields } = req.body || {};

  if (!mode || !['sales', 'job'].includes(mode)) {
    return res.status(400).json({ error: 'Invalid mode.' });
  }

  let userMessage;
  if (mode === 'sales') {
    const { category, brand, platform, size, location, context } = fields;
    if (!category && !brand) {
      return res.status(400).json({ error: 'Category or brand is required.' });
    }
    userMessage = `Find leads for:
Category: ${category || `brands similar to ${brand}`}
Platform: ${platform || 'any'}
Brand size: ${size || 'any'}
Location: ${location || 'Indonesia'}
${context ? `Context: ${context}` : ''}`;
  } else {
    const { role, industry, company_size, work_type, location } = fields;
    if (!role) {
      return res.status(400).json({ error: 'Role is required.' });
    }
    userMessage = `Find recruiter leads for:
Target role: ${role}
Industry: ${industry || 'any'}
Company size: ${company_size || 'any'}
Work type: ${work_type || 'any'}
Location: ${location || 'Jakarta'}`;
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4096,
      system: mode === 'sales' ? SALES_PROMPT : JOB_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    });

    const text = response.content[0]?.text;
    if (!text) throw new Error('Empty response.');

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      const match = text.match(/\{[\s\S]*\}/);
      if (match) parsed = JSON.parse(match[0]);
      else throw new Error('Could not parse response as JSON.');
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error('leads error:', err);
    return res.status(500).json({ error: 'Failed to generate leads. Please try again.' });
  }
};
