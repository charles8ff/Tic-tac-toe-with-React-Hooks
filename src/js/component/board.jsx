import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MyModal } from "./mymodal.jsx";
import { Square } from "./square.jsx";

export const Board = props => {
	const winnerDiv = document.querySelector("#winnerDiv");
	const [player, setPlayer] = useState(true);
	const [winnerPlayer, setWinnerPlayer] = useState("");
	const [board, setBoard] = useState(Array(9).fill(null));

	const SquareClick = (e, index) => {
		if (winner == null) {
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
		}
	};

	const resetBoard = () => {
		setPlayer(true);
		setBoard(Array(9).fill(null));
		winnerDiv.classList.add("d-none");
		winnerDiv.classList.remove("d-flex", "align-items-center");
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
		if (!board.some(elem => elem == null)) return "Tie";
		return null;
	};

	let winner = winnerWizard(board);

	const timeOut = () => {
		setTimeout(() => {
			winnerDiv.classList.add("d-none");
			winnerDiv.classList.remove("d-flex", "align-items-center");
			setBoard(Array(9).fill(null));
			setWinnerPlayer("");
		}, 3000);
	};

	useEffect(
		() => {
			if (winner == "X" || winner == "O") {
				setPlayer(true);
				winner == "X"
					? setWinnerPlayer(props.player1)
					: setWinnerPlayer(props.player2);
				winnerDiv.classList.remove("d-none");
				winnerDiv.classList.add("d-flex", "align-items-center");
				timeOut();
			} else if (winner == "Tie") {
				setWinnerPlayer("No One :_(");
				winnerDiv.classList.remove("d-none");
				winnerDiv.classList.add("d-flex", "align-items-center");
				timeOut();
			}
		},
		[winner]
	);

	return (
		<>
			<div className="row d-flex justify-content-center align-items-center">
				<div className="offset-2 col-7 justify-content-center align-items-center">
					<span
						className="d-none alert alert-success justify-content-center"
						id="winnerDiv">
						The Winner is
						{" " + winnerPlayer}
					</span>
				</div>
				<div className="col-3 d-flex justify-content-end mt-2">
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
MyModal.propTypes = {
	player1: PropTypes.string,
	player2: PropTypes.string
};
