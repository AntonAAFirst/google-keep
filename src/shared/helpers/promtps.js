/** @format */

import {
	newIconPromptActive,
	newIconPromtText,
} from '../store/iconPromptReducer';

export function setPromtText(text, dispatch) {
	dispatch(newIconPromptActive(true));
	dispatch(newIconPromtText(text));
}

export function removePromtText(dispatch) {
	dispatch(newIconPromptActive(false));
	// dispatch(newIconPromtText(''));
}
