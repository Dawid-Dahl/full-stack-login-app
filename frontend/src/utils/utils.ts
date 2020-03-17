import {FormState, LoginInformation} from "../types/types";

export const checkIfPasswordsMatch = (password: string, confirmPassword: string) =>
	password === confirmPassword ? true : false;

export const uppercaseFirstLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

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

export const sendLoginFormDataToServer = (url: string, formState: LoginInformation) => {
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(formState)
	})
		.then(res => (res.redirected ? (location.href = res.url) : null))
		.catch(err => console.error(err));
};
