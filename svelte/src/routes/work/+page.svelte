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
		selectedCategory = new URLSearchParams(v.url.search)
			?.get('c')
			?.replaceAll('+', ' ')
			.replaceAll('|', '&');
		selectedProject = new URLSearchParams(v.url.search)
			?.get('p')
			?.replaceAll('+', ' ')
			.replaceAll('|', '&');
	});
</script>

<svelte:head>
	<title>Previous Work</title>
	<meta name="description" content="My previous work" />
</svelte:head>

<div class="works">
	{#if !selectedCategory && !selectedProject}
		<h3>My work</h3>
		<span>
			I have been designing <b>over 30 projects</b> of which at least
			<b>10 have been realised</b>.<br />
			There are also around <b>4 projects</b> that still need to be realised.<br />
			Here you can find a selection of the projects I have worked on, nicely categorised into the<br
			/>
			different types of projects which I considered <b>important for society</b>.
		</span>
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
		<h3>
			<a href="/work">My Work </a> <i class="fa fa-solid fa-arrow-right" />
			{selectedCategory}
		</h3>
		{#each cats as category}
			{#if category?.title === selectedCategory}
				<span>{category?.content}</span>
			{/if}
		{/each}
		{#each pros as project}
			{#if project.categories.map((c) => c.title).includes(selectedCategory)}
				<Card
					category={{
						title: project.title,
						content: project.description,
						image: project.images[0],
						href: `?p=${project.title.replaceAll(' ', '+').replaceAll('&', '|')}`
					}}
				/>
			{/if}
		{/each}
	{/if}
</div>

<style lang="scss">
	@import '$lib/colors';
	.works {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		h3 {
			text-align: center;
			width: 100%;
			a {
				color: $brown2;
				text-decoration: none;
			}
		}
		span {
			text-align: center;
			width: 60%;
			font-size: 0.8rem;
			margin: 1% 20%;
			color: lighten($light3, 20%);
		}
	}
</style>
