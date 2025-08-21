import { useState } from "react";
import { useFetch } from "../hooks/useFetch.js";
import IconButton from "./icon-button.jsx";

const SearchBar = ({ setSearchResult }) => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const [inputValue, setInputValue] = useState("");
	const { data, error, isLoading } = useFetch(
		`https://api.rawg.io/api/games?key=${
			import.meta.env.VITE_RAWG_KEY
		}&search=${searchKeyword}&pageSize=40`
	);
	if (data) setSearchResult(data);
	return (
		<div>
			<input
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
			/>
			{isLoading ? (
				loadingLoop
			) : (
				<IconButton
					iconName={"search"}
					onClick={() => {
						setSearchKeyword(inputValue);
					}}
				/>
			)}
			
			{}
		</div>
	);
};

export default SearchBar;
