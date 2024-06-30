<script lang="ts">
	import '$lib/styles.scss';
	import '@fortawesome/fontawesome-free/css/all.css';
	import Nav from '$lib/components/Nav.svelte';
	// TODO: use google maps link in location of the project
</script>

<Nav>
	<div class="page-content">
		<slot />
	</div>
</Nav>

<style>
	.page-content {
		min-height: 65vh;
		padding: 2% 3%;
	}
</style>
