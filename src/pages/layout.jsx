import { Outlet } from "react-router";
import NavBar from "../components/navbar.jsx";

const Layout = () => {
	return (
		<>
			<header className="h-12 pb-12"></header>
			<main className="h-[565px] overflow-auto">
				<Outlet />
			</main>
			<NavBar />
		</>
	);
};

export default Layout;
