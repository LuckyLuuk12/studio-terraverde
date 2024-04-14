<script lang="ts">
	import favicon from '../images/logo.png';
	import { onMount } from 'svelte';

	let nav: HTMLElement | null = null;
	let hamburger: HTMLElement | null = null;
	let hamburgerContent: HTMLElement | null = null;
	let unfolded: boolean = false;
	let style = '';
	function toggleHamburger() {
		unfolded = !unfolded;
		let count = 1;
		for (let span: HTMLElement of hamburger.querySelectorAll('.line')) {
			if (count == 1)
				span.style.transform = unfolded ? 'rotate(45deg) translate(0.5rem, 0.5rem)' : 'rotate(0)';
			if (count == 2) span.style.display = unfolded ? 'none' : '';
			if (count == 3) span.style.transform = unfolded ? 'rotate(-45deg)' : 'rotate(0)';
			count++;
		}
		if (!hamburgerContent) return;
		let screenWidth = window.innerWidth;
		style = screenWidth <= 800 && unfolded ? 'display: contents;' : 'display: none';
	}
	function toggleFold(event: MouseEvent) {
		if (!nav) return;
		let target = event.target as HTMLElement;
		if (!target) return;
		let button = target.parentNode as HTMLElement;
		if (!button) return;
		let foldable = button.parentNode as HTMLElement;
		if (!foldable) return;
		let content = foldable.children;
		if (!content) return;
		for (let c of content) {
			const child = c as HTMLElement;
			if(child.className.includes('content')) {
				child.style.top = nav.clientHeight + 'px';
				child.style.display = child.style.display != 'flex' ? 'flex' : 'none';
			}
		}
	}
	onMount(() => {
		window.addEventListener('resize', () => {
			for (let foldable of nav.querySelector('.foldable')) {
				let contents = foldable.querySelectorAll('.content');
				for (let content of contents) {
					content.style.top = nav.clientHeight + 'px';
				}
			}
		});
	});
</script>

<nav bind:this={nav}>
	<div
		class="hamburger"
		role="button"
		tabindex="0"
		bind:this={hamburger}
		on:click={toggleHamburger}
		on:keyup
		on:keydown={toggleHamburger}
	>
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</div>
	<img src={favicon} alt="Company icon" />
	<div class="hamburger-content" bind:this={hamburgerContent} {style}>
		<a href="/">home</a>
		<div class="foldable">
			<div
				class="button"
				role="button"
				tabindex="0"
				on:click={(e) => {
					toggleFold(e);
				}}
				on:keyup
				on:keydown={(e) => {
					toggleFold(e);
				}}
			>
				<a href="/work">work</a>
				<i class="fa fa-caret-down fa-fw"></i>
			</div>

			<div class="content">
				<a href="/work?category=schools">Schools</a>
				<a href="/work?category=residential-areas">Residential Areas</a>
				<a href="/work?category=offices">Offices</a>
				<a href="/work?category=Churches">Offices</a>
				<a href="/work?category=Unrealized Projects">Offices</a>
				<a href="/work?category=Other">Offices</a>
			</div>
		</div>

		<a href="/about">about</a>
		<a href="/contact">contact</a>
	</div>
</nav>
<div class="page">
	<slot />
</div>

<style lang="scss">
	@import '../colors';
	nav {
		position: relative;
		z-index: 10;
		background-color: $light2;
		color: $dark-brown;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: stretch;
		align-items: center;
		width: 100vw;
		height: 15vh;
		max-height: 15vh;
		font-weight: 800;
		font-size: 1.1rem;
		.foldable {
			.content {
				background-color: $light3;
				color: $dark-brown;
				position: absolute;
				display: none;
				flex-direction: column;
				padding: 4rem 5rem;
				gap: 1rem;
				width: 100vw;
				top: 15vh;
				left: 0;
				transition: ease all 0.5s;
				z-index: 1;
				& > * {
					font-size: 1rem;
					max-width: fit-content;
				}
			}
		}
		.hamburger-content {
			display: contents;
		}
		.hamburger {
			display: none;
			flex-direction: column;
			justify-content: space-around;
			width: 2rem;
			height: 2rem;
			cursor: pointer;
			position: absolute;
			top: 2rem;
			right: 2rem;
			.line {
				margin: 0 0 0.5rem 0;
				width: 2rem;
				height: 0.25rem;
				background-color: $dark-brown;
				border-radius: 10px;
			}
		}
		a {
			color: $dark-brown;
			transition: ease all 10ms;
			//padding: 0 0.5rem;
			&:hover {
				color: rgba($dark-brown, 0.85);
				border-bottom: 3px solid rgba($dark-brown, 0.85);
			}
		}
		img {
			max-height: 4rem;
			//margin: 2rem 0;
			padding-left: 0;
		}
	}
	.page {
		display: contents;
		//background-color: $light1;
		z-index: 0;
	}
	@media only screen and (min-width: 800px) {
		.hamburger-content {
			display: contents !important;
		}
	}
	@media only screen and (max-width: 800px) {
		nav {
			justify-content: unset;
			flex-direction: column;
			height: fit-content;
			max-height: unset;
			img {
				max-width: 75%;
				margin: 1.5rem 0;
				z-index: 0;
			}
			.hamburger {
				display: inline-block;
			}
			.hamburger-content {
				display: none;
				max-height: fit-content;
				height: fit-content;
			}
		}
		.page {
			height: 100vh;
		}
	}
</style>
