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
import { removePromtText, setPromtText } from '../../shared/helpers/promtps';

export default function ArchivedNote({ header, text }) {
	const dispatch = useDispatch();

	return (
		<DefaultNote header={header}>
			<img
				onMouseMove={() => setPromtText('Закрепить заметку', dispatch)}
				onMouseLeave={() => removePromtText(dispatch)}
				onClick={() => pinArchiveNote(header, text, dispatch)}
				className='note-icons__item'
				src={pin}
				alt='here'
			/>
			<img
				onMouseMove={() => setPromtText('Разархивировать заметку', dispatch)}
				onMouseLeave={() => removePromtText(dispatch)}
				onClick={() => unArchiveArchiveNote(header, text, dispatch)}
				className='note-icons__item'
				src={unarchive}
				alt='here'
			/>

			<img
				onMouseMove={() => setPromtText('Удалить заметку', dispatch)}
				onMouseLeave={() => removePromtText(dispatch)}
				onClick={() => deleteArchiveNote(header, text, dispatch)}
				className='note-icons__item'
				src={buttonDelete}
				alt='here'
			/>
		</DefaultNote>
	);
}
