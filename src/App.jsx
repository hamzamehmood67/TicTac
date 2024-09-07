import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";

function App() {
  return (
    <main>
      <ol id="game-container">
        <ol id="players">
          <Player name="Hamza" Symbol="X"/>
          <Player name="Zeeshan" Symbol="O"/>
        </ol>
        <GameBoard/>
      </ol>
      Loogs
    </main>
  );
}

export default App;
