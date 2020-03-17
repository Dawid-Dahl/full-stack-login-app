export const checkIfLoggedIn = (payload: boolean) =>
	({
		type: "CHECK_IF_LOGGED_IN",
		payload
	} as const);

export const activateIsFetching = (payload?: any) =>
	({
		type: "ACTIVATE_IS_FETCHING",
		payload
	} as const);

export const deactivateIsFetching = (payload?: any) =>
	({
		type: "DEACTIVATE_IS_FETCHING",
		payload
	} as const);

export type ActionTypes =
	| ReturnType<typeof checkIfLoggedIn>
	| ReturnType<typeof activateIsFetching>
	| ReturnType<typeof deactivateIsFetching>;
