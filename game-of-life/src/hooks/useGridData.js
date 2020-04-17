import { useEffect, useState } from "react";
// import { useImmer } from "use-immer";

const initializeGrid = () => {
  let grid = [];
  for (let row = 0; row < 10; row++) {
    const newRow = [];
    for (let column = 0; column < 10; column++) {
      newRow.push(false);
    }
    grid.push(newRow);
  }
  grid[4][0] = true;
  grid[4][1] = true;
  grid[4][2] = true;
  grid[4][3] = true;
  grid[4][4] = true;
  grid[4][5] = true;
  grid[4][6] = true;
  grid[4][7] = true;
  grid[4][8] = true;
  grid[4][9] = true;

  return grid;
};

const checkNeighbourSquares = (grid, x, y) => {
  let aliveNeighbours = 0;
  if (x - 1 >= 0) {
    if (grid[x - 1][y] === true) {
      aliveNeighbours++;
    }
  }
  if (x - 1 >= 0 && y - 1 >= 0) {
    if (grid[x - 1][y - 1] === true) {
      aliveNeighbours++;
    }
  }
  if (y - 1 >= 0) {
    if (grid[x][y - 1] === true) {
      aliveNeighbours++;
    }
  }
  if (x + 1 < 10 && y - 1 >= 0) {
    if (grid[x + 1][y - 1] === true) {
      aliveNeighbours++;
    }
  }
  if (x + 1 < 10) {
    if (grid[x + 1][y] === true) {
      aliveNeighbours++;
    }
  }
  if (x + 1 < 10 && y + 1 < 10) {
    if (grid[x + 1][y + 1] === true) {
      aliveNeighbours++;
    }
  }
  if (y + 1 < 10) {
    if (grid[x][y + 1] === true) {
      aliveNeighbours++;
    }
  }
  if (x - 1 >= 0 && y + 1 < 10) {
    if (grid[x - 1][y + 1] === true) {
      aliveNeighbours++;
    }
  }
  return aliveNeighbours;
};

const actOnDead = (grid, x, y) => {
  return checkNeighbourSquares(grid, x, y) === 3;
};

const actOnAlive = (grid, x, y) => {
  const aliveNeighbours = checkNeighbourSquares(grid, x, y);

  return aliveNeighbours < 2 || aliveNeighbours >= 4 ? false : true;
};

const scanGrid = (grid) => {
  const copyGrid = JSON.parse(JSON.stringify(grid));
  const newGrid = JSON.parse(JSON.stringify(grid));
  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      if (copyGrid[row][column] === true) {
        newGrid[row][column] = actOnAlive(copyGrid, row, column);
      } else {
        newGrid[row][column] = actOnDead(copyGrid, row, column);
      }
    }
  }
  return newGrid;
};

export default function useGridData() {
  const [grid, setGrid] = useState(initializeGrid());

  useEffect(() => {
    const interval = setInterval(() => setGrid(scanGrid(grid)), 1000);

    return () => clearInterval(interval);
  }, [grid]);
  return { grid };
}
