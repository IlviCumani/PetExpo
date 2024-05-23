import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLatout";
import HomePage from "./pages/HomePage";
import AnimalPage from "./pages/AnimalPage";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/animal",
					element: <AnimalPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
