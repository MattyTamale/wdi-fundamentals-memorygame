var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = [0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = [1];
cardsInPlay.push(cardTwo);
console.log("User flipped king");


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] = cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}