const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [
    {
        question: "Who is Goku's best friend?",
        choiceA: 'Bulma',
        choiceB: 'Tien',
        choiceC: 'Yamcha',
        choiceD: 'Krillin',
        correct: "D"
    },
    {
        question: "Who is Goku's first master?",
        choiceA : 'Gohan',
        choiceB : 'Roshi',
        choiceC : 'Kami',
        choiceD : 'Cooler',
        correct : "B"
    },
    {
        question: "What is the name of Goku's brother?",
        choiceA: 'Raditz',  
        choiceB: 'Vegeta',
        choiceC: 'Luffy',
        choiceD: 'ChiChi',
        correct: 'A'
    },
    {
        question: "What is Goku's real name?",
        choiceA: 'Carrot',
        choiceB: 'Bardock',
        choiceC: 'Dende',
        choiceD: 'Kakarot',
        correct: 'D'
    },
    {
        question: "Who is Goku's rival?",
        choiceA: 'Vegeta',
        choiceB: 'Raditz',
        choiceC: 'Goten',
        choiceD: 'Gohan',
        correct: 'A'
    },
    {
        question: "Who is the youngest Super Saiyan?",
        choiceA: 'Gohan',
        choiceB: 'Trunks',
        choiceC: 'Pan',
        choiceD: 'Goten',
        correct: 'D'
    },
    {
        question: "Who created the Dragonball radar?",
        choiceA: 'Bulma',
        choiceB: 'Krillin',
        choiceC: 'Goku',
        choiceD: 'Trunks',
        correct: 'A'
    },
    {
        question: "What is the name of Goku's father?",
        choiceA: 'Piccolo',
        choiceB: 'Napa',
        choiceC: 'Bardock',
        choiceD: 'Yamcha',
        correct: 'C'
    },
    {
        question: "What is the name of Goku's cloud?",
        choiceA: 'Stratus',
        choiceB: 'Nimbus',
        choiceC: 'Nimbostratus',
        choiceD: 'Stratocumulus',
        correct: 'B'
    },
    {
        question: "What kind of animal does a Saiyan turn into during a full moon?",
        choiceA: 'Dog',
        choiceB: 'Cat',
        choiceC: 'Ape',
        choiceD: 'Dragon',
        correct: 'C'
    }
];

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let count = 0;
const questionTime = 10;

function renderQuestion(){
    let q = question[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}