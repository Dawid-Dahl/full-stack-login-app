import {createStore, combineReducers, applyMiddleware} from "redux";
import {yournameReducer} from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

export const rootReducer = combineReducers({yournameReducer});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = applyMiddleware(ReduxThunk, promise, logger);

export const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
