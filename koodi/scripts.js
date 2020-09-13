function toggleMenu() {
  let navbar = document.getElementById("navbar");

  if (navbar.style.height === "350px") {
    navbar.style.height = "0";
    //navbar.style.opacity = "0";
  } else {
    navbar.style.height = "350px";
    //navbar.style.opacity = "1";
  }

  let menuicon = document.getElementById("menubutton");

  if (menuicon.className === "closed") {
    menuicon.className = "open";
  } else {
    menuicon.className = "closed";
  }
}
