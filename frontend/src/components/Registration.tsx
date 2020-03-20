import React from "react";
import RegistrationForm from "./RegistrationForm";
import {Link} from "react-router-dom";
import {sendRegisterFormDataToServer} from "../utils/utils";
import {AlertFlash} from "./AlertFlash";

const Registration = () => {
	return (
		<div className="wrap">
			<AlertFlash message="You registered successfully!" />
			<h1 className="registration">REGISTRATION</h1>
			<RegistrationForm
				postFetchAction={sendRegisterFormDataToServer}
				postUrl="/api/register"
			/>
			<Link to="/login" className="registrationLink">
				Go To Login
			</Link>
		</div>
	);
};

export default Registration;
