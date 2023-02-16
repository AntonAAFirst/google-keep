/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	currentItem: null,
};

export const newCurrentItem = createAction('NEWCURRENTITEM');

export default createReducer(initialState, {
	[newCurrentItem]: function (state, action) {
		state.currentItem = action.payload;
	},
});
