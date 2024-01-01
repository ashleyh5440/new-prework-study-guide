const homeBtn = document.getElementById("home-btn")

// home button listener
homeBtn.addEventListener("click", function() {
    window.location.href = 'index.html'
  })

const continueBtn = document.querySelector("#continue")
const timerEl = document.getElementById("timer");
let secondsLeft = 60;
let timeInterval;
timerEl.textContent = secondsLeft;

continueBtn.addEventListener("click",
function () {
    event.preventDefault();
    document.querySelector(".container2").classList.remove("hidden");
    document.querySelector(".quiz-rules-container").classList.add("hidden")
}
);

let quizBoxEl = document.getElementById("quizBox");
let endEl = document.getElementById("endScreen")
let choicesEL = document.getElementById("choices");
let scoreEl = document.getElementById("scores");
let finalScoreEl = document.getElementById("finalScore");
let nameEl = document.getElementById("initials");
let saveBtn = document.getElementById("save");
let scoresListEl = document.getElementById("scoresList");
let retakeEl = document.getElementById("retake");
let clearScoresEl = document.getElementById("clear");

//timer
function timer () {
    secondsLeft -- 
    timerEl.textContent = secondsLeft
    if(secondsLeft <= 0)
    endQuiz () //ends quiz when seconds reach 0
    // if(userClick === correctAnswer) 
    // score += 1
}

function startQuiz () {
    timeInterval = setInterval (timer, 1000) //counts down every second
}

function endQuiz () {
    clearInterval(timeInterval)
    quizBoxEl.style.display = "none";
    finalScoreEl.textContent = score;
    document.querySelector(".end-container").classList.remove("hidden")
}

startQuiz () //calls/starts function

// quiz questions
const questions = [
    {
    id: 0,
    question: "How are variables declared?",
    answers: [
        "href, var, src",
        "if, function, const",
        "var, let, const"
            ],
    correctIndex: 2
    }, 

    {
    id: 1,
    question: "What three components do you need for a border?",
    answers: [
        "size, style, and color",
        "color, size, and thickness",
        "size, style, and opacity",
            ],
        correctIndex: 0
    },

    {
    id: 2,
    question: "What is the correct paragraph tag?",
    answers: [
        "<p></p>",
        "<w></w>",
        "<li></li>"
            ],
    correctIndex: 0
    },

    {
    id: 3,
    question: "What is the correct format for an array?",
    answers: [
        "var colors = (black), (orange), (green)",
        "var colors = black orange green",
        "var colors = ['black', 'orange', 'green']"
            ],
    correctIndex: 2
    },

    {
    id: 4,
    question: "How do you link a CSS stylesheet?",
    answers: [
        "<link rel=''stylesheet'' href=''[path]''>", 
        "<script rel=''stylesheet'' href=''[path]''>",
        "<link href=''[path]''>"
            ],
    correctIndex: 0
    },

    {
    id: 5,
    question: "Where do you link a JavaScript file in an HTML document?",
    answers: [
        "At the top of the body in a <link> tag",
        "At the bottom of the body with <script> tags",
        "In the middle of the body with <a> tags"
            ],
    correctIndex: 1
    },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion () { //displays question and choices
    let questionText = document.querySelector("#question") 
    questionText.textContent = questions [currentQuestion].question 

    let choice1Text = document.querySelector("#choice1") 
    choice1Text.textContent = questions [currentQuestion].answers [0]
    choice1Text.setAttribute("data-correctindex", questions[currentQuestion].correctIndex) //this assigns correctIndex to each button
    choice1Text.classList.remove("correct-answer");

    let choice2Text = document.querySelector("#choice2") 
    choice2Text.textContent = questions[currentQuestion].answers [1]
    choice2Text.setAttribute("data-correctindex", questions[currentQuestion].correctIndex)
    choice2Text.classList.remove("correct-answer");

    let choice3Text = document.querySelector("#choice3") 
    choice3Text.textContent = questions [currentQuestion].answers [2]
    choice3Text.setAttribute("data-correctindex", questions[currentQuestion].correctIndex) 
    choice3Text.classList.remove("correct-answer");
}

displayQuestion()

function displayScores() {
    // scoresListEl.textContent = score; // assigned this to scoresList so that it displays within the ul
}

displayScores();

let nextQuestionBtn = document.querySelector("#next-question") //assigns a job to the next question button

//goes to the next question when button is clicked
nextQuestionBtn.addEventListener("click", function(){
    currentQuestion++; //'increases' the question by 1
    displayQuestion ()
}) 

choicesEL.addEventListener("click",
    function(event) { //makes it so that clicking anywhere on the div selects the nearest button
if (event.target.matches("button") === true) { //^ counters the code above and makes the js listen for a button click specifically
     //event.target is what is recieving the event, what's being clicked on
    let userClick = event.target.dataset["number"] //refers to the data-number
    let correctAnswer = event.target.dataset["correctindex"]

    if(userClick === correctAnswer) {
        //changes color 
        event.target.classList.add("correct-answer");
        score += 1; //increases score by 1
    displayScores(); 
    }
    else {
        //subtracts time for wrong answers
        secondsLeft -=5

    }
  }
    } 
)

//end screen

saveBtn.addEventListener("click", 
function () {
    document.querySelector(".scores-container").classList.remove("hidden")
    document.querySelector(".end-container").classList.add("hidden")

    //save user initials 
    const userName = nameEl.value;
    if (userName) {
        const userScoreData = {
            initials: userName,
            score: score, // The user's score
        };
        const scores = JSON.parse(localStorage.getItem("scores")) || [] //go into local storage and get scores, or if empty, then make empty array
        scores.push(userScoreData);
        localStorage.setItem("scores", JSON.stringify(scores))
        console.log(userScoreData)
        getAllScores();
    }
}
);
function getAllScores () {
    const scores = JSON.parse(localStorage.getItem("scores")) || []
    scores.sort(function(a, b){
        return b.score - a.score //looks at each object in array and sort by descending order
    })
    scores.forEach(score => {
        const liEl = document.createElement("li");
        liEl.textContent = score.initials + "-" + score.score;
        document.querySelector("ol").append(liEl);
    });
}

