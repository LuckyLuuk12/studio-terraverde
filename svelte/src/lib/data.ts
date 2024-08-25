import { type Writable, writable } from 'svelte/store';
import type { ProjectCategory, Project } from '$lib/types';
import { projectData as pData } from './projects';

// Data for the project categories
const categoryData: ProjectCategory[] = [
	{
		title: 'Working on now',
		content:
			'As full-time passionate dedicated architect, I am always busy working on my next great creation. Check out the projects I am currently working on.',
		image: '/images/categories/cat0.jpg'
	},
	{
		title: 'Schools',
		content:
			"Schools are so important, they bring the future. That's why I am happy I could work on some of them. Check them out here",
		image: '/images/categories/cat1.jpg'
	},
	{
		title: 'Offices',
		content:
			'Offices, as well, are a very important aspect of our lives. Check out the offices I have worked on.',
		image: '/images/categories/cat2.jpg'
	},
	{
		title: 'Cultural Projects',
		content:
			'Cultural projects are very important for the (local) community. Check out the cultural projects I have worked on.',
		image: '/images/categories/cat3.jpg'
	},
	{
		title: 'Student Guidance',
		content:
			'I also guided some students in their projects. See how they performed, what they did and how I helped them.',
		image: '/images/categories/cat4.png'
	},
	{
		title: 'Local Authority Projects',
		content:
			'I also worked on some projects for which the local authority personally asked me. Check them out here.',
		image: '/images/categories/cat5.jpg'
	},
	{
		title: 'Other projects',
		content:
			'I have even more projects which are too special to put into a category. Check them out here.',
		image: '/images/categories/cat6.jpg'
	},
	{
		title: 'Unrealized projects',
		content:
			'Sadly, not all projects are realized. Check out the projects that never saw the light of day.',
		image: '/images/categories/cat7.png'
	}
];
// set the href for each category to the work page with the category as a query parameter
export const cats: ProjectCategory[] = categoryData.map((cat) => {
	return {
		title: cat.title,
		content: cat.content,
		href: cat.href ? cat.href : `/work?c=${cat.title}`,
		image: cat.image
	};
});

// Slides for the home page slideshow
const slides: { image: string; title?: string; content?: string }[] = [
	{ image: '/images/projects/Hillen & Roosen/Gevel Hillen & Roosen.jpg' },
	{ image: '/images/projects/Hoofdkantoor Redstone/restone 02.jpg' },
	{
		image: '/images/projects/OBS De Zevensprong/zijgevel Zevensprong met gekleurde bovenlichten.jpg'
	},
	{
		image: '/images/projects/Winkelcentrum De Boogaard/voorkant-1.PNG'
	},
	{ image: '/images/projects/De Kwartslag/voorgevel.jpg' },
	{ image: "/images/projects/Villa's Lelystad/Lelystad overhoeks opname.jpg" }
];

