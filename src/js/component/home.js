import React, { Fragment, useEffect, useState } from "react";

import { MyModal } from "./mymodal.jsx";
import { Board } from "./board.jsx";

import "../../styles/index.scss";

export const Home = () => {
	return (
		<Fragment>
			<div className="row d-flex justify-content-center title">
				<h1>TicTacToe React JSX</h1>
			</div>
			<MyModal />
			<Board />
		</Fragment>
	);
};
