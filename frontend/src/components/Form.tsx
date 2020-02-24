import React, {useState} from "react";
import Input from "./Input";
import {checkIfPasswordsMatch} from "../utils/utils";

type FormState = {
	username: string;
	email: string;
	password: string;
	reEnterPassword: string;
};

const sendFormDataToServer = (url: string, formState: FormState) => {
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(formState)
	});
};

const Form = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [reEnterPassword, setreEnterPassword] = useState("");

	const turnFormStateIntoObj = (): FormState => ({
		username,
		email,
		password,
		reEnterPassword
	});

	return (
		<div>
			<form
				action="POST"
				className="form"
				onSubmit={e => {
					e.preventDefault();
					if (checkIfPasswordsMatch(password, reEnterPassword)) {
						sendFormDataToServer(
							"http://localhost:5000/api/register",
							turnFormStateIntoObj()
						);
						e.currentTarget.reset();
					} else {
						alert("Passwords must match.");
					}
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
					pattern={`(?=.*[0-9])[a-zA-Z0-9%?\/<~#!@$^&*()+=}:;,åäöÅÄÖ>{]{5,}`}
					title="Must contain at least one uppercase or lowercase letter and one number, and be longer than 4 characters."
				/>
				<Input
					name="re-enter-password"
					type="password"
					onChangleHandle={(e: React.ChangeEvent<HTMLInputElement>) =>
						setreEnterPassword(e.target.value)
					}
					required
					pattern={`(?=.*[0-9])[a-zA-Z0-9%?\/<~#!@$^&*()+=}:;,åäöÅÄÖ>{]{5,}`}
					title="Must contain at least one uppercase or lowercase letter and one number, and be longer than 4 characters."
				/>
				<button type="submit" id="login-button">
					Login
				</button>
			</form>
		</div>
	);
};

export default Form;
