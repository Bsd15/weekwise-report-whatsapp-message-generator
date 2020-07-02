import React from 'react';
import Spinner from '../UI/Spinner/Spinner';

const Students = (props: {
	students: Array<object> | string;
	areLoading: boolean;
	error: string | undefined;
}) => {
	return <div>{props.areLoading && <Spinner />}</div>;
};

export default Students;
