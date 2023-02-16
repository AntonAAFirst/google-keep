/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import OK from '../../shared/img/ok.png';
import { setActive } from '../../shared/store/selectionPanelReducer';

export default function DefaultNote({ header, children }) {
	const dispatch = useDispatch();

	return (
		<div className='note'>
			<img
				// onClick={() => {
				// 	console.log('BUTTON WAS CLICKED!');
				// 	dispatch(setActive((prev) => prev + 1));
				// }}
				className='note-ok'
				src={OK}
				alt='ok'
			/>
			<div style={{ marginBottom: '16px' }}>
				{header ? header : 'Безымянный'}
			</div>

			<div className='note-icons'>
				<div className='icons-container'>{children}</div>
			</div>
		</div>
	);
}
