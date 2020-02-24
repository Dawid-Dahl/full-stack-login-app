import React from "react";
import Form from "./Form";
import {Link} from "react-router-dom";

const Login = () => {
	return (
		<div className="wrap">
			<h1 className="login">LOGIN</h1>
			<Form />
			<Link to="/">Go To Registration</Link>
		</div>
	);
};

export default Login;
