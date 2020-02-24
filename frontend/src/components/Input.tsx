import React from "react";

type Props = {
	name: string;
	type: string;
	onChangleHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	min?: number;
	minLength?: string;
	pattern?: string;
	title?: string;
};

export const Input: React.FC<Props> = ({name, type, onChangleHandle, required, pattern, title}) => (
	<input
		id={name}
		name={name}
		type={type}
		placeholder={[name[0].toUpperCase(), name.slice(1)].join("")}
		onChange={onChangleHandle}
		required={required}
		pattern={pattern}
		title={title}
	/>
);

export default Input;
