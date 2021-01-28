import React, { Fragment, useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Square } from "./square.jsx";
import { MyModal } from "./mymodal.jsx";

export function Home() {
	const [modalShow, setModalShow] = useState(false);
	const [turn, setTurn] = useState(true); //true is first player
	// const [where, setWhere] = useState();
	let symbolsWePlay = ["x", "o"];
	let isPlaying = null;

	//let Board = [null, null, null, null, null, null, null, null, null];
	const [Board, setBoard] = useState(new Array(9).fill(null));

	useEffect(
		() => {
			turn
				? (isPlaying = symbolsWePlay[0])
				: (isPlaying = symbolsWePlay[1]);
		},
		[Board]
	);
	function onUserClick(index) {
		// console.log(Board);
		// let newBoard = Board;
		// newBoard[index] = isPlaying; //fix setter
		// console.log(newBoard);
		// setBoard(newBoard);

		// console.log(newBoard);
		setTurn(!turn);
	}
	let BoardinHTML = Board.map((squareContent, indexOfSquare) => {
		return (
			<Square
				onMyClick={() => onUserClick(indexOfSquare)}
				key={indexOfSquare}
				mykey={indexOfSquare}
				squareSymbol={squareContent}
			/>
		);
	});

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Play a Game!
			</Button>

			<MyModal show={modalShow} onHide={() => setModalShow(false)} />

			<Container className="d-flex flex-wrap ">{BoardinHTML}</Container>
		</>
	);
}
