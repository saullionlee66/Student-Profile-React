import React, { useContext, useState, useEffect } from "react";
import InfoContext from "../Context/InfoContext";
import "../CSS/InfoList.css";
import NameSearchBar from "./NameSearchBar";
import ListItem from "./ListItem";
import TagSearchBar from "./TagSearchBar";

function InfoList() {
	const { data } = useContext(InfoContext);
	const [search, setSearch] = useState("");
	const [tagSearch, setTagSearch] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const [tagData, setTagData] = useState([]);
	const [nameData, setNameData] = useState([]);
	const [isScroll, setIsScroll] = useState(false);

	useEffect(() => {
		setFilteredData([...data]);
		setTagData([...data]);
		setNameData([...data]);
	}, [data]);

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const updateTagSearch = (e) => {
		setTagSearch(e.target.value.toLowerCase());
	};

	const searchByName = (queryString) => {
		let temp1 = [];
		const lowerCaseQueryString = queryString.toLowerCase();
		data.map((d) => {
			const fullName = `${d.firstName} ${d.lastName}`.toLowerCase();
			if (fullName.includes(lowerCaseQueryString)) {
				temp1.push(d);
			}
		});
		let temp2 = [];
		tagData.map((d) => {
			const fullName = `${d.firstName} ${d.lastName}`.toLowerCase();
			if (fullName.includes(lowerCaseQueryString)) {
				temp2.push(d);
			}
		});
		setFilteredData(temp2);
		setNameData(temp1);
	};

	const searchByTag = (queryString) => {
		if (queryString) {
			let temp1 = new Set([]);
			data.map((d) => {
				d.tags.map((tag) => {
					if (tag.includes(queryString)) {
						temp1.add(d);
					}
				});
			});
			let temp2 = new Set([]);
			nameData.map((d) => {
				d.tags.map((tag) => {
					if (tag.includes(queryString)) {
						temp2.add(d);
					}
				});
			});
			setFilteredData(Array.from(temp2));
			setTagData(Array.from(temp1));
		} else {
			setFilteredData(nameData);
			setTagData(data);
		}
	};

	useEffect(() => {
		searchByTag(tagSearch);
	}, [tagSearch]);

	useEffect(() => {
		searchByName(search);
	}, [search]);

	const addTag = (str, index) => {
		const temp = [...filteredData];
		temp[index].tags.push(str);
		setFilteredData(temp);
	};
	const stopScroll = () => {
		setTimeout(() => {
			setIsScroll(false);
		}, 1000);
		if (!isScroll) {
			setIsScroll(true);
		}
	};

	return (
		<div
			className='content-wrapper'
			onScroll={stopScroll}
			onWheel={() => setIsScroll(true)}
			style={{ overflowY: isScroll ? "scroll" : "hidden" }}>
			<NameSearchBar search={search} updateSearch={updateSearch} />
			<TagSearchBar tagSearch={tagSearch} updateTagSearch={updateTagSearch} />
			{filteredData &&
				filteredData.map((d, idx) => (
					<div key={idx} className='list-container'>
						<ListItem
							pic={d.pic}
							firstName={d.firstName}
							lastName={d.lastName}
							email={d.email}
							skill={d.skill}
							company={d.company}
							average={d.average}
							grades={d.grades}
							id={idx}
							addTag={addTag}
							tags={d.tags}
						/>
					</div>
				))}
		</div>
	);
}

export default InfoList;
