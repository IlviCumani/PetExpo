import "../../styles/molecules/SelectedAnimalSection.css";

export default function SelectedAnimalInformation({ animal }) {
	const { id, name, image, description } = animal;

	const otherInformation = Object.keys(animal).filter(
		(key) => key !== "id" && key !== "name" && key !== "image" && key !== "description",
	);

	function formatedKey(key) {
		return key
			.split("_")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	}

	console.log("MAIN INFORMATION", id, name, image, description);
	console.log("OTHER INFORMATION", otherInformation);

	return (
		<section className="selected-animal-section">
			<div className="selected-animalgeneric-information-container">
				<div className="selected-animalgeneric-information-wrapper">
					<h1 className="selected-animal-id">{`Id: ${animal.id}`} </h1>
					<h2 className="selected-animal-name">{`Name: ${animal.name}`} </h2>
					<img className="selected-animal-image invisible" src={animal.image} alt={animal.name} />
					<p className="selected-animal-description">{`${animal.description}`} </p>
				</div>

				<img className="selected-animal-image" src={animal.image} alt={animal.name} />
			</div>

			<ul className="selected-animal-other-atributes">
				{otherInformation.map((key) => (
					<li className="selected-animmal-other-atributes-item" key={key}>
						<span className="selected-animal-other-atributes-item_identifier">{`${formatedKey(key)}: `}</span>
						{`${animal[key]}`}
					</li>
				))}
			</ul>
		</section>
	);
}
