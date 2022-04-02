const RockBtn = document.getElementById('r')
const PaperBtn = document.getElementById('p')
const ScissorsBtn = document.getElementById('s')
const Label = document.getElementById('text')
const userScoreL = document.getElementById('user-score')
const computerScoreL = document.getElementById('computer-score')

let userChoice = ""
let computerChoice = ""

let result = ""
let state = ""

var computerScore = 0
var userScore = 0


RockBtn.addEventListener('click', () => {
    userChoice = "Rock";
    generateComputerChoice()
    getResult()
    score()
    Label.textContent = state;
});

PaperBtn.addEventListener('click', () => {
    userChoice = "Paper";
    generateComputerChoice()
    getResult()
    score()
    Label.textContent = state;
});

ScissorsBtn.addEventListener('click', () => {
    userChoice = "Scissors";
    generateComputerChoice()
    getResult()
    score()
    Label.textContent = state;
});

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    if (randomNumber === 0){
        computerChoice = "Rock"
    }

    if (randomNumber === 1){
        computerChoice = "Scissors"
    }

    if (randomNumber === 2){
        computerChoice = "Paper"
    }
    return computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        state = "The computer chose the same , its a draw ! 😀"
        result = 'draw'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock'){
        state = "The computer chose paper , you lost ! 💩"
        result = 'lost'
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        state = "The computer chose rock , you lost ! 💩"
        result = 'lost'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        state = "The computer chose scissors , you lost ! 💩"
        result = 'lost'
    }
    if (userChoice === 'Paper' && computerChoice === 'Rock'){
        state = "The computer chose paper , you won ! 🥳"
        result = 'won'
    }
    if (userChoice === 'Rock' && computerChoice === 'Scissors'){
        state = "The computer chose rock , you won ! 🥳"
        result = 'won'
    }
    if (userChoice === 'Scissors' && computerChoice === 'Paper'){
        state = "The computer chose scissors , you won ! 🥳"
        result = 'won'
    }
    return result
}

function score(){

    if (result == 'won'){
        userScore += 1;
    }

    if (result == 'lost'){
        computerScore += 1;
    }

    userScoreL.innerHTML = userScore;
    computerScoreL.innerHTML = computerScore;
}