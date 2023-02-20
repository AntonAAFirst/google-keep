/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	active: false,
	text: '',
};

export const newIconPromptActive = createAction('NEWICONPROMT');
export const newIconPromtText = createAction('NEWICONPROMPTTEXT');

export default createReducer(initialState, {
	[newIconPromptActive]: function (state, action) {
		state.active = action.payload;
	},
	[newIconPromtText]: function (state, action) {
		state.text = action.payload;
	},
});
