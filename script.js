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
        default: console.log("Dumb human can't read, lol!");
    }
}