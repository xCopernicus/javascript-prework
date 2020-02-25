var buttonScissors, buttonPaper, buttonRock, buttonName, player1Name, player2Name, player1, player2, moveId, computerMove, playerMove, randomNumber, playerInput;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

player1Name = 'Computer'
player2Name = 'Player'

function getMoveName(moveId) {
  console.log('function getMoveName called with argument: ' + moveId);
  if (moveId == '1') {
    return 'rock';
  } else if (moveId == '2') {
    return 'paper';
  } else if (moveId == '3') {
    return 'scissors';
  }
}

function displayResult(player1, player2) {
  console.log('function displayResult called with argument: ' + player1 + ', ' + player2);
  printMessage(player1Name + ': ' + player1 + ', and ' + player2Name + ': ' + player2);
  if (player1 == player2) {
    printMessage('It\'s a tie!');
  } else if (player1 == 'rock' && player2 == 'scissors') {
    printMessage(player1Name + ' wins!');
  } else if (player1 == 'paper' && player2 == 'rock') {
    printMessage(player1Name + ' wins!');
  } else if (player1 == 'scissors' && player2 == 'paper') {
    printMessage(player1Name + ' wins!');
  } else if (player2 == 'rock' && player1 == 'scissors') {
    printMessage(player2Name + ' wins!');
  } else if (player2 == 'paper' && player1 == 'rock') {
    printMessage(player2Name + ' wins!');
  } else if (player2 == 'scissors' && player1 == 'paper') {
    printMessage(player2Name + ' wins!');
  }
}

function buttonClicked(buttonName) {
  clearMessages();
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(player1Name + ' selected: ' + randomNumber);
  console.log(player2Name + ' selected: ' + buttonName);
  computerMove = getMoveName(randomNumber);
  playerMove = buttonName;
  displayResult(computerMove, playerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });
