import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom";

import UserList from "./features/users/UserList";
import User from "./components/User";
import NotFound from "./components/NotFound";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";

const router = createBrowserRouter([
	{
		path: "/",
		element: <UserList />,
		errorElement: <NotFound />
	},
	{
		path: "user/:id",
		element: <User />,
		errorElement: <NotFound />
	},
	{
		path: "add-user",
		element: <AddUser />
	},
	{
		path: "edit-user/:id",
		element: <EditUser />
	},
	{
		path: "delete-user/:id",
		element: <DeleteUser />
	},

]);

const App = () => {
	return (
		<div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
			<h1 className="text-center font-bold text-2xl text-gray-700">CRUD with Redux toolkit</h1>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;


