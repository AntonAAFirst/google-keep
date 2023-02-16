/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function ControlPanelItem({ icon, text, link }) {
	return (
		<Link
			to={link}
			className='control-panel__item '>
			<img
				src={icon}
				alt='2'
			/>

			<div className='control-panel__item__text'>{text}</div>
		</Link>
	);
}
