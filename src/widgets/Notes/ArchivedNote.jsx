/** @format */

import React from 'react';
import pin from '../../shared/img/pin.png';
import unarchive from '../../shared/img/unarchive.png';
import { useDispatch } from 'react-redux';
import buttonDelete from '../../shared/img/cancel.png';
import DefaultNote from './DefaultNote';
import {
	deleteArchiveNote,
	pinArchiveNote,
	unArchiveArchiveNote,
} from '../../shared/helpers/archivedNoteLogic';

export default function ArchivedNote({ header, text }) {
	const dispatch = useDispatch();

	return (
		<DefaultNote header={header}>
			<img
				onClick={() => pinArchiveNote(header, text, dispatch)}
				className='note-icons__item'
				src={pin}
				alt='here'
			/>
			<img
				onClick={() => unArchiveArchiveNote(header, text, dispatch)}
				className='note-icons__item'
				src={unarchive}
				alt='here'
			/>

			<img
				onClick={() => deleteArchiveNote(header, text, dispatch)}
				className='note-icons__item'
				src={buttonDelete}
				alt='here'
			/>
		</DefaultNote>
	);
}
