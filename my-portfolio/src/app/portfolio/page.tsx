import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/app/portfolio/projects";

export default async function PortfolioPage() {
	const projects = getAllProjects();
	return (
		<main>
			<div className="flex flex-col">
				<div className="md:px-12 md:pb-12 px-6 pb-6 w-full h-[calc(100svh-5.5rem)] min-h-180">
					<div className="flex flex-col w-full h-full p-4 gap-4">
						{projects.map((proj, i) => {
							if (!proj.images) return null;
							const indx = Math.floor(Math.random() * (proj.images.length - 1));
							return (
								<div key={`proj${i}`} className="m-auto section-bg w-full h-full rounded-xl overflow-hidden min-h-45">
									<Link href={`portfolio/${proj.slug}`} className="flex w-full h-full">
										<div className="relative flex w-full h-full overflow-hidden">
											{/* Background image */}
											<Image
												src={proj!.images[indx].src} alt={`img${i}`}
												priority={true}
												height={1080} width={1920}
												className={`
													absolute inset-0 w-[100%] h-[100%] object-cover
													select-none
													opacity-40 blur-[2px] sm:opacity-60 sm:blur-[1px]
													sm:ml-5
													sm:mask-l-from-20% sm:mask-l-to-100%
												`}
											/>
											{/* Project Details */}
											<div className="flex flex-col m-8 sm:mx-12 my-auto">
												<span className="text-xl font-bold">{proj.title}</span>
												<span className="">{proj.summary}</span>
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}