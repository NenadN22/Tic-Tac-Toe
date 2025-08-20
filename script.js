function gameBoard () {
    let row = 3;
    let column = 3;
    let board = []

    for (let i = 0; i < row; i++) {
        board[i] = []
        for (let j  = 0; j < column; j++ ) {
            board[i].push(Cell())
        }
        
    }
    const getBoard = () => board;
    const dropMark = (row,column,player) => {
        if(board[row][column].getValue() === 0 ) {
            board[row][column].addMark(player);
        }
    };
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()));
        console.log(boardWithCellValues);
    };
    return {
        getBoard, dropMark ,printBoard
    };
   


}

function Cell () {
    let value = 0;
    const getToken = (player) => {
        value = player;
    };
    const getValue = () => value;
    return {
        getToken,
        getValue
    };
}

function ControlGame (
    playerOneName = 'Player One',
    playerTwoName = 'Player Two'
) {
    const board = gameBoard()
    const players = [{
        name: playerOneName,
        mark: 'X',
    }, 
    {
        name: playerTwoName,
        mark: 'O'

    }
];
let activePlayer = players[0]

const switchPlayerTurn = () => {
    activePlayer =  activePlayer === players[0] ? players[1] : players[0];
};
const getActivePlayer = () => activePlayer
const printNewRound = () => {
    board.printBoard();
}

} 
