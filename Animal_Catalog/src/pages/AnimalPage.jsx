import AnimalGalery from "../components/molecules/AnimalGalery";
import Header from "../components/atoms/Header";

import { useState, useEffect } from "react";

import { getToken } from "../utils/token";

export default function AnimalPage() {
    
    const selectedAnimal = getToken();
    const [animalList, setAnimal] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://freetestapi.com/api/v1/${selectedAnimal.toLowerCase()}`);

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
    }, [])

    console.log(animalList);

    return (
        <>  
            <Header title="PetExpo" />
            <AnimalGalery animalList={animalList} />
        </>
    );
}