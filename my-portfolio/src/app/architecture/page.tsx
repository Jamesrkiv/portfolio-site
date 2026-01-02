import QuickLinks from "@/app/app-content/QuickLinks";

export default async function ArchitecturePage() {
	const tags = ["Next.js", "React", "Tailwind", "Node.js"];
	return (
		<main>
			<div className="flex flex-col">
				{/* Backdrop */}
				<div className="flex flex-col md:pb-12 pb-6 w-full min-h-[calc(100svh-16.72rem)]">
					{/* Title Container */}
					<div className="mb-10">
						{/* Title */}
						<p className="text-3xl font-black mb-2 mx-10 md:mx-24">
							My Portfolio Site
						</p>
						{/* Project Tags */}
						<div className="flex flex-wrap gap-1 mb-4 mx-10 md:mx-24">
							{tags.map((tag, i) =>
								<div className="flex section-bg rounded-full border-1 border-[var(--fg)]/10" key={`t${i}`}>
									<p className="text-md font-light mx-3 opacity-80">
										{tag}	
									</p>
								</div>
							)}
						</div>
						{/* Project Summary */}
						<p className="mx-10 md:mx-24 opacity-80" style={{whiteSpace: "pre-wrap"}}>
							A portfolio for my projects, both personal and professional.
						</p>
					</div>
					{/* Primary Container */}
					<div className="flex flex-col section-bg w-full pt-8 pb-2 mb-6 md:mb-0 grow">
						{/* Desc Container */}
						<div className="flex flex-col m-auto">
							{/* Main Description */}
							<p className="mx-10 md:mx-24 opacity-80" style={{whiteSpace: "pre-wrap"}}>
								{"This website serves as a central place to showcase my personal and professional projects, providing context around what each project does, how it was built, and the problems it was intended to solve. Rather than using a prebuilt theme or static site template, the portfolio was designed and implemented as a custom web application using Next.js and React, with Tailwind CSS used for styling and responsive layout.\n\nThe site is organized to make browsing projects straightforward while remaining easy to extend as new work is added. Individual project pages highlight the tools and technologies involved and include links to source code or related resources where applicable. This portfolio will continue to evolve as new projects are added and existing ones are refined.\n\nNext.js is used to handle routing, page composition, and rendering, allowing the site to scale cleanly as content grows. The overall design prioritizes clarity and usability across screen sizes, with consistent navigation and visual structure throughout."}
							</p>
							{/* GitHub Link */}
							<a
								href="https://github.com/Jamesrkiv/portfolio-site"
								className="accent-grad mt-12 mr-auto ml-10 md:ml-24 py-2 px-4 rounded-full hover:opacity-80 text-white"
								target="_blank"
								title="View GitHub Repo"
							>View on GitHub</a>
						</div>
					</div>
				</div>
				{/* Footer Section */}
				<QuickLinks/>
			</div>
		</main>
	);
}