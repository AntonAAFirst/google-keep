/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	authName: null,
	authPassword: null,
};

export const newAuthName = createAction('NEWAUTHNAME');
export const newAuthPassword = createAction('NEWAUTHPASSWORD');

export default createReducer(initialState, {
	[newAuthName]: function (state, action) {
		state.authName = action.payload;
	},
	[newAuthPassword]: function (state, action) {
		state.authPassword = action.payload;
	},
});
