/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	active: false,
	name: 'null',
	paragraphs: [],
	path: '',
	noteIndex: null,
};

export const newName = createAction('NEWNAME');
export const newParagraphs = createAction('NEWPARAGRAPHS');
export const newPath = createAction('NEWPATH');
export const newNoteIndex = createAction('NEWNOTEINDEX');

export default createReducer(initialState, {
	[newName]: function (state, action) {
		state.name = action.payload;
	},
	[newParagraphs]: function (state, action) {
		state.paragraphs = action.payload;
	},
	[newPath]: function (state, action) {
		state.path = action.payload;
	},
	[newNoteIndex]: function (state, action) {
		state.noteIndex = action.payload;
	},
});
