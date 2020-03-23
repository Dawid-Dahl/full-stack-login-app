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
import {AdminRoute} from "./components/AdminRoute";
import {isUserAdmin} from "./utils/utils";

const App: React.FC = () => {
	const isLoggedIn = useSelector((state: RootState) => state.reducer.isLoggedIn);
	const user = useSelector((state: RootState) => state.reducer.user);

	return (
		<>
			<AlertFlash message="You registered successfully!" />
			<Switch>
				<Route path="/register" component={Registration} />
				<Route path="/login" component={Login} />
				<PrivateRoute path="/main" component={MainPage} isLoggedIn={isLoggedIn} />
				<AdminRoute
					path="/admin"
					component={AdminPage}
					isLoggedIn={isLoggedIn}
					isAdmin={isUserAdmin(user)}
				/>
				<PrivateRoute path="/" component={MainPage} isLoggedIn={isLoggedIn} />
			</Switch>
		</>
	);
};

export default App;
