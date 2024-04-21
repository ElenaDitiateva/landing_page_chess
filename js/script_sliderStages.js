const sliderStages = document.querySelector(".stages-grid");
const trackStage = document.querySelector('.slider-track-stages');
const arrowLeftStages = document.getElementById("arrow-left-stages");
const arrowRightStages = document.getElementById("arrow-right-stages");
const slidesStages = document.querySelectorAll(".stages-text");
const bottomStages = document.getElementById("pagination-stages");

let currentSlideIndexStages = 0;
const paginationCircles = [];
const sliderStagesWidth = sliderStages.clientWidth;

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottomStages.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slidesStages.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndexStages].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndexStages].classList.remove("active");
}

function showSlide() {
    trackStage.style.transform = `translateX(-${currentSlideIndexStages * sliderStagesWidth}px)`;
}

function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndexStages = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndexStages + 1;
    if(newSlideIndex > slidesStages.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
    checkBtnsStages();
}

function previousSlide() {
    let newSlideIndex = currentSlideIndexStages - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slidesStages.length - 1;
    }
    changeSlide(newSlideIndex);
    checkBtnsStages();
}

function checkBtnsStages() {
    arrowLeftStages.disabled = currentSlideIndexStages === 0;
    arrowRightStages.disabled = currentSlideIndexStages === (slidesStages.length - 1);
};

checkBtnsStages();
addPagination();
arrowLeftStages.addEventListener("click", previousSlide);
arrowRightStages.addEventListener("click", nextSlide);
