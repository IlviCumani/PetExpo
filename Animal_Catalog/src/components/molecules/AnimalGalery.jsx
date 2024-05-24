import AnimalManuCard from "../atoms/AnimalMenuCard";
import Modal from "./Modal";
import SelectedAnimalInformation from "./SelectedAnimalInformation";
import "../../styles/molecules/AnimalGalery.css";

import { useState, useRef } from "react";

export default function AnimalGalery({ animalList }) {
	const modalRef = useRef();
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    function handleAnimalSelect(animal) {
        setSelectedAnimal(animal);
        modalRef.current.open();
    }

    console.log(selectedAnimal);

	function handleModalClose() {
		modalRef.current.close();
	}

	return (
		<>
			<Modal
				ref={modalRef}
				hasCloseButton
				onClose={handleModalClose}
			>
				{selectedAnimal && <SelectedAnimalInformation animal={selectedAnimal} />}
			</Modal>
			<main className="animal-galery">
				{animalList.map((animal, index) => (
					<AnimalManuCard key={index} animal={animal} onClick={() => handleAnimalSelect(animal)} />
				))}
			</main>
		</>
	);
}
