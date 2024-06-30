<script lang="ts">
	import ProfileCard from '$lib/components/about/ProfileCard.svelte';
	import LanguageCard from '$lib/components/about/LanguageCard.svelte';
	import StudyCard from '$lib/components/about/StudyCard.svelte';

	const txt = 'Project manager with broad experience in construction and real estate management ' +
		'and an architectural background that can be used to closely manage projects of architectural ' +
		'importance from the start of the construction process to delivery.Team player. ' +
		'Curious and observant with natural helicopter view.';
	
	const studies = [
		['Projectmanagement Open Universiteit', '1995-1996'],
		['University of Arts Utrecht', '1982-1988'],
		['Instituut voor Architectuur te Orléans (Frankrijk)', '1980-1982'],
		['MBO diploma', '1971-1976']
	];
	
</script>

<svelte:head>
	<title>About Me</title>
	<meta name="description" content="All you want to know about me!" />
</svelte:head>
<main>
	<ProfileCard name="Marchel van Oosten ~ 1957" src="/images/marchel.png" {txt} />
	<LanguageCard languages={[['Dutch', 10], ['English', 8.5], ['German', 7], ['French', 6,7], ['Danish', 5], ['Italian', 5]]} />
	<StudyCard {studies} />
</main>


<style lang="scss">
	main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 0.5vw;
	}
</style>
