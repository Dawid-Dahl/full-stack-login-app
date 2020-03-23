import {ActionTypes} from "../actions/actions";
import {User} from "../actions/actionTypes";

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

const reducer = (state: ReducerState = initialState, action: ActionTypes): ReducerState => {
	switch (action.type) {
		case "LOG_IN":
			return {...state, isLoggedIn: true};
		case "LOG_OUT":
			return {...state, isLoggedIn: false};
		case "GET_USER_PENDING":
			return {...state, isFetching: true};
		case "GET_USER_FULFILLED":
			return {...state, isFetching: false, user: action.payload};
		case "GET_USER_REJECTED":
			return {...state, isFetching: false};
		default:
			return state;
	}
};

export {reducer};
