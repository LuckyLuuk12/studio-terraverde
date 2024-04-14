<script lang="ts">
  import Card from '$lib/components/Card.svelte';
	import cat1 from '$lib/images/categories/cat1.png';
	import cat2 from '$lib/images/categories/cat2.png';
	import cat3 from '$lib/images/categories/cat3.png';
	import cat4 from '$lib/images/categories/cat4.png';
	
	let data = [
		{
			category: "Schools",
			content: "You should put some text about school related projects here.",
			image: cat1
		},
		{
			category: "Offices",
			content: "You should put some text about office related projects here.",
			image: cat2
		},
		{
			category: "Cultural Projects",
			content: "You should put some text about cultural related projects here. Like churches",
			image: cat3
		},
		{
			category: "Other projects",
			content: "You should put all other projects here",
			image: cat4
		},
		{
			category: "Unrealized projects",
			content: "You should put text about unrealized projects here",
			image: cat2
		}
	]
</script>

<svelte:head>
	<title>Previous Work</title>
	<meta name="description" content="My previous work" />
</svelte:head>

<main>
	{#each data as category}
		<Card title={category.category} content={category.content} src={category.image}/>
	{/each}
</main>

<style lang="scss">
	@import '$lib/colors';
  main {
    display: flex;
		flex-wrap: wrap;
		justify-content: center;
  }
</style>
