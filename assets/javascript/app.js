$(document).ready(function() {

var wins;
var losses;
var question = {};
var currentQuestion;


//create the questions array and wrap it in a function to call on easily


    var questions = {
    q1: {
        question: "what is the color of the sky?",
        answer: "blue",
        choices: ["red", "green", "blue", "brown"]
    },
    q2: {
        question: "where are my car keys?",
        answer: "right there",
        choices: ["here", "nowhere", "around the corner", "right there"]
    }
  };



// create timer functionality
var gameTimer = {

    time: 10,

    reset: function(secs) {
        gameTimer.time = secs;
        $("#time").html("You Have " + gameTimer.time + " Left To Guess.");
    },

    count: function() {
        $("#time").html("You Have " + gameTimer.time + " Left To Guess.");
        gameTimer.time--;
    },

    countDown: function() {
        counter = setInterval(gameTimer.count, 1000);
    },

    stop: function() {
        clearInterval(counter, 1000);
    }
};

//reset game function
function resetGame() {

};

//check for correct answers. if else statments
function answerChecker() {
    if (answer === question.q1.choices[2]) {
        $("#time").html("good job, thats correct!");
        wins++;
    }
};

//start game function that calls all functions into play
function startGame() {

$("#button-container").append("<div>" + questions.q1.question + "</div>");

gameTimer.countDown();

$("#button-container").append("<button class='button'>" + questions.q1.choices + "</button>");

answerChecker();

$(".button").on('click', function() {
    answer = $(this).html();
    answerChecker();
  });

};









startGame();
});

