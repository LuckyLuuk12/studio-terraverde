<script lang="ts">
	import '$lib/styles.scss';
	import '@fortawesome/fontawesome-free/css/all.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav>
	<main>
		<slot />
	</main>
</Nav>

<style>
	main {
		margin: 0 4%;
	}
</style>
