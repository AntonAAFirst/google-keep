/** @format */

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ArchivedNote from '../Notes/ArchivedNote';
import PinnedNote from '../Notes/PinnedNote';

export default function FilteredArchivedNotes() {
	const [filteredNotes, setFilteredNotes] = useState([]);
	const archivedNotes = useSelector((state) => state.note.archived);

	const inputValue = useSelector((state) => state.mainInput.inputValue);

	useEffect(() => {
		if (archivedNotes !== undefined) {
			const temporaryFiltered = archivedNotes.filter((item) =>
				item.name.toLowerCase().includes(inputValue),
			);

			setFilteredNotes(temporaryFiltered);
		}
	}, [inputValue]);

	return (
		<div>
			{filteredNotes.length > 0 ? (
				<div className='notes-header'>Архивированные</div>
			) : (
				''
			)}

			<div className='notes'>
				{filteredNotes.length > 0
					? filteredNotes.map((item) => (
							<ArchivedNote
								header={item.name}
								text={item.text}
							/>
					  ))
					: ''}
			</div>
		</div>
	);
}
