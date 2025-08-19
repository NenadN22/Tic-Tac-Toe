function gameBoard() {
    function Cell () {
        let cell = 0;
        return cell
    }
    let rows = 3;
    let columns = 3;
    let board = []
    for (let i = 0; i < rows; i++ ){
        board[i] = []
        for (let j = 0; j < columns; j++ ) {
        board[i].push(Cell())
    }
 
}
    console.log(board)
}

let Player = function (name,mark) {
    let person = {};
    person.name  = name;
    person.mark = mark;
    return ({name,mark})
}
let player1 = Player('Player1', 'X')
let player2 = Player('Player2', 'O')
console.log(player1)
gameBoard();