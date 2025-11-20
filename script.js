// Create audio objects for each sound
const sound1 = new Audio('sounds/sound1.mp3');
const sound2 = new Audio('sounds/sound2.mp3');
const sound3 = new Audio('sounds/sound3.mp3');

// Function to play sound
function playSound(sound) {
    sound.currentTime = 0; // Reset sound to start
    sound.play();
}

// Event listeners for buttons
document.getElementById('sound1').addEventListener('click', () => playSound(sound1));
document.getElementById('sound2').addEventListener('click', () => playSound(sound2));
document.getElementById('sound3').addEventListener('click', () => playSound(sound3));

// Stop button functionality
document.querySelector('.stop').addEventListener('click', () => {
    sound1.pause();
    sound2.pause();
    sound3.pause();
});