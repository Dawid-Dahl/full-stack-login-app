import React, {useEffect} from "react";

export const TestComponent = () => {
	useEffect(() => {
		fetch("http://localhost:5000/api/poop").then(
			res => (res.redirected ? (location.href = res.url) : null)
			/* res => (console.log(res), res.headers.forEach(x => console.log(x))) */
		);
	}, []);

	return (
		<div style={{height: "100vh"}}>
			<p
				style={{
					color: "white",
					fontSize: "3em",
					textAlign: "center",
					fontWeight: "bold"
				}}
			>
				This is a test component.
			</p>
		</div>
	);
};
