import React from "react";
import RegistrationForm from "./RegistrationForm";
import {Link} from "react-router-dom";

const Registration = () => {
	return (
		<div className="wrap">
			<h1 className="registration">REGISTRATION</h1>
			<RegistrationForm postUrl="/api/register" redirectUrl="/login" />
			<Link to="/login" className="registrationLink">
				Go To Login
			</Link>
		</div>
	);
};

export default Registration;
