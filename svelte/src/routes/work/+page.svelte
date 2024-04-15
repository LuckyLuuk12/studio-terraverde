<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { categories, projects } from '$lib/data';
	import { page } from '$app/stores';

	let cats = [];
	categories.subscribe((value) => (cats = value));
	let pros = [];
	projects.subscribe((value) => (pros = value));
	let selectedCategory = null;
	let selectedProject = null;
	// TODO: get URL query params
	page.subscribe(({ query }) => {
		console.log("URL: "+query);
	});
</script>

<svelte:head>
	<title>Previous Work</title>
	<meta name="description" content="My previous work" />
</svelte:head>

<main>
	{#if !selectedCategory && !selectedProject}
		{#each cats as category}
			<Card {category} />
		{/each}
	{/if}
	{#if selectedCategory && !selectedProject}
		{#each pros as project}
			{#if project.categories.includes(selectedCategory)}
				{project.title}
			{/if}
		{/each}
	{/if}
	{#if selectedCategory && selectedProject}
		{#each cats as category}
			{#if category.name === selectedCategory}
				{#each category.projects as project}
					{#if project.name === selectedProject}
						<Card {category} {project} />
					{/if}
				{/each}
			{/if}
		{/each}
	{/if}
</main>

<style lang="scss">
	@import '$lib/colors';
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
