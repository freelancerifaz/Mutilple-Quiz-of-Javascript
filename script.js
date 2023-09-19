const questions = [
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers : [
            {text : "Var" , correct : false},
            {text : "Let" , correct : false},
            {text : "Both A and B" , correct : true},
            {text : "None of the above" , correct : false}
        ]
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers : [
            {text : "getElementById()" , correct : false},
            {text : "getElementByClassName()" , correct : false},
            {text : "Both A and B" , correct : true},
            {text : "None of the above" , correct : false}
        ] 
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers : [
            {text : "Throws an error" , correct : false},
            {text : "Ignores the statements" , correct : true},
            {text : "Gives e warning" , correct : false},
            {text : "None of the above" , correct : false}
        ] 
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers : [
            {text : "document.write()" , correct : false},
            {text : "console.log()" , correct : false},
            {text : "window.alert()" , correct : false},
            {text : "All of the above" , correct : true}
        ] 
    },
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answers : [
            {text : "Both the datatype and the result of the expression are compared" , correct : true},
            {text : "Only the datatype of the expression is compared" , correct : false},
            {text : "Only the value of the expression is compared" , correct : false},
            {text : "None of the above" , correct : false}
        ] 
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        answers : [
            {text : "in" , correct : true},
            {text : "is in" , correct : false},
            {text : "exists" , correct : false},
            {text : "lies" , correct : false}
        ] 
    },
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        answers : [
            {text : "The contents are displayed by non-JS-based browsers" , correct : true},
            {text : "Clears all the cookies and cache" , correct : false},
            {text : "Both A and B" , correct : false},
            {text : "None of the above" , correct : false}
        ] 
    },
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        answers : [
            {text : "Boolean" , correct : false},
            {text : "Undefined" , correct : false},
            {text : "Object" , correct : true},
            {text : "Integer" , correct : false}
        ] 
    },
    {
        question: "What does the Javascript “debugger” statement do?",
        answers : [
            {text : "it will debug all the errors in the program at runtime." , correct : false},
            {text : "it acts as a breakpoint in a program." , correct : true},
            {text : "it will debug error in the current statement if any." , correct : false},
            {text : "all of the above" , correct : false}
        ] 
    },
    {
        question: "What does the ‘toLocateString()’ method do in JS?",
        answers : [
            {text : "Returns a localized object representation" , correct : false},
            {text : "Returns a parsed string" , correct : false},
            {text : "Returns a localized string representation of an object" , correct : true},
            {text : "None of the above" , correct : false}
        ] 
    },
];
const  questionElement = document.getElementById("question");
const  answerButtons = document.getElementById("answer-buttons");
const  nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    })
}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = `Play Again !!`;
    nextButton.style.display = "block";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click" , () => {
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
})

startQuiz();

