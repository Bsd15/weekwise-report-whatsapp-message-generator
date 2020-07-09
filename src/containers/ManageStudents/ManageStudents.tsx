import React, { useEffect, useState, useCallback } from 'react';
import firebase from '../../firebase';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import Students from '../../components/Students/Students';

const ManageStudents = () => {
	const [classes, setClasses] = useState<Array<object> | undefined>();
	const [selectedClass, setSelectedClass] = useState<string>('');
	const [classStudents, setClassStudents] = useState<object | undefined>();
	const [selectOptions, setSelectOptions] = useState<Option[]>([]);
	const [areClassStudentsLoading, setAreClassStudentsLoading] = useState(false);
	const [classStudentsError, setClassStudentsError] = useState<
		string | undefined
	>();
	const fetchClassStudents = useCallback((classNumber) => {
		setAreClassStudentsLoading(true);
		const classStudentsRef = firebase.database().ref(classNumber);
		classStudentsRef.once('value', (snapshot) => {
			if (snapshot.exists()) {
				setClassStudents(snapshot.val());
				setClassStudentsError('');
			} else {
				setClassStudentsError('No students found for the selected class');
			}
			setAreClassStudentsLoading(false);
		});
	}, []);

	const addClassStudent = useCallback(() => {
		const newItemRef = firebase.database().ref('3').push();
		newItemRef.set(Math.floor(Math.random() * 10));
	}, []);

	useEffect(() => {
		const classesRef = firebase.database().ref('classes');
		classesRef.on('value', (snapshot) => setClasses(snapshot.val()));
		console.log('useEffect 1');
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
		console.log('useEffect 2');
	}, [classes, fetchClassStudents]);

	const onChangeHandler = (value: string) => {
		setSelectedClass(value);
		fetchClassStudents(value);
	};

	return (
		<div>
			{classes ? (
				<div>
					<h1>Manage students for class {classes[selectedClass]}</h1>
					<Input
						type="select"
						name="class"
						label="Class"
						options={selectOptions}
						value={selectedClass}
						onChangeHandler={onChangeHandler}
					/>
					<Students
						students={classStudents}
						areLoading={areClassStudentsLoading}
						error={classStudentsError}
					/>
					<button onClick={addClassStudent}>Add</button>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default ManageStudents;
