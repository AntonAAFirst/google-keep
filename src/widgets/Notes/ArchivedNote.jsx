/** @format */

import React from 'react';
import DefaultNote from './DefaultNote';
import DeleteIcon from '../ClickableIcons/DeleteIcon';
import PinIcon from '../ClickableIcons/PinIcon';
import UnArchiveIcon from '../ClickableIcons/UnArchiveIcon';

export default function ArchivedNote({ header, text }) {
	return (
		<DefaultNote header={header}>
			<PinIcon
				header={header}
				text={text}
			/>

			<UnArchiveIcon
				header={header}
				text={text}
			/>

			<DeleteIcon
				header={header}
				text={text}
			/>
		</DefaultNote>
	);
}
