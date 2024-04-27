function getComputerChoice(){
    compChoice=Math.floor(Math.random()*3);
    switch(compChoice){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissor';
    }
}

