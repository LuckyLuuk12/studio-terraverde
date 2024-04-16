<script lang="ts">
	import type { Project } from '$lib/types.d';
	import SlideShow from '$lib/components/SlideShow.svelte';

	export let project: Project;
</script>

<div class="project">
	<div class="title">
		<h1>{project.title}</h1>
		<h4>{project.location}</h4>
		<div>
			{#each project.categories.map((c) => c.title) as category, i}
				{i > 0 ? ', ' : ''}
				<a href="?c={category}">#{category}</a>
			{/each}
		</div>
	</div>

	<p>{project.description}</p>

	{#if project.images.length > 0}
		<SlideShow images={project.images} />
	{/if}
</div>

<style lang="scss">
	.project {
		width: 100%;
		min-height: 85vh;
		display: flex;
		flex-direction: column;
		p {
			margin-bottom: 1rem;
		}
		.title {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			align-items: baseline;
			justify-content: space-between;
			margin-bottom: 4rem;
			& > * {
				flex: 50%;
			}
			& > *:nth-child(even) {
				text-align: right;
			}
		}
	}
</style>
