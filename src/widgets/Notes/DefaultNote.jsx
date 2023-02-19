/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import {
	newNoteIndex,
	newNoteName,
	newNoteParagraphs,
	newPath,
} from '../../shared/store/selectedNoteReducer';
import OK from '../../shared/img/ok.png';
import { defaultFirebaseRequest } from '../../shared/http';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { setData } from '../../shared/helpers/notePage';

export default function DefaultNote({ header, children }) {
	const dispatch = useDispatch();

	// function checkName(array, name, path, dispatch) {
	// 	if (array !== undefined) {
	// 		for (let item in array) {
	// 			if (array[item].name === name) {
	// 				dispatch(newNoteName(array[item].name));
	// 				dispatch(newNoteParagraphs(array[item].paragraphs));
	// 				dispatch(newNoteIndex(item));
	// 				dispatch(newPath(path));
	// 			}
	// 		}
	// 	}
	// }

	// async function setData() {
	// 	const id = Cookies.get('currentId');

	// 	await defaultFirebaseRequest.get(`/${id}.json`).then(({ data }) => {
	// 		const notes = data.notes;
	// 		const pinned = data.pinned;
	// 		const archived = data.archived;

	// 		checkName(notes, header, 'notes', dispatch);
	// 		checkName(pinned, header, 'pinned', dispatch);
	// 		checkName(archived, header, 'archived', dispatch);
	// 	});
	// }

	return (
		<div>
			<div className='note'>
				<img
					className='note-ok'
					src={OK}
					alt='ok'
				/>
				<Link
					onClick={() => setData(header, dispatch)}
					to='../selectednote'
					style={{
						marginBottom: '16px',
						textDecoration: 'none',
						color: 'black',
					}}>
					{header ? header : 'Безымянный'}
				</Link>

				<div className='note-icons'>
					<div className='icons-container'>{children}</div>
				</div>
			</div>
		</div>
	);
}
