import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const MyModal = props => {
	const [showModal, setShowModal] = useState(false);
	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

	const [firstPlayer, setFirstPlayer] = useState("");
	const [secondPlayer, setSecondPlayer] = useState("");

	return (
		<>
			<button onClick={handleShow}>LET´S PLAY</button>
			<Modal.Dialog show={showModal} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>TicTacToe with React!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Choose your side!</p>
					<input
						type="text"
						onChange={e => {
							setFirstPlayer(e.target.value);
						}}
						value={firstPlayer}
						placeholder="One warrior"
					/>
					<input
						type="text"
						onChange={e => setSecondPlayer(e.target.value)}
						value={secondPlayer}
						placeholder="Against another"
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Fight!
					</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</>
	);
};
