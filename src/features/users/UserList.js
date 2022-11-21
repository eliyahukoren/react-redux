import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import custom components
import Button from "../../components/Button";

// helpers imports
import { editIcon, deleteIcon } from "../../utils/helper";

const UserList = () => {
	const users = useSelector(store => store.users);
	const renderCard = () => users.map(user => (
		<div key={user.id} className="user-card">
			<div>
				<h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
				<span className="font-normal text-gray-600">{user.email}</span>

			</div>
			<div className="flex gap-4">
				<Link to={`edit-user/${user.id}`}>
					<button>
						{editIcon}
					</button>
				</Link>

				<Link to={`delete-user/${user.id}`}>
					<button>
						{deleteIcon}
					</button>
				</Link>
			</div>
		</div>
	))

	return (
		<div>

			<Link to="add-user">
				<Button>Add user</Button>
			</Link>

			<div className="grid gap-5 md:grid-cols-2">
				{users.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No Users</p>}
			</div>

		</div>
	);
}

export default UserList;
