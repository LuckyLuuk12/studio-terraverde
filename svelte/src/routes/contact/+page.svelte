<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { categories } from '$lib/data';

	let data = [];
	categories.subscribe((value) => (data = value));
	
</script>

<svelte:head>
	<title>Previous Work</title>
	<meta name="description" content="My previous work" />
</svelte:head>

<main>
	{#each data as category}
		<Card category={category} />
	{/each}
</main>

<style lang="scss">
	@import '$lib/colors';
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
