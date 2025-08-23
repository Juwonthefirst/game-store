import { Outlet } from "react-router";
import NavBar from "../components/navbar.jsx";
import SearchResults from "../components/search-results.jsx";
import SearchBar from "../components/search-bar.jsx";

const Layout = () => {
	return (
		<>
			<NavBar />
			<Outlet
				context={{
					className: "py-12 overflow-x-hidden overscroll-contain",
				}}
			/>
		</>
	);
};

export default Layout;
