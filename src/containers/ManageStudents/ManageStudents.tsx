import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';

const ManageStudents = () => {
	const [classes, setClasses] = useState<Array<object> | undefined>();
	const [selectedClass, setSelectedClass] = useState<string>('');
	useEffect(() => {
		const classesRef = firebase.database().ref('classes');
		classesRef.on('value', (snapshot) => setClasses(snapshot.val()));
	}, []);

	useEffect(() => {
		if (classes) {
			setSelectedClass(Object.keys(classes)[0]);
		}
	}, [classes]);

	const selectOptions: Option[] = [];
	if (classes) {
		Object.entries(classes).forEach(([key, value]) => {
			selectOptions.push({
				displayName: String(value),
				value: key,
			});
		});
	}

	const onChangeHandler = (value: string) => {
		setSelectedClass(value);
	};

	return (
		<div>
			{classes ? (
				<div>
					<h1>Manage classes for {classes[selectedClass]}</h1>
					<Input
						type="select"
						name="class"
						label="Class"
						options={selectOptions}
						value={selectedClass}
						onChangeHandler={onChangeHandler}
					/>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default ManageStudents;
