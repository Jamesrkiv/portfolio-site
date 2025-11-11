export type Project = {
	slug: string;
	title: string;
	highlight?: boolean;
	summary: string;
	tags: string[];
	thumbnail: string;
	images?: string[];
	repo?: string;
	body: string;
};

export const projects: Project[] = [
	{
		slug: "PharmInfoSite",
		title: "Pharmacy Info Site",
		highlight: true,
		summary: "A responsive internal web application designed to streamline access to pharmacy and contact information. Built with React, Node.js, and PostgreSQL, the app features a minimalist UI paired with robust backend logic, authentication, and dynamic data relationships.",
		tags: ["React", "Vite", "Tailwind", "Node.js", "Express", "PostgreSQL"],
		thumbnail: "/images/pharm-info-site/pharm-thumbnail.png",
		images: [
			"/images/pharm-info-site/main_page.png",
			"/images/pharm-info-site/audit_log.png",
			"/images/pharm-info-site/new_contact.png",
			"/images/pharm-info-site/mobile_friendly.png",
			"/images/pharm-info-site/login.png",
		],
		repo: "https://github.com/JamesHHC/Pharm-Info-Site",
		body: "A responsive internal web application designed to streamline access to pharmacy and contact information. Built with React, Node.js, and PostgreSQL, the app features a minimalist UI paired with robust backend logic, authentication, and dynamic data relationships.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus metus sit amet malesuada mollis. Nunc accumsan dolor a nibh vulputate, sed consectetur tellus suscipit. Donec a dolor elementum, pretium felis in, accumsan augue. Etiam lobortis convallis purus, laoreet dignissim dolor pretium id. Nam consequat nibh nec dictum lacinia. Sed sed risus dolor. Donec sit amet nibh et diam facilisis accumsan quis quis nisl. Praesent tempor tortor quis convallis consectetur. Duis vulputate est ut maximus egestas. Nulla eu enim aliquet, tristique nibh id, accumsan quam. Nunc libero erat, lacinia eu turpis eget, lacinia blandit ipsum. Donec sed egestas neque, ac pellentesque urna. Pellentesque ultrices auctor vulputate. Mauris rutrum, mauris nec porta iaculis, ipsum diam imperdiet arcu, quis luctus sem lectus quis lorem. Phasellus ut accumsan neque. Nulla id eros sit amet orci porta imperdiet."
	},
	{
		slug: "Placeholder1",
		title: "Placeholder Site One",
		highlight: true,
		summary: "Summary",
		tags: [],
		thumbnail: "/images/placeholder.jpg",
		body: "Project body"
	},
	{
		slug: "Placeholder2",
		title: "Placeholder Site Two",
		summary: "Summary",
		tags: [],
		thumbnail: "/images/placeholder.jpg",
		body: "Project body"
	},
];

export function getProject(slug: string) {
	return projects.find(p => p.slug === slug) ?? null;
}

export function getHighlights() {
	return projects.filter(p => p.highlight === true) ?? null;
}

export function getAllProjects() {
	return projects;
}