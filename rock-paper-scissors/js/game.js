function playerPlay() {
  let selection = prompt('Please enter your selection between Rock, Paper, or Scissors: ');
  return selection;
}

function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1

  if (number === 1) {
    selection = 'rock';
  } else if (number === 2) {
    selection = 'paper';
  } else {
    selection = 'scissors';
  }
  return selection;
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  if (playerSelection.toLowerCase() === computerSelection) {
    console.log('Draw');
  }

  if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'paper') {
      console.log('Computer wins! Paper covers rock.');
    } else {
      console.log('You win! Rock breaks scissors.');
    }
  }

  if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'scissors') {
      console.log('Computer wins! Scissors cuts paper');
    } else {
      console.log('You win! Paper covers rock.');
    }
  }

  if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'rock') {
      console.log('Computer wins! Rock breaks scissors.');
    } else {
      console.log('You win! Scissors cuts paper');
    }
  }
}

let playerSelection = playerPlay();
let computerSelection = computerPlay();

playRound(playerSelection, computerSelection);
