import "../../styles/atoms/Input.css"

export default function Input({ labelText, name, onChange, isTextArea, isError, ...props }) {
	return (
		<p className="input-container">
			<label htmlFor={name}>{labelText}</label>
			{isTextArea ? (
				<textarea id={name} name={name} onChange={onChange} {...props} className={`custom-input ${isError ? "error-input" : "" } textarea`}/>
			) : (
				<input id={name} name={name} onChange={onChange} {...props} className={ `custom-input ${isError ? "error-input" : "" } `}/>
			)}
		</p>
	);
}
