import { useState } from "react";
import IconButton from "./icon-button.jsx";

const ItemCard = ({ videoUrls, name, genre, description }) => {
	const [videoUrlId, setVideoUrlId] = useState(0);
	return (
		<div className="relative group h-80 overflow-hidden bg-black/50">
			<IconButton
				className="absolute left-0 top-1/3 text-accent p-2 z-[1]"
				iconName={"prev"}
				onClick={() => setVideoUrlId(Math.max(0, videoUrlId - 1))}
			/>
			<video
				className="absolute object-cover w-full h-full z-[-1]"
				src={videoUrls[videoUrlId]}
				autoPlay={true}
				muted
				playsInline={true}
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
	);
};

export default ItemCard;
