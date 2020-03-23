import React from "react";
import "./App.scss";
import Registration from "./components/Registration";
import Login from "./components/Login";
import {Switch, Route} from "react-router-dom";
import {MainPage} from "./components/MainPage";
import {AdminPage} from "./components/AdminPage";
import {AlertFlash} from "./components/AlertFlash";
import {PrivateRoute} from "./components/PrivateRoute";
import {useSelector} from "react-redux";
import {RootState} from "./store";

const App: React.FC = () => {
	const isLoggedIn = useSelector((state: RootState) => state.reducer.isLoggedIn);

	return (
		<>
			<AlertFlash message="You registered successfully!" />
			<Switch>
				<Route path="/register" component={Registration} />
				<Route path="/login" component={Login} />
				<PrivateRoute path="/main" component={MainPage} isLoggedIn={isLoggedIn} />
				<PrivateRoute path="/admin" component={AdminPage} isLoggedIn={isLoggedIn} />
				<PrivateRoute path="/" component={MainPage} isLoggedIn={isLoggedIn} />
			</Switch>
		</>
	);
};

export default App;
