import {User} from "./actionTypes";

export const logIn = () =>
	({
		type: "LOG_IN"
	} as const);

export const logOut = () =>
	({
		type: "LOG_OUT"
	} as const);

export const getUser = () =>
	({
		type: "GET_USER",
		payload: fetch("/api/main")
			.then(res =>
				res.ok
					? res.json()
					: (() => {
							throw new Error("Failed to get the user!");
					  })()
			)
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
	| ReturnType<typeof logIn>
	| ReturnType<typeof logOut>
	| GetUserAction
	| GetUserPendingAction
	| GetUserFulfilledAction
	| GetUserRejectedAction;
