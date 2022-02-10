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
const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let questionsIndex = 0;
let availableQuestions = []

let questions = [
  {
    question: "À quel point êtes vous préoccupez par l'environnement?",
      choice1: "Très peu",
      choice2: "Pas beaucoup",
      choice3: "Moyennement",
      choice4: "Vraiment trop",
    correctAnswer: 4,
  },
  {
    question: "Quelle a été, selon vous, l'année la plus chaude de l'histoire?",
      choice1: "1946",
      choice2: "1994",
      choice3: "2005",
      choice4: "2018",
    correctAnswer: 4,
  },
  {
    question: "La température moyenne a augmenté de combien depuis l'ère industrielle?",
      choice1: "1 degré",
      choice2: "5 degré",
      choice3: "0.24 degré",
      choice4: "N'a pas augmenté",
    correctAnswer: 1,
  },
  {
    question: "Dans combien d'année la guerre du pétrole devrait commencer?",
      choice1: "10 ans",
      choice2: "50 ans",
      choice3: "75 ans",
      choice4: "100 ans",
    correctAnswer: 2,
  },
  {
    question: "Entre 1990 et 2016, quelle est la part des catastrophes liées aux changements climatiques dans la totalité des catastrophes naturelles dans le monde?",
      choice1: "20%",
      choice2: "50%",
      choice3: "70%",
      choice4: "100%",
    correctAnswer: 3,
  },
  {
    question: "Selon les Québécois, quelle est la raison principale qui les pousse à gaspiller des aliments?",
      choice1: "Le respect des dates de péremption",
      choice2: "Le trop grand format de certains aliments vendus en épicerie",
      choice3: "Ils manquent de temps pour cuisiner",
      choice4: "Ils manquent de connaissances pour mieux conserver les aliments",
    correctAnswer: 1,
  },
  {
    question: "Quelles activités sont les plus gros contributeurs de gaz à effet de serre ?",
      choice1: "La déforestation",
      choice2: "La production d'électricité",
      choice3: "Hollywood",
      choice4: "L'agriculture",
    correctAnswer: 2,
  },
  {
    question: "Alors que des millions de personnes ont faim sur la planète, quelle proportion de nourriture se retrouve chaque année dans les poubelles?",
      choice1: "Un 10e de la production mondiale.",
      choice2: "Un quart de la production mondiale.",
      choice3: "Un tiers de la production mondiale.",
      choice4: "50% de la production mondiale.",
    correctAnswer: 3,
  },
  {
    question: "De quel grosseur est l'île de déchet qui flotte dans l'océan Pacifique ?",
      choice1: "1000 k㎡",
      choice2: "10 000 k㎡",
      choice3: "1.6 millions k㎡",
      choice4: "5 millions k㎡",
    correctAnswer: 3,
  },
  {
    question: "Avec les changements climatiques, quelles catastrophes allons nous appercevoir régulièrement au Québec à partir de 2035?",
      choice1: "Des tremblements de terre à Tremblant.",
      choice2: "Des Ouragans aux Iles-de-la-Madeleine.",
      choice3: "Un volcan sur le Mont-Royale.",
      choice4: "Un désert à Venise-en-Québec",
    correctAnswer: 2,
  },
  {
    question: "Combien de gens mouront des changements climatiques?",
      choice1: "36 millions, la population du Canada en 2021.",
      choice2: "81 millions, la population de l'Allemagne en 2021.",
      choice3: "365 millions, la population des États-Unis en 2021.",
      choice4: "1,38 milliard, 1/7e de la population mondiale.",
    correctAnswer: 2,
  },
  {
    question: "Quel serait le moyen le plus efficace de réduire les gaz à effet de serre?",
      choice1: "Détruire l'industrie pétrolière.",
      choice2: "Adopter le véganisme de force.",
      choice3: "Faire une révolution anti-capitalisme et bannir les multinationales et les riches.",
      choice4: "Toute ces réponses.",
    correctAnswer: [1,2,3,4]
  },
  {
    question: "À quel point serais-tu prêt à être déplacer de force lorsqu'il y aura des inondations chaques années ?",
      choice1: "Très peu",
      choice2: "C'est pas mon problème",
      choice3: "Je vais juste mettre des sacs de sable",
      choice4: "Je suis prêt à faire le nécessaire.",
    correctAnswer: 4,
  },
  {
    question: "Serez-vous prêt à faire la guerre pour de l'eau potable?",
      choice1: "Aux armes!",
      choice2: "Non",
      choice3: "Je vais boire de la boisson gazeuse.",
      choice4: "Où est le vaisseau pour mars..?",
    correctAnswer: 1,
  },
  {
    question: "Quel est le pays qu'on devrait se débarasser pour vaincre la crise du climat",
      choice1: "Ce n'est pas la solution!",
      choice2: "Chine.",
      choice3: "Inde.",
      choice4: "On commence une guerre nucléaire et on rase les humains de la terre.",
    correctAnswer: [2,3,4],
  }
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 15


let startGame = () => {
  questionCounter = 0

  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

let getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
  }
  questionCounter++

  progressText.innerText = `Question ${questionCounter}`
  
  
  currentQuestion = availableQuestions[questionsIndex] ;
  question.innerText = currentQuestion.question
  
  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
    
  })
  
  availableQuestions.splice(questionsIndex, 1)
  
  acceptingAnswers = true
  questionsIndex++;
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if (classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)
    
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()

    }, 1000)
  })
})

let incrementScore = num => {
  score +=num
  scoreText.innerText = score
}

startGame()