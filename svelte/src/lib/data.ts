import { type Writable, writable } from 'svelte/store';
import type { ProjectCategory, Project } from '$lib/types';

// Data for the project categories
const categoryData: ProjectCategory[] = [
	{
		title: 'Schools',
		content: 'You should put some text about school related projects here.',
		image: '/images/categories/cat1.jpg'
	},
	{
		title: 'Offices',
		content: 'You should put some text about office related projects here.',
		image: '/images/categories/cat2.jpg'
	},
	{
		title: 'Cultural Projects',
		content: 'You should put some text about cultural related projects here. Like churches',
		image: '/images/categories/cat3.jpg'
	},
	{
		title: 'Student Guidance',
		content:
			'I also guided some students in their projects. See how they performed and what they did',
		image: '/images/categories/cat1.png'
	},
	{
		title: 'Local Authority Projects',
		content: 'Check out the projects we did for local authorities',
		image: '/images/categories/cat5.jpg'
	},
	{
		title: 'Other projects',
		content: 'You should put all other projects here',
		image: '/images/categories/cat6.jpg'
	},
	{
		title: 'Unrealized projects',
		content: 'You should put text about unrealized projects here',
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
	{
		image: '/images/projects/Hillen & Roosen/Gevel Hillen & Roosen.jpg',
		title: 'Hillen & Roosen',
		content: 'Hillen & Roosen is a construction company in Amsterdam'
	},
	{ image: '/images/projects/Redstone/restone 02.jpg' },
	{ image: '/images/projects/OBS Zevensprong/zijgevel Zevensprong met gekleurde bovenlichten.jpg' },
	{ image: '/images/projects/Supersnack/gevelaanzicht ontworpen horeca gelegenheid Supersnack uit 2008.jpg' },
	{ image: '/images/projects/Kwartslag/voorgevel.jpg' },
	{
		image: '/images/projects/4 Villa\'s Lelystad/Picture11.png',
		title: '...',
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
export const projectData: Project[] = [
	{
		title: "4 Villa's Lelystad",
		description: "This is the project named 4 Villa's Lelystad",
		images: [
			"/images/projects/4 Villa's Lelystad/Picture1.jpg",
			"/images/projects/4 Villa's Lelystad/Picture10.jpg",
			"/images/projects/4 Villa's Lelystad/Picture11.png",
			"/images/projects/4 Villa's Lelystad/Picture2.jpg",
			"/images/projects/4 Villa's Lelystad/Picture3.jpg",
			"/images/projects/4 Villa's Lelystad/Picture4.jpg",
			"/images/projects/4 Villa's Lelystad/Picture5.jpg",
			"/images/projects/4 Villa's Lelystad/Picture6.jpg",
			"/images/projects/4 Villa's Lelystad/Picture7.jpg",
			"/images/projects/4 Villa's Lelystad/Picture8.jpg",
			"/images/projects/4 Villa's Lelystad/Picture9.jpg"
		],
		categories: [cats[5]],
		location: '',
		other: [{}]
	},
	{
		title: 'Hillen & Roosen',
		description: 'This is the project named Hillen & Roosen',
		images: [
			'/images/projects/Hillen & Roosen/2e verdieping in aanbouw achterzijde met vluchttrap.jpg',
			'/images/projects/Hillen & Roosen/atrium 02.jpg',
			'/images/projects/Hillen & Roosen/atrium.jpg',
			'/images/projects/Hillen & Roosen/balie.jpg',
			'/images/projects/Hillen & Roosen/dakopbouw voortgang.jpg',
			'/images/projects/Hillen & Roosen/dakopbouw.jpg',
			'/images/projects/Hillen & Roosen/dakterras Hoofdkantoor Hillen & Roosen.jpg',
			'/images/projects/Hillen & Roosen/dakvlak.jpg',
			'/images/projects/Hillen & Roosen/deel gevelaanzicht gebouw.jpg',
			'/images/projects/Hillen & Roosen/eettafel in keuken.jpg',
			'/images/projects/Hillen & Roosen/folie op beglazing kantoren.jpg',
			'/images/projects/Hillen & Roosen/foto 03 gevel.jpg',
			'/images/projects/Hillen & Roosen/foto 04 gevel.jpg',
			'/images/projects/Hillen & Roosen/foto atrium vanaf dakvlak.jpg',
			'/images/projects/Hillen & Roosen/foto balie overhoeks.jpg',
			'/images/projects/Hillen & Roosen/foto gangebied.jpg',
			'/images/projects/Hillen & Roosen/foto gangegebied 02.jpg',
			'/images/projects/Hillen & Roosen/foto hal met ontvangsttafel.jpg',
			'/images/projects/Hillen & Roosen/foto trappenhuis.jpg',
			'/images/projects/Hillen & Roosen/foto van entree hal.jpg',
			'/images/projects/Hillen & Roosen/ganggebied 02.jpg',
			'/images/projects/Hillen & Roosen/ganggebied 1e verdieping..jpg',
			'/images/projects/Hillen & Roosen/ganggebied 1e verdieping.jpg',
			'/images/projects/Hillen & Roosen/ganggebied copie.jpg',
			'/images/projects/Hillen & Roosen/ganggebied gebogen wanden.jpg',
			'/images/projects/Hillen & Roosen/ganggebied.jpg',
			'/images/projects/Hillen & Roosen/gebogen gevelmuur plint.jpg',
			'/images/projects/Hillen & Roosen/Gevel Hillen & Roosen.jpg',
			'/images/projects/Hillen & Roosen/gevel.jpg',
			'/images/projects/Hillen & Roosen/gevelaanzicht overhoeks. 02.jpg',
			'/images/projects/Hillen & Roosen/gevelaanzicht overhoeks.jpg',
			'/images/projects/Hillen & Roosen/hal 01.jpg',
			'/images/projects/Hillen & Roosen/hal.jpg',
			'/images/projects/Hillen & Roosen/hoofdentree.jpg',
			'/images/projects/Hillen & Roosen/kantoor naast atrium.jpg',
			'/images/projects/Hillen & Roosen/kantoorruimte Hemubo.jpg',
			'/images/projects/Hillen & Roosen/kopgevel.jpg',
			'/images/projects/Hillen & Roosen/langsgevel.jpg',
			'/images/projects/Hillen & Roosen/logo gevel.jpg',
			'/images/projects/Hillen & Roosen/logo Hillen en Roosen.jpg',
			'/images/projects/Hillen & Roosen/ontvangsttafel in Hal.jpg',
			'/images/projects/Hillen & Roosen/overhoekse opname sluiten gevel 2e verd met terras.jpg',
			'/images/projects/Hillen & Roosen/pui atrium.jpg',
			'/images/projects/Hillen & Roosen/ramen in trappenhuis.jpg',
			'/images/projects/Hillen & Roosen/sluiten gevel 2e verd.jpg',
			'/images/projects/Hillen & Roosen/sluiten zijgevel 2e verdieping.jpg',
			'/images/projects/Hillen & Roosen/trappenhuis.jpg',
			'/images/projects/Hillen & Roosen/velux dakramen 02.jpg',
			'/images/projects/Hillen & Roosen/velux dakramen.jpg',
			'/images/projects/Hillen & Roosen/verbouwing ontwerp 2e verdieping. 01.jpg',
			'/images/projects/Hillen & Roosen/verbouwing ontwerp 2e verdieping. met dakterras .jpg',
			'/images/projects/Hillen & Roosen/verbouwing ontwerp 2e verdieping.02.jpg',
			'/images/projects/Hillen & Roosen/verbouwing ontwerp 2e verdieping.jpg',
			'/images/projects/Hillen & Roosen/vergadergebied met daklichten.jpg',
			'/images/projects/Hillen & Roosen/vergadergebied.jpg',
			'/images/projects/Hillen & Roosen/vergaderruimte Hemubo.jpg',
			'/images/projects/Hillen & Roosen/vluchttrap.jpg',
			'/images/projects/Hillen & Roosen/voorgevel 2e verd sluiten met open terras.jpg',
			'/images/projects/Hillen & Roosen/voortgang sluiten gevel 2e verdoeping.jpg',
			'/images/projects/Hillen & Roosen/zitjes.jpg'
		],
		categories: [cats[1]],
		location: '',
		other: [{}]
	},
	{
		title: 'Kwartslag',
		description: 'This is the project named Kwartslag',
		images: [
			'/images/projects/Kwartslag/achtergevel.jpg',
			'/images/projects/Kwartslag/de kwartslag hoofdentree.jpg',
			'/images/projects/Kwartslag/detail voorgevel.jpg',
			'/images/projects/Kwartslag/entree opslag in zijbeuk.jpg',
			'/images/projects/Kwartslag/hoofdentree 02.jpg',
			'/images/projects/Kwartslag/hoofdentree 03.jpg',
			'/images/projects/Kwartslag/hoofdentree 04.jpg',
			'/images/projects/Kwartslag/hoofdentree 05.jpg',
			'/images/projects/Kwartslag/hoofdentree.jpg',
			'/images/projects/Kwartslag/langsgevel met open stootvoegen.jpg',
			'/images/projects/Kwartslag/langsgevel nr 1.jpg',
			'/images/projects/Kwartslag/langsgevel sportgebouw in Rutte.02.jpg',
			'/images/projects/Kwartslag/langsgevel sportgebouw in Rutte.jpg',
			'/images/projects/Kwartslag/overzicht gebouw met hoge bouwen .jpg',
			'/images/projects/Kwartslag/raampartij voorgevel en metselwerk met open stootvoegen.jpg',
			'/images/projects/Kwartslag/Sportgebaude fur die Gemeinde Noordoostpolder der stadt Rutte.jpg',
			'/images/projects/Kwartslag/voorgevel.jpg',
			'/images/projects/Kwartslag/voorgevel01.jpg',
			'/images/projects/Kwartslag/zijbeuk tbv opslag.jpg'
		],
		categories: [cats[2]],
		location: '',
		other: [{}]
	},
	{
		title: 'OBS Zevensprong',
		description: 'This is the project named OBS Zevensprong',
		images: [
			'/images/projects/OBS Zevensprong/Bordes in grote zaal.jpg',
			'/images/projects/OBS Zevensprong/casko SKN.jpg',
			'/images/projects/OBS Zevensprong/gevelaanzicht  SKN.jpg',
			'/images/projects/OBS Zevensprong/gevelaanzicht.jpg',
			'/images/projects/OBS Zevensprong/hfdentree SKN.jpg',
			'/images/projects/OBS Zevensprong/hoofdentree SKN overhoeks.jpg',
			'/images/projects/OBS Zevensprong/langs en zijaanzicht.jpg',
			'/images/projects/OBS Zevensprong/leslokaal 01.jpg',
			'/images/projects/OBS Zevensprong/leslokaal met stoelopstelling.jpg',
			'/images/projects/OBS Zevensprong/leslokaal.jpg',
			'/images/projects/OBS Zevensprong/logo Jenaplanschool OJS de Zevensprong.jpg',
			'/images/projects/OBS Zevensprong/logo OJS de Zevensprong.jpg',
			'/images/projects/OBS Zevensprong/lokaal OBS Zevensprong.jpg',
			'/images/projects/OBS Zevensprong/naambordjes.jpg',
			'/images/projects/OBS Zevensprong/speellokaal met wandrek.jpg',
			'/images/projects/OBS Zevensprong/speellokaal OBS de Zevensprong 01.jpg',
			'/images/projects/OBS Zevensprong/speellokaal OBS de Zevensprong.jpg',
			'/images/projects/OBS Zevensprong/sportzaal in Gymlokaal de Zeevaarder te Emmeloord.png',
			'/images/projects/OBS Zevensprong/zevensprong.jpg',
			'/images/projects/OBS Zevensprong/zicht op speelplein OBS Zevensprong en SKN na schoolse opvang en kinderopvang.jpg',
			'/images/projects/OBS Zevensprong/zicht van speelplein op achtergevel.jpg',
			'/images/projects/OBS Zevensprong/zijgevel Zevensprong met gekleurde bovenlichten 01.jpg',
			'/images/projects/OBS Zevensprong/zijgevel Zevensprong met gekleurde bovenlichten.jpg'
		],
		categories: [cats[0]],
		location: '',
		other: [{}]
	},
	{
		title: 'Redstone',
		description: 'This is the project named Redstone',
		images: [
			'/images/projects/Redstone/hoofdentree eiken deur.jpg',
			'/images/projects/Redstone/hoofdentree redstone.jpg',
			'/images/projects/Redstone/langsgevel.jpg',
			'/images/projects/Redstone/raamkozijn langsgevel.jpg',
			'/images/projects/Redstone/redstone 01.jpg',
			'/images/projects/Redstone/redstone showroom.jpg',
			'/images/projects/Redstone/restone 02.jpg',
			'/images/projects/Redstone/restone detail 03.jpg'
		],
		categories: [cats[5]],
		location: '',
		other: [{}]
	},
	{
		title: 'School Tollebeek',
		description: 'This is the project named School Tollebeek',
		images: [
			'/images/projects/School Tollebeek/raampartij in gevel.jpg',
			'/images/projects/School Tollebeek/voorgevel 02.jpg',
			'/images/projects/School Tollebeek/voorgevel.jpg'
		],
		categories: [cats[0]],
		location: '',
		other: [{}]
	},
	{
		title: 'skn',
		description: 'This is the project named skn',
		images: [],
		categories: [cats[0]],
		location: '',
		other: [{}]
	},
	{
		title: 'Supersnack',
		description: 'This is the project named Supersnack',
		images: [
			'/images/projects/Supersnack/gevelaanzicht ontworpen horeca gelegenheid Supersnack uit 2008.jpg',
			'/images/projects/Supersnack/Picture1.jpg',
			'/images/projects/Supersnack/Picture2.jpg',
			'/images/projects/Supersnack/Picture3.jpg',
			'/images/projects/Supersnack/Picture4.jpg'
		],
		categories: [cats[4]],
		location: '',
		other: [{}]
	},
	{
		title: 'Zeevaarder',
		description: 'This is the project named Zeevaarder',
		images: [
			'/images/projects/Zeevaarder/achtergevel met zijbeuk.jpg',
			'/images/projects/Zeevaarder/achtergevel.jpg',
			'/images/projects/Zeevaarder/front hoofdentree.jpg',
			'/images/projects/Zeevaarder/hoofdentree met zijbeuk kleedkamers.jpg',
			'/images/projects/Zeevaarder/hoofdentree.jpg',
			'/images/projects/Zeevaarder/overhoeks aanzicht.jpg',
			'/images/projects/Zeevaarder/Sportgebaude fur die Gemeinde Noordoospolder der Hauptstadt Emmeloord.jpg',
			'/images/projects/Zeevaarder/zeevaarder gymlokaal te Emmeloord.png',
			'/images/projects/Zeevaarder/zijgevel achter de bomen 01.jpg',
			'/images/projects/Zeevaarder/zijgevel achter de bomen.jpg',
			'/images/projects/Zeevaarder/zijgevel.jpg',
			'/images/projects/Zeevaarder/zijgevel.nabij hoofdentree.jpg'
		],
		categories: [cats[2]],
		location: '',
		other: [{}]
	}
];

export const categories: Writable<ProjectCategory[]> = writable<ProjectCategory[]>(cats);
export const projects: Writable<Project[]> = writable<Project[]>(projectData);
export const slideshow: Writable<{ image: string; title?: string; content?: string }[]> =
	writable<{ image: string; title?: string; content?: string }[]>(slides);
