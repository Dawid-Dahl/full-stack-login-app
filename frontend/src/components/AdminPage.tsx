import React, {useEffect} from "react";
import Navbar from "./Navbar";

export const AdminPage = () => {
	useEffect(() => {
		fetch("/api/admin")
			.then(res => (res.redirected ? (location.href = res.url) : null))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="wrapper">
			<Navbar forComponent="admin" />
			<h1>This is the Super Secret Admin Page</h1>
		</div>
	);
};
