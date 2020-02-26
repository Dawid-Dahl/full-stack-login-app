import React from "react";
import Form from "./Form";
import {Link} from "react-router-dom";
import {sendRegisterFormDataToServer} from "../utils/utils";

const Registration = () => {
	return (
		<div className="wrap">
			<h1 className="registration">REGISTRATION</h1>
			<Form
				postFetchAction={sendRegisterFormDataToServer}
				postUrl="http://localhost:5000/api/register"
			/>
			<Link to="/login" className="registrationLink">
				Go To Login
			</Link>
		</div>
	);
};

export default Registration;
