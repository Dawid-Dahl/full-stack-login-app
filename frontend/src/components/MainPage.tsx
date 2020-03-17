import React, {useEffect, useState} from "react";
import {uppercaseFirstLetter} from "../utils/utils";
import Navbar from "./Navbar";
import {useDispatch, useSelector} from "react-redux";
import {activateIsFetching, deactivateIsFetching} from "../actions/actions";
import {RootState} from "../store";

export const MainPage = () => {
	const [user, setUser] = useState("");
	const dispatch = useDispatch();

	const isFetching = useSelector((state: RootState) => state.reducer.isFetching);

	useEffect(() => {
		dispatch(activateIsFetching());
		fetch("/api/main")
			.then(res => {
				if (res.redirected) {
					dispatch(deactivateIsFetching());
					location.href = res.url;
				} else {
					return res.json();
				}
			})
			.then(data => {
				dispatch(deactivateIsFetching());
				setUser(data.username);
			})
			.catch(err => {
				dispatch(deactivateIsFetching());
				console.log(err);
			});
	}, []);

	return (
		<div className="wrapper">
			<Navbar forComponent="main" />
			<div style={isFetching ? {display: "none"} : {display: "block"}}>
				<h1>This is the Main Page</h1>
				<p>Welcome back, {user ? uppercaseFirstLetter(user) : undefined}!</p>
			</div>
		</div>
	);
};
