/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

export default function SelectionPanel() {
	const active = useSelector((state) => state.selectionPanel.active);

	return (
		<div
			className={
				active ? 'selection-panel active-panel' : 'selection-panel'
			}></div>
	);
}
