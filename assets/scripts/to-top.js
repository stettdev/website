const button = document.getElementById("to-top");

window.onscroll = () => buttonDisplayCheck();

const buttonDisplayCheck = () => {
  if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
};

const goToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};