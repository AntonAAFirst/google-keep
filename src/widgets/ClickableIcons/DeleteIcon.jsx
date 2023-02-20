/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMainNote } from '../../shared/helpers/mainNoteLogic';
import { showNotification } from '../../shared/helpers/notificationLogic';
import { removePromtText, setPromtText } from '../../shared/helpers/promtps';
import buttonDelete from '../../shared/img/cancel.png';
import {
	newNotificationActive,
	newNotificationText,
} from '../../shared/store/notificationReducer';

export default function DeleteIcon({ header, text }) {
	const dispatch = useDispatch();
	const notificationText = 'Заметка перемещена в корзину';

	return (
		<img
			onMouseMove={() => {
				setPromtText('Удалить заметку', dispatch);
			}}
			onMouseLeave={() => removePromtText(dispatch)}
			onClick={() => {
				showNotification(notificationText, dispatch);
				deleteMainNote(header, text, dispatch);
			}}
			className='note-icons__item'
			src={buttonDelete}
			alt='here'
		/>
	);
}
