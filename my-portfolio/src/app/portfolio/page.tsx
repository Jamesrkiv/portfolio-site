import { getAllProjects, getTagList } from "@/app/portfolio/projects";
import ProjectsClient from "./ProjectsClient";

export default async function PortfolioPage() {
	const projects = getAllProjects();
	const taglist = await getTagList();
	return <ProjectsClient projects={projects} taglist={taglist}/>;
}