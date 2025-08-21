import { ChevronLeft, ChevronRight, ShoppingCart, Search } from "lucide-react";

const icons = {
	next: ChevronRight,
	prev: ChevronLeft,
	cart: ShoppingCart,
	search: Search
};

const IconButton = ({ className, iconName, onClick }) => {
	const Icon = icons[iconName];
	return (
		<button className={className} onClick={onClick}>
			<Icon />
		</button>
	);
};

export default IconButton;
