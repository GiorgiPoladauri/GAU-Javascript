let currentIndex = 0;
const slides = document.querySelectorAll('.subdiv4 img');

function changeSlide() {
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slides[currentIndex].style.display = 'block';

    currentIndex = currentIndex + 1;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
}

setInterval(changeSlide, 3000);

changeSlide();
