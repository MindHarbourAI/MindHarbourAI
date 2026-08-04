import { type FormEvent, type MouseEvent, type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import logo from '../logo.png';
import logoImage from '../logoImage.png';

type ProductKey = 'ragify' | 'sailtask' | 'cadox';
type TabKey = ProductKey;

type ProductCard = {
  key: ProductKey;
  className: string;
  glow: string;
  badgeClass: string;
  buttonClass: string;
  icon: string;
  badge: string;
  version: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  cta: string;
};

type ProductSpec = {
  icon: string;
  tag: string;
  title: string;
  desc: string;
  ctaText: string;
  specs: Array<[string, string]>;
};

type FormState = {
  name: string;
  email: string;
  usecase: string;
  message: string;
};

const arrowIcon = (
  <svg className="btn__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const playIcon = (
  <svg className="btn__icon-left" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const navLinks: Array<[string, string]> = [
  ['home', 'Home'],
  ['products', 'Products'],
  ['playground', 'Product Demo'],
  ['architecture', 'Tech Architecture'],
  ['founder', 'Vision'],
  ['faq', 'FAQ'],
];

const stats: Array<[string, string]> = [
  ['3', 'AI Products'],
  ['2', 'Deployment-Ready Products'],
  ['1', 'Engineering AI Roadmap'],
  ['API-First', 'Integration Approach'],
  ['Private', 'Deployment Options'],
];

const products: ProductCard[] = [
  {
    key: 'ragify',
    className: 'product-card--ragify',
    glow: 'product-card__glow--cyan',
    badgeClass: 'badge--live',
    buttonClass: 'btn--cyan',
    icon: '🔍',
    badge: 'Live Engine',
    version: 'Product 01 • Live',
    tag: 'Knowledge Retrieval',
    title: 'Ragify',
    subtitle: 'Knowledge Retrieval for Docs, Repos, and Internal Systems',
    desc:
      'Search documentation, SOPs, internal wikis, technical repositories, and enterprise knowledge bases with retrieval pipelines designed for accuracy, traceability, and fast answers.',
    features: [
      'Semantic retrieval across structured and unstructured knowledge',
      'Citation-backed responses for enterprise use cases',
      'FAISS-powered indexing and low-latency lookup',
      'Document ingestion designed for internal knowledge workflows',
    ],
    cta: 'Explore Ragify',
  },
  {
    key: 'sailtask',
    className: 'product-card--sailtask',
    glow: 'product-card__glow--purple',
    badgeClass: 'badge--live',
    buttonClass: 'btn--purple',
    icon: '⚙️',
    badge: 'Live Engine',
    version: 'Product 02 • Live',
    tag: 'Task Automation',
    title: 'SailTask',
    subtitle: 'Workflow Automation from Meetings, Notes, and Operations Data',
    desc:
      'Turn raw meeting notes, operational updates, and unstructured communication into assigned action items, structured workflows, and downstream system triggers.',
    features: [
      'Action-item extraction from conversations and documents',
      'Priority and ownership mapping for execution teams',
      'Workflow payload generation for downstream systems',
      'Webhook and API-ready automation architecture',
    ],
    cta: 'Explore SailTask',
  },
  {
    key: 'cadox',
    className: 'product-card--cadox',
    glow: 'product-card__glow--blue',
    badgeClass: 'badge--warning',
    buttonClass: 'btn--glass',
    icon: '🏗️',
    badge: 'Coming Soon • In R&D',
    version: 'Product 03 (Coming Soon)',
    tag: 'CAD Intelligence',
    title: 'Cadox',
    subtitle: 'Engineering Intelligence for CAD and Design Workflows',
    desc:
      'Bring AI into CAD-heavy workflows with systems designed to parse design metadata, interpret engineering context, and support faster analysis across mechanical workflows.',
    features: [
      'CAD file analysis and geometry-aware processing',
      'Automated metadata extraction from engineering assets',
      'Mechanical design context for downstream AI workflows',
      'Roadmap toward engineering insight and optimization support',
    ],
    cta: 'Preview Cadox',
  },
];

const productSpecs: Record<ProductKey, ProductSpec> = {
  ragify: {
    icon: '🔍',
    tag: 'Knowledge Retrieval • Deployment Ready',
    title: 'Ragify — Knowledge Retrieval Engine',
    desc:
      'Ragify is built for teams that need reliable answers across internal documentation, technical repositories, and enterprise knowledge systems. It combines retrieval pipelines, vector indexing, and grounded response generation so teams can search faster without losing source traceability.',
    ctaText: 'Request Ragify Walkthrough',
    specs: [
      ['Product Status', 'Deployment Ready'],
      ['Vector Store Integration', 'Meta FAISS (Dense Flat & IVF)'],
      ['Embedding Model', 'MiniLM-L6 / BGE-Large / Custom'],
      ['Response Pattern', 'Grounded retrieval with citations'],
      ['Supported File Types', 'PDF, DOCX, Markdown, Code, SQL'],
    ],
  },
  sailtask: {
    icon: '⚙️',
    tag: 'Workflow Automation • Deployment Ready',
    title: 'SailTask — Workflow & Task Engine',
    desc:
      'SailTask is designed for teams that lose execution speed between conversation and action. It turns operational text into structured work items and automation-ready payloads that can connect to task systems, internal services, or workflow orchestration layers.',
    ctaText: 'Request SailTask Walkthrough',
    specs: [
      ['Product Status', 'Deployment Ready'],
      ['Parsing Logic', 'Transformer Named Entity Recognition'],
      ['Output Format', 'Structured JSON / REST Webhooks'],
      ['Primary Output', 'Structured tasks and workflow payloads'],
      ['Integrations', 'Slack, Jira, GitHub, Custom Webhooks'],
    ],
  },
  cadox: {
    icon: '🏗️',
    tag: 'Engineering Intelligence • Coming Soon',
    title: 'Cadox — CAD & Geometry AI Engine (Upcoming)',
    desc:
      'Cadox is the company’s longer-term engineering AI bet. It is being developed for CAD and design environments where geometry, metadata, and engineering context need to become queryable inputs for faster analysis and decision support.',
    ctaText: 'Join Cadox Waitlist',
    specs: [
      ['Development Status', 'Coming Soon • Active R&D'],
      ['Planned CAD Formats', 'STEP, IGES, SLDPRT, DXF, STL'],
      ['Extraction Capabilities', 'Mesh Geometry, Volume, Mass, Stress'],
      ['Target Release Phase', 'Phase 3 roadmap'],
      ['Primary Use Case', 'Mechanical & Aerospace Engineering'],
    ],
  },
};

const faqItems: Array<[string, string]> = [
  [
    'What does MindHarbourAI actually sell today?',
    'Today, MindHarbourAI is centered on two practical product lines: Ragify for knowledge retrieval and SailTask for workflow automation. Cadox is part of the roadmap and represents the company’s longer-term engineering intelligence direction.',
  ],
  [
    'Who is the platform built for?',
    'The platform is designed for teams managing complex knowledge, repetitive operational workflows, or engineering-heavy information systems. That includes internal tooling teams, operations groups, and organizations exploring AI support for technical design workflows.',
  ],
  [
    'How does Ragify differ from a generic chatbot?',
    'Ragify is positioned as a retrieval system, not just a chat interface. It is meant to search internal knowledge sources, return grounded answers, and preserve traceability through source-aware response generation.',
  ],
  [
    'Can this be deployed in private environments?',
    'Yes. The platform is presented with API-first, containerized deployment assumptions so it can fit managed cloud environments, private infrastructure, or enterprise-controlled deployment models depending on customer requirements.',
  ],
];

const architectureCards: Array<[string, string, string]> = [
  ['🐍', 'Python & FastAPI Backend', 'Asynchronous, ultra-low latency backend REST & Streaming endpoints built for heavy AI workload orchestration.'],
  ['⚡', 'FAISS Vector Indexing', "Meta AI's FAISS library integrated for sub-50ms dense vector similarity searches across millions of document embeddings."],
  ['🤗', 'Transformer Embeddings', 'State-of-the-art sentence transformers and domain-adapted LLMs for high contextual precision.'],
  ['🐳', 'Docker & SaaS Ready', 'Containerized architecture allowing instant cloud deployment on AWS, Azure, GCP, or private air-gapped enterprise clusters.'],
];

const techBadges = ['Python', 'FastAPI', 'FAISS Vector DB', 'HuggingFace Transformers', 'PyTorch', 'Docker', 'OpenAI / Custom LLMs', 'Streamlit / React'];

const ragPresets: Record<string, string> = {
  rag1: 'Summarize safety compliance in ISO-9001 specs',
  rag2: 'What are the API rate limits for vectorized search?',
  rag3: 'Find all component stress tolerances in Q4 audit',
};

function useReveal() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return undefined;

    const revealElements = node.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}

function smoothScroll(event: MouseEvent<HTMLElement>, targetId: string, onDone?: () => void) {
  const target = document.querySelector(targetId);
  if (!target) return;
  event.preventDefault();
  const offset = 80;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
  onDone?.();
}

function App() {
  const rootRef = useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('ragify');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<ProductKey | null>(null);
  const [ragifyQuery, setRagifyQuery] = useState('');
  const [ragifyStatus, setRagifyStatus] = useState('Ready');
  const [ragifyConsole, setRagifyConsole] = useState('// Click a sample prompt above or enter a query and press Execute to simulate RAG retrieval...');
  const [sailtaskInput, setSailtaskInput] = useState('');
  const [sailtaskStatus, setSailtaskStatus] = useState('Ready');
  const [sailtaskConsole, setSailtaskConsole] = useState('// SailTask will automatically parse key action items, assign priorities, and output structured API payloads here...');
  const [cadoxSelect, setCadoxSelect] = useState<'turbine' | 'gearbox' | 'chassis'>('turbine');
  const [cadoxStatus, setCadoxStatus] = useState('Ready');
  const [cadoxConsole, setCadoxConsole] = useState('// Select a CAD assembly above and click Analyze to view extracted geometry metadata, stress tolerance calculations, and AI design optimization notes...');
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    usecase: 'ragify',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  useEffect(() => {
    if (!activeModal) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveModal(null);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [activeModal]);

  const modalData = activeModal ? productSpecs[activeModal] : null;

  const ragifyStatusClass = ragifyStatus.includes('Processing')
    ? 'text-amber-400'
    : ragifyStatus.includes('Complete')
      ? 'text-emerald-400'
      : '';
  const sailtaskStatusClass = sailtaskStatus === 'Pipeline Active'
    ? 'text-emerald-400'
    : sailtaskStatus.includes('Parsing')
      ? 'text-amber-400'
      : '';
  const cadoxStatusClass = cadoxStatus === 'Analysis Complete'
    ? 'text-emerald-400'
    : cadoxStatus.includes('Parsing')
      ? 'text-amber-400'
      : '';

  const footerColumns = useMemo(
    () => [
      ['AI Products', [['#products', 'Ragify (RAG Engine)'], ['#products', 'SailTask (Workflow AI)'], ['#products', 'Cadox (CAD Engine)'], ['#playground', 'Interactive Sandbox']]],
      ['Architecture', [['#architecture', 'FastAPI & Python'], ['#architecture', 'FAISS Vector Store'], ['#architecture', 'Transformers & RAG'], ['#architecture', 'Docker Deployment']]],
      ['Company', [['#founder', 'About Founder'], ['#founder', 'Platform Roadmap'], ['#faq', 'FAQ'], ['#contact', 'Contact & Demo']]],
    ] as Array<[string, Array<[string, string]>]>,
    [],
  );

  const runRagify = (queryOverride?: string) => {
    const query = (queryOverride ?? ragifyQuery).trim() || 'What are the core vector indexing capabilities of MindHarbourAI?';
    setRagifyQuery(query);
    setRagifyStatus('Processing Vector Search...');
    setRagifyConsole(
      '> [FAISS Index] Generating dense vector embedding for query...\n> [Embedding] Dim: 384 | L2-Distance calculated in 14.2ms\n> [RAG Match] Top 3 Semantic Contexts Retrieved:\n  1. doc_iso_compliance.pdf (Similarity: 0.962)\n  2. tech_architecture_v2.md (Similarity: 0.941)\n\n> [Synthesizing Response with LLM...]',
    );

    window.setTimeout(() => {
      let responseText = '';
      const lowered = query.toLowerCase();
      if (lowered.includes('iso-9001') || lowered.includes('safety')) {
        responseText =
          '✓ [RAGIFY SYNTHESIS]: ISO-9001 Section 4.2 compliance requires automated audit trails for vector index updates and 99.9% uptime for RAG data pipelines. All parameters verified against Q3 safety standards.';
      } else if (lowered.includes('rate limit') || lowered.includes('api')) {
        responseText =
          '✓ [RAGIFY SYNTHESIS]: Standard API rate limit is 10,000 vector queries/min with burst capacity up to 25,000 queries/min via FastAPI high-concurrency workers.';
      } else if (lowered.includes('stress') || lowered.includes('tolerance')) {
        responseText =
          '✓ [RAGIFY SYNTHESIS]: Component stress tolerance limits: Yield Strength = 310 MPa, Ultimate Tensile Strength = 480 MPa. Verified against Cadox structural analysis logs.';
      } else {
        responseText =
          "✓ [RAGIFY SYNTHESIS]: MindHarbourAI's Ragify engine leverages FAISS vector indexing combined with transformer embeddings to deliver context-aware, low-latency search (<35ms) across enterprise documents.";
      }
      setRagifyStatus('24ms • Stream Complete');
      setRagifyConsole((current) => `${current}\n\n${responseText}`);
    }, 900);
  };

  const runSailtask = () => {
    setSailtaskStatus('Parsing NLP Entities...');
    setSailtaskConsole('> [SailTask NER Engine] Extracting action items & task objects...\n> [NER Tagging] Identified 3 task payloads.');

    window.setTimeout(() => {
      const taskJSON = {
        platform: 'SailTask v2.0',
        extracted_tasks: [
          { id: 'TASK-101', title: 'Optimize FAISS Vector Index', assignee: 'Digvijay', priority: 'HIGH', dueDate: 'Friday', status: 'QUEUED' },
          { id: 'TASK-102', title: 'Configure REST Webhooks & Webhook APIs', assignee: 'Engineering Team', priority: 'MEDIUM', status: 'IN_PROGRESS' },
          { id: 'TASK-103', title: 'Review Cadox CAD Structural Specs', assignee: 'Mechanical Lead', priority: 'HIGH', status: 'QUEUED' },
        ],
        webhook_triggered: true,
      };
      setSailtaskStatus('Pipeline Active');
      setSailtaskConsole((current) => `${current}\n\n${JSON.stringify(taskJSON, null, 2)}`);
    }, 800);
  };

  const runCadox = () => {
    setCadoxStatus('Parsing STEP/IGES Geometry...');
    setCadoxConsole('> [Cadox Geometry Reader] Ingesting binary geometry stream...\n> [Mesh Analysis] Calculating surface area, volumetric mass, and bounding box metrics...');

    window.setTimeout(() => {
      const reports: Record<typeof cadoxSelect, string> = {
        turbine: `[CADOX CAD REPORT: Turbine_Blade_Assembly_v4.STEP]
------------------------------------------------------
• Geometry Format  : STEP AP214 (3D Solid Body)
• Total Volume     : 452.8 cm³
• Estimated Mass   : 1.22 kg (Titanium Alloy Ti-6Al-4V)
• Max Von Mises    : 284 MPa (Factor of Safety: 2.1)
• AI Insight       : Blade root geometry meets aerodynamic stress tolerances. Suggest 0.4mm fillet radius increase at trailing edge.`,
        gearbox: `[CADOX CAD REPORT: High_Torque_Gearbox_Housing.IGES]
------------------------------------------------------
• Geometry Format  : IGES 5.3 (Surface Mesh)
• Total Volume     : 1,280.5 cm³
• Estimated Mass   : 3.45 kg (Aluminum 7075-T6)
• Max Torque Rating: 850 Nm
• AI Insight       : Housing mounting hole alignment verified. Thermal dissipation rib spacing is optimal for active liquid cooling.`,
        chassis: `[CADOX CAD REPORT: Aerospace_Chassis_Bracket.SLDPRT]
------------------------------------------------------
• Geometry Format  : SolidWorks Part (B-Rep Solid)
• Total Volume     : 198.4 cm³
• Estimated Mass   : 0.54 kg (Carbon Fiber Composite)
• Mass Savings     : 38% vs Aluminum baseline
• AI Insight       : Topological optimization complete. Material stiffness meets aerospace structural rigidity targets.`,
      };

      setCadoxStatus('Analysis Complete');
      setCadoxConsole((current) => `${current}\n\n${reports[cadoxSelect]}`);
    }, 950);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('⚠️ Please complete all required fields.');
      return;
    }
    setSubmitting(true);
    setFormStatus('');
    window.setTimeout(() => {
      setSubmitting(false);
      setFormStatus('✓ Thank you! Digvijay & the MindHarbourAI engineering team will reach out within 24 hours.');
      setFormData({ name: '', email: '', usecase: 'ragify', message: '' });
      window.setTimeout(() => setFormStatus(''), 7000);
    }, 1100);
  };

  return (
    <div ref={rootRef} className="min-h-screen bg-dark-950 text-text-main">
      <div className="bg-glow bg-glow--1" aria-hidden="true" />
      <div className="bg-glow bg-glow--2" aria-hidden="true" />
      <div className="bg-glow bg-glow--3" aria-hidden="true" />
      <div className="neural-grid-bg" aria-hidden="true" />

      <header id="nav" className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav__inner container">
          <a href="#home" className="nav__logo" onClick={(event) => smoothScroll(event, '#home')}>
            <div className="nav__logo-wrapper">
              <img src={logoImage} alt="MindHarbourAI Icon" className="nav__logo-icon" />
            </div>
            <span className="nav__logo-text">
              MindHarbour<span className="nav__logo-accent">AI</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary Navigation">
            {navLinks.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="nav__link" onClick={(event) => smoothScroll(event, `#${id}`)}>
                {label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a href="#contact" className="btn btn--primary nav__cta" onClick={(event) => smoothScroll(event, '#contact')}>
              <span>Get Started</span>
              {arrowIcon}
            </a>

            <button
              className={`nav__burger ${mobileOpen ? 'open' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`nav__drawer ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav__drawer-link"
              onClick={(event) => smoothScroll(event, `#${id}`, () => setMobileOpen(false))}
            >
              {label === 'Interactive AI Sandbox' ? 'Interactive Sandbox' : label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--primary btn--full nav__drawer-cta"
            onClick={(event) => smoothScroll(event, '#contact', () => setMobileOpen(false))}
          >
            Request Access & Consultation
          </a>
        </div>
      </header>

      <div className="hero-screen-wrapper">
        <section className="hero" id="home">
          <div className="container hero__inner">
            <div className="hero__content">
              <div className="badge badge--pill hero__badge reveal">
                <span className="badge__dot" />
                <span>MindHarbourAI • Applied AI for Knowledge, Workflow, and Engineering Teams</span>
              </div>

              <h1 className="hero__headline reveal reveal-delay-1">
                Applied AI products for <span className="text-gradient">knowledge retrieval, workflow automation,</span> and engineering systems
              </h1>

              <p className="hero__subtext reveal reveal-delay-2">
                MindHarbourAI builds practical AI products that help teams find internal knowledge faster, convert operational context into action, and prepare engineering workflows for deeper AI integration.
              </p>

              <div className="hero__actions reveal reveal-delay-3">
                <a href="#products" className="btn btn--primary btn--lg" onClick={(event) => smoothScroll(event, '#products')}>
                  <span>Explore Products</span>
                  {arrowIcon}
                </a>
                <a href="#playground" className="btn btn--glass btn--lg" onClick={(event) => smoothScroll(event, '#playground')}>
                  {playIcon}
                  <span>View Product Demo</span>
                </a>
              </div>

              <div className="hero__tags reveal reveal-delay-4">
                <span className="hero__tag-item">✓ Retrieval Systems</span>
                <span className="hero__tag-item">✓ Workflow Automation</span>
                <span className="hero__tag-item">✓ Engineering AI Roadmap</span>
              </div>
            </div>

            <div className="hero__visual reveal reveal-delay-2">
              <div className="hero__dashboard-card">
                <div className="hero__dashboard-header">
                  <div className="window-controls">
                    <span className="dot dot--red" />
                    <span className="dot dot--yellow" />
                    <span className="dot dot--green" />
                  </div>
                  <div className="dashboard-title">
                    <span className="pulse-icon" />
                    mindharbour-ai-core // live-telemetry
                  </div>
                </div>

                <div className="hero__dashboard-img-wrapper">
                  <div className="hero__dashboard-shell" aria-label="MindHarbourAI Intelligence Dashboard preview">
                    <div className="hero__dashboard-topbar">
                      <div>
                        <p className="hero__dashboard-eyebrow">AI analytics</p>
                        <h3 className="hero__dashboard-heading">Operational intelligence overview</h3>
                      </div>
                      <div className="hero__dashboard-chip">Live</div>
                    </div>

                    <div className="hero__dashboard-grid">
                      <div className="hero__dashboard-panel hero__dashboard-panel--primary">
                        <div className="hero__metric-row">
                          <div>
                            <span className="hero__metric-label">Knowledge retrieval</span>
                            <span className="hero__metric-value">94.8%</span>
                          </div>
                          <span className="hero__metric-trend">+12.4%</span>
                        </div>
                        <div className="hero__bars">
                          <span style={{ height: '42%' }} />
                          <span style={{ height: '58%' }} />
                          <span style={{ height: '76%' }} />
                          <span style={{ height: '63%' }} />
                          <span style={{ height: '88%' }} />
                          <span style={{ height: '72%' }} />
                          <span style={{ height: '94%' }} />
                        </div>
                      </div>

                      <div className="hero__dashboard-panel">
                        <div className="hero__mini-stat">
                          <span className="hero__metric-label">Workflow runs</span>
                          <span className="hero__metric-value hero__metric-value--sm">1,284</span>
                        </div>
                        <div className="hero__sparkline">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>

                      <div className="hero__dashboard-panel hero__dashboard-panel--wide">
                        <div className="hero__panel-header">
                          <span className="hero__metric-label">Pipeline health</span>
                          <span className="hero__status-pill">Stable</span>
                        </div>
                        <div className="hero__activity-list">
                          <div className="hero__activity-item">
                            <span className="hero__activity-dot hero__activity-dot--cyan" />
                            <span>Ragify index sync completed</span>
                            <span>24ms</span>
                          </div>
                          <div className="hero__activity-item">
                            <span className="hero__activity-dot hero__activity-dot--purple" />
                            <span>SailTask workflow generated</span>
                            <span>Ready</span>
                          </div>
                          <div className="hero__activity-item">
                            <span className="hero__activity-dot hero__activity-dot--blue" />
                            <span>Cadox schema parsed</span>
                            <span>Preview</span>
                          </div>
                        </div>
                      </div>

                      <div className="hero__dashboard-panel">
                        <div className="hero__mini-stat">
                          <span className="hero__metric-label">Private deployment</span>
                          <span className="hero__metric-value hero__metric-value--sm">Enabled</span>
                        </div>
                        <div className="hero__ring">
                          <div className="hero__ring-inner">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero__overlay-badge hero__overlay-badge--1">
                    <div className="badge-icon">⚡</div>
                    <div>
                      <span className="badge-title">RAG Vector Search</span>
                      <span className="badge-val">Grounded Retrieval • FAISS</span>
                    </div>
                  </div>
                  <div className="hero__overlay-badge hero__overlay-badge--2">
                    <div className="badge-icon">⚙️</div>
                    <div>
                      <span className="badge-title">SailTask Automation</span>
                      <span className="badge-val">Structured Workflow Output</span>
                    </div>
                  </div>
                  <div className="hero__overlay-badge hero__overlay-badge--3">
                    <div className="badge-icon">🏗️</div>
                    <div>
                      <span className="badge-title">Cadox CAD Engine</span>
                      <span className="badge-val">Coming Soon • Active R&D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats-strip__inner">
            {stats.map(([value, label], index) => (
              <FragmentWithDivider key={label} showDivider={index < stats.length - 1}>
                <div className={`stat reveal ${index ? `reveal-delay-${Math.min(index, 4)}` : ''}`}>
                  <span className="stat__val">{value}</span>
                  <span className="stat__label">{label}</span>
                </div>
              </FragmentWithDivider>
            ))}
          </div>
        </section>
      </div>

      <section className="products" id="products">
        <div className="container">
          <header className="section-header reveal">
            <div className="badge badge--pill">Product Portfolio</div>
            <h2 className="section-header__title">Products with a clear wedge today, and a broader platform direction over time</h2>
            <p className="section-header__sub">
              <strong>Ragify</strong> and <strong>SailTask</strong> represent the current operating focus: retrieval and workflow execution. <strong>Cadox</strong> extends that vision into engineering and CAD-centric intelligence.
            </p>
          </header>

          <div className="products__grid">
            {products.map((product, index) => (
              <article
                key={product.key}
                className={`product-card ${product.className} reveal ${index ? `reveal-delay-${Math.min(index, 4)}` : ''}`}
              >
                <div className="product-card__visual">
                  <div className={`product-card__glow ${product.glow}`} />
                  <div className="product-card__icon-box">
                    <span className="product-card__icon">{product.icon}</span>
                  </div>
                  <span className={`badge ${product.badgeClass} product-card__badge`}>{product.badge}</span>
                </div>

                <div className="product-card__body">
                  <div className="product-card__meta">
                    <span className="product-card__version">{product.version}</span>
                    <span className="product-card__tag">{product.tag}</span>
                  </div>
                  <h3 className="product-card__title">{product.title}</h3>
                  <p className="product-card__subtitle">{product.subtitle}</p>
                  <p className="product-card__desc">{product.desc}</p>

                  <ul className="product-card__features" role="list">
                    {product.features.map((feature) => (
                      <li key={feature}>
                        <span className="feature-dot" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <footer className="product-card__footer">
                    <button className={`btn btn--sm ${product.buttonClass} product-card__cta`} onClick={() => setActiveModal(product.key)}>
                      <span>{product.cta}</span>
                      {arrowIcon}
                    </button>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="playground" id="playground">
        <div className="container">
          <header className="section-header reveal">
            <div className="badge badge--pill">Product Experience</div>
            <h2 className="section-header__title">See how the product concepts work in practice</h2>
            <p className="section-header__sub">
              The interactive demo below illustrates how retrieval, task extraction, and engineering analysis workflows are meant to behave across the product suite.
            </p>
          </header>

          <div className="sandbox reveal">
            <div className="sandbox__tabs" role="tablist">
              {[
                ['ragify', '🔍', 'Ragify (Live RAG)'],
                ['sailtask', '⚙️', 'SailTask (Live Workflow)'],
                ['cadox', '🏗️', 'Cadox (Coming Soon)'],
              ].map(([key, icon, label]) => (
                <button
                  key={key}
                  className={`sandbox__tab ${activeTab === key ? 'active' : ''}`}
                  role="tab"
                  aria-selected={activeTab === key}
                  aria-controls={`panel-${key}`}
                  onClick={() => setActiveTab(key as TabKey)}
                >
                  <span className="sandbox__tab-icon">{icon}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <div className="sandbox__content">
              <div className="sandbox__panel" id="panel-ragify" role="tabpanel" hidden={activeTab !== 'ragify'}>
                <div className="sandbox__grid">
                  <div className="sandbox__input-col">
                    <label className="sandbox__label">Enter Natural Language Query or Select Prompt:</label>
                    <div className="sandbox__presets">
                      {Object.entries(ragPresets).map(([key, value]) => (
                        <button key={key} className="preset-btn" onClick={() => runRagify(value)}>
                          "{value}"
                        </button>
                      ))}
                    </div>
                    <textarea
                      className="sandbox__textarea"
                      rows={3}
                      placeholder="Ask anything across your indexed document repository..."
                      value={ragifyQuery}
                      onChange={(event) => setRagifyQuery(event.target.value)}
                    />
                    <button className="btn btn--primary btn--full" onClick={() => runRagify()}>
                      <span>Execute RAG Vector Search</span>
                      {arrowIcon}
                    </button>
                  </div>

                  <div className="sandbox__output-col">
                    <div className="sandbox__output-header">
                      <span>FAISS Vector Pipeline Stream</span>
                      <span className={`output-status ${ragifyStatusClass}`}>{ragifyStatus}</span>
                    </div>
                    <div className="sandbox__console">{ragifyConsole}</div>
                  </div>
                </div>
              </div>

              <div className="sandbox__panel" id="panel-sailtask" role="tabpanel" hidden={activeTab !== 'sailtask'}>
                <div className="sandbox__grid">
                  <div className="sandbox__input-col">
                    <label className="sandbox__label">Input Unstructured Meeting Notes / Raw Email:</label>
                    <textarea
                      className="sandbox__textarea"
                      rows={5}
                      placeholder="e.g., During today's engineering sync, Digvijay instructed us to optimize the FAISS vector index by Friday, update API endpoints for SailTask, and send the CAD review to the manufacturing lead."
                      value={sailtaskInput}
                      onChange={(event) => setSailtaskInput(event.target.value)}
                    />
                    <button className="btn btn--purple btn--full" onClick={runSailtask}>
                      <span>Extract Action Items & Generate Tasks</span>
                      {arrowIcon}
                    </button>
                  </div>

                  <div className="sandbox__output-col">
                    <div className="sandbox__output-header">
                      <span>Generated Workflow Actions (JSON / Workflow)</span>
                      <span className={`output-status ${sailtaskStatusClass}`}>{sailtaskStatus}</span>
                    </div>
                    <div className="sandbox__console">{sailtaskConsole}</div>
                  </div>
                </div>
              </div>

              <div className="sandbox__panel" id="panel-cadox" role="tabpanel" hidden={activeTab !== 'cadox'}>
                <div className="sandbox__notice">
                  <span className="notice-badge">R&amp;D PREVIEW</span>
                  <span>Cadox is currently in active R&amp;D (Phase 3 Roadmap). Try out our interactive early prototype preview below!</span>
                </div>
                <div className="sandbox__grid">
                  <div className="sandbox__input-col">
                    <label className="sandbox__label">Select Engineering Sample CAD File:</label>
                    <select className="sandbox__select" value={cadoxSelect} onChange={(event) => setCadoxSelect(event.target.value as typeof cadoxSelect)}>
                      <option value="turbine">Turbine_Blade_Assembly_v4.STEP</option>
                      <option value="gearbox">High_Torque_Gearbox_Housing.IGES</option>
                      <option value="chassis">Aerospace_Chassis_Bracket.SLDPRT</option>
                    </select>

                    <div className="cad-preview-box">
                      <div className="cad-wireframe">
                        <div className="cube">
                          <div className="side front" />
                          <div className="side back" />
                          <div className="side right" />
                          <div className="side left" />
                          <div className="side top" />
                          <div className="side bottom" />
                        </div>
                      </div>
                      <span className="cad-preview-tag">3D Mesh Wireframe Simulated</span>
                    </div>

                    <button className="btn btn--blue btn--full" onClick={runCadox}>
                      <span>Analyze CAD Geometry & Extract Metadata</span>
                      {arrowIcon}
                    </button>
                  </div>

                  <div className="sandbox__output-col">
                    <div className="sandbox__output-header">
                      <span>Cadox Engineering Analysis Output</span>
                      <span className={`output-status ${cadoxStatusClass}`}>{cadoxStatus}</span>
                    </div>
                    <div className="sandbox__console">{cadoxConsole}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="architecture" id="architecture">
        <div className="container">
          <header className="section-header reveal">
            <div className="badge badge--pill">Technical Foundation</div>
            <h2 className="section-header__title">Built for integration, deployment control, and production AI workflows</h2>
            <p className="section-header__sub">
              The stack is positioned around practical deployment concerns: API-first services, retrieval infrastructure, model orchestration, and support for private or enterprise-controlled environments.
            </p>
          </header>

          <div className="architecture__grid">
            {architectureCards.map(([icon, title, desc], index) => (
              <div key={title} className={`arch-card reveal ${index ? `reveal-delay-${Math.min(index, 4)}` : ''}`}>
                <div className="arch-card__icon">{icon}</div>
                <h3 className="arch-card__title">{title}</h3>
                <p className="arch-card__desc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="tech-stack-strip reveal">
            {techBadges.map((badge) => (
              <span key={badge} className="tech-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="founder" id="founder">
        <div className="container founder__inner">
          <div className="founder__left reveal">
            <div className="badge badge--pill">Vision & Leadership</div>
            <h2 className="founder__title">A focused AI company with a practical product path</h2>
            <p className="founder__desc">
              MindHarbourAI is being built around a simple thesis: AI products become valuable when they reduce operational friction, improve information access, and fit the systems teams already use.
            </p>

            <div className="quote-card">
              <div className="quote-mark">“</div>
              <blockquote className="quote-text">
                Artificial intelligence shouldn't just summarize text — it should understand the structure of knowledge, automate multi-step workflows, and analyze complex engineering assets like CAD models to give professionals superpowers.
              </blockquote>
              <div className="founder-info">
                <span className="founder-name">Digvijay</span>
                <span className="founder-role">Founder & CEO, MindHarbourAI</span>
              </div>
            </div>

            <ul className="checklist" role="list">
              <li className="checklist__item">Focused on applied AI use cases instead of generic assistants</li>
              <li className="checklist__item">Built around integration into existing operational systems</li>
              <li className="checklist__item">Structured for enterprise deployment conversations</li>
            </ul>
          </div>

          <div className="founder__right reveal reveal-delay-2">
            <div className="vision-card">
              <div className="vision-card__header">
                <img src={logo} alt="MindHarbourAI Emblem" className="vision-card__logo" />
                <h3>Product Roadmap</h3>
              </div>

              <div className="timeline">
                <div className="timeline__item completed">
                  <div className="timeline__marker" />
                  <div className="timeline__content">
                    <h4>Phase 1: Retrieval and Workflow Foundation</h4>
                    <p>Establish Ragify and SailTask as the initial product wedge for knowledge access and workflow execution.</p>
                  </div>
                </div>
                <div className="timeline__item active">
                  <div className="timeline__marker" />
                  <div className="timeline__content">
                    <h4>Phase 2: Deeper Integration and Orchestration</h4>
                    <p>Expand integration depth, improve workflow sync, and strengthen how AI systems connect to operational environments.</p>
                  </div>
                </div>
                <div className="timeline__item upcoming">
                  <div className="timeline__marker" />
                  <div className="timeline__content">
                    <h4>Phase 3: Engineering Intelligence via Cadox</h4>
                    <p>Extend the platform into CAD and engineering analysis workflows where technical context and design data become AI-usable assets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="container">
          <header className="section-header reveal">
            <div className="badge badge--pill">FAQ</div>
            <h2 className="section-header__title">What buyers and partners usually want to know first</h2>
            <p className="section-header__sub">A quick overview of current product scope, positioning, and deployment expectations.</p>
          </header>

          <div className="faq__list reveal">
            {faqItems.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div key={question} className={`faq__item ${isOpen ? 'open' : ''}`}>
                  <button className="faq__question" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}>
                    <span>{question}</span>
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact__inner">
          <div className="contact__box reveal">
            <div className="contact__info">
              <div className="badge badge--pill">Contact</div>
              <h2 className="contact__title">Talk to us about deployment, pilots, or product fit</h2>
              <p className="contact__desc">
                If you are evaluating retrieval, workflow automation, or future engineering AI use cases, we can walk through product fit, integration needs, and pilot scope.
              </p>

              <div className="contact__details">
                <div className="contact__detail">
                  <div className="contact__detail-icon" aria-hidden="true">✉️</div>
                  <div>
                    <span className="contact__detail-label">Direct Contact</span>
                    <a href="mailto:ai@mindharbour.com" className="contact__detail-val">ai@mindharbour.com</a>
                  </div>
                </div>
                <div className="contact__detail">
                  <div className="contact__detail-icon" aria-hidden="true">📍</div>
                  <div>
                    <span className="contact__detail-label">Headquarters</span>
                    <span className="contact__detail-val">MindHarbourAI Labs, Tech Hub</span>
                  </div>
                </div>
                <div className="contact__detail">
                  <div className="contact__detail-icon" aria-hidden="true">👤</div>
                  <div>
                    <span className="contact__detail-label">Founder</span>
                    <span className="contact__detail-val">Digvijay (Founder & Lead Architect)</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Request a Product Conversation</h3>

              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Work Email</label>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="usecase">Primary Product Interest</label>
                <select
                  id="usecase"
                  className="form-input form-select"
                  value={formData.usecase}
                  onChange={(event) => setFormData((current) => ({ ...current, usecase: event.target.value }))}
                >
                  <option value="ragify">Ragify — Knowledge Search & RAG</option>
                  <option value="sailtask">SailTask — AI Workflow & Task Automation</option>
                  <option value="cadox">Cadox — CAD & Engineering Intelligence</option>
                  <option value="suite">Multi-Product Evaluation</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Use Case / Requirements</label>
                <textarea
                  id="message"
                  className="form-input form-textarea"
                  rows={4}
                  placeholder="Tell us about your workflow, knowledge, or engineering use case..."
                  value={formData.message}
                  onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary btn--full" disabled={submitting}>
                <span>{submitting ? 'Submitting Request...' : 'Request Conversation'}</span>
                {!submitting && arrowIcon}
              </button>

              <p className="contact__form-note" aria-live="polite">{formStatus}</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__grid">
            <div className="footer__brand">
              <a href="#home" className="footer__logo" onClick={(event) => smoothScroll(event, '#home')}>
                <img src={logoImage} alt="MindHarbourAI Logo" className="footer__logo-img" />
                <span className="footer__logo-text">
                  MindHarbour<span className="text-gradient">AI</span>
                </span>
              </a>
              <p className="footer__brand-desc">
                Applied AI products for retrieval, workflow automation, and the next generation of engineering intelligence.
              </p>
              <div className="footer__meta">
                <span>Founded by Digvijay</span> • <span>Built with Python & FAISS</span>
              </div>
            </div>

            {footerColumns.map(([title, links]) => (
              <div key={title} className="footer__col">
                <h4 className="footer__col-title">{title}</h4>
                <ul className="footer__links" role="list">
                  {links.map(([href, label]) => (
                    <li key={label}>
                      <a href={href} onClick={(event) => smoothScroll(event, href)}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer__bottom">
            <p>© 2026 MindHarbourAI. All rights reserved. Shaping the future of AI & Engineering Intelligence.</p>
          </div>
        </div>
      </footer>

      <div className={`modal ${activeModal ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!activeModal}>
        <div className="modal__overlay" onClick={() => setActiveModal(null)} />
        <div className="modal__box">
          <button className="modal__close" aria-label="Close modal" onClick={() => setActiveModal(null)}>
            ✕
          </button>
          {modalData && (
            <>
              <div className="modal__header">
                <div className="modal__icon" aria-hidden="true">{modalData.icon}</div>
                <div>
                  <span className="modal__tag">{modalData.tag}</span>
                  <h3 className="modal__title">{modalData.title}</h3>
                </div>
              </div>
              <p className="modal__desc">{modalData.desc}</p>

              <div className="modal__specs">
                {modalData.specs.map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-key">{key}</span>
                    <span className="spec-val">{value}</span>
                  </div>
                ))}
              </div>

              <div className="modal__actions">
                <a
                  href="#contact"
                  className="btn btn--primary modal__cta"
                  onClick={(event) => smoothScroll(event, '#contact', () => setActiveModal(null))}
                >
                  {modalData.ctaText}
                </a>
                <button className="btn btn--glass" onClick={() => setActiveModal(null)}>
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FragmentWithDivider({ children, showDivider }: { children: ReactNode; showDivider: boolean }) {
  return (
    <>
      {children}
      {showDivider ? <div className="stat__divider" aria-hidden="true" /> : null}
    </>
  );
}

export default App;
