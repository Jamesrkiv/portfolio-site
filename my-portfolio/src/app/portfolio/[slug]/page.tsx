import { notFound } from "next/navigation";
import { getProject } from "@/app/portfolio/projects";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "@/components/layout/EmblaCarousel";
import ReactMarkdown from "react-markdown";

const emblaOptions: EmblaOptionsType = {
	loop: true,
	containScroll: "keepSnaps",
	slidesToScroll: 1
};

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) notFound();

	return (
		<main>
			<div className="flex flex-col">
				{/* Backdrop */}
				<div className="flex flex-col md:pb-12 pb-6 w-full min-h-[calc(100svh-16.72rem)]">
					{/* Title Container */}
					<div className="mb-10">
						{/* Title */}
						<p className="text-3xl font-black mb-2 mx-10 md:mx-24">
							{project.title}
						</p>
						{/* Project Tags */}
						<div className="flex flex-wrap gap-1 mb-4 mx-10 md:mx-24">
							{project.tags.map((tag, i) =>
								<div className="flex section-bg rounded-full border-1 border-[var(--fg)]/10" key={`t${i}`}>
									<p className="text-md font-light mx-3 opacity-80">
										{tag}	
									</p>
								</div>
							)}
						</div>
						{/* Project Summary */}
						<p className="mx-10 md:mx-24 opacity-80" style={{whiteSpace: "pre-wrap"}}>
							{project.summary}
						</p>
					</div>
					{/* Primary Container */}
					<div className="flex flex-col section-bg w-full pt-8 pb-2 mb-6 md:mb-0">
						{/* Project Images */}
						{project.images && 
							<div className="mb-4">
								<EmblaCarousel slides={project.images} options={emblaOptions}/>
							</div>
						}
						{/* Desc Container */}
						<div className="flex flex-col mb-8">
							{/* Main Description */}
							<article className="mx-10 md:mx-24 opacity-80 prose prose-invert">
								<ReactMarkdown
									components={{
										h2: ({ children }) => (
											<h2 className="text-2xl font-semibold mt-8 mb-4">
												{children}
											</h2>
										),
										p: ({ children }) => (
											<p className="leading-relaxed mb-4">
												{children}
											</p>
										),
										ul: ({ children }) => (
											<ul className="list-disc pl-6 mb-4 space-y-2 text-zinc-300">
												{children}
											</ul>
										),
										li: ({ children }) => (
											<li className="marker:text-[rgb(var(--accent-grad-1))]">
												{children}
											</li>
										),
										hr: ({ children }) => (
											<hr className="text-[var(--fg)]/30">
												{children}
											</hr>
										),
									}}
								>{project.body}</ReactMarkdown>
							</article>
							{/* GitHub Link */}
							{project.repo &&
								<a
									href={project.repo}
									className="bg-[rgb(var(--accent-grad-l))] mt-6 mr-auto ml-10 md:ml-24 py-2 px-4 rounded-full hover:opacity-80 text-white"
									target="_blank"
									title="View GitHub Repo"
								>{"View on GitHub"}</a>
							}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}