class GameStore {
	#games;
	constructor() {
		this.#games = {};
		this.checkout = [];
	}

	addGames(games) {
		for (let game of games) {
			this.#games[game.id] = game;
		}
	}
	
	get games(){
	    return Object.values(this.#games)
	}

	addToCheckout(gameId) {
		this.checkout.push(gameId);
	}
}

export default new GameStore();
