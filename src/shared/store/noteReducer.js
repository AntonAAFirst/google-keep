/** @format */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	notes: [],
	pinned: [],
	trashed: [],
	archived: [],
};

export const newNotes = createAction('NEWNOTES');
export const newPinned = createAction('NEWPINNED');
export const newTrashed = createAction('NEWTRASHED');
export const newArchived = createAction('NEWARCHIVED');

export default createReducer(initialState, {
	[newNotes]: function (state, action) {
		state.notes = action.payload;
	},
	[newPinned]: function (state, action) {
		state.pinned = action.payload;
	},
	[newTrashed]: function (state, action) {
		state.trashed = action.payload;
	},
	[newArchived]: function (state, action) {
		state.archived = action.payload;
	},
});
