import React, {useEffect} from "react";
import "./App.scss";
import Registration from "./components/Registration";
import Login from "./components/Login";
import {Switch, Route} from "react-router-dom";
import {MainPage} from "./components/MainPage";
import {AdminPage} from "./components/AdminPage";
import {checkIfLoggedIn} from "./actions/actions";
import {useDispatch} from "react-redux";
import {AlertFlash} from "./components/AlertFlash";
import {PrivateRoute} from "./components/PrivateRoute";

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		fetch("/api/isLoggedIn")
			.then(res => res.json())
			.then(data => dispatch(checkIfLoggedIn(data)));
	}, []);

	return (
		<>
			<AlertFlash message="You registered successfully!" />
			<Switch>
				<PrivateRoute exact path="/" component={MainPage} />
				<Route path="/register" component={Registration} />
				<Route path="/login" component={Login} />
				<PrivateRoute path="/main" component={MainPage} />
				<PrivateRoute path="/admin" component={AdminPage} />
			</Switch>
		</>
	);
};

export default App;
