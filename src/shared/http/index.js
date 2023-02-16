/** @format */

import axios from 'axios';

export const defaultFirebaseRequest = axios.create({
	baseURL:
		'https://myfirstfirebase-9dcac-default-rtdb.firebaseio.com/notes/users',
});
