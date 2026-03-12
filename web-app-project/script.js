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