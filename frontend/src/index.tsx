import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import store from "./store";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {logIn, logOut} from "./actions/actions";
import {User} from "./actions/actionTypes";

//All this below is to make sure I can refresh the browser without getting logged out
//Was just to see if it would work, to achieve this with SPAs JWTs are better I think

fetch("http://localhost:5000/api/isAuthenticated", {
	credentials: "include"
})
	.then(res => {
		if (res.ok) {
			store.dispatch(logIn());
			return res.json();
		} else {
			store.dispatch(logOut());
			ReactDOM.render(
				<Provider store={store}>
					<Router>
						<Route path="/" component={App} />
					</Router>
				</Provider>,
				document.getElementById("root")
			);
		}
	})
	.then((data: User) => {
		store.dispatch({type: "GET_USER_FULFILLED", payload: data});
		ReactDOM.render(
			<Provider store={store}>
				<Router>
					<Route path="/" component={App} />
				</Router>
			</Provider>,
			document.getElementById("root")
		);
	})
	.catch(err => {
		console.error(err);
		ReactDOM.render(
			<Provider store={store}>
				<Router>
					<Route path="/" component={App} />
				</Router>
			</Provider>,
			document.getElementById("root")
		);
	});
