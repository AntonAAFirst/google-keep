/** @format */

import '../shared/styles/search.css';
import React from 'react';
import FilteredMainNotes from '../widgets/Search/FilteredMainNotes';
import FilteredPinnedNotes from '../widgets/Search/FilteredPinnedNotes';
import FilteredArchivedNotes from '../widgets/Search/FilteredArchivedNotes';

export default function Search() {
	return (
		<div className='search-container'>
			<FilteredPinnedNotes />
			<FilteredMainNotes />
			<FilteredArchivedNotes />
		</div>
	);
}
