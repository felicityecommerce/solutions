let index = 0;
const slides = document.querySelectorAll('.slider-images img');
const slideInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    document.querySelector('.slider-images').style.transform = `translateX(-${index * 100}%)`;
}, 3000);