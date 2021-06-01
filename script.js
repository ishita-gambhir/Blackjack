let deck = [];
let cards = [];
let sum = 0;
let resultEl = document.querySelector("#result-el");
let drawCardBtn = document.querySelector('#draw-card-btn');
// let imagesEl = document.querySelector('#images-el');

// let imageEl = document.createElement("img");
// let num=2;
// imageEl.src = `img${num}.png`
// document.imagesEl.appendChild(imageEl);
// console.log(imageEl.src);

function startGame() {
    // populate deck
    for (let i = 1; i <= 52; i++) {
        deck.push(i);
    }
    cards = [generateRandomCard(), generateRandomCard()];
    sum = findTrueVal(cards[0]) + findTrueVal(cards[1]);
    resultEl.textContent="";
    drawCardBtn.style.display = "inline";
    resultEl.textContent = "Keep Going!"
    display();
}

function drawCard() {
    let newCard = generateRandomCard();
    sum += findTrueVal(newCard);
    cards.push(newCard);
    display();
}

function displayCards() {
    let cardsEl = document.querySelector("#cards-el");
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        let card = (cards[i]%13) + 1;
        cardsEl.textContent += card + " ";
    }
}

function displaySum() {
    let sumEl = document.querySelector("#sum-el");
    sumEl.textContent = "Sum: " + sum;
}

function displayResult() {
    let resultEl = document.querySelector("#result-el");
    if (sum == 21) {
        resultEl.textContent = "Wohoo you won the game!";
        drawCardBtn.style.display = "none";
    }   else if (sum > 21) {
        resultEl.textContent = "So sad :)";
        drawCardBtn.style.display = "none";
    }
}

function display() {
    displayCards();
    displaySum();
    displayResult();
}

function generateRandomCard() {
    let index = Math.floor(Math.random() * deck.length);
    deck.splice(index, 1);
    return index;
}

function findTrueVal(card) {
    card = (card%13) + 1;
    if (card == 1) {
        return 11;
    } else if (card > 10) {
        return 10;
    } else {
        return card;
    }
}