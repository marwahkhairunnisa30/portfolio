// Generates the six case-study pages in /projects from the data below (MK Portfolio v3 case template).
// Edit the data here, then run:  node scripts/build-cases.js
const fs = require('fs');
const path = require('path');

const A = '/projects/assets/';
const PROJECTS = [
  { id: 'personal-brand-acquisitions', tab: 'Brand Acquisitions', eyebrow: 'Individual contributor · 2023 – 2024', title: 'Personal Brand Acquisitions', role: 'BD · Individual contributor',
    summary: 'Every brand here was personally sourced, qualified, pitched, and closed by me — not the team. Proof I can sell, not just lead people who sell.',
    note: 'Separate from the 47 brand partnerships my team closed under my leadership — that’s a different story.',
    stats: [{ v: '55+', l: 'Brands personally closed' }, { v: '3', l: 'Platforms — Shopee, TikTok Shop, Tokopedia' }, { v: '120+', l: 'Storefronts managed across marketplaces' }],
    // Logo files are /projects/assets/brands/01.png … in this order.
    brands: ['Teddie Clubs', 'in-lite', 'CA', 'Waldos', 'Hijacket', 'Mage', 'Segersnow', 'Jacquelle', 'Martin Versa', 'Gentle Hour', 'Chronox', 'Kimbo', 'Larocking', 'Fantasy', 'HIA Everywear', 'Dragon', 'FVCK', 'Dewdrop', 'Elmer', 'Vention', 'Superego', 'Vengoz', 'Nayara', 'Skinfood', 'Zebra', 'Cheerilee', 'Hunt4Toys', 'Reneturos Group', 'Cuta', 'Scholl', 'Gulali Books', 'Cots & Cuddles', 'Hypospot', 'Oneskin', 'Sniff Sniff', 'Dua Kelinci'],
    tags: ['B2B Sales', 'Lead Generation', 'Outreach', 'Negotiation', 'Closing'],
    didLabel: 'What closed these deals', did: [{ t: 'Personalised outreach', d: 'Every first message written for the brand in front of me — never a template blast.' }, { t: 'ICP-first qualification', d: 'Know the brand before the first message, and walk away early from poor fits.' }, { t: 'Outcome-based pitch', d: 'Lead with what the brand gets from the partnership, not with what we do.' }],
    procLabel: 'My closing process', proc: ['Prospect', 'Outreach', 'Qualify', 'Propose', 'Negotiate', 'Onboard', 'Retain'],
    cta: 'Want to see what I can close for your team?' },
  { id: 'bd-funnel-overhaul', tab: 'BD Team Leadership', eyebrow: 'Strategy & leadership · 2024', title: 'BD Team Leadership', role: 'BD Lead · Team of 8',
    summary: 'Built and led a BD team of 8 at AHA Commerce — designed the acquisition funnel end-to-end, set KPIs, ran weekly 1-on-1s, and drove 47 brand partnerships across Shopee, TikTok Shop & Tokopedia in 9 months.',
    stats: [{ v: '47+', l: 'Brand partnerships in 9 months' }, { v: '8', l: 'BD people led as one team' }, { v: '30%', l: 'Lead-to-conversion lift' }],
    tags: ['Team Leadership', 'BD Strategy', 'Funnel Design', 'KPI Management', 'AI & Automation'],
    challenge: 'Fragmented process and inconsistent closes to a unified BD engine — built to standardize execution, improve conversion, and scale what works.',
    challengeMotion: true,
    didLabel: 'What I made for the team', did: [{ t: 'AI Agentic Scraper', d: 'AppleScript automation that sources and enriches leads so the team can sell.' }, { t: 'BD Module', d: 'Internal knowledge base — product, pitch and process in one place for the team.' }, { t: 'Funnel Tracker', d: 'Pipeline dashboard so every stage and every owner is visible to the whole team.' }],
    procLabel: 'How I lead — 7 steps', proc: ['Diagnose\nthe team', 'Set one\ndirection', 'Define\nroles & KPIs', 'Build the\nplaybook', 'Coach\nevery week', 'Review\nthe numbers', 'Grow the\nnext leads'],
    galleryLabel: 'BD Wikipedia', gallery: [{ src: '/assets/bd-wiki-home.png', cap: 'Module overview' }, { src: '/assets/bd-wiki-sales.png', cap: 'Sales strategy module' }],
    cta: 'Want to scale your BD team?' },
  { id: 'shopee-super-summit', tab: 'Shopee Super Summit', eyebrow: 'AHA Commerce · 2024 & 2025', title: 'Shopee Super Summit', role: 'Project Lead',
    summary: 'AHA Commerce exhibited at Shopee Super Summit with a live brand activation booth. I owned the full execution, working cross-functionally with BD, creative, and ops teams from pre-event through post-event.',
    stats: [{ v: '100+', l: 'Leads in 2024 · 76 ICP-matched' }, { v: '170+', l: 'Leads in 2025 · 130+ ICP-matched' }, { v: '>50%', l: 'ICP leads converted to a first meeting' }],
    tags: ['Project Management', 'Brand Activation', 'Cross-functional', 'Exhibitor Ops'],
    didLabel: 'What I did', did: [{ t: 'Pre-event planning', d: 'Creative briefing, BD alignment, booth logistics and a timeline set well ahead.' }, { t: 'On-ground execution', d: 'Booth setup, exhibitor operations and live brand activation on the event floor.' }, { t: 'Post-event wrap-up', d: 'Results documented, booth performance evaluated, lessons logged for next year.' }],
    procLabel: 'Process', proc: ['Brief & Align', 'Planning', 'Prep Booth', 'On-ground', 'Wrap-up'],
    outcomes: ['Generated 100+ leads in 2024 (76 ICP-matched) and 170+ in 2025 (130+ ICP-matched)', 'Converted >50% of ICP-qualified leads to a first meeting each year', 'Elevated AHA Commerce’s brand presence at Shopee’s largest annual merchant summit'],
    galleryLabel: 'Photo & documentation', gallery: [{ src: A + 'shopee-summit-1.webp', cap: 'Shopee Super Summit 2024' }, { src: A + 'shopee-summit-2.webp', cap: 'Shopee Super Summit 2025' }],
    cta: 'Planning an exhibitor booth that has to bring in leads?' },
  { id: 'aha-birthday', tab: 'AHA 13 Birthday', eyebrow: 'AHA Commerce · 2024', title: 'AHA 13 Birthday Celebration', role: 'Project Lead',
    summary: 'Project Lead for AHA Commerce’s 13th anniversary — managing the full company outing for 110+ attendees from concept to on-day execution.',
    stats: [{ v: '110+', l: 'Attendees' }, { v: '9', l: 'Committee members I led' }, { v: '9.46', l: 'Satisfaction score out of 10' }],
    tags: ['Project Management', 'Event Planning', 'Vendor Management', 'Company Outing'],
    didLabel: 'What I did', did: [{ t: 'Concept development', d: 'Theme, venue and activity lineup for 110+ attendees — on culture and on budget.' }, { t: 'Vendor & logistics', d: 'Venue, catering, transport and entertainment — contracts and timelines agreed.' }, { t: 'On-day execution', d: 'On-day PIC for event flow and team coordination, keeping everything on plan.' }],
    procLabel: 'Process', proc: ['Concept & Brief', 'Vendor Search', 'Detailed Planning', 'Event Day', 'Wrap-up'],
    outcomes: ['Delivered a full-day outing for 110+ attendees with zero critical issues on event day', 'Led a 9-person committee — venue, catering, transport, and entertainment end-to-end', 'Achieved a 9.46/10 attendee satisfaction score in the post-event survey'],
    galleryLabel: 'Photo & documentation', gallery: [{ src: A + 'aha-birthday-team.webp', cap: 'AHA 13 — the team' }],
    cta: 'Need someone to own an event end-to-end?' },
  { id: 'aha-thailand', tab: 'AHA Thailand', eyebrow: 'AHA Commerce Thailand · 2026', title: 'Culture Building Initiative', role: 'Culture Building · Trainer',
    summary: 'Led a culture adoption initiative for the BD Thailand team — teaching AHA Commerce’s full operating framework, from product training and sales strategy to pipeline management.',
    stats: [{ v: '9', l: 'People trained' }, { v: '3', l: 'Training sessions' }],
    tags: ['Culture Building', 'Product Training', 'Sales Strategy', 'Pipeline Management'],
    didLabel: 'What I covered', did: [{ t: 'Product training', d: 'Value propositions, catalogue and the pitch framework of the Indonesia BD team.' }, { t: 'Sales strategy', d: 'Prospecting, lead qualification and proven closing strategies from Indonesia.' }, { t: 'Pipeline management', d: 'Pipeline tracking and a weekly review cadence aligned to AHA reporting standards.' }],
    procLabel: 'Process', proc: ['Needs Assessment', 'Training Design', 'Product Training', 'Sales Workshop', 'Pipeline Setup', 'Follow-up'],
    outcomes: ['9 BD team members onboarded to AHA Commerce’s operating framework across 3 structured sessions', 'Thailand team equipped with Indonesia BD’s product pitch, sales methodology, and pipeline tracking', 'Weekly review cadence established — Thailand reporting aligned with AHA Commerce standards'],
    galleryLabel: 'Photo & documentation', gallery: [{ src: A + 'aha-thailand-team.webp', cap: 'AHA Commerce Thailand team' }],
    cta: 'Onboarding a new market team?' },
  { id: 'speaker-govokasi', tab: 'Speaker — GoVokasi', eyebrow: 'GoVokasi × Maxwell Leadership · Sep 2026', title: 'Beyond Your Degree: Building a Career Outside Your Background', role: 'Guest Speaker',
    summary: 'Guest speaker for GoVokasi’s #LetsGoPRO Community Talks — an online session on building a career outside your degree, hosted by Maxwell Leadership Corporate Solutions Group.',
    stats: [{ v: '14', l: 'Slides' }, { v: 'Public', l: 'Audience' }, { v: 'Online', l: 'Format' }],
    tags: ['Public Speaking', 'Career Development', 'Thought Leadership', 'Community'],
    didLabel: 'What I covered', did: [{ t: 'Career ≠ straight line', d: 'Reframing how we think about career paths, pivots and transitions over time.' }, { t: 'Degree vs skills', d: 'What you studied is not the limit of what you can actually do at work.' }, { t: 'Transferable skills', d: 'Communication, problem solving and analysis — carried across any industry.' }, { t: 'Proof of work', d: 'Turning “I can do this” into evidence that recruiters actually believe.' }, { t: 'The bridge role', d: 'Why you don’t always need to leap — and how to build a bridge instead.' }],
    procLabel: 'Talk structure', proc: ['Reframe', 'Degree vs skills', 'Transferable skills', 'Proof of work', 'Bridge role'],
    deck: { t: 'Beyond Your Degree — Career Transition Playbook', m: '14 slides · PDF', href: A + 'beyond-your-degree-deck.pdf' },
    galleryLabel: 'Event poster', gallery: [{ src: A + 'govokasi-poster.jpg', cap: 'GoVokasi × Maxwell Leadership' }],
    cta: 'Looking for a speaker on careers, BD or AI in sales?' }
];

