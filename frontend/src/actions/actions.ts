import {AsyncAction} from "redux-promise-middleware";

export type User = {
	username: string;
	email: string;
	admin: number;
};

export const checkIfLoggedIn = (payload: boolean) =>
	({
		type: "CHECK_IF_LOGGED_IN",
		payload
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
	payload: any;
};

type GetUserFulfilledAction = {
	type: "GET_USER_FULFILLED";
	payload: User;
};

export type ActionTypes =
	| ReturnType<typeof checkIfLoggedIn>
	| GetUserAction
	| GetUserPendingAction
	| GetUserFulfilledAction;
