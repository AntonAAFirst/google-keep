/** @format */

import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultFirebaseRequest } from '../shared/http';
import {
	newArchived,
	newNotes,
	newPinned,
	newTrashed,
} from '../shared/store/noteReducer';
import '../shared/styles/note-page.css';
import '../shared/styles/doubleinput.css';
import DoubleInput from '../widgets/NotePage/DoubleInput';
import '../shared/styles/notes.css';
import MainNote from '../widgets/Notes/MainNote';
import PinnedNote from '../widgets/Notes/PinnedNote';

export default function Notes() {
	const dispatch = useDispatch();

	const notes = useSelector((state) => state.note.notes);
	const pinnedNotes = useSelector((state) => state.note.pinned);

	useEffect(() => {
		const id = Cookies.get('currentId');

		defaultFirebaseRequest.get(`/${id}.json`).then(({ data }) => {
			dispatch(newNotes(data.notes));
			dispatch(newPinned(data.pinned));
			dispatch(newTrashed(data.trashed));
			dispatch(newArchived(data.archived));
		});
	}, []);

	return (
		<div className='notes-container'>
			<DoubleInput />
			{pinnedNotes ? (
				<div className='notes-header'> Закрепленные заметки</div>
			) : (
				''
			)}
			<div className='note-block'>
				<div className='notes'>
					{pinnedNotes
						? pinnedNotes.map((item) => (
								<PinnedNote
									header={item.name}
									text={item.paragraphs}
								/>
						  ))
						: ''}
				</div>
			</div>
			{pinnedNotes ? <div className='notes-header'> Другие заметки</div> : ''}
			<div className='note-block'>
				<div className='notes'>
					{notes
						? notes.map((item) => (
								<MainNote
									header={item.name}
									text={item.paragraphs}
								/>
						  ))
						: ''}
				</div>
			</div>
		</div>
	);
}
