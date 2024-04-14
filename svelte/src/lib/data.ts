import { writable } from 'svelte/store';
import type { ProjectCategory } from '$lib/types';

export const categories = writable<ProjectCategory[]>([
	{
		category: 'Schools',
		content: 'You should put some text about school related projects here.',
		image: '/src/lib/images/categories/cat1.png'
	},
	{
		category: 'Offices',
		content: 'You should put some text about office related projects here.',
		image: '/src/lib/images/categories/cat2.png'
	},
	{
		category: 'Cultural Projects',
		content: 'You should put some text about cultural related projects here. Like churches',
		image: '/src/lib/images/categories/cat3.png'
	},
	{
		category: 'Other projects',
		content: 'You should put all other projects here',
		image: '/src/lib/images/categories/cat4.png'
	},
	{
		category: 'Unrealized projects',
		content: 'You should put text about unrealized projects here',
		image: '/src/lib/images/categories/cat2.png'
	}
]);
