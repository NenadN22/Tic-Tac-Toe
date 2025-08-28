function Gameboard () {
    let board = [" "," "," ",
        " "," "," ",
        " "," "," ",
    ]
    const getBoard = () => board;

    function addMark (index,mark) {
        board[index] = " ";
        board[index] = mark;

    }
    addMark(2,'X')
     function availableCells(arr) {
        let Cells = []
        let element = " "
        let idx = arr.indexOf(element);
        while (idx !== -1) {
            Cells.push(idx)
            idx = arr.indexOf(element, idx  + 1);
        }
        
        console.log(Cells) 

    }
    availableCells(getBoard())
    console.log(getBoard())
    return {getBoard,addMark}

}

function Gameflow() {
    function Player(name,mark) {
        return {
            name: name,
            mark: mark
        };
    }
    let PlayerOne = Player('PlayerOne', 'X');
    let PlayerTwo = Player('PlayerTwo', 'O');
    let Players = [PlayerOne,PlayerTwo];
    let activePlayer = Players[0]
    let switchPlayersTurn = () => {
        activePlayer = activePlayer  === Players[0] ? Players[1] : Players[0];
        return activePlayer
    }
    console.log(switchPlayersTurn())
    return {switchPlayersTurn}
}                  
Gameflow()
Gameboard()