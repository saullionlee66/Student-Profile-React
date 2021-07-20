import React from "react";

function NameSearchBar({ search, updateSearch }) {
	return (
		<div className='input-wrapper'>
			<input
				type='text'
				value={search}
				onChange={updateSearch}
				placeholder='Search by name'
			/>
		</div>
	);
}

export default NameSearchBar;
