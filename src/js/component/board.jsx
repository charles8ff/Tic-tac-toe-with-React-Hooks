import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { MyModal } from "./mymodal.jsx";
import { Square } from "./square.jsx";

export const Board = props => {
	const [player, setPlayer] = useState(true);
	const winnerDiv = document.querySelector("#winnerDiv");
	const [firstPlayer, setFirstPlayer] = useState("");
	const [secondPlayer, setSecondPlayer] = useState("");
	const [board, setBoard] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	]);

	const SquareClick = (e, index) => {
		e.target.classList.remove("bg-dark");
		e.target.classList.add("bg-info");
		if (board[index] === null) {
			if (player) {
				board.splice(index, 1, "X");
			} else {
				board.splice(index, 1, "O");
			}
			setPlayer(!player);
		}
	};

	const resetBoard = () => {
		setPlayer(true);
		setBoard([null, null, null, null, null, null, null, null, null]);
		winnerDiv.classList.add("d-none");
		winnerDiv.classList.remove("d-flex", "align-items-center");
		setFirstPlayer("");
		setSecondPlayer("");
	};

	let boardInHTML = board.map((elem, index) => {
		return (
			<Square
				key={index}
				squareSymbol={elem}
				onMyClick={e => {
					SquareClick(e, index);
				}}
			/>
		);
	});

	const winnerWizard = board => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}
		return null;
	};

	let winner = winnerWizard(board);

	useEffect(
		() => {
			if (winner == "X") {
				setFirstPlayer("LeFirstPlayer");
				winnerDiv.classList.remove("d-none");
				winnerDiv.classList.add("d-flex", "align-items-center");
			}
			if (winner == "O") {
				setSecondPlayer("LeSecondPlayer");
				winnerDiv.classList.remove("d-none");
				winnerDiv.classList.add("d-flex", "align-items-center");
			}
		},
		[winner]
	);

	return (
		<>
			<div className="row d-flex justify-content-center align-items-center">
				<div className="offset-3 col-5 justify-content-center align-items-center">
					<span
						className="d-none alert alert-success justify-content-center"
						id="winnerDiv">
						The Winner is
						{" " + firstPlayer}
						{" " + secondPlayer}
					</span>
				</div>
				<div className="col-4 d-flex justify-content-end mt-2">
					<button
						className="btn btn-warning mb-3 resetButton"
						onClick={resetBoard}>
						RESET BOARD
					</button>
				</div>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="row d-flex justify-content-center align-self-center flex-wrap mt-2 boardContainer">
					{boardInHTML}
				</div>
			</div>
		</>
	);
};
