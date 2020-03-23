import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOut} from "../actions/actions";
import {flashMessage} from "../utils/utils";

type Props = {
	forComponent: string;
};

const Navbar: React.FC<Props> = ({forComponent}) => {
	const dispatch = useDispatch();

	return (
		<div className="nav-wrapper">
			{forComponent === "main" ? (
				<Link to="/admin">Admin-Page</Link>
			) : (
				<Link to="/main">Main-Page</Link>
			)}
			<Link
				to="/login"
				onClick={() => {
					fetch("/api/logout")
						.then(res => res.json())
						.then(data => {
							console.log("POOOP");
							flashMessage(data);
							dispatch(logOut());
						});
				}}
			>
				Logout
			</Link>
		</div>
	);
};

export default Navbar;
