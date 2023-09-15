const countdownElement = document.getElementById('countdown');
const welcomeMessage = document.getElementById('welcome-message');
let seconds = 20;

function disableInput() {
    // Disable user input by adding a transparent div covering the entire page
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'transparent';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);
}

function enableInput() {
    // Remove the transparent overlay to enable user input
    const overlay = document.querySelector('div');
    if (overlay) {
        document.body.removeChild(overlay);
    }
}

function updateCountdown() {
    countdownElement.textContent = seconds;
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        document.body.style.backgroundColor = '#000';
        // Show the welcome message when the timer reaches 0
        welcomeMessage.style.display = 'block';
        // Disable user input during the break
        disableInput();
        // Enable user input after the break (e.g., after 20 seconds)
        setTimeout(enableInput, 20000); // 20 seconds
        return;
    }

    const brightness = (100 - seconds * 5) + '%';
    document.body.style.backgroundColor = `hsl(0, 0%, ${brightness})`;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
