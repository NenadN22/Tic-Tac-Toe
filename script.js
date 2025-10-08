function gameboard () {
    let board =  [" "," "," ",
        " "," "," ",
        " "," "," "
    ]
    function addMark(index,mark) {
        if(board[index] === " ") {
            board[index] = mark;
        } else {
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
    [2,4,6] 
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
    const switchPlayer = () => {
        activePlayer = activePlayer === Players[0] ? Players[1] : Players[0]
        
    }
   
    const getActivePlayer = () => activePlayer
    function checkWinner() {
        let isWinnerFound = false;
        let winner = "Keep Play No One Win"
        let combos = PlayersCombinations()  
        for(let i = 0; i < winningCombinations.length; i++) {
            if(winningCombinations[i].every((val) => combos.PlayerOneCombination.includes(val))) {
                winner =  ('Player One Win')
                isWinnerFound = true;
                break;
            } else if (winningCombinations[i].every((val) => combos.PlayerTwoCombination.includes(val))) {
                winner = ('Player Two Win');
                isWinnerFound = true;
                break
            }
            
        }
        for(let i = 0; i < board.length; i++) {
            if(!isWinnerFound && !board.includes(" ")) {
                 winner  = "It's a draw";
                
            }
           
            
        }
        return {winner,isWinnerFound}
          
        
    }

    return {activePlayer,switchPlayer,checkWinner,board,addMark: game.addMark,playRound,getActivePlayer,PlayersCombinations}
}
function screenUpdater() {
    let isOn = true;
    let boardDiv = document.querySelector('.board');
    let screenGame = Gameflow()
    let boardScreen = screenGame.board
    let resetButton = document.querySelector('.reset');
    let playerTurn = document.querySelector('.player-turn')
    let gameWinner = document.querySelector('.game-winner')
  
    function updateScreen() {
        if(isOn) {
        boardDiv.textContent = " ";
        boardScreen.forEach((cell,index) => {
        let cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.dataset.cell =  index;
        cellDiv.textContent = cell
        boardDiv.appendChild(cellDiv)
        })
    }
        
}

    const handleClick = (e)  =>{
        const selectedColumn = e.target.dataset.cell;
        if(!selectedColumn) return
        screenGame.addMark(selectedColumn,screenGame.getActivePlayer().mark)
        updateScreen()
        gameWinner.textContent = screenGame.checkWinner().winner
        if(screenGame.checkWinner().isWinnerFound){
            isOn = false;
        }
        
        screenGame.switchPlayer()
        screenGame.checkWinner()
        console.log(screenGame.checkWinner())
    }
    boardDiv.addEventListener('click',handleClick);
    updateScreen()
    resetButton.addEventListener('click', () => {
        screenGame = Gameflow();
        boardScreen = screenGame.board;
        gameWinner.textContent = " ";
        isOn = true;
        updateScreen()
        
    })
     
}
screenUpdater()

Gameflow()     