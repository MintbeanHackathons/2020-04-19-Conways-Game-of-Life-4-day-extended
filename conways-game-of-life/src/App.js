import React, { useState, useEffect } from 'react';
import Grid from './containers/grid';
import gridLife from './scripts/grid';

function App() {
  const width = 20;
  const height = 40;

  const [grid, setGrid] = useState(Array(width).fill(Array(height).fill(0)));
  const [playing, setPlaying] = useState(false);

  const handleCellClick = (x, y) => {
    if (playing) {
      return null;
    }
    const newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y] === 0) {
      newGrid[x][y] = 1;
    } else {
      newGrid[x][y] = 0;
    }
    setGrid(newGrid);
    return null;
  };

  const play = () => {
    setPlaying(!playing);
  };

  const nextStep = () => {
    const g = gridLife(grid);
    setGrid(g.genNext());
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (playing) {
      const timeout = setInterval(() => {
        nextStep();
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [playing, grid]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Conways Game of Life</h1>
        <p>
          by Carlos Del Real
        </p>
      </header>
      <main>
        <Grid grid={grid} handleCellClick={handleCellClick} />
        { playing ? <div>Playing !!</div> : null }
        { playing
          ? <button type="button" onClick={() => play()}>Stop</button>
          : <button type="button" onClick={() => play()}>Play</button>}
      </main>
    </div>
  );
}

export default App;
