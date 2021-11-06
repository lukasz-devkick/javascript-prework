let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId){
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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput)

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        return 'Remis!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        return 'Wygrałeś!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        return 'Przegrałeś!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
        return 'Oszukujesz!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        return 'Przegrałeś!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        return 'Remis!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        return 'Wygrałeś!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
        return 'Oszukujesz!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        return 'Wygrałeś!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        return 'Przegrałeś!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        return 'Remis!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
        return 'Oszukujesz!';
    }
}

let Result = displayResult(computerMove, playerMove)

printMessage (Result);