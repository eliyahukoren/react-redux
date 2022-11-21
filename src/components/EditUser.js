import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserForm from "./UserForm";
import { editUser } from "../features/userSlice";

const EditUser = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const users = useSelector(store => store.users);
	const navigate = useNavigate();
	const { id, name, email } = users.filter(user => user.id.toString() === params.id.toString())[0];

	const handleEditUser = (values) => {
		dispatch(editUser({
			id: values.id,
			name: values.name,
			email: values.email
		}))
		navigate("/");
	}

	return (
		<UserForm 
			formTitle="Edit user"
			buttonLabel="Update user" 
			initialState={{ id, name, email }} 
			actionHandler={handleEditUser} 
		/>
	)

}

export default EditUser;
