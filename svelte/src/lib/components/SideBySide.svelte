<script lang="ts">
	export let textRight: boolean = false;
	export let src: string | null = null;
	export let imgSize: string = '50%';
	export let style: string = '';
</script>

<div class="outer" {style}>
	{#if textRight}
		<img {src} alt="" style={`min-width: ${imgSize}`} />
		<div class="inner"><slot /></div>
	{:else}
		<div class="inner"><slot /></div>
		<img {src} alt="" style={`min-width: ${imgSize}`} />
	{/if}
</div>

<style lang="scss">
	@import '../colors';
	.outer {
		width: 100%;
		display: flex;
		.inner {
			z-index: 2;
		}
		img {
			object-fit: cover;
			z-index: 1;
		}
	}
	// When the screen is smaller place the inner content above the image
	@media (max-width: 800px) {
		.outer {
			position: relative;
			.inner {
				width: 100%;
			}
			img {
				display: none;
			}
		}
		:global(.triangle) {
			display: none;
		}
	}
</style>
