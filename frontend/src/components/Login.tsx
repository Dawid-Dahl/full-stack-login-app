import React from "react";
import LoginForm from "./LoginForm";
import {Link, RouteComponentProps} from "react-router-dom";

interface Props extends RouteComponentProps {}

const Login: React.FC<Props> = () => {
	return (
		<div className="wrap">
			<h1 className="login">LOGIN</h1>
			<LoginForm postUrl="/api/login" redirectUrl="/main" />
			<Link to="/register" className="loginLink">
				Go To Registration
			</Link>
		</div>
	);
};

export default Login;
