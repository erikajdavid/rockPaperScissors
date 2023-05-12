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
    function computerMove() {
        let randomNum = (Math.random());
            if (randomNum <= 1/3) {
                return `rock`; //if there is no return statement, it will return undefined
            } else if(randomNum > 1/3 && randomNum <= 2/3) { 
                return `paper`; //if there is no return statement, it will return undefined
            } else if(randomNum > 2/3 && randomNum < 1) {
                return 'scissors';
            }
    };

//create a function for when the user picks rock
    function youPickedRock(){
        let computerMoveResult = computerMove();
        let userMove = 'rock';
            if(userMove === 'rock' && computerMoveResult === 'rock') {
                alert (`You tie!`);
            } else if (userMove === 'rock' && computerMoveResult == 'paper') {
                alert (`You lose!`);
            } else if (userMove === 'rock' && computerMoveResult === 'scissors') {
                alert (`You win!`);
            }
        computerMove();
        
        alert (`You picked ${userMove}. The computer picked ${computerMove()}`);
    };

//create a function for when the user picks paper
    function youPickedPaper(){
        let computerMoveResult = computerMove();
        let userMove = 'paper';
            if (userMove === 'paper' && computerMoveResult === 'rock') {
                alert (`You win!`);
            } else if (userMove === 'paper' && computerMoveResult === 'paper') {
                alert (`You tie!`);
            } else if (userMove == 'paper' && computerMoveResult === 'scissors') {
                alert (`You lose!`);
            }
        computerMove();

        alert (`You picked ${userMove}. The computer picked ${computerMove()}`);
    };

//create a function for the when the user picks scissors
     function youPickedScissors() {
        let computerMoveResult = computerMove();
        let userMove = 'scissors';
            if (userMove === 'scissors' && computerMoveResult === 'rock') {
                alert (`You lose!`);
            } else if (userMove === 'scissors' && computerMoveResult === 'paper') {
                alert (`You win!`);
            } else if (userMove === 'scissor' && computerMoveResult === 'scissors') {
                alert (`You tie!`);
            };
        computerMove();

        alert (`You picked ${userMove}. The computer picked ${computerMove()}`);
     };

