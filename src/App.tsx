import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ManageStudents from './containers/ManageStudents/ManageStudents';
import './App.css';

function App() {
	return (
		<section className="container">
			<section
				id="nav-links"
				className="w-full sm:w-1/2 grid grid-cols-2 px-3 py-3 sm:mx-auto"
			>
				<NavLink
					exact
					to="/"
					className="mx-auto p-3 hover:font-bold bg-gray-300 text-gray-800 hover:text-white hover:bg-blue-300"
					activeClassName="link-active"
				>
					Home
				</NavLink>
				<NavLink
					to="/manageStudents"
					className="mx-auto p-3 hover:font-bold bg-gray-300 text-gray-800 hover:text-white hover:bg-blue-300"
					activeClassName="link-active"
				>
					Manage Students
				</NavLink>
			</section>
			<section className="container px-2 w-full sm:w-1/2">
				<Switch>
					<Route path="/manageStudents">
						<ManageStudents />
					</Route>
				</Switch>
			</section>
		</section>
	);
}

export default App;
