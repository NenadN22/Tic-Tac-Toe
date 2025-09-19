function Gameboard () {
    let board = [" "," "," ",
        " "," "," ",
        " "," "," "
    ]

    function addMark(index,mark) {
        if(board[index] === " ") {
            board[index] = mark
        } else {
            console.log("You cant place mark there")
        }
        return board;
    }
    let getBoard = () => board;
    return {
        getBoard,
        addMark
    }
}
function GameFlow () {
   const game = Gameboard()
    function Player (name,mark) {
        return {
            name: name,
            mark: mark
        }
    }
    let winningCombinations = [[0,1,2],[0,4,8],[0,3,6]
[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
    let Player1 = Player('Player1','X');
    let Player2 = Player('Player2', 'O');
    let Players = [Player1,Player2];
    let activePlayer = Players[0]
    function switchPlayers () {
        activePlayer = activePlayer  === Players[0] ? Players[1] : Players[0]
    }

    function checkWinner() {
        let board = game.getBoard()
        let PlayerOneCombination = []
        let PlayerTwoCombination = []
        for(i = 0; i < board.length; i++) {
            if(board[i] === 'X') {
                PlayerOneCombination.push(i)
                return PlayerOneCombination
            } else if (board[i] === 'O') {
                PlayerTwoCombination.push(i)
                return PlayerTwoCombination
            }
            
            

        }
        
    }
    game.addMark(0, activePlayer.mark)
    checkWinner()
    
}

GameFlow()


