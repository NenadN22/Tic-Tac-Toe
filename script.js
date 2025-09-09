function Gameboard () {
    let board = [" "," "," ",
        " "," "," ",
        " "," "," "
    ]
    function addMark(index,mark) {
        board[index] === " ";
        board[index] = mark
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
    PlayersCombination()
 
    return {addMark,getBoard,PlayersCombination}
}

function gameFlow () {
    let board = Gameboard()
    let combinations = board.PlayersCombination
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
            if(winning.every(element => board.PlayerOneCombination.includes(element))) {
                console.log("Player One Win")
            } else if (winning.every(element => board.PlayerTwoCombination.includes(element))) {
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
  
    
    console.log(players[1])
    console.log(board.addMark(1,activePlayer.mark))
    checkWinner()
    SwitchPlayers()
    console.log(board.addMark(5,activePlayer.mark))
    checkWinner()
    SwitchPlayers()
    console.log(board.addMark(3,activePlayer.mark))
    checkWinner()
    SwitchPlayers()
    console.log(board.addMark(4,activePlayer.mark))
    checkWinner()
        SwitchPlayers()
    console.log(board.addMark(2,activePlayer.mark))
    checkWinner()

}
gameFlow()