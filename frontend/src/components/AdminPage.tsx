import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

export const AdminPage = () => {
	let history = useHistory();

	return (
		<div className="wrapper">
			<h1>This is the Super Secret Admin Page</h1>
		</div>
	);
};
