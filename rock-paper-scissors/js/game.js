const buttons = document.querySelectorAll('button');
const output = document.querySelector('#output');
const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
const result = document.createElement('h4');
let playerWins = 0;
let computerWins = 0;

result.textContent = '';
output.appendChild(result);

buttons.forEach(function(button) {
  button.addEventListener('click', function (e) {
    playRound(button.id, computerPlay());
  });
});

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
    return result.textContent = 'Tie';
  }

  if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'paper') {
      computerWins += 1;
      computerScore.textContent = `${computerWins}`;
      return result.textContent = 'Computer wins! Paper covers rock.';
    } else {
      playerWins += 1;
      playerScore.textContent = `${playerWins}`;
      return result.textContent = 'You win! Rock breaks scissors.';
    }
  }

  if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection ==;= 'scissors') {
      computerWins += 1
      computerScore.textContent = `${computerWins}`;
      return result.textContent = 'Computer wins! Scissors cuts paper';
    } else {
      playerWins += 1;
      playerScore.textContent = `${playerWins}`;
      return result.textContent = 'You win! Paper covers rock.';
    }
  }

  if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'rock') {
      computerWins += 1;
      computerScore.textContent = `${computerWins}`;
      return result.textContent = 'Computer wins! Rock breaks scissors.';
    } else {
      playerWins += 1;
      playerScore.textContent = `${playerWins}`;
      return result.textContent = 'You win! Scissors cuts paper';
    }
  }
}
