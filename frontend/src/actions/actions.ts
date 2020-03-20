import {User} from "./actionTypes";

export const checkIfLoggedIn = (payload: boolean) =>
	({
		type: "CHECK_IF_LOGGED_IN",
		payload
	} as const);

export const enableJustRegistered = () =>
	({
		type: "ENABLE_JUST_REGISTERED"
	} as const);

export const disableJustRegistered = () =>
	({
		type: "DISABLE_JUST_REGISTERED"
	} as const);

export const getUser = () =>
	({
		type: "GET_USER",
		payload: fetch("/api/main")
			.then(res => {
				if (res.redirected) {
					location.href = res.url;
				} else {
					return res.json();
				}
			})
			.catch(err => {
				console.log(err);
			})
	} as const);

type GetUserAction = {
	type: "GET_USER";
	payload: Promise<User>;
};

type GetUserPendingAction = {
	type: "GET_USER_PENDING";
};

type GetUserFulfilledAction = {
	type: "GET_USER_FULFILLED";
	payload: User;
};

type GetUserRejectedAction = {
	type: "GET_USER_REJECTED";
};

export type ActionTypes =
	| ReturnType<typeof checkIfLoggedIn>
	| ReturnType<typeof enableJustRegistered>
	| ReturnType<typeof disableJustRegistered>
	| GetUserAction
	| GetUserPendingAction
	| GetUserFulfilledAction
	| GetUserRejectedAction;
