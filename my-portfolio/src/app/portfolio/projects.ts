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

export type TagCount = {
	tag: string;
	count: number;
}

export const projects: Project[] = [
	{
		slug: "architecture",
		title: "My Portfolio Site",
		summary: "A portfolio for my projects, both personal and professional.",
		tags: ["Next.js", "React", "Tailwind", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS"],
		repo: "https://github.com/Jamesrkiv/portfolio-site",
		body: "## Overview\n\nThis website serves as a central place to showcase my personal and professional projects, providing context around what each project does, how it was built, and the problems it was intended to solve. Rather than using a prebuilt theme or static site template, the portfolio was designed and implemented as a custom web application using Next.js and React, with Tailwind CSS used for styling and responsive layout.\n\n---\n\n## Structure & Organization\n\nThe site is organized to make browsing projects straightforward while remaining easy to extend as new work is added. Individual project pages highlight the tools and technologies involved and include links to source code or related resources where applicable. The portfolio is designed to evolve over time as projects are added and refined.\n\n---\n\n## Architecture\n\nNext.js handles routing, page composition, and rendering, allowing the site to scale cleanly as content grows. React components are used to create reusable UI patterns, while Tailwind CSS provides consistent styling across screen sizes. The overall design prioritizes clarity, usability, and visual consistency throughout the site."
	},

	{
		slug: "PharmInfoSite",
		title: "Pharmacy Info Site",
		highlight: true,
		summary: "A responsive internal web application designed to streamline access to pharmacy and contact information.",
		tags: ["Express", "React", "PostgreSQL", "Vite", "Tailwind", "Node.js", "JavaScript", "HTML", "CSS"],
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
		body: "## Overview\n\nThis application is an internal tool designed to support staff at a specialty-infusion organization by consolidating pharmacy and contact data into a single, reliable system. Rather than relying on scattered spreadsheets or ad hoc communication, the platform centralizes information into a unified interface built for clarity and speed.\n\nThe front-end is a responsive single-page application developed with React and Vite, styled using Tailwind CSS to ensure clean layouts and consistent usability across devices.\n\n---\n\n## Architecture\n\nThe back-end is powered by a Node.js and Express REST API responsible for business logic, data validation, and persistence. PostgreSQL handles structured relational data, while authentication is managed using JSON Web Tokens (JWTs) with refresh-token support. Passwords are securely hashed using bcrypt.\n\nThis separation between client and server ensures maintainability, scalability, and a clear boundary between presentation and core logic.\n\n---\n\n## Data Model & User Experience\n\nThe data layer supports complex many-to-many relationships between pharmacies and contacts, allowing a single contact to be associated with multiple pharmacies and vice versa. The interface includes real-time search to quickly surface relevant records.\n\nEditing workflows are handled through modals to maintain context, and a rich-text editor (Quill) enables structured content entry for pharmacy and contact details. An integrated audit log records who made changes."
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
		body: "## Overview\n\nThis project is a Node.js Discord bot built with Discord.js that provides music playback in voice channels along with a small set of utility commands. The bot handles audio streaming, voice state management, and asynchronous command execution while interacting directly with Discord’s gateway and REST APIs.\n\n---\n\n## Architecture\n\nThe bot operates in an event-driven environment, responding to user commands and voice state changes in real time. Command handling is modularized to keep responsibilities clearly separated, making the codebase easier to extend and maintain. External dependencies are managed carefully to support audio streaming and interaction with Discord’s API ecosystem.\n\n---\n\n## Reliability & Edge Case Handling\n\nSpecial attention is given to connection lifecycle management, including handling voice connection failures, reconnection scenarios, and invalid user input. The project emphasizes clean, modular JavaScript design and defensive programming practices to ensure stable behavior in unpredictable, real-world usage."

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
		body: "## Overview\n\nThis project is a simple desktop to-do list application built with Electron. The primary goal was to learn how Electron packages web technologies into a cross-platform desktop app and to better understand the workflow of building and distributing a local application.\n\n---\n\n## Architecture\n\nThe application uses Electron to bridge a lightweight front-end interface with Node.js under the hood. It runs as a desktop application while leveraging familiar web technologies for the UI layer. The structure is intentionally straightforward to focus on understanding Electron’s main and renderer processes, application lifecycle, and IPC patterns.\n\n---\n\n## Purpose & Takeaways\n\nRather than aiming for feature complexity, the project focuses on exploring how desktop applications are structured in Electron, how state is managed locally, and how the app is packaged and executed outside of the browser environment. It serves as a hands-on exercise in moving from purely web-based applications to desktop software."
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

export function getTagList() {
	const tagMap: Record<string, number> = {};

	for (const proj of projects) {
		for (const tag of proj.tags) {
			tagMap[tag] = (tagMap[tag] || 0) + 1;
		}
	}

	return Object.entries(tagMap).map(([tag, count]) => ({tag, count})).sort((a, b) => b.count - a.count);
}