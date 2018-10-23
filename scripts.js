const keyboard = document.getElementById("#qwerty");
const phrase = document.getElementById("#phrase");
const startButton = document.querySelector(".btn_reset");

let missed = 0;

const phrases = [
    "Strive for greatness",
    "Just do it",
    "I am loving it",
    "Have courage",
    "I will win"
];



startButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

function getRandomPhraseAsArray(arr){
    const randomPhrase = phrases[(Math.random() * (arr.length))];
    return[randomPhrase]; 
}
