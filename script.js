var arrClubs = [];
var arrDiamonds = [];
var arrHearts = [];
var arrSpades = [];
var arrDeck = [];
var arrJoker = [];

var arrAllCards = [];

var firstEmptyCard = "";
var idNb = 0;
var id = "";
var nbImg = 0;
var card = {};


// Clubs in Array
function mvClubsInArr() {
	idNb++;
	id = "card" + idNb;
  card.id = id;
  card.img = "cards/clubs01.png";
  arrClubs.push(card);
  console.log(arrClubs[0]);
}

mvClubsInArr();

































