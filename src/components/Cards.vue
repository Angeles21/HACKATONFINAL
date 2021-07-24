<template>
	<div class="container">
		<div class="row" style="justify-content:center">
			<div class="input-group rounded col-3" style="width:40%">
				<input
					type="search"
					v-model="finder"
					class="form-control rounded"
					placeholder="Which pokemon are you looking for?"
					aria-label="Search"
				/>
				<span class="input-group-text border-0" id="search-addon">
					<i class="fas fa-search"></i>
				</span>
			</div>
			<div class="col-6">
				<nav aria-label="Page navigation example">
					<ul class="pagination justify-content-end">
						<li class="page-item">
							<a class="page-link" style="color:black" @click="remove" href="#"
								>Previous</a
							>
						</li>
						<li class="page-item">
							<a class="page-link" style="color:red" @click="add" href="#">Next</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<!-- POKEMONS -->
		<div class="container d-flex flex-wrap">
			<div v-for="(poke, index) in pokes" :key="index">
				<div class="card p-3" style="width: 18rem;">
					<img :src="poke.sprites.front_default" class="card-img" alt="" />
					<div class="card-cluster">
						<h5 class="card-title" style="color:red">{{ poke.name }}</h5>
						<p class="card-text">N°: {{ poke.order }}</p>
						<p class="card-text">Height: {{ poke.height }}inches</p>
						<p class="card-text">Weight: {{ poke.weight }}lbs</p>
						<router-link :to="`/pokemon/${poke.id}`" class="btn">More Info</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapActions} from "vuex";

export default {
	name: "Home",
	components: {},
	computed: {
		...mapState(["pokes", "start", "end"]),

		find() {
			let pokes = new RegExp(this.finder, "i");
			return this.pokes.filter((name) => name.name.match(pokes));
		},
	},
	methods: {
		...mapActions(["setPokemonAction", "nextPokemonsAction", "prevPokemonsAction"]),

		add() {
			this.nextPokemonsAction(10);
			this.setPokemonAction();
		},
		remove() {
			this.prevPokemonsAction(10);
			this.setPokemonAction();
		},
	},
	created() {
		this.setPokemonAction();
	},
};
</script>
<style scoped>
.container {
	justify-content: center;
	margin: 3em;
}
.btn {
	text-transform: uppercase;
	font-size: 12px;
	padding: 2px 35px;
	border-radius: 20px;
	border: 2px solid rgb(39, 39, 39);
	background: rgb(231, 27, 27);
	color: white;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
}
.btn:hover {
	color: white;
	background-color: rgb(59, 43, 179);
	border-color: rgb(39, 39, 39);
}
.card {
	margin: 0.3em;
	border: 3px solid red;
	border-radius: 20px;
}
.card-img {
	height: 250px;
	padding: 0;
}
.card-cluster {
	text-align: center;
	background: rgb(245, 244, 234);
	padding: 1em;
	border-radius: 10px;
}

img:hover {
	transform: scale(2);
	transition: 0.1s;
	z-index: 1;
}
</style>
