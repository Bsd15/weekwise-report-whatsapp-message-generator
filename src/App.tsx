import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ManageStudents from './containers/ManageStudents/ManageStudents';
import './App.css';
import withAlert from './hoc/withAlert/withAlert';

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
			<section id="content" className="container mt-2 px-2 w-full sm:w-1/2">
				<Switch>
					<Route path="/manageStudents">
						<ManageStudents />
					</Route>
				</Switch>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
					accusamus unde. Doloremque quia odio beatae iusto quidem sunt ab rerum
					facere dicta, aliquid nulla natus eius optio quam praesentium.
					Reprehenderit! Odio voluptatum facere non doloribus deleniti id
					adipisci maiores sint assumenda mollitia, dolorem soluta architecto
					nostrum harum consequuntur cupiditate, dolor veniam! Nemo odio quos
					perspiciatis incidunt dolor recusandae laudantium deserunt? Totam
					voluptates dolorem alias, illo commodi adipisci magni atque
					repudiandae, minima minus aperiam! Qui explicabo tempore asperiores
					doloribus, quo, in possimus, fugiat fugit aperiam ullam quisquam.
					Neque, iusto dolorum? Inventore! Voluptas soluta, vero consectetur
					maxime sint eligendi tenetur molestias saepe, sunt distinctio impedit,
					corporis laudantium cumque ducimus quo reprehenderit doloribus ad
					tempore dolore assumenda esse. Eaque nobis excepturi laudantium autem!
					Ad quidem iste doloribus odio inventore ex odit commodi ea id iure.
					Neque harum commodi eligendi repellendus velit! Facilis eius
					necessitatibus commodi maiores voluptas sapiente amet repudiandae
					laborum sit beatae!
				</p>
			</section>
		</section>
	);
}

export default withAlert(App);
