// Hamburger menu

var sidenav = document.querySelector(".side-navbar")

function showNavbar() {
  sidenav.style.left = "0"
  document.getElementById("overlay").style.display = "block";
  document.body.classList.add("no-scroll"); // Disable scrolling
}

function closeNavbar() {
    sidenav.style.left = "-65%"
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("no-scroll"); // Enable scrolling again
}