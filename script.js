//rock paper scissors game 

//the user clicks on rock
//target rock and save in a variable
const rock = document.querySelector(`.rock`)
//add event listener
rock.addEventListener('click', function(){
    youPickedRock();
});
    
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
    }

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
    };

//create a function for when the user picks paper
    function youPickedPaper(){
        let computerMoveResult = computerMove();
        let userMove = 'paper';
            if (usesMove === 'paper' && computerMoveResult === 'rock') {
                alert (`You w`)
            }
    }

    /*if(userMove === paper && computerMove === rock) {
        console.log(`You win!`);
    } else if (userMove === paper && computerMove == paper) {
        console.log(`You tie`);
    } else if (userMove === paper && computerMove === scissors) {
        console.log(`You lose`);
    }

    if(userMove === scissors && computerMove === rock) {
        console.log(`You lose!`);
    } else if (userMove === scissors && computerMove == paper) {
        console.log(`You win`);
    } else if (userMove === scissors && computerMove === scissors) {
        console.log(`You tie`);
    }
//user move and computer move are compared
//winner is determined
*/