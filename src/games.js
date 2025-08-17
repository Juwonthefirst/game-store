class GameStore {
	#games;
	#checkout;
	constructor() {
		this.#games = {};
		this.#checkout = [];
	}

	addGames(games) {
		for (let game of games) {
			this.#games[game.id] = game;
		}
	}

	get games() {
		return Object.values(this.#games);
	}
	get checkout() {
		return this.#checkout.map((gameId) => this.#games[gameId]);
	}

	addToCheckout(gameId) {
		this.checkout.push(gameId);
	}
}

export default new GameStore();
