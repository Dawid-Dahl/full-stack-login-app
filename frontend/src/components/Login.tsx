import React from "react";
import LoginForm from "./LoginForm";
import {Link} from "react-router-dom";
import {sendLoginFormDataToServer} from "../utils/utils";

const Login = () => {
	return (
		<div className="wrap">
			<h1 className="login">LOGIN</h1>
			<LoginForm postFetchAction={sendLoginFormDataToServer} postUrl="/api/login" />
			<Link to="/register" className="loginLink">
				Go To Registration
			</Link>
		</div>
	);
};

export default Login;
