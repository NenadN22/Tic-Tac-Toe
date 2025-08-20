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
    console.log(board)

}

function Cell () {
    let value = 0;
    return value;
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

const switchActivePlayer = () => {
    activePlayer =  activePlayer === players[0] ? players[1] ? players[0]
}

} 
