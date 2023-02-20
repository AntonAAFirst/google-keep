/** @format */

import React from 'react';
import DefaultNote from './DefaultNote';
import ArchiveIcon from '../ClickableIcons/ArchiveIcon';
import DeleteIcon from '../ClickableIcons/DeleteIcon';
import UnPinIcon from '../ClickableIcons/UnPinIcon';

export default function PinnedNote({ header, text }) {
	return (
		<DefaultNote header={header}>
			<UnPinIcon
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
