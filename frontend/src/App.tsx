import React from "react";
import "./App.scss";
import Registration from "./components/Registration";
import Login from "./components/Login";
import {Switch, Route} from "react-router-dom";

const App: React.FC = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Registration} />
				<Route path="/register" component={Registration} />
				<Route path="/login" component={Login} />
			</Switch>
		</>
	);
};

export default App;
