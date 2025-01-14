// Toggle hamburger menu
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x"); // Mengganti ikon menu menjadi ikon 'x' saat aktif
});

// Close menu when a link is clicked (optional, untuk pengalaman mobile yang lebih baik)
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});
