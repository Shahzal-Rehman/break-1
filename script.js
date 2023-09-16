let timer;
let isRunning = false;
let seconds = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        const userInput = prompt('Enter timer duration in seconds:');
        if (userInput !== null && !isNaN(userInput) && userInput > 0) {
            seconds = parseInt(userInput);
            timer = setInterval(function () {
                seconds--;
                document.getElementById('countdown').textContent = formatTime(seconds);
                if (seconds <= 0) {
                    clearInterval(timer);
                    isRunning = false;
                    document.getElementById('startButton').textContent = 'Start';
                }
            }, 1000);
            isRunning = true;
            document.getElementById('startButton').textContent = 'Pause';
        } else {
            alert('Invalid input. Please enter a valid number greater than 0.');
        }
    } else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('startButton').textContent = 'Resume';
    }
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    document.getElementById('countdown').textContent = '00:00:00';
    document.getElementById('startButton').textContent = 'Start';
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
