import gamestore from "../games.js";
import ItemCard from "../components/item-card.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { useState } from "react";

const mockUrl = [
	"03c04dd0ead54f0c8fac86332df12dd1.mp4",
	"page_1.jpg",
	"page_2.jpg",
	"page_3.jpg",
	"page_4.jpg",
	"page_5.jpg",
];

const ShopPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { error, data, isLoading } = useFetch(
		`https://api.rawg.io/api/games?key=${
			import.meta.env.VITE_RAWG_KEY
		}&page=${currentPage}&pageSize=30`
	);

	if (data) gamestore.addGames(data.results);
	return (
		<div className="flex flex-col gap-20">
			{gamestore.games.map((game) => (
				<ItemCard key={game.id} {...game} />
			))}
			{isLoading && <p>Loading</p>}
		</div>
	);
};

export default ShopPage;
