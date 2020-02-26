import React from "react";
import Form from "./Form";
import {Link} from "react-router-dom";
import {sendLoginFormDataToServer} from "../utils/utils";

const Login = () => {
	return (
		<div className="wrap">
			<h1 className="login">LOGIN</h1>
			<Form
				postFetchAction={sendLoginFormDataToServer}
				postUrl="http://localhost:5000/api/login"
			/>
			<Link to="/" className="loginLink">
				Go To Registration
			</Link>
		</div>
	);
};

export default Login;
