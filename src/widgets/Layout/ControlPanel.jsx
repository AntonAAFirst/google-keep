/** @format */

import React from 'react';
import lamp from '../../shared/img/lamp.png';
import archive from '../../shared/img/archive.png';
import trash from '../../shared/img/trash.png';
import ControlPanelItem from './ContolPanelItem';

export default function ControlPanel() {
	const controlPanelData = [
		{ icon: lamp, text: 'Заметки', link: 'notes' },
		{ icon: archive, text: 'Архив', link: 'archive' },
		{ icon: trash, text: 'Корзина', link: 'trash' },
	];

	return (
		<div className='control-panel'>
			{controlPanelData.map((item) => (
				<ControlPanelItem
					icon={item.icon}
					text={item.text}
					link={item.link}
				/>
			))}
		</div>
	);
}
