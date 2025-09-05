import Link from "next/link";
import Image from "next/image";
import PortfolioHighlight from "@/components/layout/PortfolioHighlight";
import highlights from "@/app/portfolio/highlights.json";
import Briefcase from "$/icons/Briefcase";
import LinkedIn from "$/icons/LinkedIn";
import GitHub from "$/icons/GitHub";

export default function LandingArea() {
	return (
		<div className="flex flex-col md:px-12 md:pb-12 px-6 pb-6 w-full h-[calc(100svh-5.5rem)] min-h-180">
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
								{`
									I’m a tech professional with experience in IT, automation, and software development. I enjoy
									building efficient systems and creating software solutions that solve real problems while learning
									new skills along the way.
								`}
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
	);
}