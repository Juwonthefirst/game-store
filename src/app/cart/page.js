"use client";

import { useGameStore } from "@/hooks/useGameStore.js";
import CheckoutItem from "@/components/cart/checkout-item.jsx";

const CheckoutPage = () => {
  const gamestore = useGameStore();
  const setQuantity = (game, newQuantity) => {
    game.quantity = newQuantity;
  };

  return (
    <div className="pt-12 h-[100dvh] overflow-x-hidden overflow-y-auto flex flex-col gap-8 p-2">
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
