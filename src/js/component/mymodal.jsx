import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

export const MyModal = props => {
	return (
		<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
			<Modal.Header>
				<Modal.Title>Play TicTacToe with a friend!</Modal.Title>
			</Modal.Header>
			<Modal.Body className="show-grid">
				<Container>
					<Row>
						<Col md={4}>Player1</Col>
						<Col md={{ span: 4, offset: 2 }}>Player2</Col>
					</Row>

					<Row>
						<Col md={4}>imagine an input</Col>

						<Col md={{ span: 4, offset: 2 }}>imagine an input</Col>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Start!</Button>
			</Modal.Footer>
		</Modal>
	);
};
