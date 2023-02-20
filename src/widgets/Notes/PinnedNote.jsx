/** @format */

import React from 'react';
import unpin from '../../shared/img/unpin.png';
import archive from '../../shared/img/archive.png';
import { useDispatch } from 'react-redux';
import buttonDelete from '../../shared/img/cancel.png';
import {
	archivePinnedNote,
	deletePinnedNote,
	unpinPinnedNote,
} from '../../shared/helpers/pinnedNoteLogic';
import DefaultNote from './DefaultNote';
import { removePromtText, setPromtText } from '../../shared/helpers/promtps';

export default function PinnedNote({ header, text }) {
	const dispatch = useDispatch();
	return (
		<DefaultNote header={header}>
			<img
				onMouseMove={() => setPromtText('Открепить заметку', dispatch)}
				onMouseLeave={() => removePromtText(dispatch)}
				onClick={() => unpinPinnedNote(header, text, dispatch)}
				className='note-icons__item'
				src={unpin}
				alt='here'
			/>
			<img
				onMouseMove={() => setPromtText('Архивировать заметку', dispatch)}
				onMouseLeave={() => removePromtText(dispatch)}
				onClick={() => archivePinnedNote(header, text, dispatch)}
				className='note-icons__item'
				src={archive}
				alt='here'
			/>

			<img
				onMouseMove={() => setPromtText('Удалить заметку', dispatch)}
				onMouseLeave={() => removePromtText(dispatch)}
				onClick={() => deletePinnedNote(header, text, dispatch)}
				className='note-icons__item'
				src={buttonDelete}
				alt='here'
			/>
		</DefaultNote>
	);
}
