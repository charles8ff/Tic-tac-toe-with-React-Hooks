import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


import { MyModal } from "./mymodal.jsx";

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

	const handleClick = e => {
		if (board[e.target.id] === null) {
			if (player) {
				board.splice(e.target.id, 1, "X");
			} else {
				board.splice(e.target.id, 1, "O");
			}
			setPlayer(!player);
		}
	};

	const reset = e => {
		setPlayer(true);
		setBoard([null, null, null, null, null, null, null, null, null]);
		winnerDiv.classList.add("d-none");
		winnerDiv.classList.remove("d-flex", "align-items-center");
		setFirstPlayer("");
		setSecondPlayer("");
	};

	const calculateWinner = squares => {
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
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	};

	let winner = calculateWinner(board);

	useEffect(
		() => {
			if (winner == "X") {
				setFirstPlayer("FirstPlayer");
				winnerDiv.classList.remove("d-none");
				winnerDiv.classList.add("d-flex", "align-items-center");
			}
			if (winner == "O") {
				setSecondPlayer("SecondPlayer");
				winnerDiv.classList.remove("d-none");
				winnerDiv.classList.add("d-flex", "align-items-center");
			}
		},
		[winner]
	);

	return (
		<>
			<div className="row d-flex justify-content-center align-items-center mt-2 mb-0">
				<span className="d-none alert alert-success" id="winnerDiv">
					The Winer is
					{" " + firstPlayer}
					{" " + secondPlayer}
				</span>
			</div>
			<div className="board">
				<div className="row rowBoard">
					<div
						id="0"
						className="square"
						onClick={e => handleClick(e)}>
						{board[0]}
					</div>
					<div
						id="1"
						className="square"
						onClick={e => handleClick(e)}>
						{board[1]}
					</div>
					<div
						id="2"
						className="square"
						onClick={e => handleClick(e)}>
						{board[2]}
					</div>
				</div>
				<div className="row rowBoard">
					<div
						id="3"
						className="square"
						onClick={e => handleClick(e)}>
						{board[3]}
					</div>
					<div
						id="4"
						className="square"
						onClick={e => handleClick(e)}>
						{board[4]}
					</div>
					<div
						id="5"
						className="square"
						onClick={e => handleClick(e)}>
						{board[5]}
					</div>
				</div>
				<div className="row rowBoard">
					<div
						id="6"
						className="square"
						onClick={e => handleClick(e)}>
						{board[6]}
					</div>
					<div
						id="7"
						className="square"
						onClick={e => handleClick(e)}>
						{board[7]}
					</div>
					<div
						id="8"
						className="square"
						onClick={e => handleClick(e)}>
						{board[8]}
					</div>
				</div>
				<div className="row d-flex justify-content-center mt-2">
					<button
						className="btn btn-dark mb-3 resetButton"
						onClick={e => reset(e)}>
						RESET
					</button>
				</div>
			</div>
		</>
	);
};
