import { writable } from 'svelte/store';
import type { ProjectCategory, Project } from '$lib/types';

export const categories = writable<ProjectCategory[]>([
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
]);

// export const projects = writable<Project[]>([
// 	{
// 		title: 'Project 1',
// 		description: 'This is the first project
// 	}
// ]);
