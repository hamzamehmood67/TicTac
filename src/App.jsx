import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import { useState } from "react";
import Logs from "./Components/Logs"
import {WINNING_COMBINATIONS} from "../winning-combinations"
import GameOver from "./Components/GameOver";

const initalGameBoard=[
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
function getActivePlayer(game)
{
  let activePlayer='X';
  if(game.length>0 && game[0].player==='X') activePlayer='O';

  return activePlayer;
}
function deriveWinner(gameTurn, gameBoard){
  let winner=undefined;

  for( let turn of gameTurn)
  {
      const { square, player}= turn;
      const {row, col}=square;
      gameBoard[row][col]=player;
  }

 
  for( const combination of WINNING_COMBINATIONS)
  {
    const first= gameBoard[combination[0].row][combination[0].column];
    const second=gameBoard[combination[1].row][combination[1].column];
    const third=gameBoard[combination[2].row][combination[2].column];

    if(first && first===second && first===third)
    {
      winner=first;
    }
  }

  return winner;
}

function deriveGameBoard(gameTurn)
{
  const gameBoard=[...initalGameBoard.map(innerArra=> [...innerArra ])];
  return gameBoard;
}

function App() { 

  const [gameTurn, setGameTurn]=useState([]);
  function rematch(){
    setGameTurn([])
   }
   
const gameBoard=deriveGameBoard(gameTurn);
 let winner=deriveWinner(gameTurn, gameBoard)
  const draw=gameTurn.length===9 && !winner;
  const activePlayer=getActivePlayer(gameTurn);
  
  function handleOnSelectSquare(rowIdx, colIdx)
  {
    setGameTurn(prevTurn=> {
      let currPlayer=getActivePlayer(prevTurn);
      const updateTurn=[{square:{row: rowIdx, col: colIdx}, player: currPlayer },...prevTurn];
      return updateTurn;
    })
  }

  return (
    <main>
      <ol id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Hamza" Symbol="X" isActive={activePlayer==='X'}/>
          <Player name="Zeeshan" Symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        {winner!==undefined || draw===true ? <GameOver btnClick={rematch} winner={winner}/>: undefined}
        <GameBoard board={gameBoard} isSelect={handleOnSelectSquare} ActivePlayer={activePlayer}/>
      </ol>
     <Logs turns={gameTurn} />
    </main>
  );
}

export default App;
