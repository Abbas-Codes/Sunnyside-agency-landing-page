function burgerMenu() {
  var menu = document.getElementById("mobile-links");
  var btn = document.getElementById("small-nav");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    btn.style.top = "0px";
  } else {
    menu.style.display = "block";
    btn.style.top = "-28px";
  }
}	
