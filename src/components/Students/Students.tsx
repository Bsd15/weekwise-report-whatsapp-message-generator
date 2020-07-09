import React from 'react';
import Spinner from '../UI/Spinner/Spinner';
import Student from './Student/Student';

const Students = (props: {
	students: object | undefined;
	areLoading: boolean;
	error: string | undefined;
}) => {
	let students: any;
	if (props.error) {
		students = <p>{props.error}</p>;
	} else {
		if (props.students) {
			students = Object.entries(props.students).map(([key, value]) => (
				<Student key={key} name={value} />
			));
		}
	}
	return <section>{props.areLoading ? <Spinner /> : students}</section>;
};

export default Students;
