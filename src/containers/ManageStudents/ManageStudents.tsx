import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
const ManageStudents = () => {
	const [classes, setClasses] = useState();
	useEffect(() => {
		const itemRef = firebase.database().ref("classes");
		itemRef.on("value", (snapshot) => setClasses(snapshot.val()));
	}, []);
	return (
		<div>
			Manage Students
			<p>{classes}</p>
		</div>
	);
};

export default ManageStudents;
