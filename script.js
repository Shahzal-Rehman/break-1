const countdownElement = document.getElementById('countdown');
const welcomeMessage = document.getElementById('welcome-message');
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
            // Show the "Welcome back" message
            welcomeMessage.style.display = 'block';
            // Disable user input during the break
            disableInput();
            // Enable user input after the break (e.g., after 1000 seconds)
            setTimeout(function() {
                enableInput();
                welcomeMessage.style.display = 'none'; // Hide "Welcome back" message
            }, 1000 * seconds);
            return;
        }

        const brightness = (100 - seconds * 5) + '%';
        document.body.style.backgroundColor = `hsl(0, 0%, ${brightness})`;
    }, 1000);
}

// Format time as "HH:MM:SS"
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// Add leading zero to single-digit numbers
function padZero(number) {
    return (number < 10) ? `0${number}` : number;
}

// Prompt the user to set the timer limit when the page loads
setTimerLimit();
