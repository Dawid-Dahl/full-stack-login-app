import React, {useState} from "react";
import Input from "./Input";
import {FormState} from "../types/types";
import { flashMessage } from "../utils/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
	postUrl: string;
	redirectUrl: string
};

const alertIfValueAlreadyExistsInDb = (data: string | undefined) => {
	if (data?.match(/UNIQUE constraint failed: Users.username/)) {
		flashMessage("Choose another username, this one already exists.")
	} else if (data?.match(/UNIQUE constraint failed: Users.email/)) {
		flashMessage("Choose another email, this one already exists.");
	} else {
		return;
	}
}

const RegistrationForm: React.FC<Props> = ({postUrl, redirectUrl, history}) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");

	const turnFormStateIntoObj = (): FormState => ({
		username,
		email,
		password,
		confirmPassword
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
								flashMessage("Registration Successful!")
								history.push(redirectUrl)
							} else {
								flashMessage("Registration failed! Try again!")
								return res.text()
							}
						})
						.then(data => (console.log("this is the data: " + data), alertIfValueAlreadyExistsInDb(data)))
						.catch(err => console.error(err));
					e.currentTarget.reset();
				}}
			>
				<Input
					name="username"
					type="text"
					onChangleHandle={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
					required
				/>
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
				<Input
					name="confirm-password"
					type="password"
					onChangleHandle={(e: React.ChangeEvent<HTMLInputElement>) =>
						setconfirmPassword(e.target.value)
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

export default withRouter(RegistrationForm);
