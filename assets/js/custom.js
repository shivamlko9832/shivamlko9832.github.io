/**
 * Site enhancements for shivamlko9832.github.io
 * - reading progress indicator on post pages
 * - reveal-on-scroll for cards and sections
 * - safe rel attributes on outbound links
 * All effects are no-ops when the visitor prefers reduced motion.
 */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  function readingProgress() {
    var article = document.querySelector('article[data-toc] .content');
    if (!article) return;

    var bar = document.createElement('div');
    bar.id = 'reading-progress';
    bar.setAttribute('aria-hidden', 'true');
    var fill = document.createElement('span');
    bar.appendChild(fill);
    document.body.appendChild(bar);

    var ticking = false;

    function update() {
      var rect = article.getBoundingClientRect();
      var total = rect.height - window.innerHeight;
      var scrolled = total > 0 ? (-rect.top / total) * 100 : 0;
      fill.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  function revealOnScroll() {
    var targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    targets.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i, 6) * 60 + 'ms';
      observer.observe(el);
    });
  }

  function hardenOutboundLinks() {
    var host = window.location.hostname;
    document
      .querySelectorAll('article .content a[href^="http"]')
      .forEach(function (link) {
        if (link.hostname && link.hostname !== host) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });
  }

  function init() {
    readingProgress();
    revealOnScroll();
    hardenOutboundLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
