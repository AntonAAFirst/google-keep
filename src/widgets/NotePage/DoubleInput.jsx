/** @format */

import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../../shared/helpers/index';

export default function DoubleInput() {
	const [inputActive, setInputActive] = useState(false);
	const bigArea = useRef();
	const [headerText, setHeaderText] = useState();

	const dispatch = useDispatch();

	function buttonSaveLogic() {
		if (headerText.length <= 1) {
			alert('Заголовок не может быть пустым');
		} else {
			createNote(
				headerText,
				bigArea.current.innerText.split('\n'),
				setInputActive,
				dispatch,
			);
			setHeaderText('');
		}
	}

	return (
		<div className='input-block'>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='doubleinput-container'>
				{inputActive ? (
					<div>
						<div className='doubleinput'>
							<input
								value={headerText}
								onChange={(e) => setHeaderText(e.target.value)}
								className='doubleinput__input'
								placeholder='Заголовок'
							/>
							<div
								ref={bigArea}
								contentEditable='true'
								className='doubleinput__textarea'
								placeholder='Заметка...'></div>
						</div>
					</div>
				) : (
					<input
						className='doubleinput__input'
						placeholder='Заметка...'
						onClick={() => setInputActive(true)}
					/>
				)}
			</div>
			<div
				onClick={buttonSaveLogic}
				className='note-save'>
				Сохранить
			</div>
		</div>
	);
}
