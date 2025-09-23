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
    let winningCombinations = [[0,1,2],[0,4,8],[0,3,6],
[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
    let Player1 = Player('Player1','X');
    let Player2 = Player('Player2', 'O');
    let Players = [Player1,Player2];
    let activePlayer = Players[0]
    function switchPlayers () {
        activePlayer = activePlayer  === Players[0] ? Players[1] : Players[0]
    }
    const getActivePlayer = () => activePlayer
    function PlayersCombinations() {
        let board = game.getBoard()
        let PlayerOneCombination = []
        let PlayerTwoCombination = []
        for(let i = 0; i < board.length; i++) {
            if(board[i] === 'X') {
                PlayerOneCombination.push(i)
            } else if (board[i] === 'O') {
                PlayerTwoCombination.push(i)
            }  
        }
        console.log(PlayerOneCombination)
        console.log(PlayerTwoCombination)
        return {PlayerOneCombination,PlayerTwoCombination}
        
    }

    function checkWinner () {
        let combos = PlayersCombinations()
        let winner = 'No One Win Keep Playing' ;
        for(let i = 0; i < winningCombinations.length; i++) {
            if(winningCombinations[i].every(val => combos.PlayerOneCombination.includes(val))){
                winner = 'Player One Win'
            }  else if (winningCombinations[i].every(val => combos.PlayerTwoCombination.includes(val))) {
                winner = 'Player Two Win'
            }
             
        }
        console.log(winner)   
    }
}

function ScreenController() {
    let game = GameFlow()
    let playerTurnDiv = document.querySelector('.turn')
    let container = document.querySelector('.container');
    let screenBoard = document.querySelector('.board');
    const updateScreen = () => {
        screenBoard.textContent = "";
        const boardForScreen = game.getBoard();
        const activePlayer  = game.getActivePlayer();
        playerTurnDiv.textContent = `${activePlayer}'s Turn...`
        board.forEach((index) => {
            console.log(board)
            console.log(index)
            const divCell = document.createElement('div')
            divCell.classList.add('cell')
            divCell.dataset.index = index
            screenBoard.appendChild(divCell)
        })
    }
    updateScreen()
}
ScreenController()
GameFlow()

