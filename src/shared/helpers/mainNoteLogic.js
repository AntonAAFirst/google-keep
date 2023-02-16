/** @format */

import { addNoteToFirebase, removeNoteFromFirebase } from '.';
import {
	newArchived,
	newNotes,
	newPinned,
	newTrashed,
} from '../store/noteReducer';

export async function deleteMainNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'notes', dispatch, newNotes);
	addNoteToFirebase(name, paragraphs, 'trashed', dispatch, newTrashed);
}

export async function pinMainNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'notes', dispatch, newNotes);
	addNoteToFirebase(name, paragraphs, 'pinned', dispatch, newPinned);
}

export async function archiveMainNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'notes', dispatch, newNotes);
	addNoteToFirebase(name, paragraphs, 'archived', dispatch, newArchived);
}
