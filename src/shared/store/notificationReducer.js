/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	active: false,
	text: '',
};

export const newNotificationActive = createAction('NEWNOTIFICATIONACTIVE');
export const newNotificationText = createAction('NEWNOTIFICATIONTEXT');

export default createReducer(initialState, {
	[newNotificationActive]: function (state, action) {
		state.active = action.payload;
	},
	[newNotificationText]: function (state, action) {
		state.text = action.payload;
	},
});
