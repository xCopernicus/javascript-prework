var player1, player2, moveId, computerMove, playerMove, randomNumber, playerInput;

function getMoveName(moveId) {
  console.log('function getMoveName called with argument: ' + moveId);
  if (moveId == '1') {
    return 'rock';
  } else if (moveId == '2') {
    return 'paper';
  } else if (moveId == '3') {
    return 'scissors';
  } else {
    return 'Error! Refresh the page!';
  }
}

function displayResult(player1, player2, player1Name, player2Name) {
  console.log('function displayResult called with argument: ' + player1 + ', ' + player2);
  printMessage(player1Name + ' selected ' + player1 + ', and ' + player2Name + ' selected ' + player2);
  if (player1 == player2) {
    printMessage('It\'s a tie!');
  } else if (player1 == 'rock' && player2 == 'paper') {
    printMessage(player1Name + ' wins!');
  } else if (player1 == 'paper' && player2 == 'rock') {
    printMessage(player1Name + ' wins!');
  } else if (player1 == 'scissors' && player2 == 'paper') {
    printMessage(player1Name + ' wins!');
  } else if (player2 == 'rock' && player1 == 'paper') {
    printMessage(player2Name + ' wins!');
  } else if (player2 == 'paper' && player1 == 'rock') {
    printMessage(player2Name + ' wins!');
  } else if (player2 == 'scissors' && player1 == 'paper') {
    printMessage(player2Name + ' wins!');
  }
}

randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Computer selected: ' + randomNumber);

playerInput = prompt('Your turn, select! 1: rock, 2: paper, 3: scissors.');
console.log('Player selected: ' + playerInput);

computerMove = getMoveName(randomNumber)

playerMove = getMoveName(playerInput)

displayResult(computerMove, playerMove, 'Computer', 'Player')
