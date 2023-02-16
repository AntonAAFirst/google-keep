/** @format */

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MainNote from '../Notes/MainNote';

export default function FilteredMainNotes() {
	const [filteredNotes, setFilteredNotes] = useState([]);
	const notes = useSelector((state) => state.note.notes);
	const inputValue = useSelector((state) => state.mainInput.inputValue);

	useEffect(() => {
		if (notes !== undefined) {
			const temporaryFiltered = notes.filter((item) =>
				item.name.toLowerCase().includes(inputValue),
			);

			setFilteredNotes(temporaryFiltered);
		}
	}, [inputValue]);

	return (
		<div>
			{filteredNotes.length > 0 ? (
				<div className='notes-header'>Другие</div>
			) : (
				''
			)}

			<div className='notes'>
				{filteredNotes.length > 0
					? filteredNotes.map((item) => (
							<MainNote
								header={item.name}
								text={item.text}
							/>
					  ))
					: ''}
			</div>
		</div>
	);
}
