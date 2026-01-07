export type Project = {
	slug: string;
	title: string;
	highlight?: boolean;
	summary: string;
	tags: string[];
	thumbnail?: string;
	cover?: string;
	images?: {src: string, name: string, desc: string}[];
	repo?: string;
	body: string;
};

export const projects: Project[] = [
	{
		slug: "PharmInfoSite",
		title: "Pharmacy Info Site",
		highlight: true,
		summary: "A responsive internal web application designed to streamline access to pharmacy and contact information.",
		tags: ["React", "Vite", "Tailwind", "Node.js", "Express", "PostgreSQL", "JavaScript", "HTML", "CSS"],
		thumbnail: "/images/pharm-info-site/pharm_thumbnail.png",
		cover: "/images/pharm-info-site/main_page.png",
		images: [
			{
				src: "/images/pharm-info-site/main_page.png",
				name: "Main Page",
				desc: "The main page of the site. Shows the contact on the left and specific contact info on the right."
			},
			{
				src: "/images/pharm-info-site/audit_log.png",
				name: "Audit Log",
				desc: "Displays detailed information on any changes, deletions, etc. made within the site."
			},
			{
				src: "/images/pharm-info-site/new_contact.png",
				name: "New Contact Form",
				desc: "The form used for creating new contacts. Fields are made available based on the user's access level."
			},
			{
				src: "/images/pharm-info-site/mobile_friendly.png",
				name: "Mobile View",
				desc: "The site was designed with mobile devices in mind. The UI scales to fit smaller screen sizes."
			},
			{
				src: "/images/pharm-info-site/login.png",
				name: "Login Panel",
				desc: "User accounts regulate access to certain site features and ensure traceability in the audit log."
			},
			{
				src: "/images/pharm-info-site/admin_account.png",
				name: "Account Panel (Admin)",
				desc: "Users are able to view their role as well as access admin tools if they have the applicable role(s)."
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
		tags: ["Node.js", "JavaScript"],
		thumbnail: "/images/djs-bot/djs_thumbnail.png",
		cover: "/images/djs-bot/bot_invite.png",
		images: [
			{
				src: "/images/djs-bot/bot_invite.png",
				name: "Bot Invite Page",
				desc: "Placeholder"
			},
			{
				src: "/images/djs-bot/music_commands.png",
				name: "Music Commands",
				desc: "Placeholder"
			},
			{
				src: "/images/djs-bot/help_options.png",
				name: "Help Options",
				desc: "Placeholder"
			},
			{
				src: "/images/djs-bot/music_queue.png",
				name: "Music Queue",
				desc: "Placeholder"
			},
			{
				src: "/images/djs-bot/music_ui.png",
				name: "Music UI",
				desc: "Placeholder"
			},
			{
				src: "/images/djs-bot/avatar.png",
				name: "Avatar Command",
				desc: "Placeholder"
			},
		],
		repo: "https://github.com/Jamesrkiv/d.js-bot",
		body: "A Node.js Discord bot built using Discord.js that supports music playback in voice channels along with a small set of utility commands. The bot handles audio streaming, voice state management, and asynchronous command processing while interacting with Discord’s gateway and REST APIs.\n\nThis project focuses on writing clean, modular JavaScript for an event-driven environment, managing external dependencies, and handling edge cases such as connection failures and invalid user input."
	},

	{
		slug: "TodoList",
		title: "To-Do List",
		summary: "A simple, lightweight to-do list app for tracking tasks in Microsoft Windows.",
		tags: ["Node.js", "Electron", "JavaScript", "HTML", "CSS"],
		cover: "/images/todo-list/darkmode.png",
		images: [
			{
				src: "/images/todo-list/darkmode.png",
				name: "To-Do List Application (Darkmode)",
				desc: "Placeholder"
			},
			{
				src: "/images/todo-list/lightmode.png",
				name: "To-Do List Application (Lightmode)",
				desc: "Placeholder"
			},
			{
				src: "/images/todo-list/new_item.png",
				name: "New Item Panel",
				desc: "Placeholder"
			},
			{
				src: "/images/todo-list/rescaling.png",
				name: "Scaling Design",
				desc: "Placeholder"
			},
			{
				src: "/images/todo-list/sort_methods.png",
				name: "Quick Sorting",
				desc: "Placeholder"
			},
		],
		repo: "https://github.com/Jamesrkiv/TodoList",
		body: "Project body placeholder"
	},

	{
		slug: "architecture",
		title: "My Portfolio Site",
		summary: "A portfolio for my projects, both personal and professional.",
		tags: ["Next.js", "React", "Tailwind", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS"],
		repo: "https://github.com/Jamesrkiv/portfolio-site",
		body: "This website serves as a central place to showcase my personal and professional projects, providing context around what each project does, how it was built, and the problems it was intended to solve. Rather than using a prebuilt theme or static site template, the portfolio was designed and implemented as a custom web application using Next.js and React, with Tailwind CSS used for styling and responsive layout.\n\nThe site is organized to make browsing projects straightforward while remaining easy to extend as new work is added. Individual project pages highlight the tools and technologies involved and include links to source code or related resources where applicable. This portfolio will continue to evolve as new projects are added and existing ones are refined.\n\nNext.js is used to handle routing, page composition, and rendering, allowing the site to scale cleanly as content grows. The overall design prioritizes clarity and usability across screen sizes, with consistent navigation and visual structure throughout."
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