const WA = 'https://wa.me/6285155343042';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = i => String(i + 1).padStart(2, '0');
const MARK = '<svg viewBox="0 0 120 120" width="32" aria-hidden="true"><polyline points="16,96 16,24 40,64 64,24 64,96" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="square"/><line x1="82" y1="24" x2="82" y2="96" stroke="currentColor" stroke-width="9" stroke-linecap="square"/><polyline points="104,24 82,64 104,96" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="square"/><circle cx="104" cy="24" r="8" fill="#E9F958" stroke="#052D8F" stroke-width="2.5"/></svg>';

// Two logo rows scrolling in opposite directions; each row is duplicated so the loop is seamless.
function brandRows(brands) {
  const all = brands.map((name, k) => ({ name, src: A + 'brands/' + pad(k) + '.png' })), half = Math.ceil(all.length / 2);
  return [all.slice(0, half), all.slice(half)].map((row, k) => {
    const tile = (b, hidden) => `<div class="logo"${hidden ? ' aria-hidden="true"' : ''} title="${esc(b.name)}"><img src="${b.src}" alt="${hidden ? '' : esc(b.name)}" decoding="async" width="80" height="80"></div>`;
    return `
      <div class="logos__row"><div class="logos__track" style="animation-duration:${k ? '25.6s' : '22.4s'};animation-direction:${k ? 'reverse' : 'normal'}">${row.map(b => tile(b)).join('')}${row.map(b => tile(b, true)).join('')}</div></div>`;
  }).join('');
}

