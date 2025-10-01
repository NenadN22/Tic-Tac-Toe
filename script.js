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
        console.log(PlayerOneCombination)
        return {PlayerOneCombination,PlayerTwoCombination}
    }
    const playRound = (index) => {
        console.log(
            `Dropping${activePlayer.name}' s token into ${index}`
        )
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
        let winner = "Keep Play No One Win"
        let combos = PlayersCombinations()
        for(let i = 0; i < winningCombinations.length; i++) {
            if(winningCombinations[i].every((val) => combos.PlayerOneCombination.includes(val))) {
                winner =  'Player One Win'
            } else if (winningCombinations[i].every((val) => combos.PlayerTwoCombination.includes(val))) {
                winner = 'Player Two Win'
            } 
            return winner
        }
          
        
    }

    return {activePlayer,switchPlayer,checkWinner,board,addMark: game.addMark,playRound}
}
function screenUpdater() {
    let boardDiv = document.querySelector('.board');
    let screenGame = Gameflow()
    let boardScreen = screenGame.board
    function updateScreen() {
        boardDiv.textContent = " ";
        const activePlayer = screenGame.switchPlayer();
    boardScreen.forEach((cell,index) => {
        let cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.dataset.cell =  index;
        cellDiv.textContent = cell
        boardDiv.appendChild(cellDiv)

        })
    }
    updateScreen()
    const handleClick = (e)  =>{
        const selectedCell = e.target.dataset.cell;
        let index = parseInt(e.target.dataset.cell)
        if(!selectedCell) return
        selectedCell.textContent =  (screenGame.addMark(index,screenGame.activePlayer.mark))
        screenGame.playRound(selectedCell)
        updateScreen()
    }
    boardDiv.addEventListener('click',handleClick);

    updateScreen()
}
screenUpdater()
Gameflow()

