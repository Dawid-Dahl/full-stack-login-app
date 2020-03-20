import {ActionTypes} from "../actions/actions";
import {User} from "../actions/actionTypes";

export type ReducerState = {
	justRegistered: boolean;
	isLoggedIn: boolean;
	isFetching: boolean;
	user: User | null;
	error: Error | null;
};

const initialState: ReducerState = {
	justRegistered: false,
	isLoggedIn: false,
	isFetching: false,
	user: null,
	error: null
} as const;

const reducer = (state: ReducerState = initialState, action: ActionTypes): ReducerState => {
	switch (action.type) {
		case "CHECK_IF_LOGGED_IN":
			return {...state, isLoggedIn: action.payload};
		case "ENABLE_JUST_REGISTERED":
			return {...state, justRegistered: true};
		case "DISABLE_JUST_REGISTERED":
			return {...state, justRegistered: false};
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
