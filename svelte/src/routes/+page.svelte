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
	<div class="full-page">
		<SlideShow
			images={slides.map((s) => s.image)}
			titles={slides.map((s) => s?.title)}
			contents={slides.map((s) => s?.content)}
			auto
		/>
	</div>
	<div class="full-page">
		<SideBySide src="/images/projects/Hillen & Roosen/episch-model-h&r.gif" imgSize="55%">
			<div class="maquette">
				<h2>How we work</h2>
				<h1>The process of art</h1>
				<p>
					We examine every aspect of a construction project in all its complexity during the design
					and planning phase. This foundation forms the basis for clear and logical decision-making
					in close consultation with the client, ensuring quality throughout the entire construction
					process and guaranteeing transparency and trust.
				</p>
				<a href="/work">View now</a>
			</div>
		</SideBySide>
	</div>
</div>

<style lang="scss">
	@import '../lib/colors';
	.content {
		display: flex;
		flex-direction: column;
		scroll-snap-type: both mandatory;
		.full-page {
			scroll-snap-align: start;
			min-height: 82vh;
			width: 100%;
			.maquette {
				height: 100%;
				background-color: rgba(darken($accent1, 30%), 0.6);
				padding: 10rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				h2 {
					margin-bottom: 2rem;
					color: rgba($light3, 0.75);
				}
				h1 {
					margin-bottom: 2rem;
					color: $light1;
				}
				p {
					line-height: 1.4;
					color: rgba($light1, 0.75);
					margin-bottom: 2rem;
				}
				a {
					// link with growing underline
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
	}
</style>
