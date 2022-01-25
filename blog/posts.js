const xhttp = new XMLHttpRequest();

xhttp.onload = function() {
  document.getElementById("posts").innerHTML =
  this.responseText;
};

xhttp.open("GET", "posts.txt");
xhttp.send()
