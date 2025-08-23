import { useState, useEffect } from "react";
import gamestore from "../games.js";

export const useGameStore = () => {
	const [state, setState] = useState({
		games: gamestore.games,
		fetchedPages: new Set(),
		isFetching: false,
		fetchError: null,
	});

	const fetchGames = (pageNumber) => {
		alert("fetching");
		const controller = new AbortController();
		const signal = controller.signal;
		(async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=${
						import.meta.env.VITE_RAWG_KEY
					}&page=${pageNumber}&pageSize=30`,
					{ signal }
				);
				const data = await response.json();
				if (response.status >= 400)
					throw new Error(JSON.stringify(data));
				else {
					gamestore.addGames(data.results);
					setState((state) => ({
						...state,
						games: gamestore.games,
						isFetching: false,
						fetchedPages: new Set([
							...state.fetchedPages,
							pageNumber,
						]),
					}));
				}
			} catch (error) {
				setState((state) => ({
					...state,
					fetchError: error.message,
					isFetching: false,
				}));
			}
		})();
		return controller;
	};

	const getMoreGames = () => {
		if (state.isFetching) return;
		let totalPages = 100;
		if (state.fetchedPages.size + 1 >= totalPages) return;
		let newRandomPage;
		do {
			newRandomPage = Math.round(Math.random() * totalPages);
		} while (state.fetchedPages.has(newRandomPage));

		setState((state) => ({
			...state,
			isFetching: true,
		}));
		return fetchGames(newRandomPage);
	};

	useEffect(() => {
		if (!gamestore.games.length) {
			const controller = getMoreGames();
			return () => controller.abort();
		}
	}, []);

	return {
		...state,
		getMoreGames,
		getCheckout: () => gamestore.checkout,
		addToCheckout: (game, quantity) => gamestore.addToCheckout(game, quantity),
	};
};
