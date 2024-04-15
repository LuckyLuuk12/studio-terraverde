<script lang="ts">
	import { onMount } from 'svelte';
	
	export let images: string[] = [];
	export let interval: number = 10000;
	export let controllable: boolean = true;
	export let auto: boolean = false;
	
	$: current = 0;
	function slide(to: number = current+1) {
		if(to < 0) to = images.length - 1;
		current = to % images.length;
	}
	function autoSlide() {
		if(!auto) return;
		slide();
		setTimeout(autoSlide, interval);
	}
	onMount(autoSlide);
</script>

<div class="slideshow" style="background-image: url({images[current]})">
<!--	<img src={images[current]} alt="">-->
	{#if controllable}
		<button on:click={() => slide(current-1)}>
			<i class="fas fa-chevron-left"></i>
		</button>
		<button on:click={() => slide(current+1)}>
			<i class="fas fa-chevron-right"></i>
		</button>
	{/if}
	<div class="dots">
		{#each images as image, i}
			<span class:current={i === current} on:click={() => slide(i)}></span>
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
		.dots {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			span {
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
		button {
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
