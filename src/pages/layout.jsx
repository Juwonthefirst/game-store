import { Outlet } from "react-router";
import NavBar from "../components/navbar.jsx";

const Layout = () => {
	return (
		<>
			<header className="h-12 border border-accent mb-12"></header>
			<main className="h-auto overflow-auto">
				<Outlet />
			</main>
			<NavBar />
		</>
	);
};

export default Layout;
