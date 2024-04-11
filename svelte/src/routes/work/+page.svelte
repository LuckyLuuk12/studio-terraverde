<script lang="ts">
  import Card from '$lib/components/Card.svelte';
	import cat1 from '$lib/images/categories/cat1.png';
	import cat2 from '$lib/images/categories/cat2.png';
	import cat3 from '$lib/images/categories/cat3.png';
	import cat4 from '$lib/images/categories/cat4.png';
</script>
<main>
  <Card title="Category 1" content="asdashdajdgvfysfbhdvchjnsmajekfdhbvjdkscvgs duvgbhsbhv hb hjfbvh sdvf sbjvf bwhs vfgsdj sdj sdj hvfh sjv" src={cat1}/>
  <Card title="Category 2" content="asdashdajdgvfysfbhdvchjnsmajekfdhbvjdkscvgs duvgbhsbhv hb hjfbvh sdvf sbjvf bwhs vfgsdj sdj sdj hvfh sjv" src={cat2}/>
  <Card title="Category 3" content="asdashdajdgvfysfbhdvchjnsmajekfdhbvjdkscvgs duvgbhsbhv hb hjfbvh sdvf sbjvf bwhs vfgsdj sdj sdj hvfh sjv" src={cat3}/>
  <Card title="Category 4" content="asdashdajdgvfysfbhdvchjnsmajekfdhbvjdkscvgs duvgbhsbhv hb hjfbvh sdvf sbjvf bwhs vfgsdj sdj sdj hvfh sjv" src={cat4}/>
  <Card title="Category 4" content="asdashdajdgvfysfbhdvchjnsmajekfdhbvjdkscvgs duvgbhsbhv hb hjfbvh sdvf sbjvf bwhs vfgsdj sdj sdj hvfh sjv" src={cat4}/>
</main>
<style lang="scss">
	@import '$lib/colors';
  main {
    display: flex;
		flex-wrap: wrap;
		justify-content: center;
  }
</style>
