/** @format */

import React from 'react';
import deleteIcon from '../../shared/img/delete.png';
import restoreIcon from '../../shared/img/restore.png';
import { useDispatch } from 'react-redux';
import OK from '../../shared/img/ok.png';
import {
	permanentlyRemoveTrashNote,
	restoreTrashNote,
} from '../../shared/helpers/trashedNoteLogic';
import { removePromtText, setPromtText } from '../../shared/helpers/promtps';
import { showNotification } from '../../shared/helpers/notificationLogic';

export default function TrashNote({ header, text }) {
	const dispatch = useDispatch();

	const notificationDeleteText = 'Заметка удалена навсегда';
	const notificationRestoreText = 'Заметка восстановлена';

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
							onMouseMove={() => setPromtText('Удалить навсегда', dispatch)}
							onMouseLeave={() => removePromtText(dispatch)}
							onClick={() => {
								showNotification(notificationDeleteText, dispatch);
								permanentlyRemoveTrashNote(header, dispatch);
							}}
							className='note-icons__item'
							src={deleteIcon}
							alt='here'
						/>
						<img
							onMouseMove={() => setPromtText('Восстановить', dispatch)}
							onMouseLeave={() => removePromtText(dispatch)}
							onClick={() => {
								showNotification(notificationRestoreText, dispatch);
								restoreTrashNote(header, text, dispatch);
							}}
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
