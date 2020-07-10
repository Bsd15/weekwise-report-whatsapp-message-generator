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
	const [formError, setFormError] = useState('');
	const [alert, setAlert] = useState('');
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

	const addClassStudent = useCallback(
		(classNumber, name) => {
			setAlert('');
			const newItemRef = firebase.database().ref(classNumber).push();
			newItemRef.set(name);
			setAlert(`${name} added sucessfully!`);
			fetchClassStudents(classNumber);
		},
		[fetchClassStudents]
	);

	const deleteStudent = useCallback(
		(classNumber, id, name) => {
			firebase
				.database()
				.ref(`${classNumber}/${id}`)
				.remove()
				.then(() => setAlert(`${name} removed sucessfully`))
				.catch((error) => setAlert(`${name} could not be removed. ${error}`));
			fetchClassStudents(classNumber);
		},
		[fetchClassStudents]
	);

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

	const onNewStudentFormSubmit = (event) => {
		event.preventDefault();
		if (newStudentName) {
			setFormError('');
			addClassStudent(selectedClass, newStudentName);
		} else {
			setFormError('Please enter valid data');
		}
		setNewStudentName('');
	};

	return (
		<div>
			{classes ? (
				<div className="mx-auto">
					<h1 className="text-center font-bold text-2xl">Manage students for class {classes[selectedClass]}</h1>
					<Input
						type="select"
						name="class"
						label="Class"
						options={selectOptions}
						value={selectedClass}
						onChangeHandler={onChangeHandler}
					/>
					<form className="w-full" onSubmit={onNewStudentFormSubmit}>
						<Input
							type="text"
							name="newStudent"
							label="New Student"
							value={newStudentName}
							onChangeHandler={(value: string) => setNewStudentName(value)}
							placeholder="Please enter new student name"
						/>
						{formError && (
							<p className="mt-1 py-2 italic text-red-600 text-xs">
								{formError}
							</p>
						)}
						<button className="mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
							Add
						</button>
					</form>
					{alert && (
						<p className="my-1 p-3 border-l-2 border-green-600 bg-green-100 text-green-600">
							{alert}
						</p>
					)}
					<Students
						students={classStudents}
						areLoading={areClassStudentsLoading}
						error={classStudentsError}
						onDeleteHandler={(id, name) =>
							deleteStudent(selectedClass, id, name)
						}
					/>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default ManageStudents;