function page(p, i) {
  const n = PROJECTS.length, prev = PROJECTS[(i - 1 + n) % n], next = PROJECTS[(i + 1) % n];
  const g = p.gallery || [];
  return `<!DOCTYPE html>
<!-- Generated by scripts/build-cases.js — edit the data there, not this file. -->
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(p.tab)} — Marwah K</title>
<meta name="description" content="${esc(p.summary)}" />
<meta name="theme-color" content="#081433" />
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300..800&family=Geist+Mono:wght@400..600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/mk/site.css">
</head>
<body>
<nav class="nav nav--sticky">
  <div class="wrap nav__in">
    <a href="/" class="nav__brand">${MARK}<span>Marwah K</span></a>
    <div class="nav__right">
      <a href="/">← Back to portfolio</a>
      <a class="btn btn--gold" href="${WA}" target="_blank" rel="noopener">Let's talk</a>
    </div>
  </div>
</nav>

<main>
<header class="wrap case-hero">
  <div class="eyebrow"><span class="sq"></span><b>${esc(p.eyebrow)}</b></div>
  <h1><span>${esc(p.title)}</span></h1>
  <div class="rule"></div>
  <div class="case-intro">
    <div>
      <span class="role">${esc(p.role)}</span>
      <p class="summary">${esc(p.summary)}</p>${p.note ? `
      <p class="note">${esc(p.note)}</p>` : ''}
    </div>
    <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
  </div>
</header>

<section class="wrap" aria-label="Key numbers">
  <div class="stats">${p.stats.map(s => `
    <div><b>${esc(s.v)}</b><span>${esc(s.l)}</span></div>`).join('')}
  </div>
</section>
${p.brands ? `
<section class="wrap case-sec sec-col" style="gap:28px">
  <h2 class="h2">Brands I closed</h2>
  <div class="logos" aria-label="${p.brands.length} of the brands I closed">${brandRows(p.brands)}
  </div>
</section>
` : ''}${p.challenge ? `
<section class="wrap case-sec challenge">
  <span class="label">The challenge</span>
  <p>${esc(p.challenge)}</p>${p.challengeMotion ? `
  <div class="ch-motion"><canvas aria-label="Eight scattered team members align into one five-stage funnel that closes on repeat" role="img"></canvas></div>` : ''}
</section>
` : ''}
<section class="wrap case-sec sec-col">
  <div class="sec-hd"><h2 class="h2">${esc(p.didLabel)}</h2><span>${String(p.did.length).padStart(2, '0')} items</span></div>
  <div class="did">${p.did.map((d, k) => `
    <div><span class="n">${pad(k)}</span><div class="tx"><h3>${esc(d.t)}</h3><p>${esc(d.d)}</p></div></div>`).join('')}
    <div class="fill" hidden><canvas aria-hidden="true"></canvas><span><span class="dot"></span>Signal → proof</span></div>
  </div>
</section>

<section class="wrap case-sec sec-col">
  <h2 class="h2">${esc(p.procLabel)}</h2>
  <div class="proc">${p.proc.map((t, k) => `
    <div><span class="n">${pad(k)}</span><b>${esc(t)}</b></div>`).join('')}
  </div>
</section>
${p.outcomes ? `
<section class="wrap case-sec outcomes">
  <h2 class="h2">Outcomes</h2>
  <ol>${p.outcomes.map((t, k) => `
    <li><span>${pad(k)}</span><p>${esc(t)}</p></li>`).join('')}
  </ol>
</section>
` : ''}${p.deck ? `
<section class="wrap case-sec">
  <a class="deck" href="${p.deck.href}" target="_blank" rel="noopener">
    <span><small>Deck · PDF</small><b>${esc(p.deck.t)}</b><i>${esc(p.deck.m)}</i></span>
    <span>Open deck →</span>
  </a>
</section>
` : ''}${g.length ? `
<section class="wrap case-sec sec-col">
  <div class="sec-hd"><h2 class="h2">${esc(p.galleryLabel)}</h2><span>${g.length} image${g.length > 1 ? 's' : ''}</span></div>
  <div class="gallery">${g.map((x, k) => `
    <figure><div class="frame"><div><img src="${x.src}" alt="${esc(x.cap)}" loading="lazy"></div></div><figcaption><span>${esc(x.cap)}</span><span>${pad(k)} / ${String(g.length).padStart(2, '0')}</span></figcaption></figure>`).join('')}
  </div>
</section>
` : ''}
<section class="wrap case-end">
  <div class="cta">
    <h2>${esc(p.cta)}</h2>
    <a class="btn btn--ink" href="${WA}" target="_blank" rel="noopener">Let's talk →</a>
  </div>
  <div class="pn">
    <a href="/projects/${prev.id}.html"><small>← Previous</small><b>${esc(prev.tab)}</b></a>
    <a href="/projects/${next.id}.html"><small>Next →</small><b>${esc(next.tab)}</b></a>
  </div>
  <div class="case-foot"><span>© 2026 Marwah Khairunnisa</span><a href="/constellation.html">Skills Constellation →</a></div>
</section>
</main>
<script src="/assets/mk/case.js" defer></script>
</body>
</html>
`;
}

const out = path.join(__dirname, '..', 'projects');
// speaker-govokasi.html is now its own hand-designed Voice page; keep it in prev/next but don't overwrite it.
const KEEP = new Set(['speaker-govokasi']);
PROJECTS.forEach((p, i) => {
  if (KEEP.has(p.id)) return;
  fs.writeFileSync(path.join(out, p.id + '.html'), page(p, i));
  console.log('wrote projects/' + p.id + '.html');
});
