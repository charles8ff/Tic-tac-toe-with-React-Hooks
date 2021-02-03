import React, { Fragment, useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Square } from "./square.jsx";
import { MyModal } from "./mymodal.jsx";

export function Home() {
	const [turn, setTurn] = useState(true); //true is first player
	let symbolsWePlay = ["x", "o"];
	let isPlaying = null;

	const [Board, setBoard] = useState(new Array(9).fill(null));

	function onUserClick(index) {
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
			<MyModal />

			<Container className="d-flex flex-wrap ">{BoardinHTML}</Container>
		</>
	);
}
