/** @format */

import React from 'react';
import deleteIcon from '../../shared/img/delete.png';
import restoreIcon from '../../shared/img/restore.png';
import { useDispatch } from 'react-redux';
import DefaultNote from './DefaultNote';
import {
	permanentlyRemoveTrashNote,
	restoreTrashNote,
} from '../../shared/helpers/trashedNoteLogic';

export default function TrashNote({ header, text }) {
	const dispatch = useDispatch();

	return (
		<DefaultNote header={header}>
			<img
				onClick={() => permanentlyRemoveTrashNote(header, dispatch)}
				className='note-icons__item'
				src={deleteIcon}
				alt='here'
			/>
			<img
				onClick={() => restoreTrashNote(header, text, dispatch)}
				className='note-icons__item'
				src={restoreIcon}
				alt='here'
			/>
		</DefaultNote>
	);
}
