import React, { Fragment, useEffect, useState } from "react";
import { MyModal } from "./mymodal.jsx";
import { Board } from "./board.jsx";

import "../../styles/index.scss";

export const Home = () => {
	const [firstPlayer, setFirstPlayer] = useState("");
	const [secondPlayer, setSecondPlayer] = useState("");
	return (
		<div className="container mainContainer">
			<div className="row d-flex justify-content-center mt-5">
				<h1>TicTacToe with React JSX</h1>
			</div>
			<MyModal setPlayer1={setFirstPlayer} setPlayer2={setSecondPlayer} />
			<Board player1={firstPlayer} player2={secondPlayer} />
		</div>
	);
};
