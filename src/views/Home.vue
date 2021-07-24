<template>
	<Cards />
	<Spinner />
</template>

<script>
import Cards from "../components/Cards.vue";
import Spinner from "../components/Spinner.vue";
export default {
	name: "Home",
	components: {
		Cards,
		Spinner,
	},
};
</script>

<style></style>
