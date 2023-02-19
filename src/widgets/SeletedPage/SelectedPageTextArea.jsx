/** @format */

import React from 'react';
import { useState } from 'react';

export default function SelectedPageTextArea({ header }) {
	const [inputValue, setInputValue] = useState('');
	const [inputFlag, setInputFlag] = useState(false);

	return (
		<textarea
			onClick={() => {
				setInputFlag(true);
				console.log('это хедер в текст ареа - ', header);
			}}
			value={inputFlag ? inputValue : header}
			onChange={(e) => setInputValue(e.target.value)}
			className='newtextarea'
			placeholder='Заметка...'></textarea>
	);
}
