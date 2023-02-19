/** @format */

import React from 'react';
import { useState } from 'react';

export default function SelectedPageInput({ header }) {
	const [inputValue, setInputValue] = useState('');

	const [inputFlag, setInputFlag] = useState(false);

	return (
		<input
			onClick={() => setInputFlag(true)}
			value={inputFlag ? inputValue : header}
			onChange={(e) => setInputValue(e.target.value)}
			className='doubleinput__input'
			placeholder='Заголовок'
		/>
	);
}
