<script lang="ts">
	import type { Project } from '$lib/types.d';
	import SlideShow from '$lib/components/SlideShow.svelte';

	export let project: Project;
</script>

<div class="project">
	<div class="title-description-box">
		<h1>{project.title}</h1>
		<p>{project.description}</p>
	</div>

	<div class="categories-box">
		<div class="categories">
			{#each project.categories.map((c) => c.title) as category, i}
				{i > 0 ? ', ' : ''}
				<a href="?c={category}">#{category}</a>
			{/each}
		</div>
	</div>

	{#if project.images.length > 0}
		<SlideShow images={project.images} />
	{/if}
</div>

<style lang="scss">
	@import '../colors';
	.project {
		width: 100%;
		min-height: 85vh;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: relative;
	}
	.title-description-box {
		text-align: center;
		padding: 1rem;
		border-radius: 1rem;
		h1 {
			margin-bottom: 1rem;
		}
		p {
			color: lighten($light3, 20%);
		}
	}
	.categories-box {
		cursor: pointer;
		position: absolute;
		right: 0;
		top: 1rem;
		width: 20%;
		background: linear-gradient(90deg, $light3 0%, darken($light3, 20%) 100%);
		padding: 1rem;
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
		transition: all 0.5s ease;
		animation: gradientAnimation 3s linear infinite;
		&:hover {
			width: 22%;
		}
	}

	.categories {
		margin: 0.5rem;
	}

	@keyframes gradientAnimation {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100% 100%;
		}
	}
</style>
