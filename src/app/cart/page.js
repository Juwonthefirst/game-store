"use client";

import { useGameStore } from "@/hooks/useGameStore.js";
import CheckoutItem from "@/components/cart/checkout-item.jsx";

const CheckoutPage = () => {
  const gamestore = useGameStore();
  const setQuantity = (game, newQuantity) => {
    game.quantity = newQuantity;
  };

  return (
    <div className="pt-12 overflow-x-hidden overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 p-2 h-fit">
      {gamestore.getCheckout().map((game) => {
        return (
          <CheckoutItem
            key={game.id}
            {...game}
            setItemQuantity={(quantity) => setQuantity(game, quantity)}
          />
        );
      })}
    </div>
  );
};

export default CheckoutPage;
