function Gameboard () {
    let board = [" "," "," ",
        " "," "," ",
        " "," "," "
    ]
    
}
function GameFlow () {
    function Player (name,mark) {
        return {
            name: name,
            mark: mark
        }
    }
    let Player1 = Player('Player1','X');
    let Player2 = Player('Player2', 'O');
    let Players = [Player1,Player2];
    let activePlayer = Players[0]
    function switchPlayers () {
        activePlayer = activePlayer  === Players[0] ? Players[1] : Players[0]
        return activePlayer
    }
    
}
GameFlow()
