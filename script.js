// JavaScript for the "Pro" badge
const proBadge = document.querySelector('.pro-badge');

// Function to show the "Pro" badge
function showProBadge() {
    proBadge.style.display = 'block';
}

// Function to hide the "Pro" badge
function hideProBadge() {
    proBadge.style.display = 'none';
}

// Add a call to showProBadge() to display the badge initially
showProBadge();

// Rest of your existing JavaScript code for the timer
const countdownElement = document.getElementById('countdown');
const welcomeMessage = document.getElementById('welcomeMessage');
let seconds = 20 * 60; // 20 minutes
let timer;

function updateCountdown() {
    countdownElement.textContent = formatTime(seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        document.body.style.backgroundColor = '#000';
        // Show the welcome message when the timer reaches 0
        welcomeMessage.style.display = 'block';
        // Hide the "Pro" badge
        hideProBadge();
        return; // Leave this return statement here
    }

    const brightness = (100 - (seconds / 20) * 5) + '%';
    document.body.style.backgroundColor = `hsl(0, 0%, ${brightness})`;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

timer = setInterval(updateCountdown, 1000); // Update countdown every second
