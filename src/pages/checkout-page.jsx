import { useGameStore } from "../hooks/useGameStore.js";
import CheckoutItem from "../components/cart/checkout-item.jsx";
import { useOutletContext } from "react-router";

const CheckoutPage = () => {
	const { className } = useOutletContext();
	const gamestore = useGameStore();
	const setQuantity = (game, newQuantity) => {
		game.quantity = newQuantity;
	};

	return (
		<div className={className + " flex flex-col gap-8 p-2"}>
			{gamestore.getCheckout().map((game) => {
				return (
					<CheckoutItem
						key={game.id}
						{...game}
						setItemQuantity={(quantity) =>
							setQuantity(game, quantity)
						}
					/>
				);
			})}
		</div>
	);
};

export default CheckoutPage;
