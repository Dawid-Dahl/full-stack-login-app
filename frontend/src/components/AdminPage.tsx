import React, {useEffect, useState} from "react";

export const AdminPage = () => {
	useEffect(() => {
		fetch("/api/admin")
			.then(res => (res.redirected ? (location.href = res.url) : res.json()))
			.then(data => console.log(data));
	}, []);

	return (
		<div className="wrapper">
			<h1>This is the Super Secret Admin Page</h1>
		</div>
	);
};
