<script lang="ts">
	import { onMount } from 'svelte';

	export let images: string[];
	export let titles: string[] = [];
	export let contents: string[] = [];
	export let interval: number = 10000;
	export let controllable: boolean = true;
	export let auto: boolean = false;

	$: current = 0;
	function slide(to: number = current + 1) {
		if (to < 0) to = images.length - 1;
		current = to % images.length;
	}
	function autoSlide() {
		if (!auto) return;
		slide();
		setTimeout(autoSlide, interval);
	}
	onMount(autoSlide);
</script>

<div class="slideshow" style="background-image: url({images[current]})">
	{#if controllable}
		<button class="controllable" on:click={() => slide(current - 1)}>
			<i class="fas fa-chevron-left"></i>
		</button>
		<button class="controllable" on:click={() => slide(current + 1)}>
			<i class="fas fa-chevron-right"></i>
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
			<button class:current={i === current} on:click={() => slide(i)}></button>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../colors';
	.slideshow {
		background-color: $dark-brown;
		position: relative;
		width: 100%;
		height: 100%;
		max-height: 70vh;
		overflow: hidden;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 0.5rem;
		.title {
			position: absolute;
			top: 2%;
			left: 2%;
			color: $dark-brown;
			font-size: 2rem;
			text-shadow:
				0 1px $light2,
				0 -1px $light2,
				1px 0 $light2,
				-1px 0 $light2;
		}
		.content {
			position: absolute;
			bottom: 13%;
			right: 15%;
			max-width: 33%;
			padding: 1rem;
			border-radius: 0.5rem;
			font-size: 1.15rem;
			color: $dark-brown;
			background-color: rgba($light-brown, 0.35);
		}
		.dots {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			button {
				width: 1rem;
				height: 1rem;
				background-color: $light1;
				border-radius: 50%;
				margin: 0 0.5rem 1rem 0.5rem;
				cursor: pointer;
				&:hover {
					background-color: $light2;
				}
				&.current {
					background-color: $light3;
				}
			}
		}
		.controllable {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			background-color: rgba($dark-brown, 0.2);
			border: none;
			color: $light1;
			font-size: 2em;
			cursor: pointer;
			padding: 3rem 1rem;
			&:hover {
				color: $light2;
				background-color: rgba($dark-brown, 0.5);
			}
			&:first-child {
				left: 0;
				border-bottom-right-radius: 0.5rem;
				border-top-right-radius: 0.5rem;
			}
			&:nth-child(2) {
				right: 0;
				border-bottom-left-radius: 0.5rem;
				border-top-left-radius: 0.5rem;
			}
		}
	}
</style>
