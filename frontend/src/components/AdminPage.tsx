import React from "react";
import Navbar from "./Navbar";
import {RouteComponentProps} from "react-router-dom";

interface Props extends RouteComponentProps {}

export const AdminPage: React.FC<Props> = () => {
	return (
		<div className="wrapper">
			<Navbar forComponent="admin" />
			<h1>This is the Super Secret Admin Page</h1>
		</div>
	);
};
