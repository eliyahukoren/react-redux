import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../features/userSlice";
import UserForm from "./UserForm";

const DeleteUser = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const users = useSelector(store => store.users);
	const navigate = useNavigate();
	const {id, name, email} = users.filter(user => user.id.toString() === params.id.toString())[0];
	
	const initialState = { id , name, email };

	const handleDeleteUser = (values) => {
		dispatch(deleteUser({
			id: values.id
		}));
		navigate("/");
	}

	return (
		<UserForm 
			formTitle="Delete user"
			buttonLabel="Delete user" 
			dangerAction={true} 
			disableInput={true} 
			initialState={initialState} 
			actionHandler={handleDeleteUser} 
		/>
	)

}

export default DeleteUser;
