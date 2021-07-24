<template>
	<div class="container">
		<h1>POKEMON - {{ $route.params.id }}</h1>
		<section>
			<div class="row">
				<div class="col-6 ">
					<p>POKEMON DATABASE</p>
					<h2 @click="detail">{{ poke.name }}</h2>
					<div style="text-align:center">
						<img alt="Vue logo" :src="poke.sprites.front_default" />
					</div>
					<p>Type: {{ poke.types.[0].type.name }}</p>
					<p>Skills: {{ poke.abilities.[0].ability.name }}</p>

					<div class="col-6">
						<router-link :to="`/`" class="btn btn-green">Go Back</router-link>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
