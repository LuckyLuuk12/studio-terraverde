<script lang="ts">
	import SlideShow from '$lib/components/SlideShow.svelte';
	import { slideshow } from '$lib/data';
	import SideBySide from '$lib/components/SideBySide.svelte';

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
	<SideBySide
		src="/images/projects/Hillen & Roosen/atrium 02.jpg"
		imgSize="65%"
		style="height: 80.5vh"
	>
		<div class="container green">
			<div class="triangle lg1" />
			<h3>How we work</h3>
			<h1>The process of art</h1>
			<p>
				We examine every aspect of a construction project in all its complexity during the design
				and planning phase. This foundation forms the basis for clear and logical decision-making in
				close consultation with the client, ensuring quality throughout the entire construction
				process and guaranteeing transparency and trust.
			</p>
			<a href="/work">View now</a>
		</div>
	</SideBySide>
	<SideBySide
		src="/images/projects/De Kwartslag/Gymlokaal in Rutten Gemeente Noordoostpolder.png"
		imgSize="50%"
		textRight
	>
		<div class="container light">
			<div class="triangle r2" />
			<h3>What we do</h3>
			<h1>Architectural solutions</h1>
			<p>
				At Terra Verde Studio for Architectural Solutions, we employ a clear and systematic approach
				to designing and constructing buildings. Founded in 1989 in Utrecht, our company focuses on
				residential and office projects. Additionally, we work in the fields of education, culture,
				healthcare, sports, and industrial buildings, covering both exterior and interior design.
			</p>
			<a href="/about">Learn more</a>
		</div>
	</SideBySide>
	<div class="gap" />
	<SlideShow
		images={slides.map((s) => s.image)}
		titles={slides.map((s) => s?.title)}
		contents={slides.map((s) => s?.content)}
		auto
	/>
	<div class="gap" />
	<SideBySide src="/images/projects/Hillen & Roosen/episch-model-h&r.gif" imgSize="60%" textRight>
		<div class="container green">
			<div class="triangle r1" />
			<h3>Sustainability</h3>
			<h1>Keeping & Improving</h1>
			<p>
				Sustainability is the most important contribution a building can make in terms of ecology,
				economy, and cultural values. With this in mind, we construct our buildings to meet a range
				of sustainability criteria in terms of resources and energy, quality, and functional
				elements. Principles such as corporate social responsibility, efficiency, resource
				conservation, and social acceptability play a crucial role in our design vision.
			</p>
			<a href="/about">Curious now?</a>
		</div>
	</SideBySide>
	<div class="gap" />
</div>
