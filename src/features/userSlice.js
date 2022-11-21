import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.push(action.payload);
			console.log(action);
		},
		editUser: (state, action) => {
			const {id, name, email} = action.payload;
			const user = state.find(user => user.id === id);

			if (user) {
				user.name = name;
				user.email = email
			}
		},
		deleteUser: (state, action) => {
			const { id } = action.payload;
			const user = state.find(user => user.id === id);

			if (user) {
				return state.filter(user => user.id !== id)
			}
		}
	}
});

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer
