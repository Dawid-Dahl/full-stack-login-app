import { User } from "../actions/actionTypes";

export const checkIfPasswordsMatch = (password: string, confirmPassword: string) =>
	password === confirmPassword ? true : false;

export const uppercaseFirstLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

export const flashMessage = (msg: string, noOpacity: boolean = false) => {
	const flashAlert: HTMLDivElement | null = document.querySelector(".alert-flash__wrapper")
	const flashText = document.querySelector(".alert-flash__text")

	if (noOpacity) flashAlert!.style.backgroundColor = "rgb(133, 65, 243)";

	flashText!.textContent = msg;
	flashAlert?.classList.add("active");

	setTimeout(() => {
		flashAlert?.classList.remove("active");
	}, 3000)
}

export const isUserAdmin = (user: User | null) => user?.admin ? true : false;
