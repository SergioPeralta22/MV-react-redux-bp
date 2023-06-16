import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	try {
		if (response.ok) {
			const users = await response.json();
			return users;
		}
		throw new Error('Request failed!');
	} catch (error) {
		console.log(error);
	}
});

const initialState = {
	users: [],
	isLoading: false,
	error: undefined,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUsers.pending]: (state, action) => {
			state.isLoading = true;
		},
		[fetchUsers.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.users = action.payload;
		},
		[fetchUsers.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		},
	},
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
