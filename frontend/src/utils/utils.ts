import {FormState} from "../types/types";

export const checkIfPasswordsMatch = (password: string, confirmPassword: string) =>
	password === confirmPassword ? true : false;

export const sendRegisterFormDataToServer = (url: string, formState: FormState) => {
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(formState)
	})
		.then(res => res.text())
		.then(data => {
			if (data.match(/UNIQUE constraint failed: Users.username/)) {
				alert("Choose another username, this one already exists.");
			} else if (data.match(/UNIQUE constraint failed: Users.email/)) {
				alert("Choose another email, this one already exists.");
			} else {
				return;
			}
		});
};

export const sendLoginFormDataToServer = (url: string, formState: FormState) => {
	fetch(url, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(formState)
	}).then(res => console.log(res));
};
