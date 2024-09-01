<script lang="ts">

import SideBySide from '$lib/components/SideBySide.svelte';
</script>

<svelte:head>
	<title>References</title>
	<meta name="description" content="References page" />
</svelte:head>

<main>
	<div class="content">
		<SideBySide
			src="/images/references/artikel-supersnack.PNG"
			imgSize="50%"
			textRight >
			<div class="container green">
				<div class="triangle lg1" />
				<h3>Supersnack</h3>
				<h1><i>journalist</i> Peter ten Cate</h1>
				<div class="triangle r1" />
				<p>
					Michel and Martine Hissink own this snack bar, called Supersnack, in the center of Zutphen.
					The snack bar has been completely renovated and expanded such that it fits well in the historical city center.
					The result is a modern and attractive snack bar with a fresh look.
				</p>
			</div>
		</SideBySide>
		<SideBySide
			src="/images/references/artikel-zeevaarder.PNG"
			imgSize="50%">
			<div class="container light">
				<div class="triangle r2" />
				<h3></h3>
				<h1>De Zeevaarder</h1>
				<div class="triangle l2" />
				<p>
					The Zeevaarder sports hall in Emmeloord is a multifunctional sports hall with a large sports
			</div>
		</SideBySide>
	</div>
</main>

