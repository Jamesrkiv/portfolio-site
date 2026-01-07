import { getAllProjects } from "@/app/portfolio/projects";
import ProjectsClient from "./ProjectsClient";

export default function PortfolioPage() {
	const projects = getAllProjects();

	// Get list of all unique tags
	let taglist: string[] = [];
	for (const proj of projects) taglist = [...new Set([...taglist, ...proj.tags])];

	return <ProjectsClient projects={projects} taglist={taglist}/>;
}