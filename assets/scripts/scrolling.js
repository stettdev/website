function detectMobile() {
  return (window.innerWidth <= 800 );
}

// AUTO SCROLLING
if (!detectMobile()) {
  const pages = document.querySelectorAll('.page');

  const pagesOptions = {
    threshold: 0.01625,
  };

  const inViewOptions = {
    threshold: 1,
    rootMargin: '0px'
  };

  let newTarget = null;
  let currentlyInView = null;
  let scrolling;

  window.addEventListener('scroll', function () {
    window.clearTimeout( scrolling );
    scrolling = setTimeout(function() {
      if (currentlyInView != newTarget) {
        newTarget.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
      }
    }, 300);
  }, false);

  const scrollIn = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        if (entry.target === currentlyInView) currentlyInView = newTarget;
        return;
      }
      newTarget = entry.target;
    });
  }, pagesOptions);

  const inView = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      currentlyInView = entry.target;
    })
  }, inViewOptions);

  pages.forEach((page) => {
    scrollIn.observe(page);
    inView.observe(page);
  });
}