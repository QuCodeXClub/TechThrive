import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "@/layouts/RootLayout";
import DevelopersPage from "@/pages/DevelopersPage";
import ErrorHandlingPage from "@/pages/ErrorHandlingPage";
import Home from "@/pages/Home";
import NotFoundPage from "@/pages/NotFoundPage";
import GrandFinaleResultsPage from "@/pages/results/GrandFinaleResultsPage";
import ResultsPage from "@/pages/results/ResultsPage";
import RoundOneResultsPage from "@/pages/results/RoundOneResultsPage";

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
				path: "results",
				children: [
					{
						index: true,
						element: <ResultsPage />,
					},
					{
						path: "round-1",
						element: <RoundOneResultsPage />,
					},
					{
						path: "grand-finale",
						element: <GrandFinaleResultsPage />,
					},
				],
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
