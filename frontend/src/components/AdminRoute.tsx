import React from "react";
import {Route, RouteProps, Redirect} from "react-router-dom";
import {flashMessage} from "../utils/utils";

interface Props extends RouteProps {
	component: any;
	isLoggedIn: boolean;
	isAdmin: boolean;
}

export const AdminRoute: React.FC<Props> = ({
	component: Component,
	isLoggedIn,
	isAdmin,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				isLoggedIn && isAdmin ? (
					<Component {...props} />
				) : (
					(flashMessage("You are not an admin.", true),
					(
						<Redirect
							to={{
								pathname: "/main"
							}}
						/>
					))
				)
			}
		/>
	);
};
