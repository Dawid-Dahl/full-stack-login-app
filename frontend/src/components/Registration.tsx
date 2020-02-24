import React from "react";
import Form from "./Form";
import {Link} from "react-router-dom";

const Registration = () => {
	return (
		<div className="wrap">
			<h1 className="registration">REGISTRATION</h1>
			<Form />
			<Link to="/login">Go To Login</Link>
		</div>
	);
};

export default Registration;
