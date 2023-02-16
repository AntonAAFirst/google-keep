/** @format */

import Cookies from 'js-cookie';
import { defaultFirebaseRequest } from '../http';

export async function authLogic(registerActive, name, password, setActive) {
	if (registerActive) {
		let nameUnique = true;

		await defaultFirebaseRequest.get('.json').then(({ data }) => {
			for (let item in data) {
				if (data[item].name === name) {
					nameUnique = false;
					alert('Такое имя уже занято!');
				}
			}
		});

		if (nameUnique) {
			await defaultFirebaseRequest
				.post('.json', {
					name: name,
					password: password,
				})
				.then(({ data }) => {
					Cookies.set('curreыntId', data.name);
				});

			alert('Вы зарегестрировались!');
			setActive(false);
		}
	} else {
		await defaultFirebaseRequest.get('.json').then(({ data }) => {
			let temporaryFlag = true;

			for (let item in data) {
				if (data[item].name === name && data[item].password === password) {
					Cookies.set('currentId', item);
					setActive(false);
					temporaryFlag = false;
				}
			}

			if (temporaryFlag) {
				alert('Неверные данные');
			}
		});
	}
}
