import React from 'react';
import Spinner from '../UI/Spinner/Spinner';
import Student from './Student/Student';

const Students = (props: {
	students: Array<string> | undefined;
	areLoading: boolean;
	error: string | undefined;
}) => {
	let students: any;
	if (props.error) {
		students = <p>{props.error}</p>;
	} else {
		students = props.students?.map((studentName, i) => (
			<Student key={i} name={studentName} />
		));
	}
	return <section>{props.areLoading ? <Spinner /> : students}</section>;
};

export default Students;
