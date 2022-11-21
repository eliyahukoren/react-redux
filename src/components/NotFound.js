import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
			<h1 className="text-center text-gray-500">Oops!</h1>
			<p className="text-center text-rose-700">
				<Link to="/">Back to Home page</Link>
			</p>
			<div className="flex items-center justify-center">
				<h1 className="text-gray-700 text-5xl text-center p-5">404</h1>
				<div className="bg-gray-500 w-0.5 h-7"></div>
				<h2 className="text-gray-500 text-2xl p-5">Not Found</h2>
			</div>
		</div>
	);
}

export default NotFound;
