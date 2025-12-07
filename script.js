import questions from "./data.js";

const quizElement = document.getElementById("quiz");
const statusElement = document.getElementById("status");
const questionElement = document.getElementById("question");
const optionElement = document.getElementById("option");
const previousButton = document.getElementById("prevBtn");
const submitButton = document.getElementById("submitBtn");
const nextButton = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");
const successElement = document.getElementById("success");
const resetButton = document.getElementById("reset")
const scoreCard = document.getElementById("scorecard")
const startButton = document.getElementById("startBtn")
const countdownElement = document.getElementById("countdown")
const count = document.getElementById("count")
const startElement = document.getElementById("start")

let currentQuestionIndex = 0;
let selectedOptionIndex = -1;
let score = 0;
let submitedQuestions = [];
updateButtons();
showQuestions(currentQuestionIndex)

function updateButtons() {
    if (currentQuestionIndex === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "block";
    }

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}

function checkAndUpdateScore(index) {
    questions[currentQuestionIndex].correctIndex === index ? score++ : null;
}

function showQuestions(index) {
    selectedOptionIndex = -1;
    optionElement.innerHTML = "";
    statusElement.innerHTML = `Question ${index + 1} of ${questions.length}`;
    questionElement.innerHTML = questions[index].text;
    questions[index].options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.id = `option-${index + 1}`;
        btn.className =
            "block w-full text-left bg-slate-500 px-4 py-2 rounded-lg mb-4 hover:bg-slate-400";
        optionElement.appendChild(btn);
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (selectedOptionIndex != -1) {
                const previousBtn = document.getElementById(
                    `option-${selectedOptionIndex + 1}`
                );
                previousBtn.classList.remove(
                    "bg-emerald-500",
                    "border-gray-300",
                    "border-2"
                );
                previousBtn.classList.add("bg-slate-500", "hover:bg-slate-400");
            }
            btn.classList.remove("bg-slate-500", "hover:bg-slate-400");
            btn.classList.add("bg-emerald-500", "border-gray-300", "border-2");
            selectedOptionIndex = index;
        });
    });
}

function displayResult() {
    quizElement.style.display = "none";
    scoreCard.style.display = "inline-block";
    let emoji;
    let message;
    if (score == questions.length) {
        emoji = "🎉";
        message = "Excellent Performance";
    } else if (score > (questions.length / 2)) {
        emoji = "👏";
        message = "Try More";
    } else {
        emoji = "🎯";
        message = "More Focus Required";
    }
    successElement.innerHTML = `
    <div class="block text-6xl animate-bounce">${emoji}</div>
    <div class="block text-lg font-semibold mt-5">${message}</div>
`;
    resultElement.innerHTML = `
    <div class="text-center text-lg font-semibold mt-5">
        Your Score: ${score} / ${questions.length}
    </div>
    `;
    resetButton.classList.remove("hidden");

}


nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    submitButton.innerHTML = "Submit";


    for (let i = currentQuestionIndex + 1; i < questions.length; i++) {
        if (!submitedQuestions.includes(i)) {
            currentQuestionIndex = i;
            break;
        }
    }
    submitButton.disabled = false;
    updateButtons();
    showQuestions(currentQuestionIndex);
});

previousButton.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = currentQuestionIndex - 1; i >= 0; i--) {
        if (!submitedQuestions.includes(i)) {
            currentQuestionIndex = i;
            break;
        }
    }
    submitButton.innerHTML = "Submit";
    submitButton.disabled = false;
    updateButtons();
    showQuestions(currentQuestionIndex);
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (selectedOptionIndex !== -1) {
        if (submitButton.disabled) return;
        submitButton.disabled = true;
        submitedQuestions.push(currentQuestionIndex);
        checkAndUpdateScore(selectedOptionIndex);
        submitButton.innerHTML = "Submitted";
        let completed = true;
        for (let i = 0; i < questions.length; i++) {
            if (!submitedQuestions.includes(i)) {
                completed = false;
            }
        }
        if (completed) displayResult();
    } else {
        if (selectedOptionIndex == -1) {
            alert("You should select an option to Submit");
        }
    }
});

resetButton.addEventListener('click', (e) => {
    e.preventDefault()
    scoreCard.style.display = "none";
    submitButton.innerHTML = "Submit";
    submitButton.disabled = false;
    resetButton.classList.add("hidden");
    countdownElement.classList.remove("hidden")
    count.innerHTML = 3
    setTimeout(() => {
        count.innerHTML = 2
    }, 1000)
    setTimeout(() => {
        count.innerHTML = 1
    }, 2000)
    setTimeout(() => {
        countdownElement.classList.add("hidden");
        currentQuestionIndex = 0;
        showQuestions(currentQuestionIndex);
        selectedOptionIndex = -1;
        updateButtons();
        score = 0;
        submitedQuestions = [];
        quizElement.style.display = "block"
    }, 3000)
})

startButton.addEventListener('click', () => {
    startElement.classList.add("hidden")
    countdownElement.classList.remove("hidden")
    setTimeout(() => {
        count.innerHTML = 2
    }, 1000)
    setTimeout(() => {
        count.innerHTML = 1
    }, 2000)
    setTimeout(() => {
        countdownElement.classList.add("hidden")
        quizElement.classList.remove("hidden");
    }, 3000)
}
)