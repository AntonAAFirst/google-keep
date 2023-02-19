/** @format */

import Cookies from 'js-cookie';
import { defaultFirebaseRequest } from '../http';
import {
	newNoteIndex,
	newNoteName,
	newNoteParagraphs,
	newPath,
} from '../store/selectedNoteReducer';

export function checkNoteTextLength(
	firstParagraghLength,
	countParagraphs,
	headerLength,
) {
	return firstParagraghLength > 0 || countParagraphs >= 2 || headerLength > 0;
}

function checkName(array, name, path, dispatch) {
	if (array !== undefined) {
		for (let item in array) {
			if (array[item].name === name) {
				dispatch(newNoteName(array[item].name));
				dispatch(newNoteParagraphs(array[item].paragraphs));
				dispatch(newNoteIndex(item));
				dispatch(newPath(path));
			}
		}
	}
}

export async function setData(header, dispatch) {
	const id = Cookies.get('currentId');

	await defaultFirebaseRequest.get(`/${id}.json`).then(({ data }) => {
		const notes = data.notes;
		const pinned = data.pinned;
		const archived = data.archived;

		checkName(notes, header, 'notes', dispatch);
		checkName(pinned, header, 'pinned', dispatch);
		checkName(archived, header, 'archived', dispatch);
	});
}
