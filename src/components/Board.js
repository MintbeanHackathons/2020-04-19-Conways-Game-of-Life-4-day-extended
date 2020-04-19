import React, { useEffect, useState } from 'react';

function Board(props) {
	const canvasRef = React.useRef(null);
	const [ctx, setCtx] = useState();

	//generating board grid
	// const generateGrid = () => {
	// 	const tableRow = [];
	// 	for (let row = 0; row < props.size; row++) {
	// 		const tableData = [];
	// 		for (let column = 0; column < props.size; column++) {
	// 			tableData.push(
	// 				<td
	// 					key={`${row}, ${column}`}
	// 					className={props.boardStatus[row][column] ? 'alive' : 'dead'}
	// 				/>
	// 			);
	// 		} //end of column for
	// 		tableRow.push(<tr key={row}>{tableData}</tr>);
	// 	} //end of row for

	// 	return (
	// 		<table>
	// 			<tbody> {tableRow}</tbody>
	// 		</table>
	// 	);
	// };

	useEffect(() => {
		const context = canvasRef.current.getContext('2d');
		setCtx(context);
	}, []);

	const generateCanvas = () => {
		const dimension = props.size * 20;

		if (ctx !== undefined) {
			let cellSize = dimension / props.size;
			ctx.strokeStyle = '#e1e1e1';
			ctx.fillStyle = 'cadetblue';

			ctx.clearRect(0, 0, dimension, dimension);
			for (let row = 0; row < props.size; row++) {
				for (let column = 0; column < props.size; column++) {
					ctx.beginPath();
					ctx.rect(row * cellSize, column * cellSize, cellSize, cellSize);
					props.boardStatus[row][column] ? ctx.fill() : ctx.stroke();
				}
			}
		}

		return (
			<div className="canvas-container">
				<canvas ref={canvasRef} width={dimension} height={dimension} />
			</div>
		);
	};

	const finalGrid = generateCanvas();
	return finalGrid;
}

export default Board;
