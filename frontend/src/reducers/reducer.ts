import {ActionTypes, User} from "../actions/actions";

enum ActionSuffix {
	fulfilled = "FULFILLED",
	pending = "PENDING",
	rejected = "REJECTED"
}

export type ReducerState = {
	isLoggedIn: boolean;
	isFetching: boolean;
	user: User | null;
	error: Error | null;
};

const initialState: ReducerState = {
	isLoggedIn: false,
	isFetching: false,
	user: null,
	error: null
} as const;

const reducer = (
	state: ReducerState = initialState,
	{type, payload}: ActionTypes
): ReducerState => {
	switch (type) {
		case "CHECK_IF_LOGGED_IN":
			return {...state, isLoggedIn: payload};
		case `GET_USER_${ActionSuffix.pending}`:
			return {...state, isFetching: true};
		case `GET_USER_${ActionSuffix.fulfilled}`:
			return {...state, isFetching: false, user: payload};
		case `GET_USER_${ActionSuffix.rejected}`:
			return {...state, isFetching: false};
		default:
			return state;
	}
};

export {reducer};
