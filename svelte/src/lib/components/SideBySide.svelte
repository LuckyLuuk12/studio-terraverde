<script lang="ts">
	export let textRight: boolean = false;
	export let src: string | null = null;
	export let imgSize: string = '50%';
</script>

<div class="outer">
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
		min-height: 85vh;
		max-height: 100vh;
		display: flex;
		.inner {
		}
		img {
			object-fit: cover;
		}
	}
</style>
