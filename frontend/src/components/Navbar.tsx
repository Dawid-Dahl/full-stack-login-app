import React from "react";
import {Link} from "react-router-dom";

type Props = {
	forComponent: string;
};

const Navbar: React.FC<Props> = ({forComponent}) => {
	return (
		<div className="nav-wrapper">
			{forComponent === "main" ? (
				<Link to="/admin">Admin-Page</Link>
			) : (
				<Link to="/main">Main-Page</Link>
			)}
			<Link to="/login">Logout</Link>
		</div>
	);
};

export default Navbar;
