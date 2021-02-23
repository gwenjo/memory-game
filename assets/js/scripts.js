//Code taken from https://github.com/taniarascia/memory/blob/master/js/script.original.js

let delay = 1300;
let timerOn = true;

//Code taken from https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
    
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this; //first card
        return;
    }

    secondCard = this; //second card

    checkForMatch(); //calls function to see if the cards match
}

function checkForMatch() {
    if (firstCard.dataset.frame === secondCard.dataset.frame) {
    disableCards();
    return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
    lockBoard = true; //prevents other clicks 
    setTimeout( //used to keep the cards visiable for short time
    () => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

      resetBoard();
    }, 
    1300);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    var ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

// code taken from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

let time = 0;
let timer;

function beginTimer() {
    timer = setInterval(function () {
    time++;
    minutes = ("0" + Math.floor(time / 60)).slice(-2);
    seconds = ("0" + (time % 60)).slice(-2);
    document.querySelector(".timer").innerHTML = minutes + ":" + seconds;
    }, 1000);
}

let clicked = flipCard;
//Timer begins when opening the page
if (timerOn === true) {
    beginTimer();
    timerOn = true;
}
//Reset the Game
function reloadGame() {
  window.location.reload();
}

let startGame = function myFunction() {
  reloadGame();
};
