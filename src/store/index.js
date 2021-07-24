import {createStore} from "vuex";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";

export default createStore({
	state: {
		pokes: [],
		poke: {
			name: "",
		},
		start: 0,
		end: 10,
	},
	mutations: {
		setPokemonMutation(state, payload) {
			state.pokes = payload;
			console.log(payload);
		},
		getPokemonsMutation(state, payload) {
			state.pokes = state.pokes.find((element) => element.id === parseInt(payload));
		},
		getPokemonMutation(state, payload) {
			state.poke = state.pokes.find((poke) => poke.id === parseInt(payload));
		},
		nextPokemonsMutation(state, payload) {
			state.start += 10;
		},
		prevPokemonsMutation(state, payload) {
			if ((state.start = 0)) {
			} else {
				state.start -= 10;
			}
		},
	},
	actions: {
		async setPokemonAction({commit, state}) {
			const params = {
				method: "GET",
			};
			let arrayPoke = [];
			const datos = await fetch(URL, params);
			let pokemons = await datos.json();

			pokemons.results.forEach(async (pokemon) => {
				const data = await fetch(pokemon.url);
				let elemento = await data.json();

				arrayPoke = [...arrayPoke, elemento];

				commit("setPokemonMutation", arrayPoke);
			});
		},
		getPokemonsAction({commit}, id) {
			commit("getPokemonsMutation", id);
		},
		getPokemonAction({commit}, id) {
			commit("getPokemonMutation", id);
		},
		nextPokemonsAction({commit}) {
			commit("nextPokemonsMutation");
		},
		prevPokemonsAction({commit}) {
			commit("prevPokemonsMutation");
		},
	},
});
