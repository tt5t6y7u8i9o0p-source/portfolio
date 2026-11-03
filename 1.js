function toggleMenu(){

const menu = document.getElementById("navLinks");

menu.classList.toggle("active");

}

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

document.getElementById("navLinks")
.classList.remove("active");

});

});