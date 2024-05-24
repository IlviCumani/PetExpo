import "../../styles/atoms/AboutUsRow.css";
export default function AboutUsRow({ title, image, children, reverse }) {
	return (
		<div className={`about-us-row ${reverse ? "reverse" : ""}`}>
			<div className="about-us-text-container">
				<h2 className="about-title">{title}</h2>
				{children}
			</div>

			<img src={image} alt={title} className="about-image" />
		</div>
	);
}
