import React, { useState } from "react";

import PropTypes from "prop-types";

export const Square = props => {
	return (
		<div
			id={props.index}
			border="dark"
			className={
				props.squareSymbol === null
					? "square col-4 rounded d-flex align-items-center justify-content-center p-0 bg-dark"
					: "square col-4 rounded d-flex align-items-center justify-content-center p-0 bg-info"
			}
			onClick={e => {
				props.onMyClick(e);
			}}>
			{props.squareSymbol}
		</div>
	);
};
Square.propTypes = {
	index: PropTypes.any,
	squareSymbol: PropTypes.string,
	onMyClick: PropTypes.func
};
