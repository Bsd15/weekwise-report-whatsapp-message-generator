import React from 'react';
import Spinner from '../UI/Spinner/Spinner';

const Students = (props: { students: Array<object> | undefined }) => {
	return (
		<div>{props.students ? JSON.stringify(props.students) : <Spinner />}</div>
	);
};

export default Students;
