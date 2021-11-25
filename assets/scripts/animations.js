// FADE IN

const anims = document.querySelectorAll('.animate');

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

const typeIns = document.querySelectorAll('.type-in');

typeIns.forEach((typeIn) => {
  typeIn.innerHTML = typeIn.innerHTML.split('').map((char, index) => {
    const style = `animation-delay: ${index * 150}ms;`;
    return `<span aria-hidden style="${style}">${char}</span>`;
  });
  typeIn.innerHTML = typeIn.innerHTML.replaceAll(',','');
});
