// 1. Napraviti Tablu

function Gameboard () {
   let board = [" ", " ", " ",
        " "," "," ",
        " "," "," "
    ]
    const getBoard = () => board 

    const availableCells = ()  => {
        let available = [];
        let element = " ";
        let idx = board.indexOf(element)
        while(idx !== -1) {
            available.push(idx)
            idx = board.indexOf(element, idx + 1);
        }
        console.log(available)

        
    }
    
    const addMark = (index,mark) => {
        let availableCells = board;
        if (availableCells[index] === " ") {
            availableCells[index] = mark
        }
        
    }
    availableCells()
    return {getBoard,addMark}
}

function GameFlow() {
    function Player(name,mark) {
        return {
            name: name,
            mark: mark
        };
    }
    // Kreirati igrace
    let playerOne = Player('Player One', 'X');
    let playerTwo = Player('PlayerTwo' , 'O');
    let players = [playerOne,playerTwo]
    // Smjenjivati poteye igračima
    let activePlayer = players[0]
    const switchPlayersTurns = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
        const getActivePlayer = () => activePlayer
        console.log('Active Player is now: ', activePlayer)

    }
    switchPlayersTurns()
    return players
    
}

console.log(GameFlow())
Gameboard()