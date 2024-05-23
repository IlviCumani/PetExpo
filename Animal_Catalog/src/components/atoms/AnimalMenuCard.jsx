import "../../styles/atoms/AnimalMenuCard.css";
import Button from "./Button";
import { ButtonSize } from "../../enums/button"

export default function AnimalMenuCard({ animal, onClick }) {
	return (
		<div className="animal-menu-card">
			<img src={animal.image} alt={animal.name} className="animal-menu-card-image" />
			<h2 className="animal-menu-card-name">{`${animal.name}`}</h2>
			{(animal.origin || animal.place_of_found) && <p className="animal-menu-card-habitat">{`Origin: ${animal.origin || animal.place_of_found}`}</p>}
			<Button onClick={() => onClick(animal)} size={ButtonSize.SMALL}>See More</Button>
		</div>
	);
}
