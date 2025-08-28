function Gameboard () {
    let board = [" "," "," ",
        " "," "," ",
        " "," "," ",
    ]
    const getBoard = () => board;
    return {getBoard}
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