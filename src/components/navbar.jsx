import { Link, useLocation } from "react-router";
import viteLogo from "/vite.svg";

const NavBar = () => {
	const location = useLocation();
	const currentPage = location.pathname;
	const className =
		"p-2 rounded-full items-center data-[iscurrent=true]:text-accent-light data-[iscurrent=true]:scale-125";
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
					data-iscurrent={currentPage === "/"}
				>
					<p>Home</p>
				</Link>
				<Link
					className={className}
					to="shop"
					data-iscurrent={currentPage === "/shop"}
				>
					<p>Shop</p>
				</Link>
				<Link
					className={className}
					to="cart"
					data-iscurrent={currentPage === "/cart"}
				>
					<p>Cart</p>
				</Link>
			</nav>
		</div>
	);
};

export default NavBar;
