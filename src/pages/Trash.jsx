/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import VisibleHeader from '../widgets/NotePage/VisibleHeader';
import TrashNote from '../widgets/Notes/TrashNote';

export default function Trash() {
	const trashedNotes = useSelector((state) => state.note.trashed);
	return (
		<div>
			<div className='archive-container'>
				<VisibleHeader
					active={trashedNotes}
					text='Удаленные'
				/>

				<div className='notes'>
					{trashedNotes
						? trashedNotes.map((item) => (
								<TrashNote
									header={item.name}
									text={item.paragraphs}
								/>
						  ))
						: ''}
				</div>
			</div>
		</div>
	);
}
