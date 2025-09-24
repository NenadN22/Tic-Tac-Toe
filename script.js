function gameboard () {
    let board =  [" "," "," ",
        " "," "," ",
        " "," "," "
    ]
    function addMark(index,mark) {
        if(board[index] === " ") {
            board[index] = mark;
        }else {
            console.log('You Cant Place Mark Here');
        }
    }

    let GetBoard = () => board;
    return {addMark,GetBoard}
}
function Gameflow() {
    let game = gameboard()
    let board = game.GetBoard()
    function Player(name,mark) {
        return {name : name,
                mark: mark
            }
        }
    const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    ];
    function PlayersCombinations() {
        let PlayerOneCombination = []
        let PlayerTwoCombination  = []
        for(let i = 0; i < board.length; i++) {
            if (board[i] === "X") {
                PlayerOneCombination.push(i)
            } else if (board[i] ==='O') {
                PlayerTwoCombination.push(i)
            } 
        }
        return {PlayerOneCombination,PlayerTwoCombination}
    }
    let Player1 = Player('Player1', 'X');
    let Player2 = Player('Player2', 'O');
    let Players = [Player1,Player2]
    let activePlayer = Players[0]
    function switchPlayer() {
        activePlayer = activePlayer === Players[0] ? Players[1] : Players[0]
        return activePlayer
    }
    function checkWinner() {

    }
    game.addMark(0,activePlayer.mark)
    game.addMark(1,activePlayer.mark)
    switchPlayer()
    game.addMark(3,activePlayer.mark)
    PlayersCombinations()
    console.log(PlayersCombinations())
}
Gameflow()

