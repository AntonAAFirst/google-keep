/** @format */

import Cookies from 'js-cookie';
import { defaultFirebaseRequest } from '../http';
import { newNotes } from '../store/noteReducer';
import { checkNoteTextLength } from './notePage';

function checkUnique(array, name) {
	let flag = true;

	if (array !== undefined) {
		for (let item in array) {
			if (name === array[item].name) {
				flag = false;
			}
		}
	}

	return flag;
}

export async function createNote(header, noteText, setInputActive, dispatch) {
	setInputActive(false);
	const id = Cookies.get('currentId');

	const correctNaming = checkNoteTextLength(
		noteText[0].length,
		noteText.length,
		header.length,
	);

	let uniqueName = true;

	await defaultFirebaseRequest.get(`/${id}.json`).then(({ data }) => {
		const mainNotes = data.notes;
		const pinnedNotes = data.pinned;
		const archivedNotes = data.archived;
		const trashedNotes = data.trashed;

		uniqueName =
			checkUnique(mainNotes, header) &&
			checkUnique(pinnedNotes, header) &&
			checkUnique(archivedNotes, header) &&
			checkUnique(trashedNotes, header);
	});

	if (correctNaming && uniqueName) {
		await defaultFirebaseRequest.get(`/${id}.json`).then(({ data }) => {
			let temporaryArray = [];

			if (data.notes !== undefined) {
				temporaryArray = data.notes;
			}

			temporaryArray.push({
				name: header,
				paragraphs: noteText,
			});

			dispatch(newNotes(temporaryArray));
			defaultFirebaseRequest.patch(
				`/${id}/notes.json`,
				Object.assign({}, temporaryArray),
			);
		});
	} else if (!uniqueName) {
		alert('Имя заметки должно быть уникальным');
	}
}

export async function removeNoteFromFirebase(
	name,
	directory,
	dispatch,
	dispatchFunction,
) {
	const id = Cookies.get('currentId');

	let filteredNotes;

	await defaultFirebaseRequest
		.get(`/${id}/${directory}.json`)
		.then(({ data }) => {
			filteredNotes = data.filter((item) => item.name !== name);
			dispatch(dispatchFunction(filteredNotes));
		});

	await defaultFirebaseRequest.put(`/${id}/${directory}.json`, filteredNotes);
}

export async function addNoteToFirebase(
	name,
	paragraphs,
	directory,

	dispatch,
	dispatchFunction,
) {
	const id = Cookies.get('currentId');

	let arrayForDirectory = [];

	await defaultFirebaseRequest
		.get(`/${id}/${directory}.json`)
		.then(({ data }) => {
			arrayForDirectory = data;
		});

	if (arrayForDirectory === null) {
		arrayForDirectory = [];
	}

	arrayForDirectory.push({
		name: name,
		paragraphs: paragraphs,
	});

	await defaultFirebaseRequest.put(
		`/${id}/${directory}.json`,
		arrayForDirectory,
	);

	dispatch(dispatchFunction(arrayForDirectory));
}
