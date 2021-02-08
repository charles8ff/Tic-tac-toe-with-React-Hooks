import React, { useState } from "react";

import PropTypes from "prop-types";

export const Square = props => {
	return (
		<div
			id={props.index}
			bg={!props.squareSymbol ? "dark" : "info"}
			border="dark"
			className="col-4 rounded align-content-center justify-content-center p-0 m-0"
			onClick={e => {
				props.onMyClick(e);
			}}>
			{props.squareSymbol}
		</div>
	);
};
Square.propTypes = {
	isFilled: PropTypes.string,
	index: PropTypes.any,
	squareSymbol: PropTypes.string,
	onMyClick: PropTypes.func
};
