<script lang="ts">
	import SlideShow from '$lib/components/SlideShow.svelte';
	import { slideshow } from '$lib/data';

	let images = [];
	slideshow.subscribe(value => {
		images = value;
	});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page">
</svelte:head>

<div class="content">
	<SlideShow {images} />
</div>

<style>
	.content {
		display: flex;
		height: 85vh;
	}
</style>
