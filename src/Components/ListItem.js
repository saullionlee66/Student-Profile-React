import React, { useState } from "react";
import TagsInput from "./TagsInput";
import { FaMinus, FaPlus } from "react-icons/fa";

function ListItem({
	tags,
	addTag,
	id,
	grades,
	firstName,
	lastName,
	email,
	company,
	average,
	skill,
	pic,
}) {
	const [expand, setExpand] = useState(false);

	const handleExpand = () => {
		setExpand(!expand);
	};

	return (
		<div className='infoContainer'>
			<div className='info'>
				<div className='pic'>
					<img src={pic} alt='pic' />
				</div>
				<div className='details'>
					<h1>
						{firstName.toUpperCase()} {lastName.toUpperCase()}
					</h1>
					<p>Email: {email}</p>
					<p>Company: {company}</p>
					<p>Skill: {skill}</p>
					<p>Average: {average}%</p>
					<div
						className='grade-list'
						style={{ display: expand ? "flex" : "none" }}>
						{grades.map((grade, idx) => (
							<pre key={idx}>{`Test${idx + 1}:      ${grade}%`}</pre>
						))}
					</div>
					<TagsInput id={id} addTag={addTag} tags={tags} />
				</div>

				{expand ? (
					<div className='button-container'>
						<button className='expandableButton' onClick={handleExpand}>
							<FaMinus />
						</button>
					</div>
				) : (
					<div className='button-container'>
						<button className='expandableButton' onClick={handleExpand}>
							<FaPlus />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default ListItem;
