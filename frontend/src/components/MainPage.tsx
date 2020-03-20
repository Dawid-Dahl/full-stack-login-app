import React, {useEffect} from "react";
import {uppercaseFirstLetter} from "../utils/utils";
import Navbar from "./Navbar";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../actions/actions";
import {RootState} from "../store";

export const MainPage = () => {
	const dispatch = useDispatch();

	const user = useSelector((state: RootState) => state.reducer.user);
	const isFetching = useSelector((state: RootState) => state.reducer.isFetching);

	useEffect(() => {
		dispatch(getUser());
		const flashAlert = document.querySelector(".alert-flash__wrapper")
		flashAlert?.classList.add("active")
	}, []);

	return (
		<div className="wrapper">
			<Navbar forComponent="main" />
			<div style={isFetching ? {display: "none"} : {display: "block"}}>
				<h1>This is the Main Page</h1>
				<p>Welcome back, {user ? uppercaseFirstLetter(user.username) : undefined}!</p>
			</div>
		</div>
	);
};
