export const checkIfPasswordsMatch = (password: string, confirmPassword: string) =>
	password === confirmPassword ? true : false;

export const uppercaseFirstLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

export const flashMessage = (msg: string) => {
	const flashAlert = document.querySelector(".alert-flash__wrapper")
	const flashText = document.querySelector(".alert-flash__text")

	flashText!.textContent = msg;
	flashAlert?.classList.add("active");

	setTimeout(() => {
		flashAlert?.classList.remove("active");
	}, 3000)
}
