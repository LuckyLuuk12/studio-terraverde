<script lang="ts">
	import type { ProjectCategory } from '$lib/types';

	export let category: ProjectCategory;
	let href: string = category.href ? category.href : '/work?c=' + category.title;
	// @ts-ignore
	const fixedHref: string = href.replaceAll(' ', '+').replaceAll('&', '|');
</script>

<a href={fixedHref} class="card">
	<img src={category.image} alt="" />
	<h3 class="title">{category.title}</h3>
	<p class="content">{category.content}</p>
</a>

<style lang="scss">
	@import '../colors';
	.card {
		color: $light1;
		margin: 2rem 3.5rem;
		border-radius: 0.25rem;
		overflow: clip;
		position: relative;
		height: 30rem;
		width: 20rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		img {
			position: absolute;
			z-index: -1;
			height: 100%;
		}
		.title {
			padding: 1rem;
			text-shadow:
				0 1px $brown2,
				0 -1px $brown2,
				1px 0 $brown2,
				-1px 0 $brown2;
		}
		.content {
			background: rgba($brown1, 0.7);
			color: lighten($light3, 10%);
			position: absolute;
			padding: 0.5rem;
			width: 100%;
			bottom: 0;
			min-height: 30%;
			max-height: 30%;
			border-top: 1px solid rgba($brown2, 0.15);
			overflow: clip;
			word-wrap: break-word;
		}
	}
</style>
