import { type Writable, writable } from 'svelte/store';
import type { ProjectCategory, Project } from '$lib/types';

// Data for the project categories
const categoryData: ProjectCategory[] = [
	{
		title: 'Schools',
		content: 'You should put some text about school related projects here.',
		image: '/images/categories/cat1.png'
	},
	{
		title: 'Offices',
		content: 'You should put some text about office related projects here.',
		image: '/images/categories/cat2.png'
	},
	{
		title: 'Cultural Projects',
		content: 'You should put some text about cultural related projects here. Like churches',
		image: '/images/categories/cat3.png'
	},
	{
		title: 'Student Guidance',
		content: 'You should put some text here about student guidance things you did',
		image: '/images/categories/cat1.png'
	},
	{
		title: 'Local Authority Projects',
		content: 'You should put some text here about the projects you did for the local authorities',
		image: '/images/categories/cat3.png'
	},
	{
		title: 'Other projects',
		content: 'You should put all other projects here',
		image: '/images/categories/cat4.png'
	},
	{
		title: 'Unrealized projects',
		content: 'You should put text about unrealized projects here',
		image: '/images/categories/cat2.png'
	}
];
// set the href for each category to the work page with the category as a query parameter
const cats: ProjectCategory[] = categoryData.map((cat) => {
	return {
		title: cat.title,
		content: cat.content,
		href: cat.href ? cat.href : `/work?c=${cat.title}`,
		image: cat.image
	};
});
// Data for the projects
const projectData: Project[] = [
	{
		title: 'School 1',
		description: 'This is the first project in the category Schools',
		images: ['/images/projects/alkmaar/img1.jpg'],
		categories: [cats[0]],
		location: 'Amsterdam',
		other: [{}]
	},
	{
		title: 'School 2',
		description: 'This is the second project in the category Schools',
		images: ['/images/projects/houtwal/img1.jpg'],
		categories: [cats[0]],
		location: 'Rotterdam',
		other: [{}]
	},
	{
		title: 'Office 1',
		description: 'This is the first project in the category Offices',
		images: ['/images/projects/alkmaar/img0.jpg'],
		categories: [cats[1]],
		location: 'Utrecht',
		other: [{}]
	},
	{
		title: 'Office 2',
		description: 'This is the second project in the category Offices',
		images: ['/images/projects/houtwal/img0.jpg'],
		categories: [cats[1]],
		location: 'Den Haag',
		other: [{}]
	},
	{
		title: 'Cultural Project 1',
		description: 'This is the first project in the category Cultural Projects',
		images: ['/images/projects/alkmaar/img2.jpg'],
		categories: [cats[2]],
		location: 'Groningen',
		other: [{}]
	},
	{
		title: 'Cultural Project 2',
		description: 'This is the second project in the category Cultural Projects',
		images: ['/images/projects/houtwal/img2.jpg'],
		categories: [cats[2]],
		location: 'Maastricht',
		other: [{}]
	},
	{
		title: 'Student Guidance 1',
		description: 'This is the first project in the category Student Guidance',
		images: ['/images/projects/alkmaar/img1.jpg'],
		categories: [cats[3]],
		location: 'Amsterdam',
		other: [{}]
	},
	{
		title: 'Student Guidance 2',
		description: 'This is the second project in the category Student Guidance',
		images: ['/images/projects/houtwal/img1.jpg'],
		categories: [cats[3]],
		location: 'Rotterdam',
		other: [{}]
	},
	{
		title: 'Local Authority Project 1',
		description: 'This is the first project in the category Local Authority Projects',
		images: ['/images/projects/alkmaar/img0.jpg'],
		categories: [cats[4]],
		location: 'Utrecht',
		other: [{}]
	}
];

export const categories: Writable<ProjectCategory[]> = writable<ProjectCategory[]>(cats);
export const projects: Writable<Project[]> = writable<Project[]>(projectData);
export const slideshow: Writable<string[]> = writable<string[]>([
	'/images/projects/alkmaar/img0.jpg',
	'/images/projects/alkmaar/img1.jpg',
	'/images/projects/alkmaar/img2.jpg',
	'/images/projects/houtwal/img0.jpg',
	'/images/projects/houtwal/img1.jpg',
	'/images/projects/houtwal/img2.jpg'
]);
