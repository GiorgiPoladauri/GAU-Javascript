let currentIndex = 0;
const slides = document.querySelectorAll('.subdiv4 img');

function changeSlide() {
    slides.forEach(slide => {
        slide.classList.add('black-out');
    });

    setTimeout(() => {
        slides.forEach(slide => {
            slide.classList.remove('active', 'black-out');
        });

        slides[currentIndex].classList.add('active');
        
        currentIndex = (currentIndex + 1) % slides.length;
    }, 2000);
}

setInterval(changeSlide, 6000);

changeSlide(); 

///

let currentLanguage = 'en';

const changeLanguage = (language) => {
    fetch('languages.json')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('text1').textContent = data[language].text1;
            document.getElementById('text2').textContent = data[language].text2;
            document.getElementById('text3').textContent = data[language].text3;
            document.getElementById('text4').textContent = data[language].text4;
            document.getElementById('text5').textContent = data[language].text5;
        })
        .catch((error) => console.error('Error loading language file:', error));
};

const toggleLanguage = () => {
    currentLanguage = currentLanguage === 'en' ? 'ge' : 'en';
    changeLanguage(currentLanguage);
};

window.onload = () => {
    changeLanguage(currentLanguage);
};

///

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url) 
        .then(() => {
            alert('Link copied to clipboard!');
        })
        .catch(err => {
            console.error('Error copying link: ', err);
        });
}

///

