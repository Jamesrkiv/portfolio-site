import Link from "next/link";
import { getAllProjects } from "@/app/portfolio/projects";

export default async function PortfolioPage() {
	const projects = getAllProjects();
	return (
		<main>
			<div className="flex flex-col">
				<div className="md:px-12 md:pb-12 px-6 pb-6 w-full h-[calc(100svh-5.5rem)] min-h-180">
					<div className="flex flex-col section-bg rounded-3xl w-full h-full p-4">
						{projects.map(proj => (
							<Link key={proj.slug} href={`portfolio/${proj.slug}`} className="m-auto">{proj.title}</Link>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}