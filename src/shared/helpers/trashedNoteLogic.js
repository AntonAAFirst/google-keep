/** @format */

import { addNoteToFirebase, removeNoteFromFirebase } from '.';
import { newNotes, newTrashed } from '../store/noteReducer';

export function permanentlyRemoveTrashNote(name, dispatch) {
	removeNoteFromFirebase(name, 'trashed', dispatch, newTrashed);
}

export async function restoreTrashNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'trashed', dispatch, newTrashed);
	addNoteToFirebase(name, paragraphs, 'notes', dispatch, newNotes);
}
