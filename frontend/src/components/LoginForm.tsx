import React, {useState, ReactText} from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";
import Input from "./Input";
import {LoginInformation} from "../types/types";
import {flashMessage} from "../utils/utils";
import {useDispatch} from "react-redux";
import {logIn} from "../actions/actions";

interface Props extends RouteComponentProps {
	postUrl: string;
	redirectUrl: string;
}

const LoginForm: React.FC<Props> = ({postUrl, redirectUrl, history}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const turnFormStateIntoObj = (): LoginInformation => ({
		email,
		password
	});

	return (
		<div>
			<form
				action="POST"
				className="form"
				onSubmit={e => {
					e.preventDefault();
					fetch(postUrl, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(turnFormStateIntoObj())
					})
						.then(res => {
							if (res.ok) {
								dispatch(logIn());
								history.push(redirectUrl);
							} else {
								flashMessage("Login failed. Try again!");
							}
						})
						.catch(err => console.error(err));
					e.currentTarget.reset();
				}}
			>
				<Input
					name="email"
					type="email"
					onChangleHandle={(e: React.ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
					required
				/>
				<Input
					name="password"
					type="password"
					onChangleHandle={(e: React.ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
					required
				/>
				<button type="submit" id="login-button">
					Login
				</button>
			</form>
		</div>
	);
};

export default withRouter(LoginForm);
