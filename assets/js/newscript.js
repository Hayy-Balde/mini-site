// script.js

const questions = [
    { question: "What is the capital of France?", options: ["Paris", "Rome", "Madrid"], answer: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is the largest planet?", options: ["Mars", "Earth", "Jupiter"], answer: "Jupiter" }
];

let currentQuestionIndex = 0;
let score = 0;

$(document).ready(function () {
    showQuestion();

    $("#next-btn").click(function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            $("#question").text("Quiz Completed!");
            $("#options").empty();
            $("#next-btn").hide();
            $("#score").text("Final Score: " + score);
        }
    });

    function showQuestion() {
        let questionData = questions[currentQuestionIndex];
        $("#question").text(questionData.question);
        $("#options").empty();
        questionData.options.forEach(option => {
            $("#options").append(`<div class="option">${option}</div>`);
        });

        $(".option").click(function () {
            let selectedAnswer = $(this).text();
            if (selectedAnswer === questionData.answer) {
                $(this).addClass("correct");
                score++;
            } else {
                $(this).addClass("wrong");
            }
            $("#score").text("Score: " + score);
            $(".option").off("click"); // Disable further clicks
        });
    }
});
