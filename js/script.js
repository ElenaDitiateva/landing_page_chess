const slider = document.querySelector(".team-container");
const slides = document.querySelectorAll(".team-item");
const arrowLeft = document.getElementById("arrow-left-top");
const arrowRight = document.getElementById("arrow-right-top");
const arrowLeftB = document.getElementById("arrow-left-bottom");
const arrowRightB = document.getElementById("arrow-right-bottom");
const currentTop = document.getElementById("pagination-current-top");
const currentBottom = document.getElementById("pagination-current-bottom");

let currentSlideIndex = 0;
currentSlideIndex == 0 ? currentTop.innerHTML = '3' : currentTop.innerHTML = '6';
currentBottom.innerHTML = currentSlideIndex + 1;
const sliderWidth = slider.clientWidth;
const mediaQuerySm = window.matchMedia('(max-width: 599px)');
const mediaQueryMd = window.matchMedia('(max-width: 1090px)');

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}

function changeSlide(slideIndex) {
    currentSlideIndex = slideIndex;
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
    currentSlideIndex == 0 ? currentTop.innerHTML = '3' : currentTop.innerHTML = '6';
    currentBottom.innerHTML = currentSlideIndex + 1;
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
    currentSlideIndex == 0 ? currentTop.innerHTML = '3' : currentTop.innerHTML = '6';
    currentBottom.innerHTML = currentSlideIndex + 1;
}

arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);
arrowLeftB.addEventListener("click", previousSlide);
arrowRightB.addEventListener("click", nextSlide);
