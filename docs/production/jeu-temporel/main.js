import './style.scss'

//Éléments pour le countdown timer

/*
const startingMinutes = 15;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}

*/

// Questions pour le questionnaire
const myQuestions = [
  {
    question: "À quel point êtes vous préoccupez par l'environnement?",
    answers: {
      a: "Très peu",
      b: "Pas beaucoup",
      c: "Moyennement",
      d: "Vraiment trop"
    },
    correctAnswer: "d"
  },
  {
    question: "Quelle a été, selon vous, l'année la plus chaude de l'histoire?",
    answers: {
      a: "1946",
      b: "1994",
      c: "2005",
      d: "2018"
    },
    correctAnswer: "d"
  },
  {
    question: "La température moyenne a augmenté de combien depuis l'ère industrielle?",
    answers: {
      a: "1 degré",
      b: "5 degré",
      c: "0.24 degré",
      d: "N'a pas augmenté"
    },
    correctAnswer: "a"
  },
  {
    question: "Dans combien d'année la guerre du pétrole devrait commencer?",
    answers: {
      a: "10 ans",
      b: "50 ans",
      c: "75 ans",
      d: "100 ans"
    },
    correctAnswer: "b"
  },
  {
    question: "Entre 1990 et 2016, quelle est la part des catastrophes liées aux changements climatiques dans la totalité des catastrophes naturelles dans le monde?",
    answers: {
      a: "20%",
      b: "50%",
      c: "70%",
      d: "100%"
    },
    correctAnswer: "c"
  },
  {
    question: "Selon les Québécois, quelle est la raison principale qui les pousse à gaspiller des aliments?",
    answers: {
      a: "Le respect des dates de péremption",
      b: "Le trop grand format de certains aliments vendus en épicerie",
      c: "Ils manquent de temps pour cuisiner",
      d: "Ils manquent de connaissances pour mieux conserver les aliments"
    },
    correctAnswer: "a"
  },
  {
    question: "Quelles activités sont les plus gros contributeurs de gaz à effet de serre ?",
    answers: {
      a: "La déforestation",
      b: "La production d'électricité",
      c: "Hollywood",
      d: "L'agriculture"
    },
    correctAnswer: "b"
  },
  {
    question: "Alors que des millions de personnes ont faim sur la planète, quelle proportion de nourriture se retrouve chaque année dans les poubelles?",
    answers: {
      a: "Un 10e de la production mondiale.",
      b: "Un quart de la production mondiale.",
      c: "Un tiers de la production mondiale.",
      d: "50% de la production mondiale."
    },
    correctAnswer: "c"
  },
  {
    question: "De quel grosseur est l'île de déchet qui flotte dans l'océan Pacifique ?",
    answers: {
      a: "1000 k㎡",
      b: "10 000 k㎡",
      c: "1.6 millions k㎡",
      d: "5 millions k㎡"
    },
    correctAnswer: "c"
  },
  {
    question: "Avec les changements climatiques, quelles catastrophes allons nous appercevoir régulièrement au Québec à partir de 2035?",
    answers: {
      a: "Des tremblements de terre à Tremblant.",
      b: "Des Ouragans aux Iles-de-la-Madeleine.",
      c: "Un volcan sur le Mont-Royale.",
      d: "Un désert à Venise-en-Québec"
    },
    correctAnswer: "b"
  },
  {
    question: "Combien de gens mouront des changements climatiques?",
    answers: {
      a: "36 millions, la population du Canada en 2021.",
      b: "81 millions, la population de l'Allemagne en 2021.",
      c: "365 millions, la population des États-Unis en 2021.",
      d: "1,38 milliard, 1/7e de la population mondiale."
    },
    correctAnswer: "b"
  },
  {
    question: "Quel serait le moyen le plus efficace de réduire les gaz à effet de serre?",
    answers: {
      a: "Détruire l'industrie pétrolière.",
      b: "Adopter le véganisme de force.",
      c: "Faire une révolution anti-capitalisme et bannir les multinationales et les riches.",
      d: "Toute ces réponses."
    },
    correctAnswer: ["a","b","c","d"]
  },
  {
    question: "À quel point serais-tu prêt à être déplacer de force lorsqu'il y aura des inondations chaques années ?",
    answers: {
      a: "Très peu",
      b: "C'est pas mon problème",
      c: "Je vais juste mettre des sacs de sable",
      d: "Je suis prêt à faire le nécessaire."
    },
    correctAnswer: "d"
  },
  {
    question: "Serez-vous prêt à faire la guerre pour de l'eau potable?",
    answers: {
      a: "Aux armes!",
      b: "Non",
      c: "Je vais boire de la boisson gazeuse.",
      d: "Où est le vaisseau pour mars..?"
    },
    correctAnswer: "a"
  },
  {
    question: "Quel est le pays qu'on devrait se débarasser pour vaincre la crise du climat",
    answers: {
      a: "Ce n'est pas la solution!",
      b: "Chine.",
      c: "Inde.",
      d: "On commence une guerre nucléaire et on rase les humains de la terre."
    },
    correctAnswer: ["b","c","d"]
  }
];