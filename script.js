let currentIndex = 0;
slides = document.querySelectorAll('.subdiv4 img');

function changeSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add('black-out');
    }

    setTimeout(function () {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active', 'black-out');
        }

        slides[currentIndex].classList.add('active');

        currentIndex = (currentIndex + 1) % slides.length;
    }, 2000);
}

setInterval(changeSlide, 6000);

changeSlide(); 

///

currentLanguage = 'en';

function changeLanguage(language) {
    fetch('languages.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById('text1').textContent = data[language].text1;
            document.getElementById('text2').textContent = data[language].text2;
            document.getElementById('text3').textContent = data[language].text3;
            document.getElementById('text4').textContent = data[language].text4;
            document.getElementById('text5').textContent = data[language].text5;
        })
        .catch(function (error) {
            console.error('Error loading language file:', error);
        });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ge' : 'en';
    changeLanguage(currentLanguage);
}

window.onload = function () {
    changeLanguage(currentLanguage);
};

///

function copyLink() {
    var url = window.location.href;
    navigator.clipboard.writeText(url)
        .then(function () {
            alert('Link copied to clipboard!');
        })
        .catch(function (err) {
            console.error('Error copying link: ', err);
        });
}

///
