<template>
	<div>
		<Header />
		<router-view />
	</div>
</template>
<script>
import Header from "./components/Header.vue";
//import { mapState, mapActions } from 'vuex';
export default {
	name: "App",
	components: {
		Header,
	},
	methods: {},
};
</script>
<style></style>
