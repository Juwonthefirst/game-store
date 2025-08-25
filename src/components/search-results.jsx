import { useState } from "react";
import { useGameStore } from "../hooks/useGameStore.js";
import ItemCard from "../components/shop/item-card.jsx";

const SearchResults = ({ searchResult }) => {
	const { addToCheckout } = useGameStore();

	return (
		<div>
			{searchResult.map((game) => {
				game.price = (Math.random() * 80 + 20).toFixed(2);
				<ItemCard
					key={game.id}
					{...game}
					onAddToCart={(quantity) => addToCheckout(game, quantity)}
				/>;
			})}
		</div>
	);
};

export default SearchResults;
