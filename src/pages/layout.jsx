import { Outlet } from "react-router";
import NavBar from "../components/navbar.jsx";
import SearchResults from "../components/search-results.jsx";
import SearchBar from "../components/search-bar.jsx";

const Layout = () => {
	return (
		<>
			<Outlet
				context={{
					className:
						"h-[calc(100dvh-56px)] overflow-auto overscroll-contain",
				}}
			/>
			<NavBar />
		</>
	);
};

export default Layout;
