let position = 0;
//let slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.team-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.getElementById('arrow-left-top');
const btnNext = document.getElementById('arrow-right-top');
const btnPrevB = document.getElementById('arrow-left-bottom');
const btnNextB = document.getElementById('arrow-right-bottom');
const items = document.querySelectorAll('.team-item');
const currentCount = document.getElementById('pagination-current-top');
const currentCountB = document.getElementById('pagination-current-bottom');
const itemsCount = items.length;
// -----
const mediaQuerySm = window.matchMedia('(max-width: 720px)');
const mediaQueryMd = window.matchMedia('(min-width: 1090px)');
let slidesToShow = mediaQueryMd.matches ? 3 : (mediaQuerySm.matches ? 1 : 2);
console.log(mediaQuerySm);
console.log(mediaQueryMd);
console.log('slidesToShow = ' + slidesToShow);
// -----
currentCount.innerHTML = slidesToShow;
currentCountB.innerHTML = slidesToShow;

let countShowItems = slidesToShow;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToShow * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    countShowItems += slidesToShow;
    currentCount.innerHTML = countShowItems;

    setPosition();
    checkBtns();
});

btnNextB.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    countShowItems += slidesToShow;
    currentCountB.innerHTML = countShowItems;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
    countShowItems -= slidesToShow;
    currentCount.innerHTML = countShowItems;

    setPosition();
    checkBtns();
});

btnPrevB.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
    countShowItems -= slidesToShow;
    currentCountB.innerHTML = countShowItems;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;

    btnPrevB.disabled = position === 0;
    btnNextB.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
