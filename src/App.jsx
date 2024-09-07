import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import { useState } from "react";
import Logs from "./Components/Logs"

function App() {
  const [gameTurn, setGameTurn]=useState([]);
  const [activePlayer, setActivePlayer]=useState('X');

  function handleOnSelectSquare()
  {
    setActivePlayer((currActive)=> currActive==='X'? 'O': 'X')

  }

  return (
    <main>
      <ol id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Hamza" Symbol="X" isActive={activePlayer==='X'}/>
          <Player name="Zeeshan" Symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard isSelect={handleOnSelectSquare} ActivePlayer={activePlayer}/>
      </ol>
     <Logs/>
    </main>
  );
}

export default App;
