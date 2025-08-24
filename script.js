let gameBoard = function () {
    let board = [" "," "," ",
        " "," "," ",
        " "," "," ",
    ]

return{board};
}
console.log(gameBoard())

let Players = function(name,mark) {
    let player = {}
    player.name = name;
    player.mark = mark;

    return player
}


let playerOne = Players('PlayerOne', 'X');
let playerTwo = Players('PlayerTwo', 'O');
