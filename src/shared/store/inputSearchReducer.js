/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	inputValue: '',
};

export const newInputValue = createAction('NEWINPUTVALUE');

export default createReducer(initialState, {
	[newInputValue]: function (state, action) {
		state.inputValue = action.payload;
	},
});
