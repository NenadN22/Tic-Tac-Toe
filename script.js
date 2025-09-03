function Gameboard () {
    let board = [" "," "," ",
        " "," "," ",
        " "," "," ",
    ]
    const getBoard = () => board;

    function addMark (index,mark) {
        if(board[index] ===" ") {
            board[index] = mark
        } else {
            console.log("Cant Place Here")
        }

    }
     function availableCells(arr) {
        let Cells = []
        let element = " "
        let idx = arr.indexOf(element);
        while (idx !== -1) {
            Cells.push(idx)
            idx = arr.indexOf(element, idx  + 1);
        }
        if(element !== " ") {
            console.log("Cant place here")
        } 
       return(Cells) 

    }
    function PlayersCombinations (arr) {
        return arr.reduce()
    }
 
    availableCells(getBoard())
    console.log(getBoard())
    return {getBoard,addMark,availableCells}
    

}

function Gameflow() {
    const gameboard = Gameboard()
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
    function winnerCombinations() {
        let combinations = [
            [0,1,2],[0,3,6],[0,4,8],[1,4,7],
            [2,5,8],[3,4,5],[6,3,0],[6,4,2],
            [2,4,6],[7,4,1],[8,5,2],[8,4,0]
        ]
    }
    function PlayRound (index) {
        gameboard.addMark(index,activePlayer.mark)
        console.log(gameboard.availableCells(gameboard.getBoard()))
        
        switchPlayersTurn()
        console.log(gameboard.getBoard())
    }
    PlayRound(1)
    console.log(switchPlayersTurn())

    return {switchPlayersTurn,PlayRound}
}
let game = Gameflow()
game.PlayRound(1)
game.PlayRound(2)
game.PlayRound(3)
     


