<script lang="ts">
	import SlideShow from '$lib/components/SlideShow.svelte';
	import { slideshow } from '$lib/data';

	let slides = [];
	slideshow.subscribe((value) => {
		slides = value;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

<div class="content">
	<SlideShow images={slides.map(s=>s.image)} titles={slides.map(s=>s?.title)} contents={slides.map(s=>s?.content)}/>
</div>

<style>
	.content {
		display: flex;
		height: 85vh;
	}
</style>
