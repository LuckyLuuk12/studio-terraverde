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

<style lang="scss">
	@import '../lib/colors';
	.content {
		display: flex;
		flex-direction: column;
		scroll-snap-type: both mandatory;
		.gap {
			height: 5rem;
		}
		.container {
			position: relative;
			height: 100%;
			padding: 15%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			line-height: 1.5;
			&.green {
				background: $green1;
				h3 {
					color: rgba($light3, 0.75);
				}
				h1 {
					color: $light1;
				}
				p {
					color: rgba($light1, 0.75);
				}
				.triangle {
					background: $green1 !important;
				}
				a {
					color: $light1;
					&::after {
						background-color: $light1;
					}
					&:hover {
						color: lighten($light3, 60%);
						&::after {
							background-color: lighten($light3, 60%);
						}
					}
				}
			}
			&.light {
				background: linear-gradient(175deg, $light2 1%, $light1 80%);
				.triangle {
					background: $light1 !important;
				}
				h3 {
					color: rgba($green1, 0.75);
				}
				h1 {
					color: $light3;
				}
				p {
					color: rgba($light3, 0.4);
				}
				a {
					color: $light3;
					&::after {
						background-color: $light3;
					}
					&:hover {
						color: darken($green1, 10%);
						&::after {
							background-color: darken($green1, 10%);
						}
					}
				}
			}
			.triangle {
				position: absolute;
				width: 80px;
				height: 80px;
				right: -80px;
				top: 45%;
				clip-path: polygon(0 0, 0 100%, 50% 50%);
				background: transparent;
				&.l2 {
					top: 60%;
					height: 140px;
				}
				&.r1 {
					left: -80px;
					clip-path: polygon(50% 50%, 100% 100%, 100% 0);
				}
				&.r2 {
					top: 60%;
					left: -80px;
					height: 140px;
					clip-path: polygon(70% 50%, 100% 100%, 100% 0);
				}
			}
			h3,
			h1,
			p {
				margin-bottom: 2rem;
			}
			a {
				position: relative;
				color: $light1;
				&::after {
					content: '';
					position: absolute;
					bottom: -0.5rem;
					left: 15%;
					width: 70%;
					height: 0.15rem;
					background-color: $light1;
					transition: all 0.3s ease;
				}
				&:hover {
					color: lighten($light3, 60%);
					&::after {
						content: '';
						position: absolute;
						bottom: -0.5rem;
						left: 0;
						width: 100%;
						height: 0.15rem;
						background-color: lighten($light3, 60%);
					}
				}
			}
		}
	}
</style>
