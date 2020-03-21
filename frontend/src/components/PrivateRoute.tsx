import React from "react";
import {Route, Redirect, RouteProps} from "react-router-dom";

const fakeAuth = {
	isAuthenticated: true
};

interface Props extends RouteProps {}

export const PrivateRoute: React.FC<Props> = ({children, ...rest}) => {
	return (
		<Route
			{...rest}
			render={({location}) =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: {from: location}
						}}
					/>
				)
			}
		/>
	);
};
