function toggleMenu() {

    document.getElementById("menu").classList.toggle("active");

}
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

images.forEach(img => {

    img.addEventListener("click", function () {

        modal.style.display = "flex";
        modalImg.src = this.src;

    });

});

modal.addEventListener("click", function () {

    modal.style.display = "none";

});
document.getElementById("contactForm")
.addEventListener("submit", function(e) {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === "") {

        alert("Please fill all fields");
        e.preventDefault();

    }

});
document.addEventListener("click", function(e){

const menu = document.getElementById("menu");
const button = document.querySelector(".menu-btn");

if(
!menu.contains(e.target) &&
!button.contains(e.target)
){

menu.classList.remove("active");

}

});