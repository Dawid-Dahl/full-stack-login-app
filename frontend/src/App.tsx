import React from "react";
import "./App.scss";
import Registration from "./components/Registration";
import Login from "./components/Login";
import {Switch, Route} from "react-router-dom";
import {MainPage} from "./components/MainPage";
import {AdminPage} from "./components/AdminPage";

const App: React.FC = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route path="/register" component={Registration} />
				<Route path="/login" component={Login} />
				<Route path="/main" component={MainPage} />
				<Route path="/admin" component={AdminPage} />
			</Switch>
		</>
	);
};

export default App;
