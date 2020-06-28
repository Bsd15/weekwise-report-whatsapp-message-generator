import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';

const ManageStudents = () => {
	const [classes, setClasses] = useState<Array<object> | undefined>();
	useEffect(() => {
		const itemRef = firebase.database().ref('classes');
		itemRef.on('value', (snapshot) => setClasses(snapshot.val()));
	}, []);

	const selectOptions: Option[] = [];
	if (classes) {
		Object.entries(classes).forEach(([key, value]) => {
			selectOptions.push({
				displayName: String(value),
				value: key,
			});
		});
	}

	const [selectedClass, setSelectedClass] = useState(
		classes ? classes[0]['3'] : ''
	);

	const onChangeHandler = (value) => {
		setSelectedClass(value);
	};

	return (
		<div>
			{classes ? (
				<div>
					<h1>Manage classes for {selectedClass}</h1>
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
