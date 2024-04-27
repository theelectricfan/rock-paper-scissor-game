function getComputerChoice(){
    compChoice=Math.floor(Math.random()*3);
    switch(compChoice){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissor';
    }
}

function getHumanChoice(){
    userChoice=prompt("What do you choose", "Enter 'Rock', 'Scissor' or 'Paper'").toLowerCase();
    switch(userChoice){
        case 'rock': return 'Rock';
        case 'paper': return 'Paper';
        case 'scissor': return 'Scissor';
        default: 
            console.log("Dumb human can't read, lol!");
            return null;
    }
}


function playGame(){
    function playRound(userChoice, compChoice){
        if(userChoice===null | (userChoice==='Rock'&compChoice==='Paper')|(userChoice==='Paper'&compChoice==='Scissor')|(userChoice==='Scissor'&compChoice==='Rock')){
            console.log(`You lose! ${compChoice} beats ${userChoice}.`);
            computerScore+=1;
        }
        else if((compChoice==='Rock'&userChoice==='Paper')|(compChoice==='Paper'&userChoice==='Scissor')|(compChoice==='Scissor'&userChoice==='Rock')){
            console.log(`You win! ${userChoice} beats ${compChoice}.`);
            humanScore+=1;
        }
        else{
            console.log(`It's a draw. You chose ${userChoice} and computer chose ${compChoice}`);
        }
    }
    
    let humanScore=0;
    let computerScore=0;

    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    console.log(`Your score ${humanScore}, computer score ${computerScore}`);
}

