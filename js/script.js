const slider = document.querySelector(".team-container");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".team-group");
const current = document.querySelector('.pagination-current');

let currentSlideIndex = 0;
currentSlideIndex == 0 ? current.innerHTML = '3' : current.innerHTML = '6';
const sliderWidth = slider.clientWidth;

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
    currentSlideIndex == 0 ? current.innerHTML = '3' : current.innerHTML = '6';
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
    currentSlideIndex == 0 ? current.innerHTML = '3' : current.innerHTML = '6';
}

arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);
