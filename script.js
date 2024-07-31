document.addEventListener("DOMContentLoaded", function() {
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreElement = document.querySelector('.resultHuman .score');
    const computerScoreElement = document.querySelector('.resultCom .score');
    const playerSignElement = document.querySelector('.resultHuman .sign');
    const computerSignElement = document.querySelector('.resultCom .sign');

    const choices = ['rock', 'paper', 'scissors'];
    const signs = {
        'rock': '✊',
        'paper': '🖐',
        'scissors': '✌️'
    };

    document.querySelectorAll('.choose > div').forEach(choiceElement => {
        choiceElement.addEventListener('click', function() {
            const playerChoice = this.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            playerSignElement.textContent = signs[playerChoice];
            computerSignElement.textContent = signs[computerChoice];

            const result = determineWinner(playerChoice, computerChoice);
            updateScores(result);
            checkForWinner();
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return 'draw';
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'player';
        } else {
            return 'computer';
        }
    }

    function updateScores(result) {
        if (result === 'player') {
            playerScore++;
            playerScoreElement.textContent = `Player : ${playerScore}`;
        } else if (result === 'computer') {
            computerScore++;
            computerScoreElement.textContent = `Computer : ${computerScore}`;
        }
    }

    function checkForWinner() {
        if (playerScore === 5 || computerScore === 5) {
            let winner = playerScore === 5 ? 'Player' : 'Computer';
            showPopup(`${winner} wins the game!`);
            resetGame();
        }
    }
    
    function showPopup(message) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popup-message');
        popupMessage.textContent = message;
        popup.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
        `;
    }
    
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        playerScoreElement.textContent = 'Player : 0';
        computerScoreElement.textContent = 'Computer : 0';
        playerSignElement.textContent = '?';
        computerSignElement.textContent = '?';
    }
});
