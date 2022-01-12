document.querySelectorAll('.onClickCopy').forEach((element) => {
  element.addEventListener('click', onClickCopy, false);
});

const onClickCopy = () => {
  navigator.clipboard.writeText('contact@stett.dev');
  toast();
}

const toast = () => {
  var x = document.getElementById("toast");
  x.classList.add("appear");
  setTimeout(() => { x.classList.remove("appear"); }, 3000);
}