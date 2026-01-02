import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/app/portfolio/projects";
import QuickLinks from "@/app/app-content/QuickLinks";

export default async function PortfolioPage() {
	const projects = getAllProjects();
	return (
		<main>
			<div className="flex flex-col">
				<div className="md:px-12 md:pb-12 px-6 pb-6 w-full h-full">
					<div className="flex flex-col w-full h-full p-4 gap-4">
						{projects.map((proj, i) => (
							<div key={`proj${i}`} className="m-auto section-bg w-full h-full rounded-xl overflow-hidden">
								<Link href={`portfolio/${proj.slug}`} className="flex w-full h-full">
									<div className="relative w-full h-full overflow-hidden">
										{/* Project Details */}
										<div className="relative flex flex-col m-8 sm:mx-12 md:my-12 z-10">
											<span className="text-xl font-bold">{proj.title}</span>
											<span>{proj.summary}</span>
										</div>
										{/* Background image */}
										{proj.images &&
											<Image
												src={proj!.images[
													Math.floor(Math.random() * (proj.images.length - 1))
												].src} alt={`img${i}`}
												priority={true}
												height={1080} width={1920}
												className={`
													absolute inset-0 w-[100%] h-[100%] object-cover
													select-none z-0
													opacity-40 blur-[2px] sm:opacity-60 sm:blur-[1px]
													sm:ml-5
													sm:mask-l-from-20% sm:mask-l-to-100%
												`}
											/>
										}
									</div>
								</Link>
							</div>
						))}
						<Link href="architecture" className="flex mx-auto section-bg py-1 px-4 rounded-xl mt-6">
							<p>⚙️ Learn more about this site.</p>
						</Link>
					</div>
				</div>
				{/* Footer Section */}
				<QuickLinks/>
			</div>
		</main>
	);
}