import { Outlet } from "react-router";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function RootLayout() {
	return (
		<div className="bg-background text-foreground min-h-screen">
			<Navbar />

			<main>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}

export default RootLayout;
