import ItemCard from "../components/item-card.jsx";
import { useGameStore } from "../hooks/useGameStore.js";
import { useEffect } from "react";

const ShopPage = () => {
	const gamestore = useGameStore();

	return (
		<div className="flex flex-col gap-20">
			{gamestore.games.map((game) => {
				const price = (Math.random() * 80 + 20).toFixed(2);
				return <ItemCard key={game.id} {...game} price={price} />;
			})}
			{gamestore.isFetching && <p>Loading...</p>}
		</div>
	);
};

export default ShopPage;
