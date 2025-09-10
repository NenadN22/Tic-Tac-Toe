function Gameboard () {
    let board = [" "," "," ",
        " "," "," ",
        " "," "," "
    ]
    function addMark(index,mark) {
        if(board[index] === " ") {
           board[index] = mark
        } else {
            console.log("You Cant Place Here ")
        }
        return board;    
    }
    let getBoard = () => board
    function PlayersCombination() {
        let PlayerOneCombination = []
        let PlayerTwoCombination = []
        for(let i = 0; i < board.length; i++) {
            if(board[i] === 'X') {
                PlayerOneCombination.push(i)
                
            }else if (board[i] === 'O') {
                PlayerTwoCombination.push(i)
            }
            
        }
        return{PlayerOneCombination,PlayerTwoCombination}
        
    }
    
 
    return {addMark,getBoard,PlayersCombination}
}

function gameFlow () {
    let board = Gameboard()
    function Players (name,mark)  {
        return {
            name: name,
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
  [2, 4, 6]  
    ];
    
    function checkWinner() {
        for(let winning of winningCombinations) {
            if(winning.every(element => board.PlayersCombination().PlayerOneCombination.includes(element))) {
                console.log("Player One Win")
            } else if (winning.every(element => board.PlayersCombination().PlayerTwoCombination.includes(element))) {
                console.log('Player Two Win')
            }
        }

    }
    let PlayerOne = Players('PlayerOne', 'X');
    let PlayerTwo = Players('PlayerTwo', 'O');
    const players = [PlayerOne,PlayerTwo]
    let activePlayer = players[0]
    function SwitchPlayers () {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
        return activePlayer
    }
    
    return {
        checkWinner,
        activePlayer,

    }
}

function ScreenController () {
    const game = gameFlow();
    const GameBoard = Gameboard()
    const playerTurnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');
    const updateScreen  = () => {
        boardDiv.textContent = " "
    }
    const board = GameBoard.getBoard()
    const activePlayer  = game.activePlayer
    console.log(activePlayer)

}
ScreenController()
gameFlow()