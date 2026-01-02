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
				name: "New Contact Form"
			},
			{
				src: "/images/pharm-info-site/mobile_friendly.png",
				name: "Mobile View"
			},
			{
				src: "/images/pharm-info-site/login.png",
				name: "Login Panel"
			},
			{
				src: "/images/pharm-info-site/admin_account.png",
				name: "Account Panel (Admin)"
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
		thumbnail: "/images/djs-bot/djs_thumbnail.png",
		images: [
			{
				src: "/images/djs-bot/bot_invite.png",
				name: "Bot Invite Page"
			},
			{
				src: "/images/djs-bot/music_commands.png",
				name: "Music Commands"
			},
			{
				src: "/images/djs-bot/help_options.png",
				name: "Help Options"
			},
			{
				src: "/images/djs-bot/music_queue.png",
				name: "Music Queue"
			},
			{
				src: "/images/djs-bot/music_ui.png",
				name: "Music UI"
			},
			{
				src: "/images/djs-bot/avatar.png",
				name: "Avatar Command"
			},
		],
		repo: "https://github.com/Jamesrkiv/d.js-bot",
		body: "A Node.js Discord bot built using Discord.js that supports music playback in voice channels along with a small set of utility commands. The bot handles audio streaming, voice state management, and asynchronous command processing while interacting with Discord’s gateway and REST APIs.\n\nThis project focuses on writing clean, modular JavaScript for an event-driven environment, managing external dependencies, and handling edge cases such as connection failures and invalid user input."
	},

	{
		slug: "TodoList",
		title: "To-Do List",
		highlight: true,
		summary: "A simple, lightweight to-do list app for tracking tasks in Microsoft Windows.",
		tags: ["Node.js", "Electron"],
		thumbnail: "/images/placeholder.jpg",
		images: [
			{
				src: "/images/todo-list/darkmode.png",
				name: "To-Do List Application (Darkmode)"
			},
			{
				src: "/images/todo-list/lightmode.png",
				name: "To-Do List Application (Lightmode)"
			},
			{
				src: "/images/todo-list/new_item.png",
				name: "New Item Panel"
			},
			{
				src: "/images/todo-list/rescaling.png",
				name: "Scaling Design"
			},
			{
				src: "/images/todo-list/sort_methods.png",
				name: "Quick Sorting"
			},
		],
		repo: "https://github.com/Jamesrkiv/TodoList",
		body: "Project body placeholder"
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