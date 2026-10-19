const correctNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
function guess() {
    let feedbackElement = document.getElementById("feedbackElement");
    attempts--;
    while (attempts >= 0) {
        const inputValue = document.getElementById("inputValue").valueAsNumber;
    if (inputValue === correctNumber) {
        feedbackElement.innerHTML = "You guessed!";
        feedbackElement.style.color = "green";
        break;
    } else if (inputValue < correctNumber) {
        feedbackElement.innerHTML = "Too low! Try again" + ` ${attempts} attempts remaining`;
        feedbackElement.style.color = "red";
        break;
    } else {
        feedbackElement.innerHTML = "Too high! Try again"  + ` ${attempts} attempts remaining`;
        feedbackElement.style.color = "red";
        break;
    }
}
if (attempts === 0 && inputValue !== correctNumber) {
        feedbackElement.innerHTML = `You lose! Correct number was ${correctNumber}`
    feedbackElement.style.color = "red";
}

}