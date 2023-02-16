/** @format */

import Cookies from 'js-cookie';
import { defaultFirebaseRequest } from '../http';
import { newNotes } from '../store/noteReducer';
import { checkNoteTextLength } from './notePage';

export async function createNote(header, noteText, setInputActive, dispatch) {
	setInputActive(false);
	const id = Cookies.get('currentId');

	const correctNaming = checkNoteTextLength(
		noteText[0].length,
		noteText.length,
		header.length,
	);

	let uniqueName = true;

	await defaultFirebaseRequest.get(`/${id}/notes.json`).then(({ data }) => {
		for (let item in data) {
			if (header === data[item].name) {
				uniqueName = false;
				console.log('IT IS THE UNIQUE NAME - ', uniqueName);
			}
		}
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
