function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showDucks(count) {
    const container = document.getElementById("duckContainer");
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = "duck_image.jpg";
        img.className = "duck-big";
        container.appendChild(img);
    }
}

function processGuess() {
    const min = 2;
    const max = 10;

    const duckNumber = getRandomNumber(min, max);
    const numberGuessed = parseInt(document.getElementById("playerGuess").value);

    let message = `You guessed ${numberGuessed} and there were ${duckNumber} ducks. `;

    if (isNaN(numberGuessed) || numberGuessed < 2 || numberGuessed > 10) {
        document.getElementById("result").textContent = "Please enter a whole number between 2 and 10.";
        return;
    }

    if (duckNumber === numberGuessed) {
        document.getElementById("result").textContent = message + "You win!";
    } else {
        document.getElementById("result").textContent = message + "Sorry, you didn't guess the right number.";
    }

    showDucks(duckNumber);
}

document.getElementById("submitGuess").addEventListener("click", processGuess);