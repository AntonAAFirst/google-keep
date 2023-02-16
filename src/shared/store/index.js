/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import controlPanelReducer from './controlPanelReducer';
import inputSearchReducer from './inputSearchReducer';
import noteReducer from './noteReducer';
import selectionPanelReducer from './selectionPanelReducer';

const rootReducer = combineReducers({
	note: noteReducer,
	controlPanel: controlPanelReducer,
	selectionPanel: selectionPanelReducer,
	mainInput: inputSearchReducer,
	auth: authReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
