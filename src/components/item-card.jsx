import { useState } from "react";
import IconButton from "./icon-button.jsx";

const ItemCard = ({ videoUrls, name, genre, description }) => {
	const [videoUrlId, setVideoUrlId] = useState(0);
	return (
		<div className="relative h-80 outline-0">
			<IconButton
				className="absolute left-0 top-1/2 text-accent p-2 z-[1]"
				iconName={"prev"}
				onClick={() => setVideoUrlId(Math.max(0, videoUrlId - 1))}
			/>
			<img
				className="object-cover w-full h-full"
				src={videoUrls[videoUrlId]}
				autoPlay={true}
				muted
				playsInline={true}
			/>
			<IconButton
				className="absolute right-0 top-1/2 text-accent p-2 z-[1]"
				iconName={"next"}
				onClick={() =>
					setVideoUrlId(
						Math.min(videoUrls.length - 1, videoUrlId + 1)
					)
				}
			/>
			<div className="absolute left-0 bottom-0 p-4 h-3/5">
				<h2 className="text-2xl">{name}</h2>
				<p className="bg-accent p-1.5 rounded-xl inline">{genre}</p>
				<p className="">{description}</p>
			</div>
		</div>
	);
};

export default ItemCard;
