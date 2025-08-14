import { useState } from "react";
import IconButton from "./icon-button.jsx";

const ItemCard = ({ videoUrls, name, genre, description }) => {
	const [videoUrlId, setVideoUrlId] = useState(0);
	return (
		<div className="relative">
			<IconButton
			    className="absolute left-2 text-accent"
				iconName={"prev"}
				onClick={() => setVideoUrlId(Math.max(0, videoUrlId - 1))}
			/>
			<video
				className="object-cover "
				src={videoUrls[videoUrlId]}
				autoplay
				mute
				playsinline
			/>
			<IconButton
				iconName={"next"}
				onClick={() =>
					setVideoUrlId(
						Math.min(videoUrls.length - 1, videoUrlId + 1)
					)
				}
			/>
			<div className="absolute left-0 flex flex-col gap-2">
				<h2>{itemName}</h2>
				<p>{itemGenre}</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ItemCard;
