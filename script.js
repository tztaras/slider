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



document.querySelector('.slider-back').addEventListener('click', function () {
    offset = offset - slideWidth;
    if (offset < 0){
        offset = slideWidth*4;
    }
    a.style.left = -offset + 'px';
});


// Here's what happens:

// offset = offset - slideWidth;: This line subtracts the slide width from the current offset, effectively moving the slider to the left.

// if (offset < 0) { offset = slideWidth * 4; }: This condition checks if the offset has become negative, which means you've moved past the first position. If this is the case, it sets the offset to the last position (slideWidth * 4). This is the wrap-around behavior you want.

// a.style.left = -offset + 'px';: This line updates the left CSS property of the slider element (a), effectively moving the slider to the new offset position.

// So, with slideWidth = 355px, when you click the back button and the offset becomes negative (indicating you've gone past the first position), it sets the offset to 1420 (the last position), creating a loop from the first position to the last when you click the back button.





