<script lang="ts">
import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact information" />
</svelte:head>

<main>
	<ContactForm />
</main>

<style lang="scss">
main {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 70vh;
}
</style>
