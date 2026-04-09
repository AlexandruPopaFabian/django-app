let questions = [
    {
        question: "Do you feel happy?",
        options: {
            a: "yes",
            b: "no"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "I am sorry"
    },
    {
        question: "Ce faci?",
        options: {
            a: "bine",
            b: "rau"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "I am sorry"
    }
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        let endMessage = document.createElement("div");
        endMessage.classList.add("message", "bot");
        endMessage.innerText = "Quiz finished! Thanks for playing!";
        chatContainer.appendChild(endMessage);
        scrollToBottom();
        return;
    }

    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(
        key => `${key}. ${currentQuestion.options[key]}`
    ).join(' | ');

    let botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot");
    botResponse.innerText = `${currentQuestion.question} (${optionsHTML})`;
    chatContainer.appendChild(botResponse);
    scrollToBottom();
}

chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let userAnswer = userInput.value.trim().toLowerCase();
    if (!userAnswer) return;

    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerText = userAnswer;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];

    let botReply = document.createElement("div");
    botReply.classList.add("message", "bot");

    let selectedKey = Object.keys(currentQuestion.options).find(
        key => currentQuestion.options[key].toLowerCase() === userAnswer
    );

    if (
        userAnswer === currentQuestion.correctAnswer ||
        selectedKey === currentQuestion.correctAnswer
    ) {
        botReply.innerText = currentQuestion.correctResponse;
    } else {
        botReply.innerText = currentQuestion.incorrectResponse;
    }

    chatContainer.appendChild(botReply);
    userInput.value = '';
    currentQuestionIndex++;
    scrollToBottom();

    setTimeout(displayQuestion, 1000);
});

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

