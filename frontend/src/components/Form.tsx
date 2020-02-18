import React, {useState} from "react";

type FormState = {
	username: string;
	email: string;
	password: string;
	reEnterPassword: string;
};

const sendFormDataToServer = (url: string, formState: FormState) => {
	console.log(url, formState);
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
					sendFormDataToServer(
						"http://localhost:5000/api/registration",
						turnFormStateIntoObj()
					);
				}}
			>
				<input
					id="username"
					type="text"
					placeholder="Username"
					onChange={e => setUsername(e.target.value)}
				/>
				<input
					id="email"
					type="email"
					placeholder="E-mail"
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					id="password"
					type="password"
					placeholder="Password"
					onChange={e => setPassword(e.target.value)}
				/>
				<input
					id="re-enter-password"
					type="password"
					placeholder="Re-enter Password"
					onChange={e => setreEnterPassword(e.target.value)}
				/>
				<button type="submit" id="login-button">
					Login
				</button>
			</form>
		</div>
	);
};

export default Form;
