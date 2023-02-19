/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	noteName: '',
	paragraphs: [],
	path: '',
	noteIndex: null,
};

export const newNoteName = createAction('NEWNOTENAME');
export const newNoteParagraphs = createAction('NEWNOTEPARAGRAPHS');
export const newPath = createAction('NEWPATH');
export const newNoteIndex = createAction('NEWNOTEINDEX');

export default createReducer(initialState, {
	[newNoteName]: function (state, action) {
		state.noteName = action.payload;
	},
	[newNoteParagraphs]: function (state, action) {
		state.paragraphs = action.payload;
	},

	[newPath]: function (state, action) {
		state.path = action.payload;
	},
	[newNoteIndex]: function (state, action) {
		state.noteIndex = action.payload;
	},
});
