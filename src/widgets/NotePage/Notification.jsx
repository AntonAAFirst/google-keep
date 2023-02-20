/** @format */

import React from 'react';
import '../../shared/styles/notification.css';
import { useSelector } from 'react-redux';

export default function Notification() {
	const active = useSelector((state) => state.notification.active);
	const text = useSelector((state) => state.notification.text);

	return (
		<div className='notification-container notification-active'>
			<div
				className={
					active
						? 'notification-block notification-active'
						: 'notification-block'
				}>
				<p>{text}</p>
			</div>
		</div>
	);
}
