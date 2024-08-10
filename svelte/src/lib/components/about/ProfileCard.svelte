<script lang="ts">
	export let name: string | undefined;
	export let src: string | undefined;
	export let txt: string | undefined;
</script>

<div class="profile">
	{#if src}
		<img {src} alt="Profile picture" />
	{/if}
	<div class="text-container">
		{#if name}
			<h4>{name}</h4>
		{/if}
		{#if txt}
			<h6>{txt}</h6>
		{/if}
		<button on:click={() => window.location.href = '/contact'}>Contact</button>
	</div>
</div>

<style lang="scss">
	@import '../../colors';
	.profile {
		background-color: rgba($light3, 1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		width: 30vw;
		position: relative;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		@media (max-width: 900px) {
			width: 100%;
		}
		img {
			width: 100%;
			height: 60%;
			object-fit: cover;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
		}
		.text-container {
			background-color: $light2;
			padding: 1rem;
			border-radius: 0.5rem;
			margin: -15% 0;
			width: 70%;
			max-height: 50%;
			text-align: center;
			overflow: hidden;
			h4 {
				margin: 0;
				color: $dark-brown;
			}
			h6 {
				margin: 0.5rem 0;
				color: $dark-brown;
			}
			button {
				margin: 1rem;
				padding: 0.5rem 1rem;
				background: linear-gradient(135deg, darken($accent1, 10%) 0%, darken($accent1, 40%) 100%);
				color: white;
				border: none;
				border-radius: 0.5rem;
				cursor: pointer;
				transition: background 0.3s ease;
				background-size: 200% 200%;
				&:hover {
					animation: gradientMove 3s linear infinite;
				}
				@keyframes gradientMove {
					0% {
						background-position: 0 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0 50%;
					}
				}
			}
		}
	}
</style>
