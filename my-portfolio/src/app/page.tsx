import Link from "next/link";
import Image from "next/image";
import PortfolioHighlight from "@/components/layout/PortfolioHighlight";
import highlights from "./portfolio/highlights.json";
import Briefcase from "$/icons/Briefcase";
import LinkedIn from "$/icons/LinkedIn";
import GitHub from "$/icons/GitHub";

export default function Home() {
	return (
		<main>
			{/* Landing Page */}
			<div className="flex flex-col">
				<div className="md:px-12 md:pb-12 px-6 pb-6 w-full h-[calc(100svh-5.5rem)] min-h-180">
					<div className="flex flex-col section-bg rounded-3xl w-full h-full p-4">
						{/* Landing Bio */}
						<div className="flex-1 flex mx-auto flex-col sm:flex-row w-full h-full">
							{/* Left */}
							<div className="flex-2 flex p-4 md:px-8 m-auto w-full h-full order-2 sm:order-1">
								<div className="m-auto">
									<p className="text-4xl font-black whitespace-nowrap">
										{"James Kent"}
									</p>
									<p className="text-xl font-bold mb-4 accent-grad-text">
										{"Software Developer"}
									</p>
									<p className="mb-4">
										{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit nisl, iaculis ac tempus ac, pharetra vitae orci. Pellentesque dignissim, mauris vel pellentesque suscipit, dolor mi laoreet metus, ornare euismod orci ligula at mi. In commodo arcu ligula, ac rutrum tortor tristique in."}
									</p>
									{/* Buttons */}
									<div className="flex mb-2 sm:mb-0 space-x-3">
										<Link
											href="/portfolio"
											className="hover:opacity-80"
											title="View my portfolio"
										>
											<Briefcase size={28} className="my-auto text-[rgb(var(--accent-grad-l))]"/>
										</Link>
										<a
											href="https://www.linkedin.com/in/james-kent-918485240/"
											className="hover:opacity-80"
											target="_blank"
											title="Visit my LinkedIn"
										>
											<LinkedIn size={28} className="my-auto text-[rgb(var(--accent-grad-l))]"/>
										</a>
										<a
											href="https://github.com/Jamesrkiv/"
											className="hover:opacity-80"
											target="_blank"
											title="Visit my GitHub"
										>
											<GitHub size={28} className="my-auto text-[rgb(var(--accent-grad-l))]"/>
										</a>
									</div>
								</div>
							</div>
							{/* Right */}
							<div className="flex-2 flex p-4 md:px-8 m-auto w-full h-full order-1 sm:order-2">
								{/* Picture */}
								<div
									className={`
										flex m-auto bg-[var(--bg)] rounded-full overflow-hidden select-none
										w-[50%] sm:w-[60%] max-w-60 min-w-45 aspect-square
										border-double border-4 border-[rgb(var(--accent-grad-l))]
									`}
								>
									<Image src="/images/pfp.jpg" priority={true} width={1000} height={1000} alt="Profile picture" className="m-auto"/>
								</div>
							</div>
						</div>
						{/* Portfolio Highlights */}
						<div className="flex-1 flex flex-col md:flex-row w-full h-full">
							<div className="flex-2 md:p-4 px-4 py-2">
								<PortfolioHighlight
									title={highlights["A"]["title"]}
									path={highlights["A"]["path"]}
									img={highlights["A"]["img"]}
								/>
							</div>
							<div className="flex-2 md:p-4 px-4 py-2">
								<PortfolioHighlight
									title={highlights["B"]["title"]}
									path={highlights["B"]["path"]}
									img={highlights["B"]["img"]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bottom Content */}
			<div className="flex flex-col">
				<div className="mb-10 md:mb-16">
					{/* Section Title */}
					<p className="pt-6 md:pt-6 px-6 md:px-12 font-bold text-2xl mb-1">
						{"About Me"}
					</p>
					{/* Section Body */}
					<div className="relative flex flex-col md:flex-row gap-10 md:gap-15 accent-grad p-6 md:px-12 w-full h-full overflow-hidden">
						{/* Background Image */}
						<Image
							src="/images/charlotte.jpg"
							priority={true}
							height={1080} width={1920}
							alt=""
							className={`
								absolute inset-0 w-[100%] h-[100%] object-cover select-none
								mix-blend-luminosity opacity-30 blur-[2px]
								mask-t-from-0% mask-t-to-50%
								md:mask-t-from-100% md: md:mask-r-from-0% md:mask-r-to-70%
							`}
						/>
						{/* Left */}
						<div className="flex-1 flex-col order-2 md:order-1 z-10">
							<p className="text-white">
								{"This section will eventually be taller. Should I keep the background image, or maybe swap it out for something else? I kind of like the look."}
							</p>
							<p className="text-white mt-2">
								{"Test text here."}
							</p>
							{/* Logo Display */}
							<div className="flex flex-wrap mt-4 gap-4 md:flex-row">
								{/* React Logo */}
								<div className="section-bg rounded-full w-12 h-12 p-1 shadow-md">
									<Image
										src="/logos/react.svg"
										height={60} width={60}
										alt="React logo"
										className="select-none"
										title="React"
									/>
								</div>
								{/* Next Logo */}
								<div className="section-bg rounded-full w-12 h-12 p-1 shadow-md">
									<Image
										src="/logos/next.svg"
										height={60} width={60}
										alt="Next logo"
										className="select-none"
										style={{"filter": "drop-shadow(0 0 2px rgb(255, 255, 255, 0.3))"}}
										title="Next.js"
									/>
								</div>
								{/* Node Logo */}
								<div className="section-bg rounded-full w-12 h-12 p-1 shadow-md">
									<Image
										src="/logos/node.svg"
										height={60} width={60}
										alt="Node logo"
										className="select-none"
										title="Node.js"
									/>
								</div>
							</div>
						</div>
						{/* Right */}
						<div className="flex-1 order-1 md:order-2 z-10">
							<p className="text-white">
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit nisl, iaculis ac tempus ac, pharetra vitae orci. Pellentesque dignissim, mauris vel pellentesque suscipit, dolor mi laoreet metus, ornare euismod orci ligula at mi. In commodo arcu ligula, ac rutrum tortor tristique in."}
							</p>
							<p className="text-white mt-2">
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit nisl, iaculis ac tempus ac, pharetra vitae orci."}
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
