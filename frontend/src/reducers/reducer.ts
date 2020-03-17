import {ActionTypes} from "../actions/actions";

enum ActionSuffix {
	fulfilled = "FULFILLED",
	pending = "PENDING",
	rejected = "REJECTED"
}

export type ReducerState = {
	isLoggedIn: boolean;
	isFetching: boolean;
	error: Error | null;
};

const initialState: ReducerState = {
	isLoggedIn: false,
	isFetching: false,
	error: null
} as const;

const reducer = (
	state: ReducerState = initialState,
	{type, payload}: ActionTypes
): ReducerState => {
	switch (type) {
		case "CHECK_IF_LOGGED_IN":
			return {...state, isLoggedIn: payload};
		case "ACTIVATE_IS_FETCHING":
			return {...state, isFetching: true};
		case "DEACTIVATE_IS_FETCHING":
			return {...state, isFetching: false};
		default:
			return state;
	}
};

export {reducer};
