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
		content: 'I also guided some students in their projects. See how they performed and what they did',
		image: '/images/categories/cat1.png'
	},
	{
		title: 'Local Authority Projects',
		content: 'Check out the projects we did for local authorities',
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
	{
		image: '/images/projects/alkmaar/img0.jpg',
		title: 'Slide 1',
		content: 'This is the first slide'
	},
	{ image: '/images/projects/alkmaar/img1.jpg' },
	{ image: '/images/projects/alkmaar/img2.jpg' },
	{ image: '/images/projects/houtwal/img0.jpg' },
	{ image: '/images/projects/houtwal/img1.jpg' },
	{
		image: '/images/projects/houtwal/img2.jpg',
		title: 'Slide 6',
		content: 'This is the last slide'
	}
];

// Data for the projects
// const projectData: Project[] = [
// 	{
// 		title: 'School 1',
// 		description: 'This is the first project in the category Schools',
// 		images: ['/images/projects/alkmaar/img1.jpg'],
// 		categories: [cats[0]],
// 		location: 'Amsterdam',
// 		other: [{}]
// 	},
// 	{
// 		title: 'School 2',
// 		description: 'This is the second project in the category Schools',
// 		images: ['/images/projects/houtwal/img1.jpg'],
// 		categories: [cats[0]],
// 		location: 'Rotterdam',
// 		other: [{}]
// 	},
// 	{
// 		title: 'Office 1',
// 		description: 'This is the first project in the category Offices',
// 		images: ['/images/projects/alkmaar/img0.jpg'],
// 		categories: [cats[1]],
// 		location: 'Utrecht',
// 		other: [{}]
// 	},
// 	{
// 		title: 'Office 2',
// 		description: 'This is the second project in the category Offices',
// 		images: ['/images/projects/houtwal/img0.jpg'],
// 		categories: [cats[1]],
// 		location: 'Den Haag',
// 		other: [{}]
// 	},
// 	{
// 		title: 'Cultural Project 1',
// 		description: 'This is the first project in the category Cultural Projects',
// 		images: ['/images/projects/alkmaar/img2.jpg'],
// 		categories: [cats[2]],
// 		location: 'Groningen',
// 		other: [{}]
// 	},
// 	{
// 		title: 'Cultural Project 2',
// 		description: 'This is the second project in the category Cultural Projects',
// 		images: ['/images/projects/houtwal/img2.jpg'],
// 		categories: [cats[2]],
// 		location: 'Maastricht',
// 		other: [{}]
// 	},
// 	{
// 		title: 'Student Guidance 1',
// 		description: 'This is the first project in the category Student Guidance',
// 		images: ['/images/projects/alkmaar/img1.jpg'],
// 		categories: [cats[3]],
// 		location: 'Amsterdam',
// 		other: [{}]
// 	},
// 	{
// 		title: 'Student Guidance 2',
// 		description: 'This is the second project in the category Student Guidance',
// 		images: ['/images/projects/houtwal/img1.jpg'],
// 		categories: [cats[3]],
// 		location: 'Rotterdam',
// 		other: [{}]
// 	},
// 	{
// 		title: 'Local Authority Project 1',
// 		description: 'This is the first project in the category Local Authority Projects',
// 		images: ['/images/projects/alkmaar/img0.jpg'],
// 		categories: [cats[4]],
// 		location: 'Utrecht',
// 		other: [{}]
// 	}
// ];
const projectData: Project[] = [
	{
		title: "4 Villa's Lelystad",
		description: "This is the project named 4 Villa's Lelystad",
		images: [
			"projects/4 Villa's Lelystad/Picture1.jpg",
			"projects/4 Villa's Lelystad/Picture10.jpg",
			"projects/4 Villa's Lelystad/Picture11.png",
			"projects/4 Villa's Lelystad/Picture2.jpg",
			"projects/4 Villa's Lelystad/Picture3.jpg",
			"projects/4 Villa's Lelystad/Picture4.jpg",
			"projects/4 Villa's Lelystad/Picture5.jpg",
			"projects/4 Villa's Lelystad/Picture6.jpg",
			"projects/4 Villa's Lelystad/Picture7.jpg",
			"projects/4 Villa's Lelystad/Picture8.jpg",
			"projects/4 Villa's Lelystad/Picture9.jpg"
		],
		categories: [],
		location: '',
		other: [{}]
	},
	{
		title: 'Hillen & Roosen',
		description: 'This is the project named Hillen & Roosen',
		images: [
			'projects/Hillen & Roosen/2e verdieping in aanbouw achterzijde met vluchttrap.jpg',
			'projects/Hillen & Roosen/atrium 02.jpg',
			'projects/Hillen & Roosen/atrium.jpg',
			'projects/Hillen & Roosen/balie.jpg',
			'projects/Hillen & Roosen/dakopbouw voortgang.jpg',
			'projects/Hillen & Roosen/dakopbouw.jpg',
			'projects/Hillen & Roosen/dakterras Hoofdkantoor Hillen & Roosen.jpg',
			'projects/Hillen & Roosen/dakvlak.jpg',
			'projects/Hillen & Roosen/deel gevelaanzicht gebouw.jpg',
			'projects/Hillen & Roosen/eettafel in keuken.jpg',
			'projects/Hillen & Roosen/folie op beglazing kantoren.jpg',
			'projects/Hillen & Roosen/foto 03 gevel.jpg',
			'projects/Hillen & Roosen/foto 04 gevel.jpg',
			'projects/Hillen & Roosen/foto atrium vanaf dakvlak.jpg',
			'projects/Hillen & Roosen/foto balie overhoeks.jpg',
			'projects/Hillen & Roosen/foto gangebied.jpg',
			'projects/Hillen & Roosen/foto gangegebied 02.jpg',
			'projects/Hillen & Roosen/foto hal met ontvangsttafel.jpg',
			'projects/Hillen & Roosen/foto trappenhuis.jpg',
			'projects/Hillen & Roosen/foto van entree hal.jpg',
			'projects/Hillen & Roosen/ganggebied 02.jpg',
			'projects/Hillen & Roosen/ganggebied 1e verdieping..jpg',
			'projects/Hillen & Roosen/ganggebied 1e verdieping.jpg',
			'projects/Hillen & Roosen/ganggebied copie.jpg',
			'projects/Hillen & Roosen/ganggebied gebogen wanden.jpg',
			'projects/Hillen & Roosen/ganggebied.jpg',
			'projects/Hillen & Roosen/gebogen gevelmuur plint.jpg',
			'projects/Hillen & Roosen/Gevel Hillen & Roosen.jpg',
			'projects/Hillen & Roosen/gevel.jpg',
			'projects/Hillen & Roosen/gevelaanzicht overhoeks. 02.jpg',
			'projects/Hillen & Roosen/gevelaanzicht overhoeks.jpg',
			'projects/Hillen & Roosen/hal 01.jpg',
			'projects/Hillen & Roosen/hal.jpg',
			'projects/Hillen & Roosen/hoofdentree.jpg',
			'projects/Hillen & Roosen/kantoor naast atrium.jpg',
			'projects/Hillen & Roosen/kantoorruimte Hemubo.jpg',
			'projects/Hillen & Roosen/kopgevel.jpg',
			'projects/Hillen & Roosen/langsgevel.jpg',
			'projects/Hillen & Roosen/logo gevel.jpg',
			'projects/Hillen & Roosen/logo Hillen en Roosen.jpg',
			'projects/Hillen & Roosen/ontvangsttafel in Hal.jpg',
			'projects/Hillen & Roosen/overhoekse opname sluiten gevel 2e verd met terras.jpg',
			'projects/Hillen & Roosen/pui atrium.jpg',
			'projects/Hillen & Roosen/ramen in trappenhuis.jpg',
			'projects/Hillen & Roosen/sluiten gevel 2e verd.jpg',
			'projects/Hillen & Roosen/sluiten zijgevel 2e verdieping.jpg',
			'projects/Hillen & Roosen/trappenhuis.jpg',
			'projects/Hillen & Roosen/velux dakramen 02.jpg',
			'projects/Hillen & Roosen/velux dakramen.jpg',
			'projects/Hillen & Roosen/verbouwing ontwerp 2e verdieping. 01.jpg',
			'projects/Hillen & Roosen/verbouwing ontwerp 2e verdieping. met dakterras .jpg',
			'projects/Hillen & Roosen/verbouwing ontwerp 2e verdieping.02.jpg',
			'projects/Hillen & Roosen/verbouwing ontwerp 2e verdieping.jpg',
			'projects/Hillen & Roosen/vergadergebied met daklichten.jpg',
			'projects/Hillen & Roosen/vergadergebied.jpg',
			'projects/Hillen & Roosen/vergaderruimte Hemubo.jpg',
			'projects/Hillen & Roosen/vluchttrap.jpg',
			'projects/Hillen & Roosen/voorgevel 2e verd sluiten met open terras.jpg',
			'projects/Hillen & Roosen/voortgang sluiten gevel 2e verdoeping.jpg',
			'projects/Hillen & Roosen/zitjes.jpg'
		],
		categories: [],
		location: 'Amsterdam',
		other: [{}]
	},
	{
		title: 'Kwartslag',
		description: 'This is the project named Kwartslag',
		images: [
			'projects/Kwartslag/achtergevel.jpg',
			'projects/Kwartslag/de kwartslag hoofdentree.jpg',
			'projects/Kwartslag/detail voorgevel.jpg',
			'projects/Kwartslag/entree opslag in zijbeuk.jpg',
			'projects/Kwartslag/hoofdentree 02.jpg',
			'projects/Kwartslag/hoofdentree 03.jpg',
			'projects/Kwartslag/hoofdentree 04.jpg',
			'projects/Kwartslag/hoofdentree 05.jpg',
			'projects/Kwartslag/hoofdentree.jpg',
			'projects/Kwartslag/langsgevel met open stootvoegen.jpg',
			'projects/Kwartslag/langsgevel nr 1.jpg',
			'projects/Kwartslag/langsgevel sportgebouw in Rutte.02.jpg',
			'projects/Kwartslag/langsgevel sportgebouw in Rutte.jpg',
			'projects/Kwartslag/overzicht gebouw met hoge bouwen .jpg',
			'projects/Kwartslag/raampartij voorgevel en metselwerk met open stootvoegen.jpg',
			'projects/Kwartslag/Sportgebaude fur die Gemeinde Noordoostpolder der stadt Rutte.jpg',
			'projects/Kwartslag/voorgevel.jpg',
			'projects/Kwartslag/voorgevel01.jpg',
			'projects/Kwartslag/zijbeuk tbv opslag.jpg'
		],
		categories: [],
		location: '',
		other: [{}]
	},
	{
		title: 'OBS Zevensprong',
		description: 'This is the project named OBS Zevensprong',
		images: [
			'projects/OBS Zevensprong/Bordes in grote zaal.jpg',
			'projects/OBS Zevensprong/casko SKN.jpg',
			'projects/OBS Zevensprong/gevelaanzicht  SKN.jpg',
			'projects/OBS Zevensprong/gevelaanzicht.jpg',
			'projects/OBS Zevensprong/hfdentree SKN.jpg',
			'projects/OBS Zevensprong/hoofdentree SKN overhoeks.jpg',
			'projects/OBS Zevensprong/langs en zijaanzicht.jpg',
			'projects/OBS Zevensprong/leslokaal 01.jpg',
			'projects/OBS Zevensprong/leslokaal met stoelopstelling.jpg',
			'projects/OBS Zevensprong/leslokaal.jpg',
			'projects/OBS Zevensprong/logo Jenaplanschool OJS de Zevensprong.jpg',
			'projects/OBS Zevensprong/logo OJS de Zevensprong.jpg',
			'projects/OBS Zevensprong/lokaal OBS Zevensprong.jpg',
			'projects/OBS Zevensprong/naambordjes.jpg',
			'projects/OBS Zevensprong/speellokaal met wandrek.jpg',
			'projects/OBS Zevensprong/speellokaal OBS de Zevensprong 01.jpg',
			'projects/OBS Zevensprong/speellokaal OBS de Zevensprong.jpg',
			'projects/OBS Zevensprong/sportzaal in Gymlokaal de Zeevaarder te Emmeloord.png',
			'projects/OBS Zevensprong/zevensprong.jpg',
			'projects/OBS Zevensprong/zicht op speelplein OBS Zevensprong en SKN na schoolse opvang en kinderopvang.jpg',
			'projects/OBS Zevensprong/zicht van speelplein op achtergevel.jpg',
			'projects/OBS Zevensprong/zijgevel Zevensprong met gekleurde bovenlichten 01.jpg',
			'projects/OBS Zevensprong/zijgevel Zevensprong met gekleurde bovenlichten.jpg'
		],
		categories: [],
		location: '',
		other: [{}]
	},
	{
		title: 'Redstone',
		description: 'This is the project named Redstone',
		images: [
			'projects/Redstone/hoofdentree eiken deur.jpg',
			'projects/Redstone/hoofdentree redstone.jpg',
			'projects/Redstone/langsgevel.jpg',
			'projects/Redstone/raamkozijn langsgevel.jpg',
			'projects/Redstone/redstone 01.jpg',
			'projects/Redstone/redstone showroom.jpg',
			'projects/Redstone/restone 02.jpg',
			'projects/Redstone/restone detail 03.jpg'
		],
		categories: [],
		location: '',
		other: [{}]
	},
	{
		title: 'School Tollebeek',
		description: 'This is the project named School Tollebeek',
		images: [
			'projects/School Tollebeek/raampartij in gevel.jpg',
			'projects/School Tollebeek/voorgevel 02.jpg',
			'projects/School Tollebeek/voorgevel.jpg'
		],
		categories: [],
		location: '',
		other: [{}]
	},
	{
		title: 'skn',
		description: 'This is the project named skn',
		images: [],
		categories: [],
		location: '',
		other: [{}]
	},
	{
		title: 'Supersnack',
		description: 'This is the project named Supersnack',
		images: [
			'projects/Supersnack/gevelaanzicht ontworpen horeca gelegenheid Supersnack uit 2008.jpg',
			'projects/Supersnack/Picture1.jpg',
			'projects/Supersnack/Picture2.jpg',
			'projects/Supersnack/Picture3.jpg',
			'projects/Supersnack/Picture4.jpg'
		],
		categories: [],
		location: '',
		other: [{}]
	},
	{
		title: 'Zeevaarder',
		description: 'This is the project named Zeevaarder',
		images: [
			'projects/Zeevaarder/achtergevel met zijbeuk.jpg',
			'projects/Zeevaarder/achtergevel.jpg',
			'projects/Zeevaarder/front hoofdentree.jpg',
			'projects/Zeevaarder/hoofdentree met zijbeuk kleedkamers.jpg',
			'projects/Zeevaarder/hoofdentree.jpg',
			'projects/Zeevaarder/overhoeks aanzicht.jpg',
			'projects/Zeevaarder/Sportgebaude fur die Gemeinde Noordoospolder der Hauptstadt Emmeloord.jpg',
			'projects/Zeevaarder/zeevaarder gymlokaal te Emmeloord.png',
			'projects/Zeevaarder/zijgevel achter de bomen 01.jpg',
			'projects/Zeevaarder/zijgevel achter de bomen.jpg',
			'projects/Zeevaarder/zijgevel.jpg',
			'projects/Zeevaarder/zijgevel.nabij hoofdentree.jpg'
		],
		categories: [],
		location: '',
		other: [{}]
	}
];


export const categories: Writable<ProjectCategory[]> = writable<ProjectCategory[]>(cats);
export const projects: Writable<Project[]> = writable<Project[]>(projectData);
export const slideshow: Writable<{ image: string; title?: string; content?: string }[]> =
	writable<{ image: string; title?: string; content?: string }[]>(slides);
