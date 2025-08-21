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
			<div className="w-3/5 flex gap-4">
				<QuantityControls
					quantity={quantity}
					setQuantity={setQuantity}
				/>
				<IconButton
					className="border-accent rounded-full p-2 transition-all duration-300 active:border active:bg-accent/20 active:text-accent"
					iconName={"cart"}
					onClick={() => onAddToCart(quantity)}
				/>
			</div>
		</div>
	);
};

export default PriceTag;
