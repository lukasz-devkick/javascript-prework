 
{
    const playGame = function(playerInput) {
    
        clearMessages()
    
        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const getMoveName = function(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            }
        }

        const computerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);

        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput)

        printMessage('Twój ruch to: ' + playerMove);

        const displayResult = function (argComputerMove, argPlayerMove) {
            console.log('moves:', argComputerMove, argPlayerMove);
            if ((argComputerMove == 'kamień' && argPlayerMove == 'kamień')
                || (argComputerMove == 'papier' && argPlayerMove == 'papier')
                || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')
            ) {
                return 'Remis!';
            } else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier')
                || (argComputerMove == 'papier' && argPlayerMove == 'nożyce')
                || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
            ) {
                playerScore++;
                return 'Wygrałeś!';
            } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
                || (argComputerMove == 'papier' && argPlayerMove == 'kamień')
                || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
            ) {
                computerScore++;
                return 'Przegrałeś!';
            }
            else { return 'Oszukujesz' }
        }

        const result = displayResult(computerMove, playerMove)
        console.log('Result ', result);

        printMessage(result);
    }
    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
        updateScore();
    });
    document.getElementById('play-papier').addEventListener('click', function () {
        playGame(2);
        updateScore();
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
        updateScore();
    });

    let playerScore = 0;
    let computerScore = 0;

    const updateScore = function() {
        const playerScorePara = document.getElementById('playerScore');
        const computerScorePara = document.getElementById('computerScore');

        playerScorePara.textContent = `Player: ${playerScore}`;
        computerScorePara.textContent = `Computer: ${computerScore}`;
    }
}