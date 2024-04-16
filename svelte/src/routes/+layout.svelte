<script lang="ts">
	import '$lib/styles.scss';
	import '@fortawesome/fontawesome-free/css/all.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav>
	<div class="page-content">
		<slot />
	</div>
</Nav>

<style>
	.page-content {
		min-height: 65vh;
		margin: 0 3%;
	}
</style>
