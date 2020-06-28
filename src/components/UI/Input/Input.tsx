import React from 'react';

const Input = (props: {
	type: string;
	name: string;
	label: string;
	value: string;
	onChangeHandler: Function;
	placeholder?: string;
	options?: Option[];
}) => {
	let input: JSX.Element | null = null;
	switch (props.type) {
		case 'select':
			input = (
				<div className="inline-block relative w-18">
					<select
						className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
						value={props.value}
						onChange={(event) => props.onChangeHandler(event.target.value)}
					>
						{props.options?.map((option, i) => (
							<option key={i} value={option['value']}>
								{option['displayName']}
							</option>
						))}
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
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
