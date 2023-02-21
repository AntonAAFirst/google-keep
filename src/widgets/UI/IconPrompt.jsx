/** @format */

import '../../shared/styles/iconprompt.css';
import React from 'react';
import { useSelector } from 'react-redux';

export default function IconPrompt() {
	const active = useSelector((state) => state.iconPrompt.active);
	const text = useSelector((state) => state.iconPrompt.text);

	return (
		<div
			className={
				active
					? 'iconprompt-container iconprompt-active'
					: 'iconprompt-container'
			}>
			<p>{text}</p>
		</div>
	);
}
