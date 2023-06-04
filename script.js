//ROCK PAPER SCISSORS GAME

// Create a function that selects a random move for the computer
function computerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * moves.length);
    return moves[randomNum];
  }
  
  // Create a function for user selected move
  const userSelectedMove = (event) => {
    const userMove = event.target.classList[0];
    const computerMoveResult = computerMove();
    const results = `You picked ${userMove}. The computer picked ${computerMoveResult}.`;
  
    if (userMove === 'rock') {
      if (computerMoveResult === 'rock') {
        score.ties++;
        alert(`${results} You tie!`);
      } else if (computerMoveResult === 'paper') {
        score.losses++;
        alert(`${results} You lose!`);
      } else if (computerMoveResult === 'scissors') {
        score.wins++;
        alert(`${results} You win!`);
      }
    }
  
    if (userMove === 'paper') {
      if (computerMoveResult === 'rock') {
        score.wins++;
        alert(`${results} You win!`);
      } else if (computerMoveResult === 'paper') {
        score.ties++;
        alert(`${results} You tie!`);
      } else if (computerMoveResult === 'scissors') {
        score.losses++;
        alert(`${results} You lose!`);
      }
    }
  
    if (userMove === 'scissors') {
      if (computerMoveResult === 'rock') {
        score.losses++;
        alert(`${results} You lose!`);
      } else if (computerMoveResult === 'paper') {
        score.wins++;
        alert(`${results} You win!`);
      } else if (computerMoveResult === 'scissors') {
        score.ties++;
        alert(`${results} You tie!`);
      }
    }
  
    updateScore();
  };
  
  // Target rock element and save it in a variable
  const rock = document.querySelector('.rock');
  // Add event listener
  rock.addEventListener('click', userSelectedMove);
  
  // Target paper element and save it in a variable
  const paper = document.querySelector('.paper');
  // Add event listener
  paper.addEventListener('click', userSelectedMove);
  
  // Target scissors element and save it in a variable
  const scissors = document.querySelector('.scissors');
  // Add event listener
  scissors.addEventListener('click', userSelectedMove);
  
  // Create an object to store the score
  let score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  // Log the results on the page
  const displayResults = document.createElement('h2');
  displayResults.textContent = `Score: 0 wins, 0 losses, 0 ties`;
  document.querySelector('.results').appendChild(displayResults);
  
  // Create a function to update the score
  function updateScore() {
    displayResults.textContent = `Score: ${score.wins} wins, ${score.losses} losses, ${score.ties} ties`;
  }
  
  // Target the reset button and save it in a variable
  const reset = document.querySelector('.resetBtn');
  
  // Add event listener
  reset.addEventListener('click', resetScore);
  
  // Create a function to reset the score
  function resetScore() {
    const confirmed = confirm('Are you sure you want to reset the score to 0?');
  
    if (confirmed) {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      updateScore();
    }
  }
  
  
  
  
  
  
  
  
  
  
  //DISCARDED CODE
  //This function works perfectly, but the one used above is more DRY. 
   /*function computerMove() {
          let randomNum = (Math.random());
              if (randomNum <= 1/3) {
                  return `rock`; //if there is no return statement, it will return undefined
              } else if(randomNum > 1/3 && randomNum <= 2/3) { 
                  return `paper`; //if there is no return statement, it will return undefined
              } else if(randomNum > 2/3 && randomNum < 1) {
                  return 'scissors';
              }
      };
      */
  
  





