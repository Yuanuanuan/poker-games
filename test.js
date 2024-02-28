function createDeck() {
  const deck = [];

  for (let i = 1; i <= 52; i++) {
    deck.push(i);
  }

  return deck;
}

function shuffleDeck(deck) {
  let currentIndex = deck.length,
    randomIndex,
    tempValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    tempValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = tempValue;
  }

  return deck;
}

let poker = createDeck();

console.log("before", poker);

poker = shuffleDeck(poker);

console.log("after", poker);
