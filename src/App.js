/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Archive from './pages/Archive';
import Layout from './pages/Layout';
import Notes from './pages/Notes';
import Search from './pages/Search';
import Trash from './pages/Trash';

export default function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}>
				<Route
					path='notes'
					element={<Notes />}
				/>
				<Route
					path='trash'
					element={<Trash />}
				/>
				<Route
					path='archive'
					element={<Archive />}
				/>
				<Route
					path='search'
					element={<Search />}
				/>
			</Route>
		</Routes>
	);
}
