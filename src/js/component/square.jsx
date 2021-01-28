import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export const Square = props => {
	const [isFilled, setFilled] = useState(false);
	let mySymbol = null;
	let myBg = "dark";

	if (isFilled) {
		mySymbol = props.squareSymbol;
		myBg = "info";
	} else {
		mySymbol = null;
		myBg = "dark";
	}

	return (
		<Card
			onClick={() => {
				props.onMyClick();
				setFilled(true);
			}}
			bg={myBg}
			border="dark"
			className="col-4 rounded"
			style={{ height: "12rem" }}>
			<Card.Body>{mySymbol} </Card.Body>
		</Card>
	);
};
Square.propTypes = {
	squareSymbol: PropTypes.string,
	onMyClick: PropTypes.func,
	where: PropTypes.any,
	mykey: PropTypes.any
};
