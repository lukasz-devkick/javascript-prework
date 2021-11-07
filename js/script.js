function playGame(playerInput) {
    
    clearMessages()
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput)

    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        if ((argComputerMove == 'kamień' && argPlayerMove == 'kamień')
            || (argComputerMove == 'papier' && argPlayerMove == 'papier')
            || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')
        ){return 'Remis!';}
        else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier')
            || (argComputerMove == 'papier' && argPlayerMove == 'nożyce')
            || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
        ){return 'Wygrałeś!';}
        else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
            || (argComputerMove == 'papier' && argPlayerMove == 'kamień')
            || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
        ) {return 'Przegrałeś!';}
        else {return 'Oszukujesz'}
    }

    let result = displayResult(computerMove, playerMove)

    printMessage(result);
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-papier').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
