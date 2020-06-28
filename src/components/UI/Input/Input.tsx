import React from "react";

const Input = (props: {
	type: string;
	name: string;
	label: string;
	placeholder?: string;
	options?: Option[];
}) => {
	let input: JSX.Element | null = null;
	switch (props.type) {
		case "select":
			input = (
				<select
					className="bg-gray-300 px-3 py-2"
					name={props.name}
					placeholder={props.placeholder}
				>
					{props.options?.map((option, i) => (
						<option key={i} value={option["value"]}>
							{option["displayName"]}
						</option>
					))}
				</select>
			);
			break;

		default:
			break;
	}
	return (
		<div>
			<div>
				<label htmlFor={props.name}>{props.label}</label>
			</div>
			<div>{input}</div>
		</div>
	);
};

export default Input;
