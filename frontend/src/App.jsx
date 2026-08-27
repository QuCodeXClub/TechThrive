import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "@/layouts/RootLayout";
import DevelopersPage from "@/pages/DevelopersPage";
import ErrorHandlingPage from "@/pages/ErrorHandlingPage";
import Home from "@/pages/Home";
import NotFoundPage from "@/pages/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorHandlingPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "developers",
				element: <DevelopersPage />,
			},
		],
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
