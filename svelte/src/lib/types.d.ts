/**
 * This type represents a Project Category. It uses the image for the Card component.
 */
export interface ProjectCategory {
	category: string;
	content: string;
	image: File | string;
}

/**
 * This type represents a project. It uses the images for the SlideShow component.
 */
export interface Project {
	title: string;
	description: string;
	images: (File | string)[];
	categories: ProjectCategory[];
	location: string;
	other: [{}];
}
