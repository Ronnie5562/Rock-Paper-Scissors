/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors

let RPSButtons = document.querySelectorAll('.rpsButton')
let resultContainer = document.querySelector('.resultContainer')
let playerScore = document.getElementById('player-score')
let Hands = document.getElementById('hands')
let Result = document.getElementById('result')
let TotalResult = document.getElementById('totalResult')
let endGameEl = document.getElementById('endGameButton')
let totalScore = {PlayerScore:0}
let RandomN;
function getComputerChoice() {
  RandomN = Math.floor(Math.random() * RPSButtons.length)
  return RPSButtons[RandomN].value
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
let score;
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
   0
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)
  // return score
  
  if (playerChoice === computerChoice){
    score = 0
  }else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
    score = 1
  }else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
    score = 1
  }else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
    score = 1
  }else{
    score = -1
  }
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  

  // All situations where human draws, set `score` to
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  playerScore.innerText = score;
  Hands.innerText = `👱${playerChoice} VS 🤖 ${computerChoice} `
  if (score === 1){ 
    Result.innerText = 'You Win'
  }else if (score === -1){
    Result.innerText = 'You Lose'
  }else{
    Result.innerText = "It's a Draw!"
  }
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice, computerChoice) {
  getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
  totalScore['PlayerScore'] += score
  TotalResult.innerText = 'Total Score: ' + totalScore['PlayerScore']
  console.log(totalScore)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

RPSButtons.forEach(button =>{
  button.onclick = () =>{
    onClickRPS(button.value, getComputerChoice())
  }
})
  
 

  // Add a click listener to the end game button that runs the endGame() function on click
endGameEl.addEventListener('click', endGame())
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  endGameEl.addEventListener('click', ()=>{
    Hands.innerText = ''
    Result.innerText = ''
    playerScore.innerText = ''
  })
}

playGame()