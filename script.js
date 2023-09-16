let timer;
let isRunning = false;
let seconds = 1200; // 20 minutes in seconds (20 minutes * 60 seconds)

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(function () {
            seconds--;
            document.getElementById('countdown').textContent = formatTime(seconds);
            if (seconds <= 0) {
                clearInterval(timer);
                isRunning = false;
                document.getElementById('countdown').textContent = '00:00:00';
            }
        }, 1000);
        isRunning = true;
    }
}

// Start the timer automatically when the page loads
startTimer();
