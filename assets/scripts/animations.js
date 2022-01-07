function detectMobile() {
  return (window.innerWidth <= 800 );
}

const anims = document.querySelectorAll('.animate');
const typeIns = document.querySelectorAll('.type-in');

// FADE IN
if (!detectMobile()) {
  const fadeInsOptions = {
    threshold: 1,
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    });
  }, fadeInsOptions);

  anims.forEach((anim) => {
    appearOnScroll.observe(anim);
  })

  // TYPE IN
  typeIns.forEach((typeIn) => {
    typeIn.innerHTML = typeIn.innerHTML.split('').map((char, index) => {
      const style = `animation-delay: ${index * 150}ms;`;
      return `<span aria-hidden style="${style}">${char}</span>`;
    });
    typeIn.innerHTML = typeIn.innerHTML.replaceAll(',','');
  });
} else {
  anims.forEach(anim => anim.classList.add('appear'));
}