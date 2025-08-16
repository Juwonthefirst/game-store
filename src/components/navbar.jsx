import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const NavBar = () => {
	const [currentPage, setCurrentPage] = useState();
	const className = "flex flex-col gap-1 items-center";
	return (
		<nav className="h-16 px-8 py-2 flex justify-between items-center bg-black z-10 text-xs">
			<Link className={className} to="/">
				<ArrowLeft />
				<p>Home</p>
			</Link>
			<Link className={className} to="/shop">
				<ArrowLeft />
				<p>Shop</p>
			</Link>
			<Link className={className} to="/home">
				<ArrowLeft />
				<p>Cart</p>
			</Link>
		</nav>
	);
};

export default NavBar;
