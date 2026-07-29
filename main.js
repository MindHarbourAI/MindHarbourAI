/* ============================================================
   MINDHARBOUR AI — Main Interactive Engine
   Modules:
     1. Navigation (Sticky & Mobile Drawer)
     2. Smooth Scroll Anchor Handler
     3. IntersectionObserver Scroll Reveal
     4. Product Modals (Ragify, SailTask, Cadox)
     5. FAQ Accordion Engine
     6. Interactive AI Product Sandbox (Live Simulators)
     7. Contact Form Handler
============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. NAVIGATION
  ============================================================ */
  (function initNav() {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('navBurger');
    const drawer = document.getElementById('navDrawer');

    if (!nav) return;

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    if (burger && drawer) {
      burger.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
        drawer.setAttribute('aria-hidden', !isOpen);
      });

      drawer.querySelectorAll('.nav__drawer-link, .nav__drawer-cta').forEach(link => {
        link.addEventListener('click', () => {
          drawer.classList.remove('open');
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          drawer.setAttribute('aria-hidden', 'true');
        });
      });
    }
  })();


  /* ============================================================
     2. SMOOTH SCROLL FOR INTERNAL LINKS
  ============================================================ */
  (function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  })();


  /* ============================================================
     3. SCROLL REVEAL (IntersectionObserver)
  ============================================================ */
  (function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  })();


  /* ============================================================
     4. PRODUCT MODAL SYSTEM
  ============================================================ */
  (function initModal() {
    const PRODUCT_SPECS = {
      ragify: {
        icon: '🔍',
        tag: 'Knowledge Retrieval (RAG) • Live Engine',
        title: 'Ragify — RAG Knowledge Engine',
        desc: 'Ragify unlocks high-speed, semantic retrieval across vast enterprise knowledge bases, code repositories, and technical PDF archives. By combining dense vector embeddings with FAISS indices and context-aware LLMs, Ragify delivers precise, hallucination-free answers with exact source citations.',
        ctaText: 'Request Ragify Demo',
        specs: [
          { key: 'Product Status', val: 'Live & Active Deployment' },
          { key: 'Vector Store Integration', val: 'Meta FAISS (Dense Flat & IVF)' },
          { key: 'Embedding Model', val: 'MiniLM-L6 / BGE-Large / Custom' },
          { key: 'Average Retrieval Latency', val: '< 35ms (Sub-second RAG stream)' },
          { key: 'Supported File Types', val: 'PDF, DOCX, Markdown, Code, SQL' }
        ]
      },
      sailtask: {
        icon: '⚙️',
        tag: 'Workflow Automation • Live Engine',
        title: 'SailTask — Workflow & Task Engine',
        desc: 'SailTask bridges the gap between raw natural language insights and executable business workflows. It automatically parses unstructured meeting transcripts, customer emails, or project docs into structured tasks, assigns priorities, and triggers external APIs or Jira/Slack pipelines.',
        ctaText: 'Request SailTask Demo',
        specs: [
          { key: 'Product Status', val: 'Live & Active Deployment' },
          { key: 'Parsing Logic', val: 'Transformer Named Entity Recognition' },
          { key: 'Output Format', val: 'Structured JSON / REST Webhooks' },
          { key: 'API Latency', val: '< 50ms processing pipeline' },
          { key: 'Integrations', val: 'Slack, Jira, GitHub, Custom Webhooks' }
        ]
      },
      cadox: {
        icon: '🏗️',
        tag: 'Engineering Intelligence • Coming Soon',
        title: 'Cadox — CAD & Geometry AI Engine (Upcoming)',
        desc: 'Cadox is our upcoming AI engine built specifically for mechanical engineering and CAD design workflows. Currently in active R&D (Phase 3 Roadmap), Cadox will automatically extract geometric parameters, assembly metadata, material specifications, and tolerance boundaries from STEP/IGES files.',
        ctaText: 'Join Cadox Waitlist',
        specs: [
          { key: 'Development Status', val: 'Coming Soon • Active R&D' },
          { key: 'Planned CAD Formats', val: 'STEP, IGES, SLDPRT, DXF, STL' },
          { key: 'Extraction Capabilities', val: 'Mesh Geometry, Volume, Mass, Stress' },
          { key: 'Target Release Phase', val: 'Phase 3 Roadmap (Beta Waitlist Open)' },
          { key: 'Primary Use Case', val: 'Mechanical & Aerospace Engineering' }
        ]
      }
    };

    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    const closeBtn2 = document.getElementById('modalCloseBtn');
    const iconEl = document.getElementById('modalIcon');
    const tagEl = document.getElementById('modalTag');
    const titleEl = document.getElementById('modalTitle');
    const descEl = document.getElementById('modalDesc');
    const specsEl = document.getElementById('modalSpecs');
    const ctaEl = document.getElementById('modalCta');

    if (!modal) return;

    function openModal(key) {
      const data = PRODUCT_SPECS[key];
      if (!data) return;

      iconEl.textContent = data.icon;
      tagEl.textContent = data.tag;
      titleEl.textContent = data.title;
      descEl.textContent = data.desc;
      if (ctaEl && data.ctaText) ctaEl.textContent = data.ctaText;

      // Render Specs Table
      specsEl.innerHTML = data.specs.map(s => `
        <div class="spec-item">
          <span class="spec-key">${s.key}</span>
          <span class="spec-val">${s.val}</span>
        </div>
      `).join('');

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-modal]').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.modal));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeBtn2) closeBtn2.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  })();


  /* ============================================================
     5. FAQ ACCORDION
  ============================================================ */
  (function initFAQ() {
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq__question');
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close other items
        faqItems.forEach(i => {
          i.classList.remove('open');
          const btn = i.querySelector('.faq__question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('open');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  })();


  /* ============================================================
     6. INTERACTIVE AI PRODUCT SANDBOX / PLAYGROUND
  ============================================================ */
  (function initSandbox() {
    // Tab Switching
    const tabs = document.querySelectorAll('.sandbox__tab');
    const panels = document.querySelectorAll('.sandbox__panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        panels.forEach(p => p.hidden = true);

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const targetPanel = document.getElementById(`panel-${tab.dataset.tab}`);
        if (targetPanel) targetPanel.hidden = false;
      });
    });

    // 6A. Ragify Simulator
    const ragifyInput = document.getElementById('ragifyQueryInput');
    const runRagifyBtn = document.getElementById('runRagifyBtn');
    const ragifyConsole = document.getElementById('ragifyConsole');
    const ragifyStatus = document.getElementById('ragifyStatus');

    const RAG_PRESETS = {
      rag1: "Summarize safety compliance in ISO-9001 specs",
      rag2: "What are the API rate limits for vectorized search?",
      rag3: "Find all component stress tolerances in Q4 audit"
    };

    document.querySelectorAll('.preset-btn').forEach(pBtn => {
      pBtn.addEventListener('click', () => {
        const presetKey = pBtn.dataset.preset;
        if (RAG_PRESETS[presetKey]) {
          ragifyInput.value = RAG_PRESETS[presetKey];
          executeRagifySim();
        }
      });
    });

    if (runRagifyBtn) {
      runRagifyBtn.addEventListener('click', executeRagifySim);
    }

    function executeRagifySim() {
      const query = ragifyInput.value.trim() || "What are the core vector indexing capabilities of MindHarbourAI?";
      ragifyStatus.textContent = "Processing Vector Search...";
      ragifyStatus.style.color = "#f59e0b";
      ragifyConsole.innerHTML = `> [FAISS Index] Generating dense vector embedding for query...\n> [Embedding] Dim: 384 | L2-Distance calculated in 14.2ms\n> [RAG Match] Top 3 Semantic Contexts Retrieved:\n  1. doc_iso_compliance.pdf (Similarity: 0.962)\n  2. tech_architecture_v2.md (Similarity: 0.941)\n\n> [Synthesizing Response with LLM...]`;

      setTimeout(() => {
        ragifyStatus.textContent = "24ms • Stream Complete";
        ragifyStatus.style.color = "#10b981";

        let responseText = ``;
        if (query.toLowerCase().includes("iso-9001") || query.toLowerCase().includes("safety")) {
          responseText = `✓ [RAGIFY SYNTHESIS]: ISO-9001 Section 4.2 compliance requires automated audit trails for vector index updates and 99.9% uptime for RAG data pipelines. All parameters verified against Q3 safety standards.`;
        } else if (query.toLowerCase().includes("rate limit") || query.toLowerCase().includes("api")) {
          responseText = `✓ [RAGIFY SYNTHESIS]: Standard API rate limit is 10,000 vector queries/min with burst capacity up to 25,000 queries/min via FastAPI high-concurrency workers.`;
        } else if (query.toLowerCase().includes("stress") || query.toLowerCase().includes("tolerance")) {
          responseText = `✓ [RAGIFY SYNTHESIS]: Component stress tolerance limits: Yield Strength = 310 MPa, Ultimate Tensile Strength = 480 MPa. Verified against Cadox structural analysis logs.`;
        } else {
          responseText = `✓ [RAGIFY SYNTHESIS]: MindHarbourAI's Ragify engine leverages FAISS vector indexing combined with transformer embeddings to deliver context-aware, low-latency search (<35ms) across enterprise documents.`;
        }

        ragifyConsole.innerHTML += `\n\n${responseText}`;
      }, 900);
    }

    // 6B. SailTask Simulator
    const sailtaskInput = document.getElementById('sailtaskInput');
    const runSailtaskBtn = document.getElementById('runSailtaskBtn');
    const sailtaskConsole = document.getElementById('sailtaskConsole');
    const sailtaskStatus = document.getElementById('sailtaskStatus');

    if (runSailtaskBtn) {
      runSailtaskBtn.addEventListener('click', () => {
        const text = sailtaskInput.value.trim() || "Sync meeting with Digvijay: Need to optimize FAISS index by Friday, configure REST webhooks for SailTask, and review Cadox CAD specs.";
        sailtaskStatus.textContent = "Parsing NLP Entities...";
        sailtaskStatus.style.color = "#f59e0b";
        sailtaskConsole.innerHTML = `> [SailTask NER Engine] Extracting action items & task objects...\n> [NER Tagging] Identified 3 task payloads.`;

        setTimeout(() => {
          sailtaskStatus.textContent = "Pipeline Active";
          sailtaskStatus.style.color = "#10b981";

          const taskJSON = {
            "platform": "SailTask v2.0",
            "extracted_tasks": [
              {
                "id": "TASK-101",
                "title": "Optimize FAISS Vector Index",
                "assignee": "Digvijay",
                "priority": "HIGH",
                "dueDate": "Friday",
                "status": "QUEUED"
              },
              {
                "id": "TASK-102",
                "title": "Configure REST Webhooks & Webhook APIs",
                "assignee": "Engineering Team",
                "priority": "MEDIUM",
                "status": "IN_PROGRESS"
              },
              {
                "id": "TASK-103",
                "title": "Review Cadox CAD Structural Specs",
                "assignee": "Mechanical Lead",
                "priority": "HIGH",
                "status": "QUEUED"
              }
            ],
            "webhook_triggered": true
          };

          sailtaskConsole.innerHTML += `\n\n` + JSON.stringify(taskJSON, null, 2);
        }, 800);
      });
    }

    // 6C. Cadox Simulator
    const cadoxSelect = document.getElementById('cadoxSelect');
    const runCadoxBtn = document.getElementById('runCadoxBtn');
    const cadoxConsole = document.getElementById('cadoxConsole');
    const cadoxStatus = document.getElementById('cadoxStatus');

    if (runCadoxBtn) {
      runCadoxBtn.addEventListener('click', () => {
        const selectedFile = cadoxSelect.value;
        cadoxStatus.textContent = "Parsing STEP/IGES Geometry...";
        cadoxStatus.style.color = "#f59e0b";
        cadoxConsole.innerHTML = `> [Cadox Geometry Reader] Ingesting binary geometry stream...\n> [Mesh Analysis] Calculating surface area, volumetric mass, and bounding box metrics...`;

        setTimeout(() => {
          cadoxStatus.textContent = "Analysis Complete";
          cadoxStatus.style.color = "#10b981";

          let cadResult = "";
          if (selectedFile === "turbine") {
            cadResult = `[CADOX CAD REPORT: Turbine_Blade_Assembly_v4.STEP]
------------------------------------------------------
• Geometry Format  : STEP AP214 (3D Solid Body)
• Total Volume    : 452.8 cm³
• Estimated Mass   : 1.22 kg (Titanium Alloy Ti-6Al-4V)
• Max Von Mises    : 284 MPa (Factor of Safety: 2.1)
• AI Insight       : Blade root geometry meets aerodynamic stress tolerances. Suggest 0.4mm fillet radius increase at trailing edge.`;
          } else if (selectedFile === "gearbox") {
            cadResult = `[CADOX CAD REPORT: High_Torque_Gearbox_Housing.IGES]
------------------------------------------------------
• Geometry Format  : IGES 5.3 (Surface Mesh)
• Total Volume    : 1,280.5 cm³
• Estimated Mass   : 3.45 kg (Aluminum 7075-T6)
• Max Torque Rating: 850 Nm
• AI Insight       : Housing mounting hole alignment verified. Thermal dissipation rib spacing is optimal for active liquid cooling.`;
          } else {
            cadResult = `[CADOX CAD REPORT: Aerospace_Chassis_Bracket.SLDPRT]
------------------------------------------------------
• Geometry Format  : SolidWorks Part (B-Rep Solid)
• Total Volume    : 198.4 cm³
• Estimated Mass   : 0.54 kg (Carbon Fiber Composite)
• Mass Savings     : 38% vs Aluminum baseline
• AI Insight       : Topological optimization complete. Material stiffness meets aerospace structural rigidity targets.`;
          }

          cadoxConsole.innerHTML += `\n\n` + cadResult;
        }, 950);
      });
    }

  })();


  /* ============================================================
     7. CONTACT FORM SUBMISSION
  ============================================================ */
  (function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();

      const submitBtn = form.querySelector('[type="submit"]');
      const nameVal = document.getElementById('name').value.trim();
      const emailVal = document.getElementById('email').value.trim();

      if (!nameVal || !emailVal) {
        status.textContent = '⚠️ Please complete all required fields.';
        status.style.color = '#f87171';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = 'Submitting Request...';

      setTimeout(() => {
        status.textContent = '✓ Thank you! Digvijay & the MindHarbourAI engineering team will reach out within 24 hours.';
        status.style.color = '#4ade80';
        form.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Send Access Request';

        setTimeout(() => {
          status.textContent = '';
        }, 7000);
      }, 1100);
    });
  })();

});