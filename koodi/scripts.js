function toggleMenu() {
  let navbar = document.getElementById("navbar");
  console.log(navbar.style);

  /*
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
  */

  if (navbar.style.height === "auto") {
    navbar.style.height = "0";
  } else {
    navbar.style.height = "auto";
  }
}
