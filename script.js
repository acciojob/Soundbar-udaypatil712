//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

let container = document.getElementById("buttons");

// Create buttons for each sound
sounds.forEach(sound => {
    let btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopAll();
        let audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
        currentAudio = audio;
    });

    container.appendChild(btn);
});

// Create stop button
let stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

let currentAudio = null;

stopBtn.addEventListener("click", stopAll);
container.appendChild(stopBtn);

// stop function
function stopAll() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}
