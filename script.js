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
    console.log(Players[0])
}                  
Gameflow()