console.log('GREETINGS UNIVERSE!');
let offset = 0; //смещение от левого края
let slideWidth = 355;
const a = document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + slideWidth;
    if (offset > (slideWidth * 4)) {
        offset = 0;
    }
    a.style.left = -offset + 'px';
});








