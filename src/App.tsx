import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ManageStudents from './containers/ManageStudents/ManageStudents';
import './App.css';

function App() {
	return (
		<section className="container">
			<section id="nav-links" className="bg-blue-100 w-full sm:w-1/2 flex justify-around px-3 py-3 sm:mx-auto">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/manageStudents">Manage Students</NavLink>
			</section>
			<Switch>
				<Route path="/manageStudents">
					<ManageStudents />
				</Route>
			</Switch>
		</section>
	);
}

export default App;
