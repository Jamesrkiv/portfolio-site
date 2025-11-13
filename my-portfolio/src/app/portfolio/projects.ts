export type Project = {
	slug: string;
	title: string;
	highlight?: boolean;
	summary: string;
	tags: string[];
	thumbnail: string;
	images?: {src: string, name: string}[];
	repo?: string;
	body: string;
};

export const projects: Project[] = [
	{
		slug: "PharmInfoSite",
		title: "Pharmacy Info Site",
		highlight: true,
		summary: "A responsive internal web application designed to streamline access to pharmacy and contact information.",
		tags: ["React", "Vite", "Tailwind", "Node.js", "Express", "PostgreSQL"],
		thumbnail: "/images/pharm-info-site/pharm_thumbnail.png",
		images: [
			{
				src: "/images/pharm-info-site/main_page.png",
				name: "Main Page"
			},
			{
				src: "/images/pharm-info-site/audit_log.png",
				name: "Audit Log"
			},
			{
				src: "/images/pharm-info-site/new_contact.png",
				name: "New Contact Modal"
			},
			{
				src: "/images/pharm-info-site/mobile_friendly.png",
				name: "Mobile View"
			},
			{
				src: "/images/pharm-info-site/login.png",
				name: "Login Modal"
			},
			{
				src: "/images/pharm-info-site/admin_account.png",
				name: "Admin Account Panel"
			},
		],
		repo: "https://github.com/JamesHHC/Pharm-Info-Site",
		body: "This application is an internal-tool built to serve staff at a home-care organization, consolidating pharmacy and contact data into a unified, accessible platform. The front-end is a responsive single-page application built using React and Vite, styled with Tailwind CSS to ensure clean, mobile-friendly layouts and smooth user experience regardless of device size. On the server side, a Node.js/Express-based REST API handles business logic, data persistence with PostgreSQL, and manages authentication using JSON Web Tokens (JWTs) including refresh-token support and bcrypt for secure password handling.\n\nUnder the hood, the data model supports complex many-to-many relationships between pharmacies and contacts—allowing contacts to be associated with multiple pharmacies and vice-versa with the UI providing real-time searching to surface the right information quickly. Editing is done via modal workflows, with a rich-text editor (Quill) for contact/pharmacy information, and audit-log functionality built in so administrators can track exactly who changed what and when.\n\nThe deployment is production-grade: the front-end is built and served by NGINX on a Windows Server environment; the back-end is managed by PM2 for process resiliency and automatic restart on system reboot; regular PostgreSQL backups are scripted and uploaded automatically to SharePoint. Role-based access control ensures that users only see and edit what they’re permitted to, and built-in admin tools give designated users the ability to manage user roles and view system logs."
	},

	{
		slug: "DJsBot",
		title: "Discord Bot",
		highlight: true,
		summary: "A discord bot created for my friends utilizing Discord.js. Functionality is centered around playing music and other minor utilities.",
		tags: ["Node.js"],
		thumbnail: "/images/placeholder.jpg",
		images: [
			{
				src: "/images/placeholder.jpg",
				name: "Placeholder Image"
			},
		],
		repo: "https://github.com/Jamesrkiv/d.js-bot",
		body: "Project body"
	},

	{
		slug: "TodoList",
		title: "Todo List",
		highlight: true,
		summary: "Project Summary",
		tags: ["Node.js", "Electron"],
		thumbnail: "/images/placeholder.jpg",
		images: [
			{
				src: "/images/placeholder.jpg",
				name: "Placeholder Image"
			},
		],
		repo: "https://github.com/Jamesrkiv/d.js-bot",
		body: "Project body"
	},

	{
		slug: "PortfolioSite",
		title: "Personal Portfolio",
		summary: "Project summary",
		tags: ["Next.js", "React", "Tailwind", "Node.js"],
		thumbnail: "/images/placeholder.jpg",
		images: [
			{
				src: "/images/placeholder.jpg",
				name: "Placeholder Image"
			},
		],
		repo: "https://github.com/Jamesrkiv/portfolio-site",
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