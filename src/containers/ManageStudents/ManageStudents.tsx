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
	const [newStudentName, setNewStudentName] = useState('');
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

	const addClassStudent = useCallback((classNumber, name) => {
		const newItemRef = firebase.database().ref(classNumber).push();
		newItemRef.set(name);
		fetchClassStudents(classNumber);
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
					<h1>Manage students for class {classes[selectedClass]}</h1>
					<Input
						type="select"
						name="class"
						label="Class"
						options={selectOptions}
						value={selectedClass}
						onChangeHandler={onChangeHandler}
					/>
					<form className="w-full sm:w-1/3">
						<Input
							type="text"
							name="newStudent"
							label="New Student"
							value={newStudentName}
							onChangeHandler={(value: string) => setNewStudentName(value)}
							placeholder="Please enter new student name"
						/>
						<button className="mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
							Add
						</button>
					</form>
					<Students
						students={classStudents}
						areLoading={areClassStudentsLoading}
						error={classStudentsError}
					/>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default ManageStudents;
