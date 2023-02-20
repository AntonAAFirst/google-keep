/** @format */

import React from 'react';
import pin from '../../shared/img/pin.png';
import archive from '../../shared/img/archive.png';
import { useDispatch } from 'react-redux';
import buttonDelete from '../../shared/img/cancel.png';
import {
	archiveMainNote,
	deleteMainNote,
	pinMainNote,
} from '../../shared/helpers/mainNoteLogic';
import DefaultNote from './DefaultNote';
import {
	newIconPromptActive,
	newIconPromtText,
} from '../../shared/store/iconPromptReducer';
import { removePromtText, setPromtText } from '../../shared/helpers/promtps';

export default function MainNote({ header, text }) {
	const dispatch = useDispatch();

	return (
		<DefaultNote header={header}>
			<img
				onMouseMove={() => setPromtText('Закрепить заметку', dispatch)}
				onMouseLeave={() => removePromtText(dispatch)}
				onClick={() => pinMainNote(header, text, dispatch)}
				className='note-icons__item'
				src={pin}
				alt='here'
			/>
			<img
				onMouseMove={() => setPromtText('Архивировать заметку', dispatch)}
				onMouseLeave={() => removePromtText(dispatch)}
				onClick={() => archiveMainNote(header, text, dispatch)}
				className='note-icons__item'
				src={archive}
				alt='here'
			/>

			<img
				onMouseMove={() => setPromtText('Удалить заметку', dispatch)}
				onMouseLeave={() => removePromtText(dispatch)}
				onClick={() => deleteMainNote(header, text, dispatch)}
				className='note-icons__item'
				src={buttonDelete}
				alt='here'
			/>
		</DefaultNote>
	);
}
