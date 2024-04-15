<script lang="ts">
	import type { ProjectCategory } from '$lib/types.d';

	export let category: ProjectCategory;
	let href = category.href ? category.href : '/work?c=' + category.title;
</script>

<a {href} class="card">
	<img src={category.image} alt="" />
	<h3 class="title">{category.title}</h3>
	<p class="content">{category.content}</p>
</a>

<style lang="scss">
	@import '../colors';
	.card {
		color: $light1;
		margin: 2rem 3.5rem;
		border-radius: 1%;
		overflow: clip;
		position: relative;
		height: 30rem;
		width: 20rem;
		img {
			position: absolute;
			z-index: -1;
			height: 100%;
		}
		.title {
			padding: 1rem;
			text-shadow:
				0 1px $dark-brown,
				0 -1px $dark-brown,
				1px 0 $dark-brown,
				-1px 0 $dark-brown;
		}
		.content {
			background: rgba($light-brown, 0.7);
			color: $dark-brown;
			position: absolute;
			padding: 0.5rem;
			width: 100%;
			bottom: 0;
			min-height: 30%;
			max-height: 30%;
			border-top: 1px solid rgba($dark-brown, 0.15);
			overflow: clip;
			word-wrap: break-word;
		}
	}
</style>
