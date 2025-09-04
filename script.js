function Gameboard () {
    let board = [" "," "," ",
        " "," "," ",
        " "," "," "
    ]
    function addMark(index,mark) {
        board[index] === " ";
        board[index] = mark
        return board;
        
    }
    let getBoard = () => board
    return {addMark,getBoard}
}

function gameFlow () {
    let board = Gameboard()
    function Players (name,mark)  {
        return {
            name: name,
            mark: mark
        }
        

    }
    let PlayerOne = Players('PlayerOne', 'X');
    let PlayerTwo = Players('PlayerTwo', 'O');
    const players = [PlayerOne,PlayerTwo]
    console.log(players[1])
    let addMark = Gameboard()
    console.log(board.addMark(1,PlayerOne.mark))
}
gameFlow()