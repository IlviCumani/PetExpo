import Hero from "../components/atoms/Hero";
import Header from "../components/atoms/Header";
import About from "../components/molecules/About";
import ContactUs from "../components/organism/ContactUs.jsx";
import AnimalTypeMenu from "../components/molecules/AnimalTypeMenu.jsx";

export default function HomePage() {
    const navLinks = [
        { text: "Home", to: "#" },
        { text: "Animals", to: "#animals"},
        { text: "About", to: "#about" },
        { text: "Contact", to: "#contact" },
    ]


	return (
		<>
			<Header title="PetExpo" navLinks={navLinks} />
			<Hero
				title="Welcome to the Animals Catalogue"
				subtitle="The best place to find information about animals"
			/>
			<AnimalTypeMenu />
			<About />
			<ContactUs />
		</>
	);
}
