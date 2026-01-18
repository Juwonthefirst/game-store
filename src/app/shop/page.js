"use client";

import ItemCard from "@/components/shop/item-card.jsx";
import { useGameStore } from "@/hooks/useGameStore.js";

const ShopPage = () => {
  const gamestore = useGameStore();

  const onScrollBottom = (event) => {
    const shopePageDiv = event.target;
    const scrollDistanceToBottom =
      shopePageDiv.scrollHeight -
      shopePageDiv.scrollTop -
      shopePageDiv.clientHeight;
    if (scrollDistanceToBottom < 500) gamestore.getMoreGames();
  };
  if (gamestore.isFetching) {
    <p className="pt-12 mx-auto">Loading...</p>;
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 items-center pt-12 h-[100dvh] overflow-x-hidden overflow-y-auto"
      onScroll={(event) => onScrollBottom(event)}
    >
      {gamestore.games.map((game) => {
        return (
          <ItemCard
            key={game.id}
            {...game}
            onAddToCart={(quantity) => gamestore.addToCheckout(game, quantity)}
          />
        );
      })}

      {gamestore.fetchError && <p>{gamestore.fetchError}</p>}
    </div>
  );
};

export default ShopPage;
