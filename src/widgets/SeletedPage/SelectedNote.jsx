/** @format */

import '../../shared/styles/selectednote.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { defaultFirebaseRequest } from '../../shared/http';
import {
	newArchived,
	newNotes,
	newPinned,
} from '../../shared/store/noteReducer';

export default function SelectedNote() {
	const dispatch = useDispatch();

	const noteIndex = useSelector((state) => state.selectedNote.noteIndex);
	const path = useSelector((state) => state.selectedNote.path);

	const noteName = useSelector((state) => state.selectedNote.noteName);

	const [noteNameInputFlag, setNoteNameInputFlag] = useState(true);
	const [noteNameInputValue, setNoteNameInputValue] = useState('');

	const noteParagraphs = useSelector((state) => state.selectedNote.paragraphs);

	const [noteParagraphsInputFlag, setNoteParagraphsInputFlag] = useState(true);
	const [noteParagraphsInputValue, setNoteParagraphsInputValue] = useState('');

	async function saveNote() {
		const id = Cookies.get('currentId');

		await defaultFirebaseRequest.patch(`/${id}/${path}/${noteIndex}.json`, {
			name: noteNameInputValue,
			paragraphs: noteParagraphsInputValue,
		});

		if (noteNameInputFlag) {
			await defaultFirebaseRequest.patch(`/${id}/${path}/${noteIndex}.json`, {
				name: noteName,
			});
		}

		if (noteParagraphsInputFlag) {
			await defaultFirebaseRequest.patch(`/${id}/${path}/${noteIndex}.json`, {
				paragraphs: noteParagraphs,
			});
		}

		await defaultFirebaseRequest.get(`/${id}/${path}.json`).then(({ data }) => {
			if (path === 'notes') {
				dispatch(newNotes(data));
			} else if (path === 'pinned') {
				dispatch(newPinned(data));
			} else if (path === 'archived') {
				dispatch(newArchived(data));
			}
		});
	}

	return (
		<div className='selectednote-container'>
			<div className='selected-form'>
				<div className='doubleinput'>
					<input
						onClick={() => {
							setNoteNameInputFlag(false);
							if (!noteNameInputValue) {
								setNoteNameInputValue(noteName);
							}
						}}
						value={noteNameInputFlag ? noteName : noteNameInputValue}
						onChange={(e) => setNoteNameInputValue(e.target.value)}
						className='doubleinput__input'
						placeholder='Заголовок'
					/>

					<textarea
						onClick={() => {
							setNoteParagraphsInputFlag(false);
							if (!noteParagraphsInputValue) {
								setNoteParagraphsInputValue(noteParagraphs);
							}
						}}
						value={
							noteParagraphsInputFlag
								? noteParagraphs.join('\n')
								: noteParagraphsInputValue.join('\n')
						}
						onChange={(e) =>
							setNoteParagraphsInputValue(e.target.value.split('\n'))
						}
						className='newtextarea'
						placeholder='Заметка...'></textarea>
				</div>
				<Link
					to='../notes'
					onClick={saveNote}
					className='note-save'>
					Сохранить
				</Link>
			</div>
		</div>
	);
}
