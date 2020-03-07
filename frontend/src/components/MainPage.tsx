import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {uppercaseFirstLetter} from "../utils/utils";

export const MainPage = () => {
	let history = useHistory();
	const [user, setUser] = useState("No Username");

	useEffect(() => {
		fetch("http://localhost:5000/api/main", {method: "GET", credentials: "include"})
			.then(res => {
				console.log("poop1111");
				console.log(res);
				if (res.redirected) {
					location.href = res.url;
				} else {
					console.log("poop");
					return res.json();
				}
			})
			.then(data => setUser(data.username));
	}, []);

	return (
		<div className="wrapper">
			<h1>This is the Main Page</h1>
			<p>Welcome back, {user ? uppercaseFirstLetter(user) : undefined}!</p>
		</div>
	);
};
