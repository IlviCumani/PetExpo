import HeroImg from "../../assets/HappyRunningDog.png";
import "../../styles/atoms/Hero.css";

export default function Hero({ title, subtitle }) {
	return (
		<section id="hero-section" className="hero__section">
			<img src={HeroImg} alt="Background Image" className="hero__section__background" />
			<div className="hero__section__overlay"></div>
			<div className="hero__section__content">
				<h1 className="hero__section__title">{title}</h1>
				<p className="hero__section__subtitle">{subtitle}</p>
			</div>
		</section>
	);
}
