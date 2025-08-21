import { ShoppingCart, Home, Store } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
const pathToIndexMap = {
	home: 1,
	shop: 2,
	cart: 3,
};

const NavBar = () => {
	const currentPath = location.pathname.split("/");

	const [currentPage, setCurrentPage] = useState(pathToIndexMap[currentPath]);
	const className =
		"flex flex-col p-2 rounded-full gap-1 items-center data-[iscurrent=true]:text-accent data-[iscurrent=true]:scale-110";
	return (
		<nav className="h-14 transition-all duration-300 ease-in px-6 py-1.5 flex justify-between items-center bg-black z-10 text-xs">
			<Link
				className={className}
				to="/"
				data-iscurrent={currentPage === 1}
				onClick={() => setCurrentPage(1)}
			>
				<Home />
				<p>Home</p>
			</Link>
			<Link
				className={className}
				to="/shop"
				data-iscurrent={currentPage === 2}
				onClick={() => setCurrentPage(2)}
			>
				<Store />
				<p>Shop</p>
			</Link>
			<Link
				className={className}
				to="/cart"
				data-iscurrent={currentPage === 3}
				onClick={() => setCurrentPage(3)}
			>
				<ShoppingCart />
				<p>Cart</p>
			</Link>
		</nav>
	);
};

export default NavBar;
