import React from 'react';
import Spinner from '../UI/Spinner/Spinner';
import Student from './Student/Student';

const Students = (props: {
	students: object | undefined;
	areLoading: boolean;
	error: string | undefined;
	onDeleteHandler: (id: string, name: string) => void;
}) => {
	let students: any;
	if (props.error) {
		students = <p>{props.error}</p>;
	} else {
		if (props.students) {
			students = Object.entries(props.students).map(([key, value]) => (
				<Student
					key={key}
					name={value}
					onDeleteHandler={() => props.onDeleteHandler(key, value)}
				/>
			));
		}
	}
	return (
		<section>
			{props.areLoading ? (
				<div className="w-16 h-16 mx-auto mt-5">
					<Spinner />
				</div>
			) : (
				students
			)}
		</section>
	);
};

export default React.memo(Students);
