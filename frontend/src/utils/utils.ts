import {FormState, LoginInformation} from "../types/types";

export const checkIfPasswordsMatch = (password: string, confirmPassword: string) =>
	password === confirmPassword ? true : false;

export const uppercaseFirstLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

const flashMessage = (msg: string) => {
	const flashAlert = document.querySelector(".alert-flash__wrapper")
	const flashText = document.querySelector(".alert-flash__text")

	flashText!.textContent = msg;
	flashAlert?.classList.add("active");

	setTimeout(() => {
		flashAlert?.classList.remove("active");
	}, 2000)
}

export const sendRegisterFormDataToServer = (url: string, formState: FormState) => {
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(formState)
	})
		.then(res => {
			if (res.redirected) {
				flashMessage("SUCCEEEEESSFUL REGISTRATION!")
				location.href = res.url
			} else {
				return res.text()
			}
		})
		.then(data => {
			if (data?.match(/UNIQUE constraint failed: Users.username/)) {
				alert("Choose another username, this one already exists.");
			} else if (data?.match(/UNIQUE constraint failed: Users.email/)) {
				alert("Choose another email, this one already exists.");
			} else {
				return;
			}
		})
		.catch(err => console.error(err));
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
