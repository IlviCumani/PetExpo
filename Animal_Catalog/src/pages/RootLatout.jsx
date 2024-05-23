import { Outlet } from "react-router-dom";
import Header from "../components/atoms/Header";

export default function RootLayout() {
	return (
		<main>
			<Outlet />
		</main>
	);
}
