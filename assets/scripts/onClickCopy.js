const onClickCopy = () => {
  navigator.clipboard.writeText('contact@stett.dev');
  toast();
}

const toast = () => {
  var x = document.getElementById("toast");
  x.classList.add("appear");
  setTimeout(function(){ x.classList.remove("appear"); }, 3000);
}