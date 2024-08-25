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
	{ image: '/images/projects/Redstone/restone 02.jpg' },
	{ image: '/images/projects/OBS Zevensprong/zijgevel Zevensprong met gekleurde bovenlichten.jpg' },
	{
		image:
			'/images/projects/Supersnack/gevelaanzicht ontworpen horeca gelegenheid Supersnack uit 2008.jpg'
	},
	{ image: '/images/projects/Kwartslag/voorgevel.jpg' },
	{ image: "/images/projects/4 Villa's Lelystad/Picture11.png" }
];

export const projectData: Project[] = [
	{
		title: "Villa's Lelystad",
		description: "This is the project named 4 Villa's Lelystad",
		images: pData.filter((p) => p.title === "Villa's Lelystad")[0]?.images ?? [],
		categories: [cats[6]],
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
		title: 'De Kwartslag',
		description: 'This is the project named Kwartslag',
		images: pData.filter((p) => p.title === 'De Kwartslag')[0]?.images ?? [],
		categories: [cats[3]],
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
		title: 'Hoofdkantoor Redstone',
		description: 'This is the project named Redstone',
		images: pData.filter((p) => p.title === 'Hoofdkantoor Redstone')[0]?.images ?? [],
		categories: [cats[6]],
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
		title: 'Supersnack',
		description: 'This is the project named Supersnack',
		images: pData.filter((p) => p.title === 'Supersnack')[0]?.images ?? [],
		categories: [cats[5]],
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
	}
];

export const categories: Writable<ProjectCategory[]> = writable<ProjectCategory[]>(cats);
export const projects: Writable<Project[]> = writable<Project[]>(projectData);
export const slideshow: Writable<{ image: string; title?: string; content?: string }[]> =
	writable<{ image: string; title?: string; content?: string }[]>(slides);
