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

// Function to prompt the user for the duration
function getDuration() {
    const userDuration = prompt("Enter the duration in minutes (e.g., 20):");

    // Validate and set the duration
    if (userDuration && !isNaN(userDuration) && userDuration > 0) {
        seconds = userDuration * 60;
        countdownElement.textContent = formatTime(seconds);
    } else {
        // Use the default duration if invalid input
        seconds = 20 * 60; // 20 minutes
        countdownElement.textContent = formatTime(seconds);
    }
}

// Add a call to getDuration() to prompt the user
getDuration();

// Rest of your existing JavaScript code for the timer (unchanged)

// ... (existing timer code)
