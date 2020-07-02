import React, { useEffect, useState, useCallback } from 'react';
import firebase from '../../firebase';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import Students from '../../components/Students/Students';

const ManageStudents = () => {
	const [classes, setClasses] = useState<Array<object> | undefined>();
	const [selectedClass, setSelectedClass] = useState<string>('');
	const [classStudents, setClassStudents] = useState<
		Array<object> | undefined
	>();
	const [selectOptions, setSelectOptions] = useState<Option[]>([]);
	const fetchClassStudents = useCallback((classNumber) => {
		const classStudentsRef = firebase.database().ref(classNumber);
		classStudentsRef.once('value', (snapshot) =>
			setClassStudents(snapshot.val())
		);
	}, []);
	
	useEffect(() => {
		const classesRef = firebase.database().ref('classes');
		classesRef.on('value', (snapshot) => setClasses(snapshot.val()));
		return () => {
			classesRef.off('value');
		};
	}, []);
	
	useEffect(() => {
		if (classes) {
			const newSelectOptions: Option[] = [];
			Object.entries(classes).forEach(([key, value]) => {
				newSelectOptions.push({
					displayName: String(value),
					value: key,
				});
			});
			setSelectOptions(newSelectOptions);
			const defaultClass = Object.keys(classes)[0];
			setSelectedClass(defaultClass);
			fetchClassStudents(defaultClass);
		}
	}, [classes, fetchClassStudents]);

	const onChangeHandler = (value: string) => {
		setSelectedClass(value);
		fetchClassStudents(value);
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
					<Students students={classStudents} />
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default ManageStudents;
