import { Outlet, Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const Layout = () => {
	return (
		<>
			<header className="h-12 border border-accent mb-12"></header>
			<main className="h-auto overflow-auto">
				<Outlet />
			</main>
			<nav className="h-16 px-8 py-2 flex justify-between items-center fixed bottom-0 w-full text- bg-black z-10 text-xs border-t border-accent">
				<Link className="flex flex-col gap-1" to="/home">
					<ArrowLeft />
					<p>Home</p>
				</Link>
				<Link className="flex flex-col gap-1" to="/home">
					<ArrowLeft />
					<p>Shop</p>
				</Link>
				<Link className="flex flex-col gap-1" to="/home">
					<ArrowLeft />
					<p>Cart</p>
				</Link>
			</nav>
		</>
	);
};

export default Layout;
