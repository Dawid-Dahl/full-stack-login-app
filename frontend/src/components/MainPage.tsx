import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {uppercaseFirstLetter} from "../utils/utils";

export const MainPage = () => {
	let history = useHistory();
	const [user, setUser] = useState("");

	useEffect(() => {
		fetch("/api/main", {method: "GET", credentials: "include"})
			.then(res => {
				if (res.redirected) {
					location.href = res.url;
				} else {
					return res.json();
				}
			})
			.then(data => setUser(data.username))
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="wrapper">
			<h1>This is the Main Page</h1>
			<p>Welcome back, {user ? uppercaseFirstLetter(user) : undefined}!</p>
		</div>
	);
};
