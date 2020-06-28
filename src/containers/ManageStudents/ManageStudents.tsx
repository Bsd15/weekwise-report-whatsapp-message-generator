import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import Spinner from "../../components/UI/Spinner/Spinner";
const ManageStudents = () => {
	const [classes, setClasses] = useState();
	useEffect(() => {
		const itemRef = firebase.database().ref("classes");
		itemRef.on("value", (snapshot) => setClasses(snapshot.val()));
	}, []);

	return (
		<div>
			{classes ? (
				<div>
					Manage Students
					<p>{classes}</p>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default ManageStudents;
