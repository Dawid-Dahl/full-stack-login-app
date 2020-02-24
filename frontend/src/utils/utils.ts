export const checkIfPasswordsMatch = (password: string, reEnteredPassword: string) =>
	password === reEnteredPassword ? true : false;
