const questions = [
  {
    question: "What is HTML?",
    answers: [
      { text: "Markup Language", correct: true },
      { text: "Programming Language", correct: false },
      { text: "Database", correct: false },
      { text: "Server", correct: false }
    ]
  },
  {
    question: "What is CSS?",
    answers: [
      { text: "Styling Language", correct: true },
      { text: "Structure", correct: false },
      { text: "Logic", correct: false },
      { text: "Compiler", correct: false }
    ]
  },
  {
    question: "What is JavaScript?",
    answers: [
      { text: "Scripting Language", correct: true },
      { text: "Only HTML", correct: false },
      { text: "Only CSS", correct: false },
      { text: "Hardware", correct: false }
    ]
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

function startQuiz() {
  currentIndex = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let q = questions[currentIndex];
  questionEl.innerText = q.question;

  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = true;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    selectedBtn.style.backgroundColor = "green";
    score++;
  } else {
    selectedBtn.style.backgroundColor = "red";
  }

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
  });

  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionEl.innerText = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerText = "Restart";
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

startQuiz();