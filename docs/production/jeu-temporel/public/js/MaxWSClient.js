
// ÉTABLIR UNE CONNEXION WEBSOCKET
let ws = new WebSocket("ws://localhost:7474");

// AFFICHER UN MESSAGE LORS DE LA CONNEXION
ws.onopen = function (event) {
	console.log("Connexion is open!");
};

// FERMER LA CONNEXION
window.onbeforeunload = function(){
  ws.close();
};


// WebSocket Début

let btn1 = document.querySelector('#bouton01');
let btn2 = document.querySelector('#bouton02');
let btn3 = document.querySelector('#bouton03');
let btn4 = document.querySelector('#bouton04');


// RÉCEPTION DES MESSAGES
ws.onmessage = function (event) {
	// DIVER LE MESSAGE ASCII REÇU DANS LE TABLEAU messageArray
	// SELON LES ESPACES (' ') ENTRE LES MOTS
	let messageArray = event.data.split(' ');
	
	// messageArray[0] -> LE PREMIER MOT ASCII
	// messageArray[1] -> LE DEUXIÈME MOT ASCII

	if ( messageArray[0] == "/btn1" ) { // SI LE PREMIER MOT EST ÉGAL À "/pot" 
		btn1.click();
	} else if ( messageArray[0] == "/btn2" ) { // SI LE PREMIER MOT EST ÉGAL À "/bouton" 
	    btn2.click();
	} else if (messageArray[0] == "/btn3"){
		btn3.click();
	} else if (messageArray[0] == "/btn4"){
		btn4.click();
	}
};

let logo = document.getElementById("logo");
logo.onmousedown = () =>  {
	console.log("Logo was clicked!");
	ws.send("/logo 1");
}
logo.onmouseup= () =>  {
	ws.send("/logo 0");
}
