const menu = document.getElementById("menu-btn");
const links = document.querySelector(".nav-links");
const icon = document.querySelector(".menu-bar i")

menu.onclick = () => {
    links.classList.toggle("active");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x")
};