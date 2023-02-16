/** @format */

import { addNoteToFirebase, removeNoteFromFirebase } from '.';
import {
	newArchived,
	newNotes,
	newPinned,
	newTrashed,
} from '../store/noteReducer';

export async function deleteArchiveNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'archived', dispatch, newArchived);
	addNoteToFirebase(name, paragraphs, 'trashed', dispatch, newTrashed);
}

export async function pinArchiveNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'archived', dispatch, newArchived);
	addNoteToFirebase(name, paragraphs, 'pinned', dispatch, newPinned);
}

export async function unArchiveArchiveNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'archived', dispatch, newArchived);
	addNoteToFirebase(name, paragraphs, 'notes', dispatch, newNotes);
}
