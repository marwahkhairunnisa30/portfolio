/* ── Global i18n — EN (default) / ID ── */
(function () {
  'use strict';

  const T = {
    en: {
      /* ── Loader ── */
      'loader.loading': 'Loading',
      'loader.tagline': 'Growth Efficient Obsessed.',

      /* ── Nav / Header ── */
      'nav.home': 'Home',
      'nav.work': 'Work',
      'nav.skills': 'Skills',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'header.menu': 'Menu',
      'header.localTime': 'Local time',

      /* ── Hero ── */
      'hero.eyebrow': 'Personal Studio · Jakarta, Indonesia',
      'hero.h1.0': 'Driving growth',
      'hero.h1.1': 'through strategy',
      'hero.h1.2': 'and bold vision.',
      'hero.rating': 'BizTech Enthusiast',
      'hero.cta.connect': "Let's Connect",
      'hero.cta.work': 'See my work',
      'hero.status.left': 'Leading BD since 2023',
      'hero.status.center': 'Jakarta, Indonesia · Remote-friendly',
      'hero.status.right': 'Scroll to explore',

      /* ── Hero card carousel ── */
      'card.0.caption': 'Business Development',
      'card.0.title': 'Built to grow.',
      'card.1.caption': 'Strategic Partnerships',
      'card.1.title': 'Forged to last.',
      'card.2.caption': 'AI & Automation',
      'card.2.title': 'Designed to scale.',

      /* ── About ── */
      'about.eyebrow': 'About Me',
      'about.distributed': 'Based in Jakarta, building partnerships across markets.',
      'about.main': 'Operations-oriented BD Lead combining pipeline management, CRM optimization, and workflow automation ',
      'about.muted': 'to boost conversion efficiency — with experience in team leadership, KPI design, and bridging sales strategy with execution.',
      'about.findOnline': 'Find me online',
      'about.getInTouch': 'Get in touch',

      /* ── Portfolio ── */
      'portfolio.eyebrow': 'Portfolio',
      'portfolio.h2': 'Selected Work',

      /* BD Portfolio card */
      'pf.bd.title': 'BD Portfolio',
      'pf.bd.meta': 'Business Development · AHA Commerce · 2023–2025',
      'pf.bd.desc': 'How I drove growth, led teams, and shipped things that moved the needle.',
      'pf.bd.0.name': 'Brand Acquisition — Team',
      'pf.bd.0.cat': 'Strategy & Leadership · 2024',
      'pf.bd.0.desc': 'Scaled a team of 8 to 47 brand partnerships in 9 months — system built from scratch, results delivered.',
      'pf.bd.1.name': 'Brand Acquisition — Personal',
      'pf.bd.1.cat': 'Individual Contributor · 2023–24',
      'pf.bd.1.desc': '55+ deals closed solo, end-to-end — cold to signed across fashion, F&B, and sports.',
      'pf.bd.2.name': 'Company Project',
      'pf.bd.2.cat': 'Company Project · 2024–25',
      'pf.bd.2.desc': 'Multiple company-wide projects, one project lead — Shopee Super Summit, Thailand campaigns, internal activations. Different teams, different timelines, always delivered.',
      'pf.bd.3.name': 'Digital Project',
      'pf.bd.3.cat': 'Automation & Digital · 2024',
      'pf.bd.3.desc': 'Shipped AI-powered outreach tools that cut manual prospecting time — from prompt engineering to live workflow.',

      /* Personal Project card */
      'pf.pp.title': 'Personal Project',
      'pf.pp.meta': 'Outside of Work · Ongoing',
      'pf.pp.desc': 'Tools I build and experiments that scratch my own itch.',
      'pf.pp.0.name': 'AI Tools',
      'pf.pp.0.cat': 'Built with AI · 2026',
      'pf.pp.0.n.0.desc': 'Personalized BD outreach generator',
      'pf.pp.0.n.1.desc': "Affiliate content that doesn’t read like an ad",
      'pf.pp.0.n.2.desc': 'Brand & recruiter research toolkit',
      'pf.pp.1.name': 'Skills Constellation',
      'pf.pp.1.cat': 'Interactive Viz · 2026',
      'pf.pp.1.desc': 'Not a list. A live map of 14 skills across BD, content, and tech — and how they connect.',
      'pf.pp.2.name': 'Social Proof – Speaker',
      'pf.pp.2.cat': 'Thought Leadership · 2026',
      'pf.pp.2.n.0.name': 'Beyond Your Degree',
      'pf.pp.2.n.0.desc': 'GoVokasi × Maxwell Leadership · Sep 2026',
      'pf.pp.2.n.1.name': 'Coming Soon',
      'pf.pp.2.n.1.desc': 'Another speaking engagement',
      'pf.pp.3.name': '···',
      'pf.pp.3.cat': 'Coming Soon',
      'pf.pp.3.desc': 'Something new is brewing.',
      'soon': 'Soon',

      /* ── Services ── */
      'services.eyebrow': 'Core Capabilities',
      'services.exploreAll': 'Explore all 14 skills',
      'services.0.title': 'Business Development',
      'services.0.desc': '55+ deals sourced and closed — end-to-end pipeline from prospecting to contract.',
      'services.1.title': 'Strategic Partnerships',
      'services.1.desc': 'Building and managing high-value brand partnerships across markets.',
      'services.2.title': 'AI & Workflow Automation',
      'services.2.desc': 'Built AI-powered outreach tools used in live BD workflows — not just familiarity, shipped product.',
      'services.3.title': 'Team Leadership',
      'services.3.desc': 'Developing high-performance teams and fostering results-driven culture.',

      /* ── Stats ── */
      'stats.eyebrow': 'By the numbers',
      'stats.h2': 'Proof in the work, not the words.',
      'stats.0.label': 'Brand partnerships secured across e-commerce platforms',
      'stats.1.label': 'Revenue growth driven through strategic brand acquisition',
      'stats.2.label': 'Lead-to-conversion rate improvement via pipeline optimization',
      'stats.3.label': 'Years as Top Performer — BD Lead at AHA Commerce',

      /* ── Footer ── */
      'footer.h2.0': 'Have a growth challenge?',
      'footer.h2.1': "Let’s talk.",
      'footer.cta': 'Get in touch',
      'footer.legal': '© 2026 Marwah Khairunnisa. All rights reserved.',
      'footer.link.contact': 'Get in touch →',
      'footer.link.cv': 'Download CV →',

      /* ── Nav menu ── */
      'navmenu.close': 'Close',
      'navmenu.localTime': 'Local time —',
      'navmenu.downloadCV': 'Download CV ↓',
      'navmenu.getInTouch': 'Get in touch →',

      /* ── Contact modal ── */
      'modal.eyebrow': 'Get in touch',
      'modal.title': "Let’s build something great.",
      'modal.name': 'Name',
      'modal.email': 'Email',
      'modal.message': 'Message',
      'modal.name.ph': 'Your name',
      'modal.email.ph': 'you@company.com',
      'modal.message.ph': 'Tell me about your project or how we can work together.',
      'modal.note': 'I reply within one business day.',
      'modal.submit': 'Send message',
      'modal.sending': 'Sending…',
      'modal.tryAgain': 'Try again',
      'modal.success.title': 'Message received!',
      'modal.success.text': "Thanks for reaching out — I’ll get back to you within one business day.",
      'modal.close': 'Close',

      /* ── Clock months ── */
      'month.0': 'January', 'month.1': 'February', 'month.2': 'March',
      'month.3': 'April', 'month.4': 'May', 'month.5': 'June',
      'month.6': 'July', 'month.7': 'August', 'month.8': 'September',
      'month.9': 'October', 'month.10': 'November', 'month.11': 'December',

      /* ── Project pages: common ── */
      'topbar.backPortfolio': 'Back to portfolio',
      'topbar.backCompany': 'Company Projects',
      'topbar.back': 'Back',
      'sec.whatIDid': 'What I Did',
      'sec.whatICovered': 'What I Covered',
      'sec.process': 'Process',
      'sec.outcomes': 'Outcomes',
      'sec.photoDoc': 'Photo & Documentation',
      'sec.deck': 'Deck',
      'sec.playbooksBuilt': 'Playbooks Built',
      'sec.theChallenge': 'The Challenge',
      'sec.madeForTeam': 'What I Made for the Team',
      'sec.process7stage': 'The Process — 7-Stage Acquisition Funnel',
      'common.completed': 'Completed',
      'common.view': 'View',
      'common.dragExplore': 'Drag to explore',
      'common.letsTalk': "Let’s talk",
      'common.soon': 'Soon',

      /* ── bd-funnel-overhaul ── */
      'bd_team.eyebrow': 'Strategy & Leadership · 2024',
      'bd_team.h1': 'BD Team Leadership',
      'bd_team.desc': 'Built and led a BD team of 8 at AHA Commerce — designed the acquisition funnel end-to-end, set KPIs, ran weekly 1-on-1s, and drove 47 brand partnerships across Shopee, TikTok Shop & Tokopedia in 9 months.',
      'bd_team.m0.label': 'Brand partnerships in 9 months',
      'bd_team.m1.label': 'Revenue growth driven',
      'bd_team.m2.label': 'Lead-to-conversion lift',
      'bd_team.challenge': 'No structured acquisition process, inconsistent close achievement — my mandate: build a repeatable system a team of 8 could run at scale.',
      'bd_team.funnel.0': 'Prospecting & Research',
      'bd_team.funnel.1': 'Outreach & Engagement',
      'bd_team.funnel.2': 'Pipeline Management',
      'bd_team.funnel.3': 'Meeting & Proposal',
      'bd_team.funnel.4': 'Negotiation & Closing',
      'bd_team.funnel.5': 'Onboarding & Handover',
      'bd_team.funnel.6': 'Growth & Retention',
      'bd_team.made.0.title': 'AI Agentic Scraper',
      'bd_team.made.0.sub': 'Apple Script automation for lead sourcing',
      'bd_team.made.1.title': 'Business Development Module',
      'bd_team.made.1.sub': 'Internal knowledge base for the BD team',
      'bd_team.made.2.title': 'Reliable Funnel Tracker',
      'bd_team.made.2.sub': 'Pipeline visibility dashboard for the whole team',
      'bd_team.cta.note': 'Want to scale your BD team?',
      'bd_team.shot.0': 'BD Wikipedia — Module Overview',
      'bd_team.shot.1': 'Sales Strategy Module',

      /* ── personal-brand-acquisitions ── */
      'pba.eyebrow': 'Individual Contributor · 2023–24',
      'pba.h1': 'Personal Brand<br>Acquisitions',
      'pba.desc': 'Every brand here was personally sourced, qualified, pitched, and closed by me — not the team. Proof I can sell, not just lead people who sell.',
      'pba.note': '<strong>Not team numbers.</strong> These are 100% my personal deals — sourced and closed without delegation.',
      'pba.m0.label': 'Brands closed personally',
      'pba.m1.label': 'Platforms (Shopee, TikTok, Tokopedia)',
      'pba.m2.label': 'Avg. deal cycle (prospect to signed)',
      'pba.process.label': 'Personal Acquisition Process',
      'pba.process.0': 'Target Research',
      'pba.process.1': 'Cold Outreach',
      'pba.process.2': 'Qualification',
      'pba.process.3': 'Pitch & Demo',
      'pba.process.4': 'Negotiation',
      'pba.process.5': 'Close & Sign',
      'pba.factors.label': 'What Made Me Effective',
      'pba.factor.0': 'Researched each brand before first contact — tailored, never generic.',
      'pba.factor.1': 'Fast follow-up cycles — kept momentum without being pushy.',
      'pba.factor.2': 'Handled objections live, not deferred to a manager.',
      'pba.cta.note': 'Want to see what I can close for your team?',

      /* ── company-project ── */
      'cp.eyebrow': 'AHA Commerce · 2024–26',
      'cp.h1': 'Company Projects',
      'cp.desc': 'Cross-functional project leadership — large-scale activations, culture adoption, and operational tooling.',
      'cp.proj1.title': 'Shopee Super Summit 2024 & 2025',
      'cp.proj1.role': 'Project Lead',
      'cp.proj1.overview': 'AHA Commerce participated as an exhibitor at Shopee Super Summit — operating a live brand activation booth. I owned the full process end-to-end, coordinating cross-functionally from pre-event planning through on-ground execution and wrap-up.',
      'cp.proj1.outcomes.0': '2024: 100+ leads captured, 76 ICP-matched · 2025: 170+ leads, 130+ ICP-matched',
      'cp.proj1.outcomes.1': '>50% of ICP leads converted to 1st meeting each year',
      'cp.proj1.outcomes.2': "Elevated AHA’s brand presence at Shopee’s largest merchant summit",
      'cp.proj2.title': 'AHA 13 Birthday Celebration',
      'cp.proj2.role': 'Project Lead',
      'cp.proj2.overview': 'Project-led AHA Commerce’s 13th anniversary company outing for 110+ attendees. Managed the full process from concept to delivery — vendor selection, logistics, timeline, and on-day execution.',
      'cp.proj2.outcomes.0': 'Full-day outing for 110+ attendees — zero critical issues on event day',
      'cp.proj2.outcomes.1': 'Led a 9-person committee across venue, catering, transport & entertainment',
      'cp.proj2.outcomes.2': '9.46/10 attendee satisfaction score post-event',
      'cp.proj3.title': 'AHA Commerce Thailand',
      'cp.proj3.role': 'Culture Building',
      'cp.proj3.overview': 'Led a culture adoption initiative for the BD Thailand team — delivering structured training across product knowledge, sales strategy, and pipeline management to align them with AHA Commerce’s operating playbook.',
      'cp.proj3.outcomes.0': '9 BD members onboarded across 3 structured training sessions',
      'cp.proj3.outcomes.1': "Thailand team equipped with AHA’s BD playbook — pitch, pipeline & review cadence",
      'cp.proj3.outcomes.2': 'Weekly review established — aligned with AHA Commerce reporting standards',
      'cp.keyOutcomes': 'Key Outcomes',
      'cp.overview': 'Overview',

      /* ── aha-birthday ── */
      'aha_bday.eyebrow': 'AHA Commerce · 2024',
      'aha_bday.h1': 'AHA 13 Birthday Celebration',
      'aha_bday.role': 'Project Lead',
      'aha_bday.desc': "Served as Project Lead for AHA Commerce’s 13th anniversary — managing the full company outing for 110+ attendees from concept to on-day execution.",
      'aha_bday.stat0': 'Attendees',
      'aha_bday.stat1': 'Committee I Led',
      'aha_bday.stat2': 'Satisfaction Score',
      'aha_bday.did0.name': 'Concept Development',
      'aha_bday.did0.desc': 'Defined theme, venue, and activity lineup for 110+ attendees — aligned with company culture and budget.',
      'aha_bday.did1.name': 'Vendor & Logistics',
      'aha_bday.did1.desc': 'Selected and coordinated vendors (venue, catering, transport, entertainment) — negotiated contracts and delivery timelines.',
      'aha_bday.did2.name': 'On-day Execution',
      'aha_bday.did2.desc': 'On-day PIC — managed event flow, team coordination, and ensured everything ran on plan from start to finish.',
      'aha_bday.ms0': 'Concept & Brief',
      'aha_bday.ms1': 'Vendor Search',
      'aha_bday.ms2': 'Detailed Planning',
      'aha_bday.ms3': 'Event Day',
      'aha_bday.ms4': 'Wrap-up',
      'aha_bday.outcome0': 'Delivered a full-day outing for 110+ attendees with zero critical issues on event day',
      'aha_bday.outcome1': 'Led a 9-person committee — coordinated venue, catering, transport, and entertainment end-to-end',
      'aha_bday.outcome2': '9.46/10 attendee satisfaction score in post-event survey',
      'aha_bday.dragHint': 'Drag to explore',

      /* ── aha-thailand ── */
      'aha_th.eyebrow': 'AHA Commerce Thailand · 2026',
      'aha_th.h1': 'Culture Building Initiative',
      'aha_th.role': 'Culture Building',
      'aha_th.desc': 'Led a culture adoption initiative for the BD Thailand team — teaching AHA Commerce’s full operating framework, from product training and sales strategy to pipeline management.',

      /* ── shopee-super-summit ── */
      'sss.eyebrow': 'AHA Commerce · 2024 & 2025',
      'sss.h1': 'Shopee Super Summit',
      'sss.role': 'Project Lead',
      'sss.desc': 'AHA Commerce participated as an exhibitor at Shopee Super Summit — running a live brand activation booth. I owned the full execution, working cross-functionally with BD, creative, and ops teams from pre-event through post-event.',
      'sss.did.0.name': 'Pre-event Planning',
      'sss.did.0.desc': 'Cross-team coordination — creative briefing, BD alignment, booth logistics, and full timeline planning well ahead of the event.',
      'sss.did.1.name': 'On-ground Execution',
      'sss.did.1.desc': 'Managed booth setup, exhibitor operations, and live brand activation on the event floor.',
      'sss.did.2.name': 'Post-event Wrap-up',
      'sss.did.2.desc': 'Documented results, evaluated booth performance, and compiled lessons learned for future event iterations.',
      'sss.ms.0': 'Brief & Align',
      'sss.ms.1': 'Planning',
      'sss.ms.2': 'Prep Booth',
      'sss.ms.3': 'On-ground',
      'sss.ms.4': 'Wrap-up',
      'sss.outcome.0': 'Generated 100+ leads in 2024 (76 ICP-matched) and 170+ in 2025 (130+ ICP-matched)',
      'sss.outcome.1': 'Converted >50% of ICP-qualified leads to a 1st meeting each year',
      'sss.outcome.2': "Elevated AHA Commerce's brand presence at Shopee's largest annual merchant summit",

      /* ── playbook-maker ── */
      'pb.eyebrow': 'AHA Commerce · 2026',
      'pb.h1': 'Playbook Maker Project',
      'pb.role': 'Project Lead',
      'pb.desc': 'Built operational playbooks for recurring large-scale events — so every future execution is faster, more consistent, and runnable by anyone on the team.',
      'pb.photoTba': 'Photo to be added',
      'pb.photoSub': 'Documentation coming soon',
      'pb.pb1.name': 'Shopee Super Summit Playbook',
      'pb.pb1.cover.0': 'Timeline & Milestone',
      'pb.pb1.cover.1': 'Role Breakdown',
      'pb.pb1.cover.2': 'Pre-event Checklist',
      'pb.pb1.cover.3': 'On-ground Checklist',
      'pb.pb1.cover.4': 'Wrap-up & Evaluation',
      'pb.pb2.name': 'Stock Options Playbook',
      'pb.pb2.cover.0': 'Process & Workflow',
      'pb.pb2.cover.1': 'Role Breakdown',
      'pb.pb2.cover.2': 'Execution Checklist',
      'pb.pb2.cover.3': 'SOP & Guidelines',
      'pb.ms.0': 'Research & Audit',
      'pb.ms.1': 'Structure',
      'pb.ms.2': 'Draft',
      'pb.ms.3': 'Review',
      'pb.ms.4': 'Finalize',
      'pb.cover.0': 'Process & Workflow',
      'pb.cover.1': 'Role Breakdown',
      'pb.cover.2': 'Execution Checklist',
      'pb.cover.3': 'SOP & Guidelines',

      /* ── speaker-govokasi ── */
      'gov.eyebrow': 'GoVokasi × Maxwell Leadership · Sep 2026',
      'gov.h1': 'Beyond Your Degree: Building a Career Outside Your Background',
      'gov.desc': "Guest speaker for GoVokasi’s #LetsGoPRO Community Talks — online session on building a career outside your degree, hosted by Maxwell Leadership Corporate Solutions Group.",
      'gov.deck.label': 'Beyond Your Degree — Slide Deck',
      'gov.role': 'Guest Speaker',
      'gov.stat.slides.label': 'Slides',
      'gov.stat.audience.label': 'Audience',
      'gov.stat.audience.val': 'Public',
      'gov.stat.format.label': 'Format',
      'gov.stat.format.val': 'Online',
      'gov.topic.0': '<strong>Career &ne; a straight line</strong> — reframing how we think about career paths and transitions',
      'gov.topic.1': '<strong>Your degree vs your skills</strong> — what you studied &ne; what you can do',
      'gov.topic.2': '<strong>Transferable skills as career currency</strong> — communication, problem solving, analysis, and how to carry them across industries',
      'gov.topic.3': '<strong>Proof of work</strong> — how to turn “I can do this” into evidence recruiters actually believe',
      'gov.topic.4': '<strong>The bridge role strategy</strong> — why you don’t always need to leap, and how to build a bridge instead',
      'gov.deck.sub': 'Career Transition Playbook · 14 slides · PDF',

      /* ── leads-generator ── */
      'leads.title': 'BD Research Toolkit',
      'leads.desc': 'Generate Google search links for a brand or role — open in one click.',
      'leads.mode.sales': 'BD / Sales',
      'leads.mode.job': 'Job Hunt',
      'leads.s.brand.label': 'Brand name',
      'leads.s.brand.ph': 'e.g. 27AN.ID, Somethinc',
      'leads.s.market.label': 'Market',
      'leads.s.platform.label': 'Platform',
      'leads.j.role.label': 'Target role',
      'leads.j.role.ph': 'e.g. BD Manager, Marketing Lead',
      'leads.j.worktype.label': 'Work type',
      'leads.j.loc.label': 'Location',
      'leads.empty': 'Fill in the form on the left to start researching',
      'leads.all': 'All',
      'leads.brand': 'Personal toolkit',
      'leads.openAll': 'Open All',

      /* ── fi-calculator ── */
      'fi.nav': 'marwah.dev',
      'fi.cur': 'FI Calculator',
      'fi.eyebrow': 'Personal Finance',
      'fi.hero.label': 'Years to Financial Independence',
      'fi.hero.unit': 'years',
      'fi.income.label': 'Monthly Income (after tax)',
      'fi.expenses.label': 'Monthly Expenses',
      'fi.savings.label': 'Current Savings / Investments',
      'fi.return.label': 'Expected Annual Return',
      'fi.chart.title': 'Net Worth Trajectory',
      'fi.footnote': 'Based on the 4% rule (25× annual expenses). Assumes consistent savings & a fixed return rate.<br>Not financial advice.',
      'fi.stat.savingsRate': 'Savings Rate',
      'fi.stat.fiNumber': 'FI Number',
      'fi.stat.alreadySaved': 'Already saved',
      'fi.stat.annualSpend': '25× annual spend',
      'fi.stat.ofFI': 'of FI number',
      'fi.stat.month': '/month',
      'fi.prog.label': 'Progress toward FI',
      'fi.insight.already': "You’re <strong>already financially independent</strong>. Your savings cover 25× annual expenses.",
      'fi.insight.saving': 'Saving <span class="{cls}">{rate}%</span> of income → reach <strong>{fi}</strong> by <strong>{year}</strong>',
      'fi.insight.negative': 'Expenses meet or exceed income — adjust your numbers.',

      /* ── constellation ── */
      'const.nav': 'marwah.dev',
      'const.cur': 'Skills Constellation',
      'const.corner.sub': 'BD · Content · Tech · Research',
      'const.hint': 'Hover to explore<br>Drag to rearrange<br>Click to focus',
      'const.cluster.biz': 'BD & Commercial',
      'const.cluster.content': 'Content & Story',
      'const.cluster.tech': 'Tech & Tools',
      'const.cluster.data': 'Research & Data',
      'const.node.bd.label': 'BD Strategy',
      'const.node.bd.desc': 'Pipeline building, partner acquisition, and commercial growth at scale.',
      'const.node.outreach.label': 'Cold Outreach',
      'const.node.outreach.desc': 'Writing pitches that actually get replies — human, credible, worth responding to.',
      'const.node.partnerships.label': 'Creator Partnerships',
      'const.node.partnerships.desc': 'Structuring and closing brand × creator deals end-to-end.',
      'const.node.negotiation.label': 'Negotiation',
      'const.node.negotiation.desc': 'Getting to yes without leaving value on the table.',
      'const.node.campaigns.label': 'Campaign Management',
      'const.node.campaigns.desc': 'Running creator campaigns from brief to post-campaign report.',
      'const.node.storytelling.label': 'Storytelling',
      'const.node.storytelling.desc': 'Turning data and ideas into something worth reading or sharing.',
      'const.node.strategy.label': 'Content Strategy',
      'const.node.strategy.desc': 'Deciding what to say, to whom, and why it matters right now.',
      'const.node.copy.label': 'Copywriting',
      'const.node.copy.desc': 'Words that move people to act — without sounding like an ad.',
      'const.node.hooks.label': 'Hook Writing',
      'const.node.hooks.desc': 'First lines that make people stop and keep reading.',
      'const.node.ai.label': 'AI Tools',
      'const.node.ai.desc': 'Building with and prompting LLMs to solve problems that used to need a team.',
      'const.node.automation.label': 'Automation',
      'const.node.automation.desc': 'Systemizing workflows so humans can focus on what actually needs them.',
      'const.node.vibe.label': 'Vibe Coding',
      'const.node.vibe.desc': 'Shipping functional products without being a full developer.',
      'const.node.research.label': 'Market Research',
      'const.node.research.desc': "Finding signal before committing — who, what, and whether it’s worth pursuing.",
      'const.node.analytics.label': 'Creator Analytics',
      'const.node.analytics.desc': 'Reading performance data to tell what worked and what to do differently.',
    },

    id: {
      /* ── Loader ── */
      'loader.loading': 'Memuat',
      'loader.tagline': 'Growth Efficient Obsessed.',

      /* ── Nav / Header ── */
      'nav.home': 'Beranda',
      'nav.work': 'Karya',
      'nav.skills': 'Keahlian',
      'nav.about': 'Tentang',
      'nav.contact': 'Kontak',
      'header.menu': 'Menu',
      'header.localTime': 'Waktu lokal',

      /* ── Hero ── */
      'hero.eyebrow': 'Personal Studio · Jakarta, Indonesia',
      'hero.h1.0': 'Mendorong pertumbuhan',
      'hero.h1.1': 'melalui strategi',
      'hero.h1.2': 'dan visi berani.',
      'hero.rating': 'BizTech Enthusiast',
      'hero.cta.connect': 'Mari Terhubung',
      'hero.cta.work': 'Lihat karya saya',
      'hero.status.left': 'Memimpin BD sejak 2023',
      'hero.status.center': 'Jakarta, Indonesia · Remote-friendly',
      'hero.status.right': 'Scroll untuk menjelajahi',

      /* ── Hero card carousel ── */
      'card.0.caption': 'Business Development',
      'card.0.title': 'Dibangun untuk tumbuh.',
      'card.1.caption': 'Kemitraan Strategis',
      'card.1.title': 'Ditempa untuk bertahan.',
      'card.2.caption': 'AI & Otomasi',
      'card.2.title': 'Dirancang untuk berkembang.',

      /* ── About ── */
      'about.eyebrow': 'Tentang Saya',
      'about.distributed': 'Berbasis di Jakarta, membangun kemitraan lintas pasar.',
      'about.main': 'Pemimpin BD berorientasi operasional yang menggabungkan manajemen pipeline, optimasi CRM, dan otomasi alur kerja ',
      'about.muted': 'untuk meningkatkan efisiensi konversi — dengan pengalaman dalam kepemimpinan tim, desain KPI, dan menjembatani strategi penjualan dengan eksekusi.',
      'about.findOnline': 'Temukan saya online',
      'about.getInTouch': 'Hubungi saya',

      /* ── Portfolio ── */
      'portfolio.eyebrow': 'Portofolio',
      'portfolio.h2': 'Karya Terpilih',

      /* BD Portfolio card */
      'pf.bd.title': 'BD Portfolio',
      'pf.bd.meta': 'Business Development · AHA Commerce · 2023–2025',
      'pf.bd.desc': 'Bagaimana saya mendorong pertumbuhan, memimpin tim, dan menghasilkan hal-hal yang mengubah keadaan.',
      'pf.bd.0.name': 'Brand Acquisition — Tim',
      'pf.bd.0.cat': 'Strategi & Kepemimpinan · 2024',
      'pf.bd.0.desc': 'Mengembangkan tim dari 8 orang menjadi 47 kemitraan brand dalam 9 bulan — sistem dibangun dari nol, hasil tersampaikan.',
      'pf.bd.1.name': 'Brand Acquisition — Personal',
      'pf.bd.1.cat': 'Kontributor Individual · 2023–24',
      'pf.bd.1.desc': '55+ deal ditutup sendiri, end-to-end — dari cold outreach hingga tanda tangan di fashion, F&B, dan olahraga.',
      'pf.bd.2.name': 'Company Project',
      'pf.bd.2.cat': 'Proyek Perusahaan · 2024–25',
      'pf.bd.2.desc': 'Berbagai proyek perusahaan, satu project lead — Shopee Super Summit, kampanye Thailand, aktivasi internal. Tim berbeda, timeline berbeda, selalu tersampaikan.',
      'pf.bd.3.name': 'Digital Project',
      'pf.bd.3.cat': 'Otomasi & Digital · 2024',
      'pf.bd.3.desc': 'Mengembangkan alat outreach berbasis AI yang mengurangi waktu prospekting manual — dari rekayasa prompt hingga alur kerja langsung.',

      /* Personal Project card */
      'pf.pp.title': 'Personal Project',
      'pf.pp.meta': 'Di Luar Pekerjaan · Berlanjut',
      'pf.pp.desc': 'Alat yang saya buat dan eksperimen yang memuaskan keingintahuan saya sendiri.',
      'pf.pp.0.name': 'AI Tools',
      'pf.pp.0.cat': 'Dibangun dengan AI · 2026',
      'pf.pp.0.n.0.desc': 'Generator outreach BD personal',
      'pf.pp.0.n.1.desc': 'Konten afiliasi yang tidak terkesan seperti iklan',
      'pf.pp.0.n.2.desc': 'Toolkit riset brand & rekruter',
      'pf.pp.1.name': 'Skills Constellation',
      'pf.pp.1.cat': 'Visualisasi Interaktif · 2026',
      'pf.pp.1.desc': 'Bukan sebuah daftar. Peta langsung dari 14 keahlian di BD, konten, dan teknologi — dan bagaimana mereka terhubung.',
      'pf.pp.2.name': 'Social Proof – Speaker',
      'pf.pp.2.cat': 'Thought Leadership · 2026',
      'pf.pp.2.n.0.name': 'Beyond Your Degree',
      'pf.pp.2.n.0.desc': 'GoVokasi × Maxwell Leadership · Sep 2026',
      'pf.pp.2.n.1.name': 'Segera Hadir',
      'pf.pp.2.n.1.desc': 'Sesi berbicara lainnya',
      'pf.pp.3.name': '···',
      'pf.pp.3.cat': 'Segera Hadir',
      'pf.pp.3.desc': 'Ada yang baru sedang dimasak.',
      'soon': 'Segera',

      /* ── Services ── */
      'services.eyebrow': 'Kemampuan Inti',
      'services.exploreAll': 'Jelajahi semua 14 keahlian',
      'services.0.title': 'Business Development',
      'services.0.desc': '55+ deal bersumber dan ditutup — pipeline end-to-end dari prospekting hingga kontrak.',
      'services.1.title': 'Kemitraan Strategis',
      'services.1.desc': 'Membangun dan mengelola kemitraan brand bernilai tinggi lintas pasar.',
      'services.2.title': 'AI & Otomasi Alur Kerja',
      'services.2.desc': 'Membangun alat outreach berbasis AI yang digunakan dalam alur kerja BD langsung — bukan hanya familiar, produk sudah diluncurkan.',
      'services.3.title': 'Kepemimpinan Tim',
      'services.3.desc': 'Mengembangkan tim berprestasi tinggi dan mendorong budaya berorientasi hasil.',

      /* ── Stats ── */
      'stats.eyebrow': 'Berdasarkan Angka',
      'stats.h2': 'Bukti dalam karya, bukan kata-kata.',
      'stats.0.label': 'Kemitraan brand yang diamankan di platform e-commerce',
      'stats.1.label': 'Pertumbuhan pendapatan melalui akuisisi brand strategis',
      'stats.2.label': 'Peningkatan tingkat konversi lead melalui optimasi pipeline',
      'stats.3.label': 'Tahun sebagai Top Performer — BD Lead di AHA Commerce',

      /* ── Footer ── */
      'footer.h2.0': 'Ada tantangan pertumbuhan?',
      'footer.h2.1': 'Mari bicara.',
      'footer.cta': 'Hubungi saya',
      'footer.legal': '© 2026 Marwah Khairunnisa. Hak cipta dilindungi.',
      'footer.link.contact': 'Hubungi saya →',
      'footer.link.cv': 'Download CV →',

      /* ── Nav menu ── */
      'navmenu.close': 'Tutup',
      'navmenu.localTime': 'Waktu lokal —',
      'navmenu.downloadCV': 'Download CV ↓',
      'navmenu.getInTouch': 'Hubungi saya →',

      /* ── Contact modal ── */
      'modal.eyebrow': 'Hubungi saya',
      'modal.title': 'Mari bangun sesuatu yang hebat.',
      'modal.name': 'Nama',
      'modal.email': 'Email',
      'modal.message': 'Pesan',
      'modal.name.ph': 'Nama Anda',
      'modal.email.ph': 'anda@perusahaan.com',
      'modal.message.ph': 'Ceritakan tentang proyek Anda atau bagaimana kita bisa bekerja sama.',
      'modal.note': 'Saya membalas dalam satu hari kerja.',
      'modal.submit': 'Kirim pesan',
      'modal.sending': 'Mengirim…',
      'modal.tryAgain': 'Coba lagi',
      'modal.success.title': 'Pesan diterima!',
      'modal.success.text': 'Terima kasih telah menghubungi — saya akan membalas dalam satu hari kerja.',
      'modal.close': 'Tutup',

      /* ── Clock months ── */
      'month.0': 'Januari', 'month.1': 'Februari', 'month.2': 'Maret',
      'month.3': 'April', 'month.4': 'Mei', 'month.5': 'Juni',
      'month.6': 'Juli', 'month.7': 'Agustus', 'month.8': 'September',
      'month.9': 'Oktober', 'month.10': 'November', 'month.11': 'Desember',

      /* ── Project pages: common ── */
      'topbar.backPortfolio': 'Kembali ke portfolio',
      'topbar.backCompany': 'Company Projects',
      'topbar.back': 'Kembali',
      'sec.whatIDid': 'Yang Saya Lakukan',
      'sec.whatICovered': 'Yang Saya Sampaikan',
      'sec.process': 'Proses',
      'sec.outcomes': 'Hasil',
      'sec.photoDoc': 'Foto & Dokumentasi',
      'sec.deck': 'Deck',
      'sec.playbooksBuilt': 'Playbook yang Dibuat',
      'sec.theChallenge': 'Tantangan',
      'sec.madeForTeam': 'Yang Saya Buat untuk Tim',
      'sec.process7stage': 'Proses — 7-Tahap Funnel Akuisisi',
      'common.completed': 'Selesai',
      'common.view': 'Lihat',
      'common.dragExplore': 'Drag untuk menjelajahi',
      'common.letsTalk': 'Mari bicara',
      'common.soon': 'Segera',

      /* ── bd-funnel-overhaul ── */
      'bd_team.eyebrow': 'Strategi & Kepemimpinan · 2024',
      'bd_team.h1': 'Kepemimpinan Tim BD',
      'bd_team.desc': 'Membangun dan memimpin tim BD beranggotakan 8 orang di AHA Commerce — merancang funnel akuisisi end-to-end, menetapkan KPI, menjalankan 1-on-1 mingguan, dan mendorong 47 kemitraan brand di Shopee, TikTok Shop & Tokopedia dalam 9 bulan.',
      'bd_team.m0.label': 'Kemitraan brand dalam 9 bulan',
      'bd_team.m1.label': 'Pertumbuhan pendapatan',
      'bd_team.m2.label': 'Peningkatan konversi lead',
      'bd_team.challenge': 'Tidak ada proses akuisisi yang terstruktur, pencapaian penutupan tidak konsisten — mandat saya: membangun sistem yang dapat direplikasi oleh tim beranggotakan 8 orang dalam skala besar.',
      'bd_team.funnel.0': 'Prospekting & Riset',
      'bd_team.funnel.1': 'Outreach & Engagement',
      'bd_team.funnel.2': 'Manajemen Pipeline',
      'bd_team.funnel.3': 'Meeting & Proposal',
      'bd_team.funnel.4': 'Negosiasi & Penutupan',
      'bd_team.funnel.5': 'Onboarding & Serah Terima',
      'bd_team.funnel.6': 'Pertumbuhan & Retensi',
      'bd_team.made.0.title': 'AI Agentic Scraper',
      'bd_team.made.0.sub': 'Otomasi Apple Script untuk sumber lead',
      'bd_team.made.1.title': 'Modul Business Development',
      'bd_team.made.1.sub': 'Knowledge base internal untuk tim BD',
      'bd_team.made.2.title': 'Funnel Tracker Andal',
      'bd_team.made.2.sub': 'Dashboard visibilitas pipeline untuk seluruh tim',
      'bd_team.cta.note': 'Ingin mengembangkan tim BD Anda?',
      'bd_team.shot.0': 'BD Wikipedia — Ikhtisar Modul',
      'bd_team.shot.1': 'Modul Strategi Penjualan',

      /* ── personal-brand-acquisitions ── */
      'pba.eyebrow': 'Kontributor Individual · 2023–24',
      'pba.h1': 'Akuisisi Brand<br>Personal',
      'pba.desc': 'Setiap brand di sini secara pribadi saya sumber, kualifikasi, pitching, dan tutup — bukan tim. Bukti saya bisa menjual, bukan hanya memimpin orang yang menjual.',
      'pba.note': '<strong>Bukan angka tim.</strong> Ini adalah 100% deal personal saya — bersumber dan ditutup tanpa delegasi.',
      'pba.m0.label': 'Brand yang ditutup secara personal',
      'pba.m1.label': 'Platform (Shopee, TikTok, Tokopedia)',
      'pba.m2.label': 'Rata-rata siklus deal (prospect hingga tanda tangan)',
      'pba.process.label': 'Proses Akuisisi Personal',
      'pba.process.0': 'Riset Target',
      'pba.process.1': 'Cold Outreach',
      'pba.process.2': 'Kualifikasi',
      'pba.process.3': 'Pitch & Demo',
      'pba.process.4': 'Negosiasi',
      'pba.process.5': 'Tutup & Tanda Tangan',
      'pba.factors.label': 'Yang Membuat Saya Efektif',
      'pba.factor.0': 'Meneliti setiap brand sebelum kontak pertama — personal, tidak pernah generik.',
      'pba.factor.1': 'Siklus follow-up cepat — menjaga momentum tanpa memaksa.',
      'pba.factor.2': 'Menangani keberatan secara langsung, tidak ditunda ke manajer.',
      'pba.cta.note': 'Ingin melihat apa yang bisa saya tutup untuk tim Anda?',

      /* ── company-project ── */
      'cp.eyebrow': 'AHA Commerce · 2024–26',
      'cp.h1': 'Company Projects',
      'cp.desc': 'Kepemimpinan proyek lintas fungsi — aktivasi skala besar, adopsi budaya, dan alat operasional.',
      'cp.proj1.title': 'Shopee Super Summit 2024 & 2025',
      'cp.proj1.role': 'Project Lead',
      'cp.proj1.overview': 'AHA Commerce berpartisipasi sebagai exhibitor di Shopee Super Summit — menjalankan booth aktivasi brand langsung. Saya memimpin seluruh proses end-to-end, berkoordinasi lintas fungsi dari perencanaan pra-event hingga eksekusi lapangan dan wrap-up.',
      'cp.proj1.outcomes.0': '2024: 100+ lead ditangkap, 76 ICP-matched · 2025: 170+ lead, 130+ ICP-matched',
      'cp.proj1.outcomes.1': '>50% dari lead ICP dikonversi ke pertemuan pertama setiap tahunnya',
      'cp.proj1.outcomes.2': 'Meningkatkan kehadiran brand AHA di merchant summit terbesar Shopee',
      'cp.proj2.title': 'AHA 13 Birthday Celebration',
      'cp.proj2.role': 'Project Lead',
      'cp.proj2.overview': 'Memimpin company outing ulang tahun ke-13 AHA Commerce untuk 110+ peserta. Mengelola seluruh proses dari konsep hingga pelaksanaan — pemilihan vendor, logistik, timeline, dan eksekusi hari-H.',
      'cp.proj2.outcomes.0': 'Company outing seharian untuk 110+ peserta — tanpa masalah kritis pada hari acara',
      'cp.proj2.outcomes.1': 'Memimpin komite 9 orang lintas venue, katering, transportasi & hiburan',
      'cp.proj2.outcomes.2': 'Skor kepuasan peserta 9.46/10 pasca acara',
      'cp.proj3.title': 'AHA Commerce Thailand',
      'cp.proj3.role': 'Pembangunan Budaya',
      'cp.proj3.overview': 'Memimpin inisiatif adopsi budaya untuk tim BD Thailand — memberikan pelatihan terstruktur di pengetahuan produk, strategi penjualan, dan manajemen pipeline untuk menyelaraskan mereka dengan playbook operasional AHA Commerce.',
      'cp.proj3.outcomes.0': '9 anggota BD di-onboard melalui 3 sesi pelatihan terstruktur',
      'cp.proj3.outcomes.1': 'Tim Thailand dilengkapi dengan BD playbook AHA — pitch, pipeline & ritme review',
      'cp.proj3.outcomes.2': 'Review mingguan ditetapkan — selaras dengan standar pelaporan AHA Commerce',
      'cp.keyOutcomes': 'Hasil Utama',
      'cp.overview': 'Ikhtisar',

      /* ── aha-birthday ── */
      'aha_bday.eyebrow': 'AHA Commerce · 2024',
      'aha_bday.h1': 'AHA 13 Birthday Celebration',
      'aha_bday.role': 'Project Lead',
      'aha_bday.desc': 'Berperan sebagai Project Lead untuk ulang tahun ke-13 AHA Commerce — mengelola company outing penuh untuk 110+ peserta dari konsep hingga eksekusi hari-H.',
      'aha_bday.stat0': 'Peserta',
      'aha_bday.stat1': 'Komite yang Saya Pimpin',
      'aha_bday.stat2': 'Skor Kepuasan',
      'aha_bday.did0.name': 'Pengembangan Konsep',
      'aha_bday.did0.desc': 'Menetapkan tema, venue, dan agenda aktivitas untuk 110+ peserta — diselaraskan dengan budaya perusahaan dan anggaran.',
      'aha_bday.did1.name': 'Vendor & Logistik',
      'aha_bday.did1.desc': 'Memilih dan mengkoordinasikan vendor (venue, katering, transportasi, hiburan) — menegosiasikan kontrak dan timeline pengiriman.',
      'aha_bday.did2.name': 'Eksekusi Hari-H',
      'aha_bday.did2.desc': 'PIC hari-H — mengelola alur acara, koordinasi tim, dan memastikan semuanya berjalan sesuai rencana dari awal hingga akhir.',
      'aha_bday.ms0': 'Konsep & Brief',
      'aha_bday.ms1': 'Cari Vendor',
      'aha_bday.ms2': 'Perencanaan Detail',
      'aha_bday.ms3': 'Hari Acara',
      'aha_bday.ms4': 'Wrap-up',
      'aha_bday.outcome0': 'Berhasil melaksanakan company outing seharian untuk 110+ peserta tanpa masalah kritis',
      'aha_bday.outcome1': 'Memimpin komite 9 orang — mengkoordinasikan venue, katering, transportasi, dan hiburan end-to-end',
      'aha_bday.outcome2': 'Mencapai skor kepuasan peserta 9.46/10 dalam survei pasca acara',
      'aha_bday.dragHint': 'Drag untuk menjelajahi',

      /* ── aha-thailand ── */
      'aha_th.eyebrow': 'AHA Commerce Thailand · 2026',
      'aha_th.h1': 'Inisiatif Pembangunan Budaya',
      'aha_th.role': 'Pembangunan Budaya',
      'aha_th.desc': 'Memimpin inisiatif adopsi budaya untuk tim BD Thailand — mengajarkan kerangka operasional penuh AHA Commerce, dari pelatihan produk dan strategi penjualan hingga manajemen pipeline.',

      /* ── shopee-super-summit ── */
      'sss.eyebrow': 'AHA Commerce · 2024 & 2025',
      'sss.h1': 'Shopee Super Summit',
      'sss.role': 'Project Lead',
      'sss.desc': 'AHA Commerce berpartisipasi sebagai exhibitor di Shopee Super Summit — menjalankan booth aktivasi brand langsung. Saya memiliki eksekusi penuh, bekerja lintas fungsi dengan tim BD, kreatif, dan operasional dari pra-event hingga pasca-event.',
      'sss.did.0.name': 'Perencanaan Pra-event',
      'sss.did.0.desc': 'Koordinasi lintas tim — briefing kreatif, alignment BD, logistik booth, dan perencanaan timeline lengkap jauh sebelum acara.',
      'sss.did.1.name': 'Eksekusi On-ground',
      'sss.did.1.desc': 'Mengelola setup booth, operasional exhibitor, dan aktivasi brand langsung di lantai acara.',
      'sss.did.2.name': 'Wrap-up Pasca-event',
      'sss.did.2.desc': 'Mendokumentasikan hasil, mengevaluasi performa booth, dan menyusun lesson learned untuk iterasi acara berikutnya.',
      'sss.ms.0': 'Brief & Align',
      'sss.ms.1': 'Perencanaan',
      'sss.ms.2': 'Persiapan Booth',
      'sss.ms.3': 'On-ground',
      'sss.ms.4': 'Wrap-up',
      'sss.outcome.0': 'Menghasilkan 100+ leads di 2024 (76 ICP-matched) dan 170+ di 2025 (130+ ICP-matched)',
      'sss.outcome.1': 'Mengkonversi >50% leads yang memenuhi ICP ke meeting pertama setiap tahun',
      'sss.outcome.2': 'Meningkatkan brand presence AHA Commerce di merchant summit terbesar Shopee',

      /* ── playbook-maker ── */
      'pb.eyebrow': 'AHA Commerce · 2026',
      'pb.h1': 'Playbook Maker Project',
      'pb.role': 'Project Lead',
      'pb.desc': 'Membangun playbook operasional untuk acara berskala besar yang berulang — agar setiap eksekusi di masa depan lebih cepat, lebih konsisten, dan dapat dijalankan oleh siapa saja di tim.',
      'pb.photoTba': 'Foto akan ditambahkan',
      'pb.photoSub': 'Dokumentasi akan segera hadir',
      'pb.pb1.name': 'Playbook Shopee Super Summit',
      'pb.pb1.cover.0': 'Timeline & Milestone',
      'pb.pb1.cover.1': 'Rincian Peran',
      'pb.pb1.cover.2': 'Checklist Pra-event',
      'pb.pb1.cover.3': 'Checklist On-ground',
      'pb.pb1.cover.4': 'Wrap-up & Evaluasi',
      'pb.pb2.name': 'Playbook Stock Options',
      'pb.pb2.cover.0': 'Proses & Alur Kerja',
      'pb.pb2.cover.1': 'Rincian Peran',
      'pb.pb2.cover.2': 'Checklist Eksekusi',
      'pb.pb2.cover.3': 'SOP & Panduan',
      'pb.ms.0': 'Riset & Audit',
      'pb.ms.1': 'Struktur',
      'pb.ms.2': 'Draft',
      'pb.ms.3': 'Review',
      'pb.ms.4': 'Finalisasi',
      'pb.cover.0': 'Proses & Alur Kerja',
      'pb.cover.1': 'Rincian Peran',
      'pb.cover.2': 'Checklist Eksekusi',
      'pb.cover.3': 'SOP & Panduan',

      /* ── speaker-govokasi ── */
      'gov.eyebrow': 'GoVokasi × Maxwell Leadership · Sep 2026',
      'gov.h1': 'Beyond Your Degree: Membangun Karier di Luar Latar Belakang Anda',
      'gov.desc': 'Pembicara tamu untuk GoVokasi #LetsGoPRO Community Talks — sesi online tentang membangun karier di luar ijazah Anda, diselenggarakan oleh Maxwell Leadership Corporate Solutions Group.',
      'gov.deck.label': 'Beyond Your Degree — Slide Deck',
      'gov.role': 'Pembicara Tamu',
      'gov.stat.slides.label': 'Slide',
      'gov.stat.audience.label': 'Audiens',
      'gov.stat.audience.val': 'Umum',
      'gov.stat.format.label': 'Format',
      'gov.stat.format.val': 'Online',
      'gov.topic.0': '<strong>Karier bukan garis lurus</strong> — menata ulang cara kita melihat jalur dan transisi karier',
      'gov.topic.1': '<strong>Ijazah vs skill-mu</strong> — apa yang kamu pelajari ≠ apa yang bisa kamu lakukan',
      'gov.topic.2': '<strong>Transferable skills sebagai modal karier</strong> — komunikasi, problem solving, analisis, dan cara membawanya lintas industri',
      'gov.topic.3': '<strong>Bukti kerja nyata</strong> — cara mengubah “Aku bisa ini” menjadi bukti yang dipercaya rekruter',
      'gov.topic.4': '<strong>Strategi bridge role</strong> — kenapa kamu tidak selalu harus melompat, dan cara membangun jembatan sebagai gantinya',
      'gov.deck.sub': 'Playbook Transisi Karier · 14 slide · PDF',

      /* ── leads-generator ── */
      'leads.title': 'BD Research Toolkit',
      'leads.desc': 'Generate link Google untuk riset brand atau lowongan — buka dalam satu klik.',
      'leads.mode.sales': 'BD / Sales',
      'leads.mode.job': 'Cari Kerja',
      'leads.s.brand.label': 'Nama brand',
      'leads.s.brand.ph': 'mis. 27AN.ID, Somethinc',
      'leads.s.market.label': 'Pasar',
      'leads.s.platform.label': 'Platform',
      'leads.j.role.label': 'Target role',
      'leads.j.role.ph': 'mis. BD Manager, Marketing Lead',
      'leads.j.worktype.label': 'Tipe kerja',
      'leads.j.loc.label': 'Lokasi',
      'leads.empty': 'Isi form di kiri untuk mulai riset',
      'leads.all': 'Semua',
      'leads.brand': 'Toolkit personal',
      'leads.openAll': 'Buka Semua',

      /* ── fi-calculator ── */
      'fi.nav': 'marwah.dev',
      'fi.cur': 'Kalkulator FI',
      'fi.eyebrow': 'Keuangan Pribadi',
      'fi.hero.label': 'Tahun Menuju Kebebasan Finansial',
      'fi.hero.unit': 'tahun',
      'fi.income.label': 'Pendapatan Bulanan (setelah pajak)',
      'fi.expenses.label': 'Pengeluaran Bulanan',
      'fi.savings.label': 'Tabungan / Investasi Saat Ini',
      'fi.return.label': 'Return Tahunan yang Diharapkan',
      'fi.chart.title': 'Trajektori Kekayaan Bersih',
      'fi.footnote': 'Berdasarkan aturan 4% (25× pengeluaran tahunan). Mengasumsikan tabungan konsisten & tingkat return tetap.<br>Bukan saran keuangan.',
      'fi.stat.savingsRate': 'Tingkat Tabungan',
      'fi.stat.fiNumber': 'Angka FI',
      'fi.stat.alreadySaved': 'Sudah ditabung',
      'fi.stat.annualSpend': '25× pengeluaran tahunan',
      'fi.stat.ofFI': 'dari angka FI',
      'fi.stat.month': '/bulan',
      'fi.prog.label': 'Progres menuju FI',
      'fi.insight.already': 'Anda <strong>sudah mandiri secara finansial</strong>. Tabungan Anda mencakup 25× pengeluaran tahunan.',
      'fi.insight.saving': 'Menabung <span class="{cls}">{rate}%</span> dari pendapatan → capai <strong>{fi}</strong> pada <strong>{year}</strong>',
      'fi.insight.negative': 'Pengeluaran memenuhi atau melebihi pendapatan — sesuaikan angka Anda.',

      /* ── constellation ── */
      'const.nav': 'marwah.dev',
      'const.cur': 'Skills Constellation',
      'const.corner.sub': 'BD · Konten · Teknologi · Riset',
      'const.hint': 'Hover untuk menjelajahi<br>Drag untuk menata ulang<br>Klik untuk fokus',
      'const.cluster.biz': 'BD & Komersial',
      'const.cluster.content': 'Konten & Cerita',
      'const.cluster.tech': 'Teknologi & Alat',
      'const.cluster.data': 'Riset & Data',
      'const.node.bd.label': 'Strategi BD',
      'const.node.bd.desc': 'Membangun pipeline, akuisisi mitra, dan pertumbuhan komersial dalam skala besar.',
      'const.node.outreach.label': 'Cold Outreach',
      'const.node.outreach.desc': 'Menulis pitching yang benar-benar mendapat balasan — personal, kredibel, layak direspons.',
      'const.node.partnerships.label': 'Kemitraan Kreator',
      'const.node.partnerships.desc': 'Menyusun dan menutup deal brand × kreator secara end-to-end.',
      'const.node.negotiation.label': 'Negosiasi',
      'const.node.negotiation.desc': 'Mencapai kesepakatan tanpa meninggalkan nilai di atas meja.',
      'const.node.campaigns.label': 'Manajemen Kampanye',
      'const.node.campaigns.desc': 'Menjalankan kampanye kreator dari brief hingga laporan pasca-kampanye.',
      'const.node.storytelling.label': 'Storytelling',
      'const.node.storytelling.desc': 'Mengubah data dan ide menjadi sesuatu yang layak dibaca atau dibagikan.',
      'const.node.strategy.label': 'Strategi Konten',
      'const.node.strategy.desc': 'Memutuskan apa yang disampaikan, kepada siapa, dan mengapa penting sekarang.',
      'const.node.copy.label': 'Copywriting',
      'const.node.copy.desc': 'Kata-kata yang menggerakkan orang untuk bertindak — tanpa terkesan seperti iklan.',
      'const.node.hooks.label': 'Hook Writing',
      'const.node.hooks.desc': 'Kalimat pertama yang membuat orang berhenti dan terus membaca.',
      'const.node.ai.label': 'AI Tools',
      'const.node.ai.desc': 'Membangun dengan dan memprompt LLM untuk menyelesaikan masalah yang dulu butuh tim.',
      'const.node.automation.label': 'Otomasi',
      'const.node.automation.desc': 'Menyistemisasi alur kerja agar manusia bisa fokus pada hal yang benar-benar membutuhkan mereka.',
      'const.node.vibe.label': 'Vibe Coding',
      'const.node.vibe.desc': 'Meluncurkan produk fungsional tanpa menjadi developer penuh.',
      'const.node.research.label': 'Riset Pasar',
      'const.node.research.desc': 'Menemukan sinyal sebelum berkomitmen — siapa, apa, dan apakah layak dikejar.',
      'const.node.analytics.label': 'Creator Analytics',
      'const.node.analytics.desc': 'Membaca data performa untuk mengetahui apa yang berhasil dan apa yang harus dilakukan berbeda.',
    }
  };

  /* ── Core ── */
  let _lang = 'en';
  try { _lang = localStorage.getItem('portfolio_lang') || 'en'; } catch (e) {}

  function t(key, params) {
    const dict = T[_lang] || T.en;
    let s = (dict && key in dict) ? dict[key] : (key in T.en ? T.en[key] : key);
    if (params) {
      Object.keys(params).forEach(function (k) {
        s = s.split('{' + k + '}').join(params[k]);
      });
    }
    return s;
  }

  function applyI18n() {
    document.documentElement.lang = _lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.dataset.i18n); if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t(el.dataset.i18nHtml); if (v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = t(el.dataset.i18nPlaceholder); if (v) el.placeholder = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = t(el.dataset.i18nAria); if (v) el.setAttribute('aria-label', v);
    });
    /* sync toggle buttons */
    document.querySelectorAll('.i18n-btn').forEach(function (btn) {
      btn.classList.toggle('i18n-btn--active', btn.dataset.lang === _lang);
    });
  }

  function setLang(lang) {
    if (!T[lang]) return;
    _lang = lang;
    try { localStorage.setItem('portfolio_lang', lang); } catch (e) {}
    applyI18n();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function createToggle() {
    var wrap = document.createElement('div');
    wrap.className = 'i18n-toggle';
    wrap.innerHTML =
      '<button class="i18n-btn' + (_lang === 'en' ? ' i18n-btn--active' : '') + '" data-lang="en" onclick="I18n.setLang(\'en\')">&#127468;&#127463; EN</button>' +
      '<button class="i18n-btn' + (_lang === 'id' ? ' i18n-btn--active' : '') + '" data-lang="id" onclick="I18n.setLang(\'id\')">&#127470;&#127465; ID</button>';
    return wrap;
  }

  window.I18n = { t: t, getLang: function () { return _lang; }, setLang: setLang, applyI18n: applyI18n, createToggle: createToggle };

  /* ── Inject CSS ── */
  var css = document.createElement('style');
  css.textContent = [
    '.i18n-toggle{display:inline-flex;align-items:center;gap:.125rem;border:1px solid rgba(236,234,245,.12);background:rgba(236,234,245,.04);backdrop-filter:blur(4px);border-radius:.875rem;padding:.25rem .375rem;}',
    '.i18n-btn{padding:.2rem .5rem;border-radius:.625rem;color:rgba(236,234,245,.4);cursor:pointer;border:none;background:none;font:inherit;font-size:.6875rem;font-weight:600;letter-spacing:.03em;transition:background .2s,color .2s;line-height:1.4;white-space:nowrap;}',
    '.i18n-btn--active{background:rgba(236,234,245,.12);color:#eceaf5;}',
    '.i18n-btn:hover:not(.i18n-btn--active){color:rgba(236,234,245,.65);}'
  ].join('');
  document.head.appendChild(css);

  /* ── Apply on ready ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyI18n);
  } else {
    applyI18n();
  }
})();
