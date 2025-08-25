// 1. Napraviti Tablu

function Gameboard () {
   let board = [" ", " ", " ",
        " "," "," ",
        " "," "," "
    ]
    const getBoard = () => board 
    return {getBoard}
}

function GameFlow() {
    function Player(name,mark) {
        return {
            name: name,
            mark: mark
        };
    }
    let playerOne = Player('Player One', 'X');
    let playerTwo = Player('PlayerTwo' , 'O');
    let players = [playerOne,playerTwo]
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