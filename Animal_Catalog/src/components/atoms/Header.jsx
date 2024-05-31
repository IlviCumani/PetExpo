import DuckIcon from "/Majestic_Duck.png";
import "../../styles/atoms/Header.css";

import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { IoMenu } from "react-icons/io5";

import { useState } from "react";

export default function Header({ title, navLinks = [] }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setIsMenuOpen(prev => !prev);
	}

	const closeMenu = () => {
		setIsMenuOpen(false);
	}

	console.log(isMenuOpen);

	return (
		<header className="header">
			<div className="header-logo">
				<Link to="/">
					<img src={DuckIcon} alt="Duck Icon" className="header__icon" />
				</Link>
				<h1 className="header__title">{title}</h1>
			</div>

			{navLinks.length > 0 && (
				<span className="header-menu-icon-container">
					<IoMenu className="header-menu-icon" onClick={handleMenuClick}/>
				</span>
			)}

			{navLinks && (
				<nav className={`header-nav ${isMenuOpen ? "open-menu" : ""}`}>
					{navLinks.map((link, index) => (
						<NavHashLink
							key={index}
							to={link.to}
							className="header-navlinks-link"
							smooth
							duration={500}
							onClick={closeMenu}
						>
							{link.text}
						</NavHashLink>
					))}
				</nav>
			)}
		</header>
	);
}
