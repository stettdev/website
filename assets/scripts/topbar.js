const homePage = document.querySelector('#home');
const topbar = document.querySelector('#topbar');

const websitePages = document.querySelectorAll('.page');
const topbarLinks = topbar.querySelectorAll('a');

function detectMobile() {
  return (window.innerWidth <= 800 );
}

if (!detectMobile()) {
  const topbarOptions = {
    threshold: 0.125,
  };

  const fromNextPage = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) topbar.classList.add('visible');
      else topbar.classList.remove('visible');
    });
  }, topbarOptions);

  fromNextPage.observe(homePage);

  const indicate = new IntersectionObserver((entries) => {
    entries.map((e) => {
      if (!e.isIntersecting) return;
      topbarLinks.forEach((link) => link.classList.remove('current'));
      topbar.querySelector(`a[href="#${e.target.id}"]`).classList.add('current');
    });
  }, topbarOptions);

  websitePages.forEach((page) => {
    indicate.observe(page);
  });

} else {
  topbar.classList.add('visible');
}