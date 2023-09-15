const countdownElement = document.getElementById('countdown');
let seconds = 20;

function updateCountdown() {
    countdownElement.textContent = seconds;
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        document.body.style.backgroundColor = '#000'; // Reset background color
        return;
    }

    // Adjust background brightness
    const brightness = (100 - seconds * 5) + '%';
    document.body.style.backgroundColor = `hsl(0, 0%, ${brightness})`;
}

updateCountdown(); // Initialize the countdown
const timer = setInterval(updateCountdown, 1000);
