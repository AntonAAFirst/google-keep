/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import {
	newName,
	newNoteIndex,
	newParagraphs,
	newPath,
} from '../../shared/store/selectedNoteReducer';
import OK from '../../shared/img/ok.png';
import { defaultFirebaseRequest } from '../../shared/http';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export default function DefaultNote({ header, children }) {
	const dispatch = useDispatch();

	function setData() {
		const id = Cookies.get('currentId');

		let foundName = 'nothing';

		defaultFirebaseRequest.get(`/${id}.json`).then(({ data }) => {
			const notes = data.notes;
			const pinned = data.pinned;
			const trashed = data.trashed;
			const archived = data.archived;

			let flag = true;

			if (notes !== undefined) {
				for (let item in notes) {
					if (notes[item].name === header) {
						foundName = notes[item].name;
						flag = false;
					}
				}
			}
			console.log('ЭТО НАЙДЕННОЕ ИМЯ В DEFAULT NOTE - ', foundName);
			dispatch(newName(foundName));
		});
	}

	return (
		<div>
			<div className='note'>
				<img
					className='note-ok'
					src={OK}
					alt='ok'
				/>
				<Link
					onClick={setData}
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
