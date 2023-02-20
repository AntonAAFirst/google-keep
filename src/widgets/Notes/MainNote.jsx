/** @format */

import React from 'react';
import DefaultNote from './DefaultNote';
import PinIcon from '../ClickableIcons/PinIcon';
import ArchiveIcon from '../ClickableIcons/ArchiveIcon';
import DeleteIcon from '../ClickableIcons/DeleteIcon';

export default function MainNote({ header, text }) {
	return (
		<DefaultNote header={header}>
			<PinIcon
				header={header}
				text={text}
			/>
			<ArchiveIcon
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
