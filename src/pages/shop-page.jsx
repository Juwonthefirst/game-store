import games from "../games.js";
import ItemCard from "../components/item-card.jsx";

const mockUrl = [
	"/03c04dd0ead54f0c8fac86332df12dd1.mp4",
	"page_1.jpg",
	"page_2.jpg",
	"page_3.jpg",
	"page_4.jpg",
	"page_5.jpg"
];

const ShopPage = () => {
	return (
		<div className="flex flex-col gap-20">
			{games.map((game) => (
				<ItemCard key={game.id} videoUrls={mockUrl} {...game} />
			))}
		</div>
	);
};

export default ShopPage;
