<script lang="ts">
	import { categories } from '$lib/data';
	import { onMount } from 'svelte';

	let nav: HTMLElement;

	function toggleFolded() {
		nav.style.display = nav?.style?.display === 'none' || !nav.style.display ? 'flex' : 'none';
	}

	onMount(() => {
		window.addEventListener('resize', () => {
			if (nav && window.innerWidth > 800) {
				nav.style.display = 'flex';
			}
		});
	});
</script>

<header>
	<h1>Terra Verde</h1>
	<h5>Studio voor<br />Architectonische<br />Oplossingen</h5>
	<h6>
		<a href="mailto:vanoosten.marchel@gmail.com">vanoosten.marchel@gmail.com</a>
		<i class="fas fa-envelope" />
	</h6>
</header>
<div class="hamburger">
	<input type="checkbox" id="hamburger" on:change={toggleFolded} />
	<hr />
	<hr />
	<hr />
</div>
<nav bind:this={nav}>
	<a href="/">Home</a>
	<div class="dropdown">
		<a href="/work">Work</a>
		<div class="dropdown-content">
			{#each $categories as category}
				<a href={category.href}>{category.title}</a>
			{/each}
		</div>
	</div>
	<a href="/references">References</a>
	<a href="/about">About</a>
	<a href="/contact">Contact</a>
</nav>
<div class="page">
	<slot />
</div>
<footer>
	<div class="grid">
		<div>
			<img src="/images/favicon.png" alt="Terra Verde logo" />
			<h6>Studio Terra Verde</h6>
			<p>Beukerstraat 23-a <br>7201 LA, Zutphen <br> The Netherlands</p>
			<p><i class="fas fa-phone" /> +31 6 23538976</p>
			<a href="mailto:vanoosten.marchel@gmail.com">
				<i class="fas fa-envelope" />
				vanoosten.marchel@gmail.com
			</a>
		</div>
		<div>
			<h3>Useful links</h3>
			<a href="/work">Projects I worked on</a>
			<a href="/references">References others wrote</a>
			<a href="https://www.linkedin.com/in/marchelvanoosten/?originalSubdomain=nl">My LinkedIn</a>
		</div>
		
		<div>
			<h3>Legal:</h3>
			<a href="https://www.kvk.nl/bestellen/#/71738916000039903796">KVK</a><br>
			<a href="mailto:luckyluuk02@gmail.com"><i class="fas fa-bug" /> Report site issues</a>
		</div>
	</div>
	<div>
		<hr>
		Studio Terra Verde &copy; 2024
	</div>
</footer>

<style lang="scss">
	@import '../colors';

	header {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		background-color: $green2;
		color: $light1;
		box-shadow: 0 0.5rem 1rem rgba($green2, 0.2);
		height: 4rem;
		z-index: 1000;
		h1 {
			color: $lime1;
			padding: 1rem 0 1rem 20rem;
		}
		h6 {
			margin-left: auto;
			padding: 1rem 20rem 1rem 0;
		}
	}
	.hamburger {
		position: absolute;
		top: 1.25rem;
		right: 1rem;
		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 35px;
		height: 24px;
		input {
			opacity: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 700;
			cursor: pointer;
		}
		hr {
			width: 100%;
			height: 3px;
			background-color: $light2;
			border: none;
			z-index: 600;
			transition:
				transform 0.4s ease,
				opacity 0s ease;
		}
		input:checked ~ hr:nth-of-type(1) {
			transform: translateY(11px) rotate(-45deg);
		}
		input:checked ~ hr:nth-of-type(2) {
			opacity: 0;
		}
		input:checked ~ hr:nth-of-type(3) {
			transform: translateY(-10px) rotate(45deg);
		}
		&:hover input:not(:checked) ~ hr:nth-of-type(2) {
			transform: translateX(8px);
		}
		&:hover input:not(:checked) ~ hr:nth-of-type(3) {
			transform: translateX(4px);
		}
	}
	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 10rem;
		height: 8rem;
		font-size: 1.3rem;
		text-transform: capitalize;
		letter-spacing: 0.2rem;
		box-shadow: 0 0.5rem 1rem rgba($light3, 0.2);
		background: $light1;
		z-index: 900;
		& > * {
			margin: 2rem 0;
		}
		.dropdown {
			z-index: 800;
			a {
				display: flex;
				align-items: center;
				z-index: 850;
			}
			&-content {
				display: none;
				flex-direction: column;
				align-items: center;
				position: absolute;
				padding: 3rem 1rem 2rem 1rem;
				top: 9.3rem;
				margin-left: -6rem;
				gap: 1rem;
				font-size: 0.8rem;
				border-radius: 0 0 0.5rem 0.5rem;
				background: $light1;
			}
			&:hover .dropdown-content,
			&:hover .dropdown-content {
				display: flex;
			}
		}
		a {
			color: $light3;
			position: relative;
			&::after {
				content: '';
				position: absolute;
				bottom: -0.5rem;
				left: 15%;
				width: 70%;
				height: 0.15rem;
				background-color: $light3;
				transition: all 0.3s ease;
			}
			&:hover {
				color: $green1;
				&::after {
					content: '';
					position: absolute;
					bottom: -0.5rem;
					left: 0;
					width: 100%;
					height: 0.15rem;
					background-color: $green1;
					transition: all 0.3s ease;
				}
			}
		}
	}
	.page {
		z-index: 1;
		position: relative;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: $green2;
		color: $light1;
		font-size: 0.8rem;
		padding: 5% 20%;
		height: 60vh;
		.grid {
			height: 100%;
			display: grid;
			grid-template: 1fr / 1fr 1fr 1fr 1fr;
			gap: 2rem;
			& > * {
				height: 100%;
				display: flex;
				flex-direction: column;
				&:first-child {
					padding-bottom: 4rem;
					justify-content: space-around;
				}
			}
			
		}
		h6 {
			text-align: center;
		}
		h3 {
			margin-bottom: 1rem;
		}
		img {
			width: 25%;
			margin: 0 50%;
			transform: translateX(-50%);
		}
		hr {
			color: $light1;
			border-color: $light1;
			margin: 1rem 0;
		}
		a {
			position: relative;
			width: 100%;
			color: $light1;
			margin: 0.5rem 0;
			&:not([href^='mailto']) {
				&:hover { color: $light2; }
				&::before {
					content: '> ';
				}
				&::after {
					content: '';
					position: absolute;
					bottom: -0.25rem;
					left: 0;
					width: 100%;
					height: 0.05rem;
					background-color: rgba($light1, 0.75);
					transition: all 0.3s ease;
				}
			}
		}
	}

	@media (max-width: 800px) {
		header {
			h1 {
				min-width: fit-content;
				padding: 0 1rem;
			}
			h6 {
				display: none;
			}
		}
		.hamburger {
			display: flex;
		}
		nav {
			display: none;
			flex-direction: column;
			align-items: center;
			height: 96vh;
			.dropdown {
				&:hover .dropdown-content,
				&:hover .dropdown-content {
					display: none;
				}
			}
		}
		footer {
			grid-template: 1fr 1fr 1fr / 1fr;
			height: fit-content;
		}
	}
</style>
