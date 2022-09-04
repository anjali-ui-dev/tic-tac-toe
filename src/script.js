let currentPlayer = 1;
const allIds = ['1','2','3','4','5','6','7','8','9'];

function cellClicked(id) {
    if(currentPlayer === 1) {
        document.getElementById(id).value = 'X';
        currentPlayer = 0;
    } else {
        document.getElementById(id).value = 'O';
        currentPlayer = 1;
    }
    document.getElementById(id).disabled = true;
    document.getElementById('status').innerHTML = currentPlayerTurn();
}

function currentPlayerTurn() {
    if(currentPlayer === 1) {
        return "Player X's turn";
    } else {
        return "Player O's turn";
    }
}

function gameStatusCheck() {
    let c1,c2,c3,c4,c5,c6,c7,c8,c9;
    c1 = document.getElementById('1').value;
    c2 = document.getElementById('2').value;
    c3 = document.getElementById('3').value;
    c4 = document.getElementById('4').value;
    c5 = document.getElementById('5').value;
    c6 = document.getElementById('6').value;
    c7 = document.getElementById('7').value;
    c8 = document.getElementById('8').value;
    c9 = document.getElementById('9').value;

    if((c1 === 'X' && c2 === 'X' && c3 === 'X') ||
        (c1 === 'X' && c4 === 'X' && c7 === 'X') ||
        (c1 === 'X' && c5 === 'X' && c9 === 'X') ||
        (c2 === 'X' && c5 === 'X' && c8 === 'X') ||
        (c3 === 'X' && c6 === 'X' && c9 === 'X') ||
        (c3 === 'X' && c5 === 'X' && c7 === 'X') ||
        (c4 === 'X' && c5 === 'X' && c6 === 'X') ||
        (c7 === 'X' && c8 === 'X' && c9 === 'X')) {
            resetAllCells('X');
    } else if((c1 === 'O' && c2 === 'O' && c3 === 'O') ||
        (c1 === 'O' && c4 === 'O' && c7 === 'O') ||
        (c1 === 'O' && c5 === 'O' && c9 === 'O') ||
        (c2 === 'O' && c5 === 'O' && c8 === 'O') ||
        (c3 === 'O' && c6 === 'O' && c9 === 'O') ||
        (c3 === 'O' && c5 === 'O' && c7 === 'O') ||
        (c4 === 'O' && c5 === 'O' && c6 === 'O') ||
        (c7 === 'O' && c8 === 'O' && c9 === 'O')) {
            resetAllCells('O');
    } else if ((c1 == 'X' || c1 == 'O') && (c2 == 'X'
        || c2 == 'O') && (c3 == 'X' || c3 == 'O') &&
        (c4 == 'X' || c4 == 'O') && (c5 == 'X' ||
        c5 == 'O') && (c6 == 'X' || c6 == 'O') &&
        (c7 == 'X' || c7 == 'O') && (c8 == 'X' ||
        c8 == 'O') && (c9 == 'X' || c9 == 'O')) {
            document.getElementById('status').innerHTML = "Match Tie!!!!";
            document.getElementById("status").style.color = "red";
            window.alert('Match Tie');
    }

}

function resetAllCells(player) {
    document.getElementById('status').innerHTML = `Player ${player} Won`;
    document.getElementById("status").style.color = "green";
    allIds.map(val => {
        document.getElementById(val).disabled = true;
    });
}

function resetGame() {
    allIds.map(val => {
        document.getElementById(val).value = '';
        document.getElementById(val).disabled = false;
    });
    document.getElementById("status").style.color = "black";
    currentPlayer = 1;
    document.getElementById("status").innerHTML = currentPlayerTurn();
}
