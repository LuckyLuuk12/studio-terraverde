import { writable } from 'svelte/store';
import type { ProjectCategory } from '$lib/types';

export const categories = writable<ProjectCategory[]>([
	{
		title: 'Schools',
		content: 'You should put some text about school related projects here.',
		image: '/src/routes/images/categories/cat1.png'
	},
	{
		title: 'Offices',
		content: 'You should put some text about office related projects here.',
		image: '/src/routes/images/categories/cat2.png'
	},
	{
		title: 'Cultural Projects',
		content: 'You should put some text about cultural related projects here. Like churches',
		image: '/src/routes/images/categories/cat3.png'
	},
	{
		title: 'Student Guidance',
		content: 'You should put some text here about student guidance things you did',
		image: '/src/routes/images/categories/cat1.png'
	},
	{
		title: 'Local Authority Projects',
		content: 'You should put some text here about the projects you did for the local authorities',
		image: '/src/routes/images/categories/cat3.png'
	},
	{
		title: 'Other projects',
		content: 'You should put all other projects here',
		image: '/src/routes/images/categories/cat4.png'
	},
	{
		title: 'Unrealized projects',
		content: 'You should put text about unrealized projects here',
		image: '/src/routes/images/categories/cat2.png'
	}
]);
