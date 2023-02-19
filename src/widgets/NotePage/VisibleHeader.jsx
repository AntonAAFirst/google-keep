/** @format */

import React from 'react';

export default function VisibleHeader({ active, text }) {
	return <div>{active ? <div className='notes-header'> {text}</div> : ''}</div>;
}
