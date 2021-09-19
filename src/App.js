import './App.css';

import { Player } from './player/'

const player = document.getElementById('webvtt-player')


function App() {
  return (
    <div className="App">
      <h2>Please work</h2>
      <Player
        audio={player.dataset.audio}
        transcript={player.dataset.transcript}
        preload={true} />
    </div>
  );
}

export default App;
