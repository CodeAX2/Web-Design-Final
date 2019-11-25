var currentSlide = 0;
var numSlides = 0;

document.addEventListener("DOMContentLoaded",

    function (e) {
        setNumberOfSlides();
        populateDots();
        displaySlide(currentSlide);
    }
);

function displaySlide(slideIndex) {
    var allSlides = document.getElementsByClassName("slide");
    var allDots = document.getElementsByClassName("slideDot");
    numSlides = allSlides.length;

    for (var i = 0; i < numSlides; i++) {
        allSlides[i].style.display = "none";
        if (i == slideIndex){
            allDots[i].classList.add("activeSlideDot");
        } else {
            allDots[i].classList.remove("activeSlideDot");
        }
    };

    allSlides[slideIndex].style.display = "block";

}

function setNumberOfSlides(){
    var allSlides = document.getElementsByClassName("slide");
    numSlides = allSlides.length;
}

function incrimentSlide() {
    currentSlide++;
    if (currentSlide >= numSlides) currentSlide = 0;
    displaySlide(currentSlide);
}

function decrementSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = numSlides - 1;
    displaySlide(currentSlide);
}

function populateDots() {
    var dotsContainer = document.getElementsByClassName("slideDotsContainer")[0];
    for (var i = 0; i < numSlides; i++) {
        dotsContainer.innerHTML += '<div class="slideDot" onclick="displaySlide(' + i + ')"></div>';
    }
}