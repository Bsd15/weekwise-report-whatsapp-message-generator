import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Input/Input";

const ManageStudents = () => {
	const [classes, setClasses] = useState<Array<object> | undefined>();
	useEffect(() => {
		const itemRef = firebase.database().ref("classes");
		itemRef.on("value", (snapshot) => setClasses(snapshot.val()));
	}, []);

	const selectOptions: Option[] = [];
	if (classes) {
		Object.entries(classes).forEach(([key, value]) => {
			selectOptions.push({
				displayName: key,
				value: value,
			});
		});
	}

	return (
		<div>
			{classes ? (
				<div>
					Manage Students
					<Input
						type="select"
						name="class"
						label="Class"
						options={selectOptions}
					/>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default ManageStudents;
