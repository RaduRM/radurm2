const audioSequence = [];
let userSequence = [];
let round = 1;
let isPlaying = false;

function startGame() {
    if (!isPlaying) {
        isPlaying = true;
        document.getElementById("start-button").disabled = true;
        document.getElementById("message").textContent = "Ascultă secvența și repetă:";
        userSequence = [];
        playRound();
    }
}

function playRound() {
    addToSequence();
    showSequence();
}

function addToSequence() {
    const audioIndex = Math.floor(Math.random() * 4);
    audioSequence.push(audioIndex);
}

function showSequence() {
    let i = 0;
    const interval = setInterval(() => {
        playAudio(audioSequence[i]);
        i++;
        if (i >= audioSequence.length) {
            clearInterval(interval);
            setTimeout(() => {
                getUserInput();
            }, 500);
        }
    }, 1000);
}

function playAudio(index) {
    const audio = new Audio(`audio/${index}.mp3`);
    audio.play();
}

function getUserInput() {
    document.getElementById("message").textContent = "Repetă secvența:";
    const buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        const button = document.createElement("button");
        button.textContent = i + 1;
        button.onclick = () => checkUserInput(i);
        buttonsContainer.appendChild(button);
    }
}

function checkUserInput(index) {
    playAudio(index);
    userSequence.push(index);

    if (userSequence.length === audioSequence.length) {
        if (compareArrays(audioSequence, userSequence)) {
            round++;
            setTimeout(() => {
                playRound();
            }, 1000);
        } else {
            endGame();
        }
    }
}

function compareArrays(arr1, arr2) {
    return arr1.every((value, index) => value === arr2[index]);
}

function endGame() {
    isPlaying = false;
    document.getElementById("start-button").disabled = false;
    document.getElementById("message").textContent = `Ai greșit! Ai ajuns până la runda ${round}.`;
    audioSequence.length = 0;
    round = 1;
}
