// Typing effect for hero section
const heroText = "Hi, this is Yashvi Shivhare";
let index = 0;
const speed = 100; // typing speed in milliseconds

function typeEffect() {
    if (index < heroText.length) {
        document.querySelector('.hero-content h1').innerHTML += heroText.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);

// Custom cursor functionality
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('click', () => {
    cursor.classList.add('expand');
    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500);
});
