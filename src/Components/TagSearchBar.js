import React from "react";

function TagSearchBar({ tagSearch, updateTagSearch }) {
	return (
		<div className='input-wrapper'>
			<input
				type='text'
				value={tagSearch}
				onChange={updateTagSearch}
				placeholder='Search by tag'
			/>
		</div>
	);
}

export default TagSearchBar;
