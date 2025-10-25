import { useState, useEffect } from "react";
import QuantityControls from "../quantity-control.jsx";

const CheckoutItem = ({
  name,
  price,
  quantity,
  background_image,
  setItemQuantity,
}) => {
  const [newQuantity, setNewQuantity] = useState(quantity);
  useEffect(() => setItemQuantity(newQuantity), [newQuantity]);
  useEffect(() => setNewQuantity(quantity), [quantity]);

  return (
    <div className="flex gap-2 p-4 bg-neutral-900 rounded-lg">
      <img
        className="object-cover w-16 h-16 rounded-xl"
        src={background_image}
      />
      <div className="flex flex-col gap-1">
        <p className="text-lg line-clamp-1">{name}</p>
        <div className="flex justify-between items-center px-2">
          <p className="">${(price * newQuantity).toFixed(2)}</p>
          <QuantityControls
            className="w-2/5"
            setQuantity={setNewQuantity}
            quantity={newQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
