<script lang="ts">
	import { onMount } from 'svelte';

	export let images: string[];
	export let titles: string[] = [];
	export let contents: string[] = [];
	export let interval: number = 10000;
	export let controllable: boolean = true;
	export let auto: boolean = false;

	$: current = 0;
	let autoSlideTimeout;

	function slide(to: number = current + 1) {
		const imgs = document ? document.images : [];
		if (to !== current) for (let i = 0; i < imgs.length; i++) imgs[i].style.opacity = '0';
		if (auto && images.length > 5) {
			clearTimeout(autoSlideTimeout);
			autoSlideTimeout = setTimeout(() => autoSlide(current + 1), interval);
		}
		if (to === current) return;
		setTimeout(() => {
			current = mod(to, images.length);
			for (let i = 0; i < imgs.length; i++) imgs[i].style.opacity = '1';
		}, 400);
	}

	function autoSlide(to: number = current + 1) {
		current = mod(to, images.length);
		slide(mod(to, images.length));
	}

	function mod(n: number, m: number) {
		return ((n % m) + m) % m;
	}

	onMount(() => {
		if (auto && images.length > 5) {
			autoSlideTimeout = setTimeout(autoSlide, interval);
		}
	});
</script>

<div class="slideshow">
	<div class="images">
		<div class="overlay" />
		<div class="overlay" />
		<div class="overlay" />
		<img
			src={images[mod(current - 2, images.length)]}
			alt="Slideshow image {mod(current - 2, images.length)}"
		/>
		<img
			src={images[mod(current - 1, images.length)]}
			alt="Slideshow image {mod(current - 1, images.length)}"
		/>
		<img src={images[current]} alt="Slideshow image {current}" />
		<img
			src={images[mod(current + 1, images.length)]}
			alt="Slideshow image {mod(current + 1, images.length)}"
		/>
		<img
			src={images[mod(current + 2, images.length)]}
			alt="Slideshow image {mod(current + 2, images.length)}"
		/>
		<div class="overlay" />
		<div class="overlay" />
		<div class="overlay" />
	</div>
	{#if controllable}
		<button class="controllable" on:click={() => slide(current - 1)}>
			<i class="fas fa-chevron-left" />
		</button>
		<button class="controllable" on:click={() => slide()}>
			<i class="fas fa-chevron-right" />
		</button>
	{/if}
	{#if titles[current]}
		<h2 class="title">{titles[current]}</h2>
	{/if}
	{#if contents[current]}
		<p class="content">{contents[current]}</p>
	{/if}
	<div class="dots">
		{#each images as image, i}
			<button class:current={i === current} on:click={() => slide(i)} />
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../colors';
	.slideshow {
		background-color: rgba(black, 0.7);
		position: relative;
		width: 100%;
		height: 60vh;
		overflow: hidden;
		border-radius: 0.25rem;
		.images {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			height: 100%;

			img {
				transition: all 0.4s ease;
				animation: flipIn 1.6s ease-in-out;
			}
			@keyframes flipIn {
				0% {
					transform: rotateX(45deg) rotateY(90deg);
					opacity: 0;
				}
				100% {
					transform: rotateX(0) rotateY(0);
					opacity: 1;
				}
			}
			.overlay {
				position: absolute;
				width: 100%;
				height: 10%;
				&:nth-of-type(1) {
					top: 0;
					left: 0;
					z-index: 10;
					background-color: $light1;
					clip-path: polygon(0 0, 100% 0, 50% 80%);
				}
				&:nth-of-type(2) {
					top: 0;
					left: 0;
					z-index: 5;
					background-color: rgba($light1, 0.2);
					clip-path: polygon(0 0, 0 40%, 50% 80%, 100% 40%, 100% 0);
				}
				&:nth-of-type(3) {
					top: 0;
					left: 0;
					z-index: 2;
					background-color: rgba($light1, 0.05);
					clip-path: polygon(0 0, 0 60%, 50% 80%, 100% 60%, 100% 0);
				}
				// And now upside down the same for the bottom
				&:nth-of-type(4) {
					bottom: 0;
					right: 0;
					z-index: 10;
					background-color: $light1;
					clip-path: polygon(0 100%, 100% 100%, 50% 20%);
				}
				&:nth-of-type(5) {
					bottom: 0;
					right: 0;
					z-index: 5;
					background-color: rgba($light1, 0.2);
					clip-path: polygon(0 100%, 0 60%, 50% 20%, 100% 60%, 100% 100%);
				}
				&:nth-of-type(6) {
					bottom: 0;
					right: 0;
					z-index: 2;
					background-color: rgba($light1, 0.05);
					clip-path: polygon(0 100%, 0 40%, 50% 20%, 100% 40%, 100% 100%);
				}
			}
			img {
				width: 20%;
				height: 100%;
				object-fit: cover;
			}
		}
		.title {
			position: absolute;
			top: 2%;
			left: 40%;
			color: $light1;
			font-size: 2rem;
			text-shadow:
				0 1px $dark-brown,
				0 -1px $dark-brown,
				1px 0 $dark-brown,
				-1px 0 $dark-brown;
		}
		.content {
			position: absolute;
			bottom: 13%;
			right: 40%;
			max-width: 20%;
			padding: 1rem;
			border-radius: 0.5rem;
			font-size: 1.15rem;
			color: $dark-brown;
			background-color: rgba($light2, 0.2);
		}
		&:hover .dots {
			display: flex;
		}
		.dots {
			position: absolute;
			max-width: 100%;
			bottom: -1.5rem;
			z-index: 11;
			left: 0;
			//transform: translateX(-50%);
			display: none;
			width: 100%;
			button {
				width: 100%;
				height: 1rem;
				background-color: rgba($light3, 0.5);
				border-radius: 2px;
				margin: 0 0.125rem 1rem 0.125rem;
				cursor: pointer;
				&:hover {
					background-color: rgba($light3, 0.2);
				}
				&.current {
					background-color: rgba($light3, 0.9);
				}
			}
		}
		.controllable {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			border: none;
			color: $light1;
			font-size: 2em;
			cursor: pointer;
			padding: 3rem 1rem;
			text-shadow:
				1px 1px black,
				-1px -1px black,
				1px -1px black,
				-1px 1px black;
			&:hover {
				color: $light2;
				text-shadow:
					2px 2px 3px black,
					-2px -2px 3px black,
					2px -2px 3px black,
					-2px 2px 3px black;
			}
			&:first-of-type {
				left: 0;
				border-bottom-right-radius: 0.5rem;
				border-top-right-radius: 0.5rem;
			}
			&:nth-of-type(2) {
				right: 0;
				border-bottom-left-radius: 0.5rem;
				border-top-left-radius: 0.5rem;
			}
		}
	}

	@media (max-width: 900px) {
		.slideshow {
			.images {
				img {
					width: 33.333%;
				}
			}
		}
	}

	@media (max-width: 768px) {
		.slideshow {
			.images {
				img {
					width: 50%;
				}
			}
		}
	}

	@media (max-width: 480px) {
		.slideshow {
			.images {
				img {
					width: 100%;
				}
			}
		}
	}
</style>
