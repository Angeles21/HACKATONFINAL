<template>
	<div class="container">
		<h1>POKEMON - {{ $route.params.id }}</h1>

		<section>
			<div class="row">
				<div class="col-6 ">
					<p>POKEMON DATABASE</p>
					<h2 @click="detail">{{ pokes.name }}</h2>

					<div style="text-align:center">
						<img alt="" :src="pokes.sprites.front_default" />
					</div>
					<p>Type: {{ pokes.types[0].type.name }}</p>
					<p>Skills: {{ pokes.abilities[0].ability.name }}</p>

					<div class="col-6">
						<router-link :to="`/`" class="btn btn-green">Go Back</router-link>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
	computed: {
		...mapState(["pokes"]),
	},
	methods: {
		...mapActions(["getPokemonsAction"]),
	},

	created() {
		this.getPokemonsAction(this.$route.params.id);
	},
};
</script>
