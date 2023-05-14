//rock paper scissors game 

//the user clicks on rock
//target rock element and save in a variable
const rock = document.querySelector(`.rock`)
//add event listener
rock.addEventListener('click', function(){  // this is the longer form
    youPickedRock();
});

//the user clicks on paper
//target paper element and save in a variable
const paper = document.querySelector(`.paper`)
//add event listener
paper.addEventListener('click', youPickedPaper); // this is the short form


//the user clicks on scissors
//target scissors element and save in a variable
const scissors = document.querySelector(`.scissors`)
//add event listener
scissors.addEventListener('click', youPickedScissors);

//create a randomnizer function that selects a random move when the user selects rock 
//use an array
//this function generates a random number between 0 and 2, and then returns the corresponding move (rock, paper, or scissors) from the moves array.
   function computerMove() {
        const moves = ['rock', 'paper', 'scissors'];
        const randomNum = Math.floor(Math.random() * moves.length);
        return moves[randomNum];
    }

//create a function for when the user picks rock
    function youPickedRock() {
        let computerMoveResult = computerMove();
        let userMove = 'rock';
        let results = `You picked ${userMove}. The computer picked ${computerMoveResult}.`;
            if (userMove === 'rock') {
                if (computerMoveResult === 'rock') {
                    score.ties++;
                    alert (`${results} You tie!`);
                } else if (computerMoveResult === 'paper') {
                    score.losses++; 
                    alert (`${results} You lose!`);
                } else if (computerMoveResult === 'scissors') {
                    score.wins++;
                    alert (`${results} You win!`);
                }
            }
            updateScore();
    };

//create a function for when the user picks paper
    function youPickedPaper(){
        let computerMoveResult = computerMove();
        let userMove = 'paper';
        let results = `You picked ${userMove}. The computer picked ${computerMoveResult}.`;
            if (userMove === 'paper') {
                if (computerMoveResult === 'rock') {
                    score.wins++;
                    alert (`${results} You win!`);
                } else if (computerMoveResult === 'paper') {
                    score.ties++; 
                    alert (`${results} You tie!`);
                } else if (computerMoveResult === 'scissors') {
                    score.losses++;
                    alert (`${results} You lose!`);
                }
            }
            updateScore();
    };

//create a function for the when the user picks scissors
     function youPickedScissors() {
        let computerMoveResult = computerMove();
        let userMove = 'scissors';
        let results = `You picked ${userMove}. The computer picked ${computerMoveResult}.`;
            if (userMove === 'scissors') {
                if (computerMoveResult === 'rock') {
                    score.losses++;
                    alert (`${results} You lose!`);
                } else if (computerMoveResult === 'paper') {
                    score.wins++; 
                    alert (`${results} You win!`);
                } else if (computerMoveResult === 'scissors') {
                    score.ties++;
                    alert (`${results} You tie!`);
                }
            }
            updateScore();
     };

//create object to store the score
//create an object because the properties and values are related to each other. you could use variables, but this is easier. 
let score = {
    wins: 0,
    losses: 0,
    ties: 0
}

//logging the results on the page 
//create an h2 and insert into the HTML
const displayResults = document.createElement('h2');
displayResults.textContent = `Score: 0 wins, 0 losses, 0 ties`;
document.querySelector('.results').appendChild(displayResults);

//create a function to update the score
function updateScore() {
    displayResults.textContent = `Score: ${score.wins} wins, ${score.losses} losses, ${score.ties} ties`;
};

// target the reset button and save in a variable
const reset = document.querySelector('.resetBtn');

// add event listener
reset.addEventListener('click', resetScore);

// create a function to reset the score
function resetScore() {
    // ask the user if they want to reset the score
    const confirmed = confirm('Are you sure you want to reset the score to 0?');
  
    // if the user confirmed, reset the score
    if (confirmed) {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        updateScore();
    }
};









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






