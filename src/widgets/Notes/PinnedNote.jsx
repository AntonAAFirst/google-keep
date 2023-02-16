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

export default function PinnedNote({ header, text }) {
	const dispatch = useDispatch();
	return (
		<DefaultNote header={header}>
			<img
				onClick={() => unpinPinnedNote(header, text, dispatch)}
				className='note-icons__item'
				src={unpin}
				alt='here'
			/>
			<img
				onClick={() => archivePinnedNote(header, text, dispatch)}
				className='note-icons__item'
				src={archive}
				alt='here'
			/>

			<img
				onClick={() => deletePinnedNote(header, text, dispatch)}
				className='note-icons__item'
				src={buttonDelete}
				alt='here'
			/>
		</DefaultNote>
	);
}
