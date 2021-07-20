import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const InfoContext = createContext();

export function InfoProvider(props) {
	const API = `https://api.hatchways.io/assessment/students`;
	const [data, setData] = useState([]);

	const getInfo = async () => {
		const result = await axios.get(API);
		const { data } = result;
		const { students } = data;
		students &&
			students.map((student) => {
				student["tags"] = [];
				student["average"] =
					student.grades.reduce((a, b) => parseInt(a) + parseInt(b), 0) /
					student.grades.length;
			});
		setData(students);
	};

	useEffect(() => {
		getInfo();
	}, []);

	const value = { data, setData };
	return (
		<InfoContext.Provider value={value}>{props.children}</InfoContext.Provider>
	);
}

export default InfoContext;
