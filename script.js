```javascript
const questions = [
    "What was your first impression of me?",
    "What's one thing you genuinely like about our friendship?",
    "What's one memory with me that made you smile?",
    "If you could describe our friendship in 3 words, what would they be?"
];

let currentQuestion = 0;

function showSection(sectionId) {

    const sections = document.querySelectorAll(".screen");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function nextQuestion() {

    const answer = document.getElementById("answer");

    if (answer.value.trim() === "") {
        alert("Come on Baby 😂❤️ Give me an answer first.");
        return;
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showSection("final");

        return;
    }

    document.getElementById("questionText").textContent =
        questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    answer.value = "";

    answer.focus();
}
```
