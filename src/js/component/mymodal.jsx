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
							TicTacToc
						</Modal.Title>
					</Modal.Header>
					<div className="row d-flex justify-content-center modalContent">
						<div className="col-5 d-flex flex-column">
							<input
								type="text"
								onChange={e => {
									setFirstPlayer(e.target.value);
								}}
								value={firstPlayer}
								placeholder="Please type your name"
							/>
							<i className="fas fa-times fa-3x d-flex justify-content-center" />
						</div>
						<div className="col-5 d-flex flex-column">
							<input
								type="text"
								onChange={e => setSecondPlayer(e.target.value)}
								value={secondPlayer}
								placeholder="Please type your name"
							/>
							<i className="fas fa-circle fa-3x d-flex justify-content-center" />
						</div>
					</div>
					<Modal.Footer className="d-flex justify-content-center modalFooter">
						<button
							className="btn btn-outline-secondary"
							onClick={handleClose}>
							GO
						</button>
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
};
