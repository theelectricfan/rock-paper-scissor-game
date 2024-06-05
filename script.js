function getComputerChoice() {
	compChoice = Math.floor(Math.random() * 3);
	switch (compChoice) {
		case 0:
			return "Rock";
		case 1:
			return "Paper";
		case 2:
			return "Scissor";
	}
}

// function getHumanChoice(){
//     userChoice=prompt("What do you choose", "Enter 'Rock', 'Scissor' or 'Paper'").toLowerCase();
//     switch(userChoice){
//         case 'rock': return 'Rock';
//         case 'paper': return 'Paper';
//         case 'scissor': return 'Scissor';
//         default:
//             console.log("Dumb human can't read, lol!");
//             return null;
//     }
// }

function getHumanChoice(e) {
	if (e.target.classList.contains("rock-button")) {
		return "Rock";
	} else if (e.target.classList.contains("paper-button")) {
		return "Paper";
	} else if (e.target.classList.contains("scissor-button")) {
		return "Scissor";
	} else {
		return null;
	}
}

function playGame(e) {
	let results = document.querySelector(".results");
	// results.setAttribute('style', 'white-space:pre;')
	results.textContent = "";
	let userChoice = getHumanChoice(e);
	let compChoice = getComputerChoice();
	function playRound(userChoice, compChoice) {
		if (
			(userChoice === null) |
			((userChoice === "Rock") & (compChoice === "Paper")) |
			((userChoice === "Paper") & (compChoice === "Scissor")) |
			((userChoice === "Scissor") & (compChoice === "Rock"))
		) {
			results.textContent += `You lose! ${compChoice} beats ${userChoice}.`;
			computerScore += 1;
		} else if (
			((compChoice === "Rock") & (userChoice === "Paper")) |
			((compChoice === "Paper") & (userChoice === "Scissor")) |
			((compChoice === "Scissor") & (userChoice === "Rock"))
		) {
			results.textContent += `You win! ${userChoice} beats ${compChoice}.`;
			humanScore += 1;
		} else {
			results.textContent += `It's a draw. You chose ${userChoice} and computer chose ${compChoice}`;
		}
	}
	playRound(userChoice, compChoice);
	results.textContent += `\r\nYour score ${humanScore}, computer score ${computerScore}`;
	if (humanScore === 5 || computerScore === 5) {
		if (humanScore === 5) {
			results.textContent += "\r\nYou won the game!";
		} else {
			results.textContent += "\r\nComputer won the game!";
		}
		results.textContent += "\nGame over!";
		humanScore = 0;
		computerScore = 0;
	}
}

let humanScore = 0;
let computerScore = 0;

let body = document.querySelector("body");
body.addEventListener("click", playGame);
