import "../../styles/atoms/Button.css";

export default function Button({
	onClick,
	display = "primary",
	size = "mid",
	isFullWidth,
	isDisable,
	children,
	...props
}) {
	let buttonClass = `button ${display} ${size}`;

	if (isDisable) buttonClass = `button ${size} disabled`;
	if (isFullWidth) buttonClass += " block";

	return (
		<button onClick={onClick} {...props} className={buttonClass} disabled={isDisable}>
			{children}
		</button>
	);
}
