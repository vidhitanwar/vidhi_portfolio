

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document
        .querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll(
    '.section, .project-card, .skill-card, .project-showcase'
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal', 'active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Project spotlight observer
  const projectShowcases = document.querySelectorAll('.project-showcase');

  const projectObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('active', entry.isIntersecting);
      });
    },
    { threshold: 0.5 }
  );

  projectShowcases.forEach(p => projectObserver.observe(p));

  // Context-aware hero
  const hero = document.querySelector('.hero h1');
  if (hero) {
    const hour = new Date().getHours();
    if (hour >= 22 || hour <= 5) {
      hero.innerHTML =
        "Still building things that won’t break —<br/>even at 3 AM.";
    }
  }

  // Scroll progress
  window.addEventListener('scroll', () => {
    const progress = document.getElementById('scroll-progress');
    if (!progress) return;

    const scrolled =
      (window.scrollY /
        (document.body.scrollHeight - window.innerHeight)) * 100;

    progress.style.width = scrolled + "%";
  });

  // 🎯 Easter eggs (FINAL)
  console.log(
    "%cHey 👋 If you're reading this, we'll probably get along.",
    "color:#fff; font-size:14px;"
  );

  console.log(
    "%cSite detail: Projects use scroll-snap + intersection observers for focus control.",
    "color:#9ca3af; font-size:12px;"
  );

});




