import React from 'react';
import Spinner from '../UI/Spinner/Spinner';

const Students = (props: {
	students: Array<object> | string;
	areLoading: boolean;
}) => {
	return (
		<div>
			{!props.areLoading ? JSON.stringify(props.students) : <Spinner />}
		</div>
	);
};

export default Students;
