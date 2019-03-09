// Pseudocode

// Timers 
// DOM Manipulation
// Buttons / Answers
// Score Varible DOM
//Object (Array to store the questions)

//Title
//TImer (when timer is out, show correct answer) function eventHandler for correct and wrong answer
//Question? (incorrect question, show correct answer) function, same as the one on top
//Answer (correct answer, next question and reset timer, function)
    //right
    //wrong
    //wrong
    //wrong

// console.log('linked');

// $('.clickMe').on('click', function(event){
//     console.log('clicked');
//     consoile.log($(this).attr('id'))
// })

// const quizContainer = document.getElementById('quiz');

// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');


// function buildQuiz() {}

$(document).ready(function(){

    $("#remaining-time").hide();
    $("start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);

});

var trivia = {
    correct= 0,
    incorrect = 0,
    timer= 15,
    timerOn= false,
    timer: "",

    questions {}
        a1 = "Who is Goku's best friend?",
        a2 = "Who is Goku's first master?",
        a3 = "What is the name of Goku's brother?",
        a4 = "What is Goku's real name?",
        a5 = "Who is Goku's rival?",
        a6 = "Who is the youngest Super Saiyan?",
        a7 = "Who created the Dragonball radar?",
        a8 = "What is the name of Goku's father?",
        a9 = "What is the name of Goku's cloud?",
        a10 = "What kind of animal does a Saiyan turn into during a full moon?",
    };
    
    possibleAnswer {
        a1 = ['Bulma', 'Tien', 'Yamcha', 'Krillin'],
        a2 = ['Gohan', 'Roshi', 'Kami', 'Cooler'],
        a3 = ['Raditz', 'Vegeta', 'Nama', 'ChiChi'],
        a4 = ['Carrot', 'Bardock', 'Dende', 'Kakarot'],
        a5 = ['Vegeta', 'Raditz', 'Goten', 'Gohan'],
        a6 = ['Gohan', 'Trunks', 'Pan', 'Goten'],
        a7 = ['Bulma', 'Krillin', 'Goku', 'Trunks'],
        a8 = ['Piccolo', 'Napa', 'Bardock', 'Yamcha'],
        a9 = ['Stratus', 'Nimbus', 'Nimbostratus', 'Stratocumulus'],
        a10 = ['Dog', 'Cat', 'Ape', 'Dragon'],
    };

    correctAnswer {
        a1 = 'Krillin',
        a2 = 'Roshi',
        a3 = 'Raditz',
        a4 = 'Kakarot',
        a5 = 'Vegeta',
        a6 = 'Goten',
        a7 = 'Bulma',
        a8 = 'Bardock',
        a9 = 'Nimbus',
        a10 = 'Ape',
    }; 

    startGame = function() {
        trivia.correct = 0;
        trivia.incorrect = 0;
        clearInterval(trivia.timer);
        
        $('#game').show();

        $('#result').html('');

        $('#timer').text(trivia.timer);

        $('#start').hide();

        $('#remainingTime').show();

        trivia.nextQuestion();
    };

    nextQuestion = function(){
        trivia.timer = 15;
        $('#timer').removeClass('lastSeconds');
        $('#timer').text(trivia.timer);
        if(!timer.timerOn) {
            trivia.timer = setInterva;(trivia.timerRunning, 1500);
        }

        var questionContent = object.values(trivia.questions);
        $('#question').text(questionContent);

        var questionOptions = object.values(trivia.possibleAnswer);

        $.each(questionpossibleAnswer, function(index, key)) {
            $('possibleAnswer').append($("<button class='option btn btn-info btn-lg'>" +key+ '</button>'))
        }

    }
    
}

document.getElementById("button").addEventListerner('click', startTimer);
