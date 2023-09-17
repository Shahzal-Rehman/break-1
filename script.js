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
    let userDuration = prompt("Enter the duration in minutes (e.g., 20):");

    // Validate and set the duration
    if (userDuration && !isNaN(userDuration) && userDuration > 0) {
        userDuration = parseInt(userDuration);
        startTimer(userDuration * 60); // Start the timer with
