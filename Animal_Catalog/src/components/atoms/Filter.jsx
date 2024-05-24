import Input from "./Input";
import "../../styles/atoms/Filter.css";

export default function Filter({onChange}) {
	return (
		<div className="filter">
			<div className="filter-input-wrapp">
				<Input onChange={onChange} type="text" placeholder="Search "/>
			</div>
		</div>
	);
}
