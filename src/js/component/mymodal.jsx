import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export const MyModal = props => {
	const [show, setShow] = useState(false);
	const [firstPlayer, setFirstPlayer] = useState("");
	const [secondPlayer, setSecondPlayer] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="row d-flex">
				<h3 className="offset-3 col-2 d-flex justify-content-center rounded">
					FirstPlayer: {" " + firstPlayer}
				</h3>
				<h3 className="offset-2 col-2 d-flex justify-content-center rounded">
					SecondPlayer: {" " + secondPlayer}
				</h3>
			</div>
			<div className="row d-flex justify-content-center">
				<button
					className="btn btn-secondary playButton"
					onClick={handleShow}>
					LET´S PLAY
				</button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header className="d-flex justify-content-center modalHeader">
						<Modal.Title className="modalTitle">
							TicTacToe
						</Modal.Title>
					</Modal.Header>
					<div className="row d-flex justify-content-center modalContent">
						<div className="col-4 d-flex flex-column p-0">
							<span>Player 1</span>
						</div>
						<div className="col-2 d-flex flex-column p-0">
							<span>VS</span>
						</div>
						<div className="col-4 d-flex flex-column p-0">
							<span>Player 2</span>
						</div>
					</div>
					<div className="row d-flex justify-content-center">
						<div className="col-5 d-flex flex-column">
							<input
								type="text"
								onChange={e => {
									setFirstPlayer(e.target.value);
								}}
								value={firstPlayer}
								placeholder="Type Name"
							/>
						</div>
						<div className="col-5 d-flex flex-column">
							<input
								type="text"
								onChange={e => setSecondPlayer(e.target.value)}
								value={secondPlayer}
								placeholder="Type Name"
							/>
						</div>
					</div>
					<Modal.Footer className="d-flex justify-content-center modalFooter">
						<button
							className="btn btn-outline-danger"
							onClick={handleClose}>
							DUEL!
						</button>
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
};
