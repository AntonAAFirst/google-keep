/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	active: false,
};

export const setActive = createAction('SETACTIVE');

export default createReducer(initialState, {
	[setActive]: function (state, action) {
		state.active = action.payload;
	},
});
