import React from "react";

type Props = {
	name: string;
	type: string;
	onChangleHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({name, type, onChangleHandle}) => (
	<input
		id={name}
		name={name}
		type={type}
		placeholder={[name[0].toUpperCase(), name.slice(1)].join("")}
		onChange={onChangleHandle}
	/>
);

export default Input;
