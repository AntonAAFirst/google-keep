/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { pinMainNote } from '../../shared/helpers/mainNoteLogic';
import { showNotification } from '../../shared/helpers/notificationLogic';
import { removePromtText, setPromtText } from '../../shared/helpers/promtps';
import pin from '../../shared/img/pin.png';
import { newNotificationActive } from '../../shared/store/notificationReducer';

export default function PinIcon({ header, text }) {
	const dispatch = useDispatch();
	const notificationText = 'Заметка закреплена';

	return (
		<img
			onMouseMove={() => setPromtText('Закрепить заметку', dispatch)}
			onMouseLeave={() => removePromtText(dispatch)}
			onClick={() => {
				showNotification(notificationText, dispatch);
				pinMainNote(header, text, dispatch);
			}}
			className='note-icons__item'
			src={pin}
			alt='here'
		/>
	);
}
