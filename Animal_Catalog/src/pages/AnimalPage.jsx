import AnimalGalery from "../components/molecules/AnimalGalery";
import Header from "../components/atoms/Header";
import Filter from "../components/atoms/Filter";

import { useState, useEffect } from "react";

import { getToken } from "../utils/token";

export default function AnimalPage() {
	const selectedAnimal = getToken();
	const [animalList, setAnimal] = useState([]);

	// const [filteredAnimalList, setFilteredAnimalList] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	function handleSearchChange(event) {
		setSearchValue(event.target.value);
	}

	const filteredAnimalList = animalList.filter((animal) => {
		return animal.name.toLowerCase().includes(searchValue.toLowerCase());
	});


    const animalsToDisplay = searchValue ? filteredAnimalList : animalList;


	console.log(searchValue);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					`https://freetestapi.com/api/v1/${selectedAnimal.toLowerCase()}`,
				);

				if (!response.ok) {
					throw new Error("Something went wrong");
				}

				const data = await response.json();

				setAnimal(data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, []);

	return (
		<>
			<Header title="PetExpo" />
			<Filter
				onChange={(event) => {
					handleSearchChange(event);
				}}
			/>
			<AnimalGalery animalList={animalsToDisplay} />
		</>
	);
}