// Data for the projects, including all images in the static/images/projects folder
export const projectData: Project[] = [
	{
		title: '8 Bedrijf units + overkapping',
		description: 'This is the project named 8 Bedrijf units + overkapping',
		images: pData.filter((p) => p.title === '8 Bedrijf units + overkapping')[0]?.images ?? [],
		categories: [cats[0]],
		location: '',
		other: [{}]
	},
	{
		title: 'Autoboulevard Sloterdijk',
		description: 'This is the project named Autoboulevard Sloterdijk',
		images: pData.filter((p) => p.title === 'Autoboulevard Sloterdijk')[0]?.images ?? [],
		categories: [cats[7]],
		location: '',
		other: [{}]
	},
	{
		title: 'Casa Surace',
		description: 'This is the project named Casa Surace',
		images: pData.filter((p) => p.title === 'Casa Surace')[0]?.images ?? [],
		categories: [cats[3]],
		location: '',
		other: [{}]
	},
	{
		title: 'De achterstraat te Alkmaar',
		description: 'This is the project named De achterstraat te Alkmaar',
		images: pData.filter((p) => p.title === 'De achterstraat te Alkmaar')[0]?.images ?? [],
		categories: [cats[0]],
		location: '',
		other: [{}]
	},
	{
		title: 'De Kwartslag',
		description: 'This is the project named Kwartslag',
		images: pData.filter((p) => p.title === 'De Kwartslag')[0]?.images ?? [],
		categories: [cats[3]],
		location: '',
		other: [{}]
	},
	{
		title: 'De Wissel',
		description: 'This is the project named De Wissel',
		images: pData.filter((p) => p.title === 'De Wissel')[0]?.images ?? [],
		categories: [cats[1]],
		location: '',
		other: [{}]
	},
	{
		title: 'De Zeevaarder',
		description: 'This is the project named Zeevaarder',
		images: pData.filter((p) => p.title === 'De Zeevaarder')[0]?.images ?? [],
		categories: [cats[3]],
		location: '',
		other: [{}]
	},
	{
		title: 'Feestzaal',
		description: 'This is the project named Feestzaal',
		images: pData.filter((p) => p.title === 'Feestzaal')[0]?.images ?? [],
		categories: [cats[3]],
		location: '',
		other: [{}]
	},
	{
		title: 'Gedempte nieuwe sloot - Alkmaar',
		description: 'This is the project named Gedempte nieuwe sloot - Alkmaar',
		images: pData.filter((p) => p.title === 'Gedempte nieuwe sloot - Alkmaar')[0]?.images ?? [],
		categories: [cats[0]],
		location: '',
		other: [{}]
	},
	{
		title: 'Hillen & Roosen',
		description: 'This is the project named Hillen & Roosen',
		images: pData.filter((p) => p.title === 'Hillen & Roosen')[0]?.images ?? [],
		categories: [cats[2]],
		location: '',
		other: [{}]
	},
	{
		title: 'Hoofdkantoor Electro Lux',
		description: 'This is the project named Electro Lux',
		images: pData.filter((p) => p.title === 'Hoofdkantoor Electro Lux')[0]?.images ?? [],
		categories: [cats[7]],
		location: '',
		other: [{}]
	},
	{
		title: 'Hoofdkantoor Redstone',
		description: 'This is the project named Redstone',
		images: pData.filter((p) => p.title === 'Hoofdkantoor Redstone')[0]?.images ?? [],
		categories: [cats[2]],
		location: '',
		other: [{}]
	},
	{
		title: 'Houtwal',
		description: 'This is the project named Houtwal',
		images: pData.filter((p) => p.title === 'Houtwal')[0]?.images ?? [],
		categories: [cats[0]],
		location: '',
		other: [{}]
	},
	{
		title: 'Kleurrijk Wonen',
		description: 'This is the project named Kleurrijk Wonen',
		images: pData.filter((p) => p.title === 'Kleurrijk Wonen')[0]?.images ?? [],
		categories: [cats[5]],
		location: '',
		other: [{}]
	},
	{
		title: 'Minaret solimee moskee',
		description: 'This is the project named Minaret solimee moskee',
		images: pData.filter((p) => p.title === 'Minaret solimee moskee')[0]?.images ?? [],
		categories: [cats[3]],
		location: 'Haarlem',
		other: [{}]
	},
	{
		title: 'Minderhoutschool',
		description: 'This is the project named Minderhoutschool',
		images: pData.filter((p) => p.title === 'Minderhoutschool')[0]?.images ?? [],
		categories: [cats[1]],
		location: '',
		other: [{}]
	},
	{
		title: 'OBS De Zevensprong',
		description: 'This is the project named OBS Zevensprong',
		images: pData.filter((p) => p.title === 'OBS De Zevensprong')[0]?.images ?? [],
		categories: [cats[1]],
		location: '',
		other: [{}]
	},
	{
		title: 'Pizza Place',
		description: 'This is the project named Pizza Place',
		images: pData.filter((p) => p.title === 'Pizza Place')[0]?.images ?? [],
		categories: [cats[3]],
		location: '',
		other: [{}]
	},
	{
		title: 'Plompertstraat',
		description: 'This is the project named Plompertstraat',
		images: pData.filter((p) => p.title === 'Plompertstraat')[0]?.images ?? [],
		categories: [cats[6]],
		location: '',
		other: [{}]
	},
	{
		title: 'Roza Vastgoed',
		description: 'This is the project named Roza Vastgoed',
		images: pData.filter((p) => p.title === 'Roza Vastgoed')[0]?.images ?? [],
		categories: [cats[3]],
		location: '',
		other: [{}]
	},
	{
		title: 'SKN',
		description: 'This is the project named skn',
		images: pData.filter((p) => p.title === 'SKN')[0]?.images ?? [],
		categories: [cats[1]],
		location: '',
		other: [{}]
	},
	{
		title: 'Srebrenica Kuuroord',
		description: 'This is the project named Srebrenica Kuuroord',
		images: pData.filter((p) => p.title === 'Srebrenica Kuuroord')[0]?.images ?? [],
		categories: [cats[0]],
		location: '',
		other: [{}]
	},
	{
		title: 'Supersnack',
		description: 'This is the project named Supersnack',
		images: pData.filter((p) => p.title === 'Supersnack')[0]?.images ?? [],
		categories: [cats[5]],
		location: '',
		other: [{}]
	},
	{
		title: 'Uitbreiding Woonhuis Te Gorssel',
		description: 'This is the project named Uitbreiding Woonhuis Te Gorssel',
		images: pData.filter((p) => p.title === 'Uitbreiding Woonhuis Te Gorssel')[0]?.images ?? [],
		categories: [cats[6]],
		location: 'Gorssel',
		other: [{}]
	},
	{
		title: "Villa's Lelystad",
		description: "This is the project named 4 Villa's Lelystad",
		images: pData.filter((p) => p.title === "Villa's Lelystad")[0]?.images ?? [],
		categories: [cats[6]],
		location: '',
		other: [{}]
	},
	{
		title: 'Watervilla Lepelaar',
		description: 'This is the project named Lepelaar',
		images: pData.filter((p) => p.title === 'Watervilla Lepelaar')[0]?.images ?? [],
		categories: [cats[7]],
		location: '',
		other: [{}]
	},
	{
		title: 'Winkelcentrum De Boogaard',
		description: 'This is the project named Boogaard',
		images: pData.filter((p) => p.title === 'Winkelcentrum De Boogaard')[0]?.images ?? [],
		categories: [cats[5]],
		location: '',
		other: [{}]
	},
	{
		title: 'Winkelcentrum de Kolk',
		description: 'This is the project named de Kolk',
		images: pData.filter((p) => p.title === 'Winkelcentrum de Kolk')[0]?.images ?? [],
		categories: [cats[5]],
		location: '',
		other: [{}]
	},
	{
		title: 'Winkelcentrum De Nieuwe Passage',
		description: 'This is the project named De Nieuwe Passage',
		images: pData.filter((p) => p.title === 'Winkelcentrum De Nieuwe Passage')[0]?.images ?? [],
		categories: [cats[5]],
		location: '',
		other: [{}]
	},
	{
		title: 'Winkelstraat De Lange Nering',
		description: 'This is the project named De Lange Nering',
		images: pData.filter((p) => p.title === 'Winkelstraat De Lange Nering')[0]?.images ?? [],
		categories: [cats[5]],
		location: '',
		other: [{}]
	},
	{
		title: 'Woonboot',
		description: 'This is the project named Woonboot',
		images: pData.filter((p) => p.title === 'Woonboot')[0]?.images ?? [],
		categories: [cats[6]],
		location: '',
		other: [{}]
	}
];

export const categories: Writable<ProjectCategory[]> = writable<ProjectCategory[]>(cats);
export const projects: Writable<Project[]> = writable<Project[]>(projectData);
export const slideshow: Writable<{ image: string; title?: string; content?: string }[]> =
	writable<{ image: string; title?: string; content?: string }[]>(slides);
