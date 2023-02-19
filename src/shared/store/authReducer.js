/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	authName: null,
	authPassword: null,
	testvalue: 0,
};

export const newAuthName = createAction('NEWAUTHNAME');
export const newAuthPassword = createAction('NEWAUTHPASSWORD');
export const newTest = createAction('NEWTET');

export default createReducer(initialState, {
	[newAuthName]: function (state, action) {
		state.authName = action.payload;
	},
	[newAuthPassword]: function (state, action) {
		state.authPassword = action.payload;
	},
	[newTest]: function (state, action) {
		state.testvalue = action.payload;
	},
});
