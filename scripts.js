// Mode Toggle Functionality
const modeSlider = document.getElementById('mode-slider');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

// Check for saved mode in local storage
const currentMode = localStorage.getItem('theme') || 'light';
if (currentMode === 'dark') {
    body.classList.add('dark-mode');
    modeSlider.value = 1;
    sunIcon.style.color = '#fff';
    moonIcon.style.color = '#fff';
} else {
    body.classList.remove('dark-mode');
    modeSlider.value = 0;
}

// Toggle mode on slider change
modeSlider.addEventListener('input', () => {
    if (modeSlider.value == 1) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        sunIcon.style.color = '#fff';
        moonIcon.style.color = '#fff';
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        sunIcon.style.color = '#333';
        moonIcon.style.color = '#333';
    }
});
