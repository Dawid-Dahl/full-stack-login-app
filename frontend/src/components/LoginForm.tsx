import React, {useState, useEffect} from "react";
import Input from "./Input";
import {LoginInformation} from "../types/types";

type Props = {
	postFetchAction: (url: string, formState: LoginInformation) => void;
	postUrl: string;
};

const LoginForm: React.FC<Props> = ({postFetchAction, postUrl}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const turnFormStateIntoObj = (): LoginInformation => ({
		email,
		password
	});

	useEffect(() => {}, []);

	return (
		<div>
			<form
				action="POST"
				className="form"
				onSubmit={e => {
					e.preventDefault();
					postFetchAction(postUrl, turnFormStateIntoObj());
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

export default LoginForm;
