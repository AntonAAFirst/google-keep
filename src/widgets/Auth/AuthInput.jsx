/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';

export default function AuthInput({
	reduxValue,
	dispatchFunction,
	placeholder,
	inputType,
}) {
	const dispatch = useDispatch();

	return (
		<input
			value={reduxValue}
			onChange={(e) => {
				dispatch(dispatchFunction(e.target.value));
			}}
			className='auth-form__input'
			type={inputType}
			placeholder={placeholder}
		/>
	);
}
