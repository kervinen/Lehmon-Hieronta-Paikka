function toggleMenu() {
  let navbar = document.getElementById("navbar");

  if (navbar.style.height === "auto") {
    navbar.style.height = "0";
    //navbar.style.opacity = "0";
  } else {
    navbar.style.height = "auto";
    //navbar.style.opacity = "1";
  }

  let menuicon = document.getElementById("menubutton");

  if (menuicon.className === "closed") {
    menuicon.className = "open";
  } else {
    menuicon.className = "closed";
  }
}
