import {createStore} from "vuex";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";

export default createStore({
	state: {
		pokes: [],
	},
	mutations: {
		setPokemonMutation(state, payload) {
			state.pokes = payload;
			console.log(payload);
		},
	},
	actions: {
		async setPokemonAction({commit}) {
			const params = {
				method: "GET",
			};
			let arrayPokemones = [];
			const datos = await fetch(URL, params);
			let pokemones = await datos.json();

			pokemones.results.forEach(async (pokemon) => {
				const data = await fetch(pokemon.url);
				let elemento = await data.json();

				arrayPokemones = [...arrayPokemones, elemento];

				commit("setPokemonMutation", arrayPokemones);
			});
		},
	},
});
