import React, { useState } from "react";

function TagsInput({ tags, addTag, id }) {
	const [tag, setTag] = useState("");
	const updateTag = (e) => {
		setTag(e.target.value);
	};
	return (
		<form
			key={id}
			onSubmit={(e) => {
				e.preventDefault();
				addTag(tag, id);
				setTag("");
			}}>
			<div className='tag-container'>
				{tags && tags.map((tag, idx) => <p key={idx}>{tag}</p>)}
			</div>
			<input
				className='tagInput'
				type='text'
				placeholder='Add a tag'
				value={tag}
				onChange={updateTag}
			/>
		</form>
	);
}

export default TagsInput;
