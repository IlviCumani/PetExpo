import DuckIcon from "/Majestic_Duck.png";
import "../../styles/atoms/Header.css";

import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function Header({ title, navLinks = [] }) {
	return (
		<header className="header">
			<div className="header-logo">
				<Link to="/">
					<img src={DuckIcon} alt="Duck Icon" className="header__icon" />
				</Link>
				<h1 className="header__title">{title}</h1>
			</div>

			{navLinks && <nav className="header-nav">
				{navLinks.map((link, index) => (
					<NavHashLink
						key={index}
						to={link.to}
						className="header-navlinks-link"
						smooth
						duration={500}
					>
						{link.text}
					</NavHashLink>
				))}
			</nav>}

		</header>
	);
}
