import { Link } from "react-router";
import { useState } from "react";
import viteLogo from "/vite.svg";

const pathToIndexMap = {
	shop: 2,
	cart: 3,
};

const NavBar = () => {
	const currentPath = location.pathname.split("/");
	const currentPathIndex = pathToIndexMap[currentPath[1]] || 1;
	const [currentPage, setCurrentPage] = useState(currentPathIndex);
	const className =
		"p-2 rounded-full items-center data-[iscurrent=true]:text-accent data-[iscurrent=true]:scale-110";
	return (
		<div className="fixed flex items-center justify-between top-0 left-0 z-10 w-full px-6 py-1 backdrop-blur-md backdrop-saturate-150">
			<div className="flex">
				<img width={24} height={24} src={viteLogo} />
				<p></p>
			</div>

			<nav className="flex items-center text-sm gap-4">
				<Link
					className={className}
					to="/"
					data-iscurrent={currentPage === 1}
					onClick={() => setCurrentPage(1)}
				>
					<p>Home</p>
				</Link>
				<Link
					className={className}
					to="shop"
					data-iscurrent={currentPage === 2}
					onClick={() => setCurrentPage(2)}
				>
					<p>Shop</p>
				</Link>
				<Link
					className={className}
					to="cart"
					data-iscurrent={currentPage === 3}
					onClick={() => setCurrentPage(3)}
				>
					<p>Cart</p>
				</Link>
			</nav>
		</div>
	);
};

export default NavBar;
