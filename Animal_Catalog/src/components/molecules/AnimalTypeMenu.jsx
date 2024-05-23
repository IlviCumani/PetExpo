import AnimalMenuCard from "../atoms/AnimalMenuCard";
import { animalList as animals } from "../../utils/data";
import "../../styles/molecules/AnimalTypeMenu.css";

import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/token";

export default function AnimalTypeMenu() {
	const navigate = useNavigate();

	function handleClick(animal){
		setToken(animal.name);
		navigate(`/animal`);
	}

	return (
		<menu id="animals" className="animal-type-menu">
			<h1 className="animal-type-menu-title">Browse all of our gorgeous animals</h1>
			<div className="animal-type-menu-card-wrapper">
				{animals.map((animal) => (
					<AnimalMenuCard key={animal.name} animal={animal} onClick={handleClick}/>
				))}
			</div>
		</menu>
	);
}
