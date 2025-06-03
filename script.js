// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}

// Close Menu when clicking the close button
document.querySelector(".close-menu").addEventListener("click", () => {
    document.querySelector("nav").classList.remove("active");
});
