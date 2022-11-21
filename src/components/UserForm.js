import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import TextField from "./TextField";


const UserForm = ({ initialState, actionHandler, buttonLabel, formTitle, disableInput = false, dangerAction = false, cancelButtonLabel = 'Cancel'}) => {

	const [values, setValues] = useState(initialState);

	const clickHandler = () => {
		actionHandler(values);
		setValues({ name: "", email: ""});
	}

	return (
		<div className="mt-10 max-w-xl mx-auto">
			<h2 className="text-center text-gray-700 font-bold my-5 text-lg">{formTitle}</h2>
			<TextField
				label="Name"
				value={values.name}
				onChange={e => setValues({ ...values, name: e.target.value })}
				inputProps={{
					disabled: disableInput,
					type: 'input',
					placeholder: '@example: John Doe'
				}}
			/>
			<br />
			<TextField
				label="Email"
				value={values.email}
				onChange={e => setValues({ ...values, email: e.target.value })}
				inputProps={{
					disabled: disableInput,
					type: 'input',
					placeholder: '@example: johndoe@email.com'
				}}
			/>

			<Button dangerAction={dangerAction} onClick={clickHandler}>{buttonLabel}</Button>
			<Button>
				<Link to="/">{cancelButtonLabel}</Link>
			</Button>
		</div>
	);

}

export default UserForm;
