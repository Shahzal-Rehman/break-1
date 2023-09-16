const countdownElement = document.getElementById('countdown');
const welcomeMessage = document.getElementById('welcome-message');
const starsContainer = document.getElementById('stars-container');
let seconds = 0; // Initialize to 0

// Function to prompt the user for the timer limit
function setTimerLimit() {
    const limit = prompt('Set the timer limit (in seconds):');
    if (limit !== null && !isNaN(limit)) {
        seconds = parseInt(limit);
        startTimer();
    } else {
        alert('Invalid input. Please enter a valid number for the timer limit.');
    }
}

// Function to start the timer
function startTimer() {
    if (seconds <= 0) {
        alert('Timer limit must be greater than 0.');
        setTimerLimit();
        return;
    }

    const timer = setInterval(function() {
        countdownElement.textContent = formatTime(seconds);
        seconds--;

        if (seconds < 0) {
            clearInterval(timer);
            document.body.style.backgroundColor = '#000';
            starsContainer.style.display = 'none'; // Hide stars container
            welcomeMessage.style.display = 'block'; // Show the "Welcome back" message
            sparkleStars(); // Add sparkling effect
            // Enable user input after the break (e.g., after 1000 seconds)
            setTimeout(function() {
                enableInput();
                welcomeMessage.style.display = 'none'; // Hide "Welcome back" message
                starsContainer.style.display = 'block'; // Show stars container
                resetStars(); // Reset sparkling effect
            }, 1000 * seconds);
            return;
        }

        const brightness = (100 - seconds * 5)
