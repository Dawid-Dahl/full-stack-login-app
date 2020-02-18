import React from "react";
import "./App.scss";
import Form from "./components/Form";

const App: React.FC = () => {
	return (
		<div className="wrap">
			<h1 className="registration">REGISTRATION</h1>
			<Form />
		</div>
	);
};

export default App;
