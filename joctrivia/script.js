const questions = [
    {
        question: "Care este capitala Spaniei?",
        options: ["Lisabona", "Roma", "Barcelona", "Madrid"],
        correctAnswer: "Madrid"
    },
    {
        question: "Câte continente există pe Pământ?",
        options: ["3", "5", "7", "9"],
        correctAnswer: "7"
    },
    {
        question: "Cine a scris 'Război și pace'?",
        options: ["Fyodor Dostoevsky", "Charles Dickens", "Leo Tolstoy", "Jane Austen"],
        correctAnswer: "Leo Tolstoy"
    },
    {
        question: "Care este cel mai lung râu din lume?",
        options: ["Nil", "Amazon", "Mississippi", "Yangtze"],
        correctAnswer: "Amazon"
    },
    {
        question: "Cine a pictat Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Care este capitala Australiei?",
        options: ["Wellington", "Canberra", "Sydney", "Melbourne"],
        correctAnswer: "Canberra"
    },
    {
        question: "Cine a fost primul om care a călătorit în spațiu?",
        options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Valentina Tereshkova"],
        correctAnswer: "Yuri Gagarin"
    },
    {
        question: "Ce planetă este cunoscută ca 'Planeta Roșie'?",
        options: ["Jupiter", "Marte", "Venus", "Saturn"],
        correctAnswer: "Marte"
    },
    {
        question: "În ce an a avut loc Marea Unire a României?",
        options: ["1918", "1859", "1945", "2001"],
        correctAnswer: "1918"
    },
    {
        question: "Cine a compus 'Simfonia a 9-a'?",
        options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Pyotr Ilyich Tchaikovsky"],
        correctAnswer: "Ludwig van Beethoven"
    },
    {
        question: "Care este cel mai mare deșert din lume?",
        options: ["Deșertul Sahara", "Deșertul Gobi", "Deșertul Atacama", "Deșertul Antarctica"],
        correctAnswer: "Deșertul Antarctica"
    },
    {
        question: "Cine a scris 'Harry Potter'?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "C.S. Lewis"],
        correctAnswer: "J.K. Rowling"
    },
    {
        question: "Cine a inventat telefonul?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        correctAnswer: "Alexander Graham Bell"
    },
    {
        question: "Care este cel mai înalt munte din lume?",
        options: ["Mount Everest", "K2", "Annapurna", "Makalu"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "Cine a scris 'Romeo și Julieta'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Fyodor Dostoevsky"],
        correctAnswer: "William Shakespeare"
    },
    // Adaugă mai multe întrebări aici
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");

    questionElement.textContent = questions[currentQuestion].question;

    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }

    document.getElementById("score").textContent = "Score: " + score;
}

function endGame() {
    const quizContainer = document.getElementById("quiz-container");
    const gameOverContainer = document.getElementById("game-over-container");

    quizContainer.style.display = "none";
    gameOverContainer.style.display = "block";

    gameOverContainer.innerHTML = `<h2>Game Over</h2><p>Score: ${score}/${questions.length}</p><button onclick="playAgain()">Play Again</button>`;
}

function playAgain() {
    const quizContainer = document.getElementById("quiz-container");
    const gameOverContainer = document.getElementById("game-over-container");

    quizContainer.style.display = "block";
    gameOverContainer.style.display = "none";

    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function checkAnswer() {
    const optionsContainer = document.getElementById("options-container");
    const buttons = optionsContainer.getElementsByTagName("button");

    for (let button of buttons) {
        button.disabled = true;
    }

    setTimeout(() => {
        for (let button of buttons) {
            button.disabled = false;
        }

        selectAnswer();
    }, 1000);
}

loadQuestion();
