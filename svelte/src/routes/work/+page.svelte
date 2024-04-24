<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { categories, projects } from '$lib/data';
	import { page } from '$app/stores';
	import Project from '$lib/components/Project.svelte';

	let cats = [];
	categories.subscribe((value) => (cats = value));
	let pros = [];
	projects.subscribe((value) => (pros = value));
	let selectedCategory: string | null = null;
	let selectedProject: string | null = null;
	page.subscribe((v) => {
		selectedCategory = new URLSearchParams(v.url.search).get('c');
		selectedProject = new URLSearchParams(v.url.search).get('p');
	});
</script>

<svelte:head>
	<title>Previous Work</title>
	<meta name="description" content="My previous work" />
</svelte:head>

<div class="content">
	{#if !selectedCategory && !selectedProject}
		{#each cats as category}
			<Card {category} />
		{/each}
	{/if}
	{#if !selectedCategory && selectedProject}
		{#each pros as project}
			{#if project.title === selectedProject}
				<Project {project} />
			{/if}
		{/each}
	{/if}
	{#if selectedCategory && !selectedProject}
		{#each pros as project}
			{#if project.categories.map((c) => c.title).includes(selectedCategory)}
				<Card
					category={{
						title: project.title,
						content: project.description,
						image: project.images[0],
						href: `?p=${project.title}`
					}}
				/>
			{/if}
		{/each}
	{/if}
</div>

<style lang="scss">
	@import '$lib/colors';
	.content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
