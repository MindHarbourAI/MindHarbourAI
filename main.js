/* ============================================================
   MINDHARBOUR AI — main.js
   Sections:
     1. Nav — sticky scroll shadow + mobile burger
     2. Smooth scroll for anchor links
     3. Scroll reveal (IntersectionObserver)
     4. Product modal
     5. Contact form
============================================================ */

'use strict';

/* ============================================================
   1. NAV — shadow on scroll + mobile burger toggle
============================================================ */
(function initNav() {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('navDrawer');

  // Shadow when page scrolls past hero
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Burger toggle
  burger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    drawer.setAttribute('aria-hidden', !isOpen);
  });

  // Close drawer when any drawer link is clicked
  drawer.querySelectorAll('.nav__drawer-link, .nav__drawer-cta').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    });
  });
})();


/* ============================================================
   2. SMOOTH SCROLL for all internal anchor links
============================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 72; // nav height buffer
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ============================================================
   3. SCROLL REVEAL
   Elements with class "reveal" fade/slide in when visible.
   Add "reveal-delay-N" (1–5) for staggered groups.
============================================================ */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
})();


/* ============================================================
   4. PRODUCT MODAL
============================================================ */
(function initModal() {
  const PRODUCTS = {
    chatbot: {
      icon: '🤖',
      title: 'AI ChatBot Pro',
      desc: 'Advanced conversational AI with natural language processing, sentiment analysis, multi-language support, and custom training on your own data. Integrates seamlessly with Slack, Intercom, Salesforce, and more.',
    },
    analytics: {
      icon: '📊',
      title: 'Predictive Analytics AI',
      desc: 'Machine learning platform that analyses historical data to forecast trends, customer behaviour, and business outcomes with 95% accuracy. Includes real-time dashboards and automated alerts.',
    },
    content: {
      icon: '🎨',
      title: 'AI Content Generator',
      desc: 'Create high-quality content, images, and videos using advanced generative AI trained on billions of data points. Perfect for marketing teams and content creators looking to scale production.',
    },
    vision: {
      icon: '🔍',
      title: 'Computer Vision AI',
      desc: 'Real-time image and video analysis for object detection, facial recognition, quality control, and automated inspection. Powered by state-of-the-art neural networks with sub-100ms inference.',
    },
    automl: {
      icon: '🧮',
      title: 'AutoML Platform',
      desc: 'No-code machine learning platform that automatically builds, trains, and deploys custom AI models. Perfect for businesses without a dedicated data science team.',
    },
    recommend: {
      icon: '🎯',
      title: 'AI Recommendation Engine',
      desc: 'Personalised recommendation system powered by deep learning algorithms. Boost engagement, conversion rates, and customer satisfaction with intelligent product and content suggestions.',
    },
  };

  const modal    = document.getElementById('productModal');
  const overlay  = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const closeBtn2 = document.getElementById('modalCloseBtn');
  const iconEl   = document.getElementById('modalIcon');
  const titleEl  = document.getElementById('modalTitle');
  const descEl   = document.getElementById('modalDesc');

  function openModal(key) {
    const product = PRODUCTS[key];
    if (!product) return;

    iconEl.textContent  = product.icon;
    titleEl.textContent = product.title;
    descEl.textContent  = product.desc;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    setTimeout(() => closeBtn.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Open via product card buttons
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modal));
  });

  // Close triggers
  closeBtn.addEventListener('click', closeModal);
  closeBtn2.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();


/* ============================================================
   5. CONTACT FORM
============================================================ */
(function initContactForm() {
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    // Simulate async submission (replace with real fetch/API call)
    setTimeout(() => {
      status.textContent = '✓ Message sent! We\'ll be in touch within 24 hours.';
      status.style.color = '#4ade80';
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request AI consultation';

      // Clear status after 6 seconds
      setTimeout(() => { status.textContent = ''; }, 6000);
    }, 1200);
  });
})();