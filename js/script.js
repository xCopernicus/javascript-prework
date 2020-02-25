var buttonReset, score1, score2, buttonScissors, buttonPaper, buttonRock, buttonName, player1Name, player2Name, player1, player2, moveId, computerMove, playerMove, randomNumber, playerInput;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonReset = document.getElementById('button-reset');
result1 = document.getElementById('player-1');
result2 = document.getElementById('player-2');
score1 = 0
score2 = 0
player1Name = 'Computer'
player2Name = 'Player'

function getMoveName(moveId){
  console.log('function getMoveName called with argument: ' + moveId);
  if (moveId == '1') {
    return 'rock';
  } else if (moveId == '2') {
    return 'paper';
  } else if (moveId == '3') {
    return 'scissors';
  }
}

function displayResult(player1, player2){
  console.log('function displayResult called with argument: ' + player1 + ', ' + player2);
  printMessage(player1Name + ': ' + player1 + ';  ' + player2Name + ': ' + player2);
  if (player1 == player2) {
    printMessage('It\'s a tie!');
  } else if (player1 == 'rock' && player2 == 'scissors') {
    printMessage(player1Name + ' wins!');
    score1 = score1 + 1;
  } else if (player1 == 'paper' && player2 == 'rock') {
    printMessage(player1Name + ' wins!');
    score1 = score1 + 1;
  } else if (player1 == 'scissors' && player2 == 'paper') {
    printMessage(player1Name + ' wins!');
    score1 = score1 + 1;
  } else if (player2 == 'rock' && player1 == 'scissors') {
    printMessage(player2Name + ' wins!');
    score2 = score2 + 1;
  } else if (player2 == 'paper' && player1 == 'rock') {
    printMessage(player2Name + ' wins!');
    score2 = score2 + 1;
  } else if (player2 == 'scissors' && player1 == 'paper') {
    printMessage(player2Name + ' wins!');
    score2 = score2 + 1;
  }
}

function buttonClicked(buttonName){
  clearMessages();
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(player1Name + ' selected: ' + randomNumber);
  console.log(player2Name + ' selected: ' + buttonName);
  computerMove = getMoveName(randomNumber);
  playerMove = buttonName;
  displayResult(computerMove, playerMove);
//  printMessage(score1 + ' : ' + score2)
  printScore1()
  printScore2()
}

function printScore1(){
  console.log('Changed player1 score to: ' + score1);
	result1.innerHTML = score1;
}

function printScore2(){
  console.log('Changed player1 score to: ' + score2);
	result2.innerHTML = score2;
}

function reset(){
  clearMessages();
  score1 = 0;
  score2 = 0;
  result1.innerHTML = 0;
  result2.innerHTML = 0;
}

document.getElementById('player-1-Name').innerHTML = player1Name
document.getElementById('player-2-Name').innerHTML = player2Name

buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });
buttonReset.addEventListener('click', function(){ reset(); });
