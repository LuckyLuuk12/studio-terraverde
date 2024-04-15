import { writable } from 'svelte/store';
import type { ProjectCategory, Project } from '$lib/types';


const data: ProjectCategory[] = [
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
]
const cats = data.map((cat) => {
	return {
		title: cat.title,
		content: cat.content,
		href: cat.href ? cat.href : `/work?c=${cat.title}`,
		image: cat.image
	};
});
export const categories = writable<ProjectCategory[]>(cats);
export const projects = writable<Project[]>([
	{
		title: 'Project 1',
		description: 'This is the first project',
		images: ['/images/projects/project1.jpg'],
		categories: [cats[0]],
		location: 'Amsterdam',
		other: [{}]
	}
]);
export const slideshow = writable<string[]>([
	'/images/projects/alkmaar/img0.jpg',
	'/images/projects/alkmaar/img1.jpg',
	'/images/projects/alkmaar/img2.jpg',
	'/images/projects/houtwal/img0.jpg',
	'/images/projects/houtwal/img1.jpg',
	'/images/projects/houtwal/img2.jpg',
]);
