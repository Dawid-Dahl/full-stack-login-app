import React from "react";

type Props = {
	forComponent: string;
};

const Navbar: React.FC<Props> = ({forComponent}) => {
	return (
		<div className="nav-wrapper">
			{forComponent === "main" ? (
				<a href="/admin">Admin-Page</a>
			) : (
				<a href="/main">Main-Page</a>
			)}
			<a href="/api/logout">Logout</a>
		</div>
	);
};

export default Navbar;
