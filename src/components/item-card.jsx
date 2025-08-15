import { useState } from "react";
import IconButton from "./icon-button.jsx";

const PriceTag = ({ price, onAddToCart }) => {
	const [quantity, setQuantity] = useState(1);
	const onAddQuantity = () => {
		setQuantity(quantity + 1);
	};

	const onSubstractQuantity = () => {
		setQuantity(Math.max(1, quantity - 1));
	};

	const onInputChange = (event) => {
		setQuantity(Math.floor(event.target.value));
	};

	return (
		<div className="bg-neutral-800 rounded-b-4xl px-4 py-2 grid grid-cols-3 grid-rows-2 gap-y-0">
			<p className="text-xl col-span-">${price * quantity}</p>
			<div className="flex gap-2 row-start-2 col-span-2">
				<button
					className="p-2 text-xl rounded-full bg-accent/10 border border-accent"
					onClick={onSubstractQuantity}
				>
					-
				</button>
				<input
					className="px-2 py-1 w-1/2 focus:border-2 focus:bg-accent/10 border-accent outline-0 rounded-lg text-center"
					type="number"
					onChange={onInputChange}
					value={quantity}
					range={900}
				/>
				<button
					className="p-2 text-xl rounded-full bg-accent/10 border border-accent"
					onClick={onAddQuantity}
				>
					+
				</button>
			</div>
			<IconButton className="col-end-5" iconName={"next"} />
		</div>
	);
};

const ItemCard = ({ videoUrls, name, genre, description }) => {
	const [videoUrlId, setVideoUrlId] = useState(0);
	return (
		<div>
			<div className="relative group h-80 overflow-hidden bg-black/50">
				<IconButton
					className="absolute left-0 top-1/3 text-accent p-2 z-[1]"
					iconName={"prev"}
					onClick={() => setVideoUrlId(Math.max(0, videoUrlId - 1))}
				/>
				<img
					className="absolute object-cover w-full h-full z-[-1]"
					src={videoUrls[videoUrlId]}
					autoPlay
					muted
					playsInline
					loop
				/>
				<IconButton
					className="absolute right-0 top-1/3 text-accent p-2 z-[1]"
					iconName={"next"}
					onClick={() =>
						setVideoUrlId(
							Math.min(videoUrls.length - 1, videoUrlId + 1)
						)
					}
				/>
				<div className=" absolute left-0 bottom-0 pl-10 pb-2 w-2/3">
					<h2 className="text-2xl font-poppins-bold mb-4">{name}</h2>
					{/*
					<p className="border-1 border-accent bg-accent w-fit p-1 rounded-xl text-sm mb-4">
						{genre}
					</p>
				*/}
					<p className="line-clamp-3 text-xs/5">{description}</p>
				</div>
			</div>
			<PriceTag price={300} onAddToCart={() => {}} />
		</div>
	);
};

export default ItemCard;
