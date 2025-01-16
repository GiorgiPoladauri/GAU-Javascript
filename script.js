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

// Function to fetch and apply the selected language
function changeLanguage(language) {
    fetch('languages.json')  // Load the JSON file
        .then(response => response.json())  // Parse the JSON file
        .then(data => {
            // Update the HTML elements based on the selected language
            document.getElementById('text1').textContent = data[language].text1;
            document.getElementById('text2').textContent = data[language].text2;
            document.getElementById('text3').textContent = data[language].text3;
            document.getElementById('text4').textContent = data[language].text4;
            document.getElementById('text5').textContent = data[language].text5;
        })
        .catch(error => console.error('Error loading language file:', error));
}

// Initial load - default language
window.onload = function() {
    changeLanguage('en');  // Set default language to English
};
