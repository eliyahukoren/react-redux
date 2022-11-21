import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../features/userSlice";
import UserForm from "./UserForm";

const AddUser = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const initialState = {
		name: "",
		email: ""
	};

	const handleAddUser = (values) => {
		console.log( values);
		dispatch(addUser({
			id: uuidv4(),
			name: values.name,
			email: values.email
		}));
		navigate("/");
	}

	return (
		<UserForm 
			formTitle="Add user"
			buttonLabel="Save user" 
			initialState={initialState} 
			actionHandler={handleAddUser} 		
		/>
	)

}

export default AddUser;
