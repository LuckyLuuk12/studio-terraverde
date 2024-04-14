<script lang="ts">
	export let title: string;
	export let content: string;
	export let src: string;
</script>

<div class="card">
	<img {src} alt="" />
	<h3 class="title">{title}</h3>
	<p class="content">{content}</p>
</div>

<style lang="scss">
	@import '../colors';
	.card {
		color: $light1;
		margin: 2rem;
		border-radius: 0.5rem;
		overflow: clip;
		position: relative;
		height: 30rem;
		width: 20rem;
		//border: 1px solid $dark-brown;
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
