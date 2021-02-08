import React, { Fragment, useEffect, useState } from "react";

import { MyModal } from "./mymodal.jsx";
import { Board } from "./board.jsx";

import "../../styles/index.scss";

export const Home = () => {
	return (
		<div className="container mainContainer">
			<div className="row d-flex justify-content-center mt-5">
				<h1>TicTacToe with React JSX</h1>
			</div>
			<MyModal />
			<Board />
		</div>
	);
};
