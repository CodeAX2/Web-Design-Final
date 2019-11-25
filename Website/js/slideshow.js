var currentSlide = 0;

document.addEventListener("DOMContentLoaded", function (e) { displayCurrentSlide(currentSlide) });

function displayCurrentSlide(slideIndex) {
    var allSlides = document.getElementsByClassName("slide");

    if (slideIndex < 0) {
        slideIndex = allSlides.length - 1;
    }

    if (slideIndex >= allSlides.length) {
        slideIndex = 0;
    }

    for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }

    allSlides[slideIndex].style.display = "block";

}

function incrimentSlide() {
    currentSlide++;
    displayCurrentSlide(currentSlide);
}

function decrementSlide(){
    currentSlide--;
    displayCurrentSlide(currentSlide);
}