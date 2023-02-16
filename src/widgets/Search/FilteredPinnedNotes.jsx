/** @format */

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PinnedNote from '../Notes/PinnedNote';

export default function FilteredPinnedNotes() {
	const [filteredNotes, setFilteredNotes] = useState([]);
	const pinnedNotes = useSelector((state) => state.note.pinned);
	const inputValue = useSelector((state) => state.mainInput.inputValue);

	useEffect(() => {
		if (pinnedNotes !== undefined) {
			const temporaryFiltered = pinnedNotes.filter((item) =>
				item.name.toLowerCase().includes(inputValue),
			);

			setFilteredNotes(temporaryFiltered);
		}
	}, [inputValue]);

	return (
		<div>
			{filteredNotes.length > 0 ? (
				<div className='notes-header'>Закрепленные</div>
			) : (
				''
			)}

			<div className='notes'>
				{filteredNotes.length > 0
					? filteredNotes.map((item) => (
							<PinnedNote
								header={item.name}
								text={item.text}
							/>
					  ))
					: ''}
			</div>
		</div>
	);
}
