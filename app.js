const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

possibleChoices.forEach(choice => {
    choice.addEventListener('click', e => {
        userChoice = e.target.id;
        userChoiceDisplay.textContent = userChoice;
        computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        computerChoiceDisplay.textContent = computerChoice;
        determineWinner();
    });
});

function determineWinner() {
    if (userChoice === computerChoice) {
        resultDisplay.textContent = 'Its a draw!';
        return;
    }

    switch (userChoice) {
        case 'rock':
            resultDisplay.textContent = (computerChoice === 'scissors') ? 'You win!' : 'You lose!';
            break;
        case 'paper':
            resultDisplay.textContent = (computerChoice === 'rock') ? 'You win!' : 'You lose!';
            break;
        case 'scissors':
            resultDisplay.textContent = (computerChoice === 'paper') ? 'You win!' : 'You lose!';
            break;
    }
}