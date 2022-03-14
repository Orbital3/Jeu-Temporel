const h = function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && c(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function c(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = i(e);
    fetch(e.href, o);
  }
};
h();
const m = document.querySelector("#question"),
  d = document.querySelectorAll(".choice-text"),
  f = document.querySelector("#progressText");
let questionnaire = document.querySelector('.questionnaire');
let final = document.querySelector('.final');
let t = {},
  a = !0,
  s = 0,
  l = 0,
  u = [],
  q = new Audio("medias/good.wav"),
  g = new Audio("medias/wrong.wav"),
  v = [
    {
      question:
        "\xC0 quel point \xEAtes vous pr\xE9occupez par l'environnement?",
      choice1: "Tr\xE8s peu",
      choice2: "Pas beaucoup",
      choice3: "Moyennement",
      choice4: "Vraiment trop",
      answer: 4,
    },
    {
      question:
        "Quelle a \xE9t\xE9, selon vous, l'ann\xE9e la plus chaude de l'histoire?",
      choice1: "1946",
      choice2: "1994",
      choice3: "2005",
      choice4: "2018",
      answer: 4,
    },
    {
      question:
        "La temp\xE9rature moyenne a augment\xE9 de combien depuis l'\xE8re industrielle?",
      choice1: "1 degr\xE9",
      choice2: "5 degr\xE9",
      choice3: "0.24 degr\xE9",
      choice4: "N'a pas augment\xE9",
      answer: 1,
    },
    {
      question:
        "Dans combien d'ann\xE9e la guerre du p\xE9trole devrait commencer?",
      choice1: "10 ans",
      choice2: "50 ans",
      choice3: "75 ans",
      choice4: "100 ans",
      answer: 2,
    },
    {
      question:
        "Entre 1990 et 2016, quelle est la part des catastrophes li\xE9es aux changements climatiques dans la totalit\xE9 des catastrophes naturelles dans le monde?",
      choice1: "20%",
      choice2: "50%",
      choice3: "70%",
      choice4: "100%",
      answer: 3,
    },
    {
      question:
        "Selon les Qu\xE9b\xE9cois, quelle est la raison principale qui les pousse \xE0 gaspiller des aliments?",
      choice1: "Le respect des dates de p\xE9remption",
      choice2:
        "Le trop grand format de certains aliments vendus en \xE9picerie",
      choice3: "Ils manquent de temps pour cuisiner",
      choice4:
        "Ils manquent de connaissances pour mieux conserver les aliments",
      answer: 1,
    },
    {
      question:
        "Quelles activit\xE9s sont les plus gros contributeurs de gaz \xE0 effet de serre ?",
      choice1: "La d\xE9forestation",
      choice2: "La production d'\xE9lectricit\xE9",
      choice3: "Hollywood",
      choice4: "L'agriculture",
      answer: 2,
    },
    {
      question:
        "Alors que des millions de personnes ont faim sur la plan\xE8te, quelle proportion de nourriture se retrouve chaque ann\xE9e dans les poubelles?",
      choice1: "Un 10e de la production mondiale.",
      choice2: "Un quart de la production mondiale.",
      choice3: "Un tiers de la production mondiale.",
      choice4: "50% de la production mondiale.",
      answer: 3,
    },
    {
      question:
        "De quel grosseur est l'\xEEle de d\xE9chet qui flotte dans l'oc\xE9an Pacifique ?",
      choice1: "1000 k\u33A1",
      choice2: "10 000 k\u33A1",
      choice3: "1.6 millions k\u33A1",
      choice4: "5 millions k\u33A1",
      answer: 3,
    },
    {
      question:
        "Avec les changements climatiques, quelles catastrophes allons nous appercevoir r\xE9guli\xE8rement au Qu\xE9bec \xE0 partir de 2035?",
      choice1: "Des tremblements de terre \xE0 Tremblant.",
      choice2: "Des Ouragans aux Iles-de-la-Madeleine.",
      choice3: "Un volcan sur le Mont-Royale.",
      choice4: "Un d\xE9sert \xE0 Venise-en-Qu\xE9bec",
      answer: 2,
    },
    {
      question: "Combien de gens mouront des changements climatiques?",
      choice1: "36 millions, la population du Canada en 2021.",
      choice2: "81 millions, la population de l'Allemagne en 2021.",
      choice3: "365 millions, la population des \xC9tats-Unis en 2021.",
      choice4: "1,38 milliard, 1/7e de la population mondiale.",
      answer: 2,
    },
    {
      question:
        "Quel serait le moyen le plus efficace de r\xE9duire les gaz \xE0 effet de serre?",
      choice1: "D\xE9truire l'industrie p\xE9troli\xE8re.",
      choice2: "Adopter le v\xE9ganisme de force.",
      choice3:
        "Faire une r\xE9volution anti-capitalisme et bannir les multinationales et les riches.",
      choice4: "Toute ces r\xE9ponses.",
      answer: 4,
    },
    {
      question:
        "\xC0 quel point serais-tu pr\xEAt \xE0 \xEAtre d\xE9placer de force lorsqu'il y aura des inondations chaques ann\xE9es ?",
      choice1: "Tr\xE8s peu",
      choice2: "C'est pas mon probl\xE8me",
      choice3: "Je vais juste mettre des sacs de sable",
      choice4: "Je suis pr\xEAt \xE0 faire le n\xE9cessaire.",
      answer: 4,
    },
    {
      question:
        "Serez-vous pr\xEAt \xE0 faire la guerre pour de l'eau potable?",
      choice1: "Aux armes!",
      choice2: "Non",
      choice3: "Je vais boire de la boisson gazeuse.",
      choice4: "O\xF9 est le vaisseau pour mars..?",
      answer: 1,
    },
    {
      question:
        "Quel est le pays qu'on devrait se d\xE9barasser pour vaincre la crise du climat",
      choice1: "Ce n'est pas la solution!",
      choice2: "Chine.",
      choice3: "Russie",
      choice4:
        "On commence une guerre nucl\xE9aire et on rase les humains de la terre.",
      answer: 4,
    },
  ],
  w = () => {
    (l = 0),(s = 0),(u = [...v]), p();
  },
  p = () => {
    l++, (f.innerText = `Question ${l}`);
    let n = 0;
    (t = u[n]),
      (m.innerText = t.question),
      d.forEach((s) => {
        const i = s.dataset.number;
        s.innerText = t["choice" + i];
      }),
      u.splice(n, 1),
      (a = !0),
      n++;
      if(l == 15) {
        questionnaire.style.visibility = 'hidden';
        final.style.visibility = 'visible';
        final.innerHTML = 'vous avez ' + l + ' réponse';
        }  
  };
  let e;
d.forEach((n) => {
  n.addEventListener("click", (s) => {
    if (!a) return;
    a = !1;
    const i = s.target;
    e = i.dataset.number == t.answer ? "correct" : "incorrect";
      i.classList.add(e),
      setTimeout(() => {
        i.classList.remove(e);
      }, 3e3);
  });
});
w();







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
  
	if ( messageArray[0] == "/btn/1" ) { // SI LE PREMIER MOT EST ÉGAL À "/pot" 
		btn1.click();
	} else if ( messageArray[0] == "/btn/2" ) { // SI LE PREMIER MOT EST ÉGAL À "/bouton" 
	  btn2.click();
	} else if (messageArray[0] == "/btn/3"){
		btn3.click();
	} else if (messageArray[0] == "/btn/4"){
		btn4.click();
	} else if (messageArray[0] == "/fini") {
    p();
  }

  if ( messageArray[0] == "/btn/1" || messageArray[0] == "/btn/2" || messageArray[0] == "/btn/3" || messageArray[0] == "/btn/4") {
    ws.send("/question " + l + " " + e);
  } 
};