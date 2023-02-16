/** @format */

import { addNoteToFirebase, removeNoteFromFirebase } from '.';
import {
	newArchived,
	newNotes,
	newPinned,
	newTrashed,
} from '../store/noteReducer';

export function deletePinnedNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'pinned', dispatch, newPinned);
	addNoteToFirebase(name, paragraphs, 'trashed', dispatch, newTrashed);
}

export async function unpinPinnedNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'pinned', dispatch, newPinned);
	addNoteToFirebase(name, paragraphs, 'notes', dispatch, newNotes);
}

export async function archivePinnedNote(name, paragraphs, dispatch) {
	removeNoteFromFirebase(name, 'pinned', dispatch, newPinned);
	addNoteToFirebase(name, paragraphs, 'archived', dispatch, newArchived);
}
