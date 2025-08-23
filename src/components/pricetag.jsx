import { useState } from "react";
import IconButton from "./icon-button.jsx";
import QuantityControls from "./quantity-control.jsx";

const PriceTag = ({ price, onAddToCart }) => {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="bg-neutral-900 rounded-b-4xl px-6 py-2 flex items-center justify-between">
			<p className="text-xl font-poppins-medium">
				${(price * quantity).toFixed(2)}
			</p>
			<div className="w-4/5 flex gap-4">
				<QuantityControls
					className="w-1/2"
					quantity={quantity}
					setQuantity={setQuantity}
				/>
				<button
					className="border-green-500 rounded-full transition-all duration-300 border-1 active:bg-green-500/20 text-green-500 text-xs"
					onClick={() => onAddToCart(quantity)}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default PriceTag;
