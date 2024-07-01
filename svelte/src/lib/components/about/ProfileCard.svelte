<script lang="ts">
	export let name: string | undefined;
	export let src: string | undefined;
	export let txt: string | undefined;
</script>

<div class="profile">
	{#if src}
		<img {src} alt="Profile picture" />
	{/if}
	{#if name}
		<h4>{name}</h4>
	{/if}
	{#if txt}
		<h6>{txt}</h6>
	{/if}
</div>

<style lang="scss">
	@import '../../colors';
	.profile {
		background-color: rgba($light-brown, 0.2);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		width: 30vw;
		img {
			width: 10rem;
			height: 10rem;
			object-fit: cover;
			border-radius: 50%;
			border: 2px solid $accent2;
		}
		& > * {
			margin: 1rem 0;
		}
	}
</style>
