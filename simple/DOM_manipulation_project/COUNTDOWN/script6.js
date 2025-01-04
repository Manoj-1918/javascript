// Get all the variables
let start = document.getElementById('start');
let clear = document.getElementById('clear');
let inputHr = document.getElementById('hrs');
let inputMin = document.getElementById('min');
let inputSec = document.getElementById('sec');
let setHr = document.getElementById('hours');
let setMin = document.getElementById('minutes');
let setSec = document.getElementById('seconds');
let inputContainer=document.querySelector('.container');
let outputContainer=document.querySelector('.display-container');
// Initialize variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

// Start button click event
start.addEventListener('click', function () {
    // Parse input values
    hours = parseInt(inputHr.value) || 0;
    minutes = parseInt(inputMin.value) || 0;
    seconds = parseInt(inputSec.value) || 0;

    // Update display immediately
    updateDisplay();

    // Start the countdown
    timer = window.setInterval(countdown, 1000);
    inputContainer.style.display='none';
    outputContainer.style.display='block';
    outputContainer.style.display='flex';

});

// Countdown function
function countdown() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        seconds = 59;
        minutes--;
    } else if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
    } else {
        console.log("Time's up!");
        clearInterval(timer); // Stop the timer
        return;
    }

    // Update the displayed time
    updateDisplay();
}

// Update display function
function updateDisplay() {
    setHr.innerText = hours.toString().padStart(2, '0');
    setMin.innerText = minutes.toString().padStart(2, '0');
    setSec.innerText = seconds.toString().padStart(2, '0');
}

// Clear button click event
clear.addEventListener('click', function () {
    clearInterval(timer); // Stop the timer
    hours = 0;
    minutes = 0;
    seconds = 0;

    // Reset inputs and display
    inputHr.value = '';
    inputMin.value = '';
    inputSec.value = '';
    updateDisplay();
    inputContainer.style.display='block';
    //inputContainer.style.display='flex';
    outputContainer.style.display='none';
});

