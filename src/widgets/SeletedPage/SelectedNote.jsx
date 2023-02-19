/** @format */

import '../../shared/styles/selectednote.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultFirebaseRequest } from '../../shared/http';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { newNotes } from '../../shared/store/noteReducer';
import SelectedPageInput from './SelectedPageInput';
import SelectedPageTextArea from './SelectedPageTextArea';

export default function SelectedNote() {
	const name = useSelector((state) => state.selectedNote.name);
	const paragraphs = useSelector((state) => state.selectedNote.paragraphs);

	const path = useSelector((state) => state.selectedNote.path);
	const noteIndex = useSelector((state) => state.selectedNote.noteIndex);

	const dispatch = useDispatch();

	const [inputHeaderValue, setInputHeaderValue] = useState(name);
	const [inputParagraphs, setInputParagraphs] = useState('');

	async function saveNote() {
		const id = Cookies.get('currentId');

		await defaultFirebaseRequest.patch(`/${id}/${path}/${noteIndex}.json`, {
			name: inputHeaderValue,
			paragraphs: inputParagraphs,
		});

		await defaultFirebaseRequest.get(`/${id}/${path}.json`).then(({ data }) => {
			let temporaryNotes = [];
			if (data !== null) {
				temporaryNotes = data;
			}

			temporaryNotes.push({
				name: inputHeaderValue,
				paragraphs: inputParagraphs,
			});
			// console.log('it is temporary array - ', temporaryNotes);
			if (path === 'notes') {
				dispatch(newNotes(temporaryNotes));
			}
		});
	}

	return (
		<div className={'selectednote-container'}>
			<div className='selected-form'>
				<div className='doubleinput'>
					{/* <input
						onClick={() => console.log('IT IS NAME FROM REDUX - ', name)}
						value={inputHeaderValue}
						onChange={(e) => setInputHeaderValue(e.target.value)}
						className='doubleinput__input'
						placeholder='Заголовок'
					/> */}
					<SelectedPageInput header={name} />
					<SelectedPageTextArea header={paragraphs} />
				</div>
				<Link
					to='../notes'
					// onClick={() => saveNote()}
					className='note-save'>
					Сохранить
				</Link>
			</div>
		</div>
	);
}
