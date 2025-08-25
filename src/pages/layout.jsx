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
					className:
						"pt-12 h-[100dvh] overflow-x-hidden overflow-y-auto",
				}}
			/>
		</>
	);
};

export default Layout;
