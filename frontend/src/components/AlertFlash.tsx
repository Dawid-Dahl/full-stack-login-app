import React from "react";

type Props = {
	message: string;
};

export const AlertFlash: React.FC<Props> = ({message}) => {
	return (
		<div className="alert-flash__wrapper">
			<p className="alert-flash__text">{message}</p>
		</div>
	);
};
