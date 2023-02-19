/** @format */

import React from 'react';
import deleteIcon from '../../shared/img/delete.png';
import restoreIcon from '../../shared/img/restore.png';
import { useDispatch } from 'react-redux';
import DefaultNote from './DefaultNote';
import OK from '../../shared/img/ok.png';
import {
	permanentlyRemoveTrashNote,
	restoreTrashNote,
} from '../../shared/helpers/trashedNoteLogic';

export default function TrashNote({ header, text }) {
	const dispatch = useDispatch();

	return (
		<div>
			<div className='note'>
				<img
					className='note-ok'
					src={OK}
					alt='ok'
				/>
				<div
					to='../selectednote'
					style={{
						marginBottom: '16px',
						textDecoration: 'none',
						color: 'black',
					}}>
					{header ? header : 'Безымянный'}
				</div>

				<div className='note-icons'>
					<div className='icons-container'>
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
					</div>
				</div>
			</div>
		</div>
	);
}
