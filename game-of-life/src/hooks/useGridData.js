import { useEffect, useState } from "react";
// import { useImmer } from "use-immer";

export default function useGridData() {
  const initializeGrid = () => {
    let grid = [];
    for (let row = 0; row < 10; row++) {
      const newRow = [];
      for (let column = 0; column < 10; column++) {
        if (
          (row === 4 && column === 4) ||
          (row === 5 && column === 5) ||
          (row === 6 && (column === 3 || column === 4 || column === 5))
        ) {
          newRow.push(true);
        } else {
          newRow.push(false);
        }
      }
      grid.push(newRow);
    }
    return grid;
  };

  const [grid, setGrid] = useState(initializeGrid());
  console.log(grid);
  // const newUpdate = [
  //   [4, 4],
  //   [5, 5],
  //   [6, 5],
  //   [6, 4],
  //   [6, 3],
  // ];

  // const updateSquares = (update) => {
  //   updateGrid((draft) => {
  //     for (let i = 0; i < update[0].length; i++) {}
  //   });
  // };

  //   useEffect(() => {
  //     setGrid([
  //       ...grid,
  //       (grid[4][4] = true),
  //       (grid[5][5] = true),
  //       (grid[6][5] = true),
  //       (grid[6][4] = true),
  //       (grid[6][3] = true),
  //     ]);
  //   }, []);
  return { grid };
}

// this.grid[4][4] = true;
// this.grid[5][5] = true;
// this.grid[6][5] = true;
// this.grid[6][4] = true;
// this.grid[6][3] = true;
