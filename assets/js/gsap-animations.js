/**
 * GSAP Animations & React Bits Interactive Micro-interactions
 * Decrypted Text, ScrollTrigger Staggers, Number Counters, Tilt 3D, Spotlight
 */

(function () {
  // 1. Text Decryption Effect (React Bits inspired)
  function runDecryptedText(element, originalText, duration = 1200) {
    if (!element) return;
    const chars = '01#@%&*<>{}[]_/\\+=~!^?ABCDEF0123456789';
    const textLength = originalText.length;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const revealedLength = Math.floor(progress * textLength);

      let scrambled = '';
      for (let i = 0; i < textLength; i++) {
        if (i < revealedLength) {
          scrambled += originalText[i];
        } else if (originalText[i] === ' ') {
          scrambled += ' ';
        } else {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      element.textContent = scrambled;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = originalText;
      }
    }

    requestAnimationFrame(step);
  }

  // 2. Spotlight Card Mouse Tracking
  function initSpotlightTracking() {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // 3. Card 3D Tilt Effect
  function initTiltEffect() {
    const tiltCards = document.querySelectorAll('[data-tilt]');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  // 4. GSAP ScrollTrigger Sequence
  function initGsap() {
    if (typeof gsap === 'undefined') return;

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero entrance
    gsap.from('.hero-content > *', {
      y: 35,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out'
    });

    gsap.from('.hero-visual-card', {
      scale: 0.85,
      opacity: 0,
      duration: 1.1,
      ease: 'back.out(1.4)',
      delay: 0.2
    });

    // Reveal section headers
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: 'top 85%'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      });

      // Metric Counter Animation
      gsap.utils.toArray('.metric-card').forEach(card => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%'
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      });

      // Project Cards Stagger
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%'
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Skill Bars Fill on Scroll
      ScrollTrigger.create({
        trigger: '#skills',
        start: 'top 75%',
        onEnter: () => {
          document.querySelectorAll('.skill-bar-fill').forEach(bar => {
            const targetWidth = bar.getAttribute('data-width') || '85%';
            bar.style.width = targetWidth;
          });
        }
      });
    }
  }

  // Initialize all interaction handlers
  window.initPortfolioAnimations = function () {
    initSpotlightTracking();
    initTiltEffect();
    initGsap();

    // Trigger Decrypt text on candidate's name
    const heroNameEl = document.querySelector('.hero-name-decrypt');
    if (heroNameEl) {
      const originalText = heroNameEl.getAttribute('data-text') || 'VƯƠNG TẤN TÀI';
      setTimeout(() => {
        runDecryptedText(heroNameEl, originalText, 1400);
      }, 300);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initPortfolioAnimations);
  } else {
    window.initPortfolioAnimations();
  }
})();
