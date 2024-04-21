let position = 0;
//let slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.team-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.team-item');
const itemsCount = items.length;
// ---

const mediaQuerySm = window.matchMedia('(max-width: 720px)');
const mediaQueryMd = window.matchMedia('(min-width: 1090px)');
let slidesToShow = mediaQueryMd.matches ? 3 : (mediaQuerySm.matches ? 1 : 2);
console.log(mediaQuerySm);
console.log(mediaQueryMd);

console.log('slidesToShow = ' + slidesToShow);

// ---
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToShow * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
