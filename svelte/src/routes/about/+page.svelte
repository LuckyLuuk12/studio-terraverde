<script lang="ts">
	import ProfileCard from '$lib/components/about/ProfileCard.svelte';
	import LanguageCard from '$lib/components/about/LanguageCard.svelte';
	import StudyCard from '$lib/components/about/StudyCard.svelte';

	const txt =
		'Project manager with broad experience in construction and real estate management. ' +
		'An architectural background that perfectly fits to closely manage projects of architectural ' +
		'importance. From the start of the construction process its delivery. Team player. ' +
		'Curious and observant with natural helicopter view.';

	const studies = [
		['Projectmanagement Open Universiteit', '1995-1996'],
		['University of Arts Utrecht - Faculteit Architectuur', '1982-1988'],
		['Instituut voor Architectuur te Orléans (Frankrijk)', '1980-1982'],
		['MBO diploma', '1971-1976'],
		['Download Curriculum Vitae', '']
	];

	const links = [
		'https://www.ou.nl/opleiding?opleiding=Projectmanagement',
		'https://www.hku.nl/',
		'https://www.univ-orleans.fr/',
		'https://www.roc.nl/',
		'/cv.pdf'
	];
</script>

<svelte:head>
	<title>About Me</title>
	<meta name="description" content="All you want to know about me!" />
</svelte:head>
<main>
	<ProfileCard name="Marchel van Oosten" src="/images/marchel.png" {txt} />
	<LanguageCard
		languages={[
			['Dutch', 10],
			['English', 8.5],
			['French', 8, 7],
			['German', 7],
			['Danish', 5],
			['Italian', 5]
		]}
	/>
	<StudyCard {studies} {links} />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.5vw;
		padding: 2% 3%;
	}
</style>
