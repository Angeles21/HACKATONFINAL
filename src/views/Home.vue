<template>
	<div style="background:red">
		<h1 style="padding: 1.2em; text-align:center; color:white">PokeDex</h1>
	</div>
	<div class="container">
		<!-- SEARCH -->
		<div class="input-group rounded" style="float: left">
			<input
				type="search"
				class="form-control rounded"
				placeholder="Which pokemon are you looking for?"
				aria-label="Search"
				aria-describedby="search-addon"
			/>
			<span class="input-group-text border-0" id="search-addon">
				<i class="fas fa-search"></i>
			</span>
		</div>
		<!--- PAGES --->
		<ul class="pagination pagination-circle" style="float:right; padding-top:1em">
			<li class="page-item">
				<a
					style="color:black"
					class="page-link"
					href="#"
					tabindex="-1"
					aria-disabled="true"
					>Previous</a
				>
			</li>
			<li class="page-item active" aria-current="page"></li>

			<li class="page-item">
				<a style="color:red" class="page-link" href="#">Next</a>
			</li>
		</ul>
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
						<a href="" class="btn btn-primary">More</a>
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
		...mapState(["pokes"]),
	},
	methods: {
		...mapActions(["setPokemonAction"]),
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
