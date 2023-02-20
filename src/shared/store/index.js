/** @format */

import {
	applyMiddleware,
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit';
import authReducer from './authReducer';
import controlPanelReducer from './controlPanelReducer';
import inputSearchReducer from './inputSearchReducer';
import noteReducer from './noteReducer';
import selectedNoteReducer from './selectedNoteReducer';
import thunk from 'redux-thunk';
import iconPromptReducer from './iconPromptReducer';

const rootReducer = combineReducers({
	note: noteReducer,
	controlPanel: controlPanelReducer,
	mainInput: inputSearchReducer,
	auth: authReducer,
	selectedNote: selectedNoteReducer,
	iconPrompt: iconPromptReducer,
});

const middlewareEnhancer = applyMiddleware(thunk);

export const store = configureStore({
	reducer: rootReducer,
	middlewareEnhancer,
});
