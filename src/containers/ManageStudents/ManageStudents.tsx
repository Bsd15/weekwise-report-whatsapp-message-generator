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
				displayName: String(value),
				value: key,
			});
		});
	}

	return (
		<div>
			{classes ? (
				<div>
					<h1>Manage classes for {}</h1>
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
