import React from "react";
import "./App.scss";
import Registration from "./components/Registration";
import Login from "./components/Login";
import {Switch, Route} from "react-router-dom";
import {TestComponent} from "./components/TestComponent";

const App: React.FC = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Registration} />
				<Route path="/register" component={Registration} />
				<Route path="/login" component={Login} />
				<Route path="/poop" component={TestComponent} />
			</Switch>
		</>
	);
};

export default App;
