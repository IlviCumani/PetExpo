import AboutUsRow from "../atoms/AboutUsRow";
import "../../styles/molecules/About.css";

import WhoAreWeImg from "../../assets/AboutImg1.jpeg";
import OurWorkImg from "../../assets/AboutUsImg2.jpg";

import { aboutData } from "../../utils/data";

export default function About() {
	return (
		<section id="about" className="about-section">
			<h1 className="animal-type-menu-title" >About us</h1>
			<AboutUsRow title="Who are we?" image={WhoAreWeImg}>
				<p>
					We are a group of animal lovers who want to make sure that every animal finds a loving
					home. We believe that every animal deserves a chance to be happy and loved. We are
					dedicated to helping animals in need and finding them the perfect home.
				</p>
			</AboutUsRow>
			<AboutUsRow title="Our Work" image={OurWorkImg} reverse>
				<ul className="about-list">
					{aboutData.map((data, index) => (
						<li className="about-list-item" key={index}>{data}</li>
					))}
				</ul>
			</AboutUsRow>
		</section>
	);
}
