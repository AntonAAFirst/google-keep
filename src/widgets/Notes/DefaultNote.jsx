/** @format */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OK from '../../shared/img/ok.png';
import { Link } from 'react-router-dom';
import { setData } from '../../shared/helpers/notePage';
import { useState } from 'react';

export default function DefaultNote({ header, children }) {
	const dispatch = useDispatch();

	const [headerNote, setHeaderNote] = useState();

	useEffect(() => {
		const nameLength = 22;

		if (header.length >= nameLength) {
			setHeaderNote(header.slice(0, nameLength) + '...');
		} else {
			setHeaderNote(header);
		}
	}, []);

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
					{header ? headerNote : 'Безымянный'}
				</Link>

				<div className='note-icons'>
					<div className='icons-container'>{children}</div>
				</div>
			</div>
		</div>
	);
}
