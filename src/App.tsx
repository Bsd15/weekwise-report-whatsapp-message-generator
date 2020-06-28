import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import ManageStudents from "./components/ManageStudents/ManageStudents";
import "./App.css";

function App() {
	return (
		<div className="container">
			<NavLink to="/manageStudents">Manage Students</NavLink>
			<Switch>
				<Route path="/manageStudents">
					<ManageStudents />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
