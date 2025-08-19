import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import PortfolioHighlight from "@/components/layout/PortfolioHighlight";
import highlights from "./portfolio/highlights.json";

export default function Home() {
	return (
		<div className="font-sans from-[var(--bg)] to-[var(--bg2)] transition-colors duration-300 bg-gradient-to-b">
			{/* Landing Page */}
			<div className="flex flex-col">
				<SiteHeader
					linkA={{ text: "PORTFOLIO", link: "portfolio" }}
				/>
				<div className="md:px-12 px-6 pb-8 w-full h-[calc(100svh-5rem)] md:h-[calc(100svh-6rem)] min-h-180">
					<div className="flex flex-col section-bg rounded-3xl w-full h-full p-4">
						{/* Landing Bio */}
						<div className="flex-1 flex mx-auto flex-col sm:flex-row w-full h-full">
							{/* Left */}
							<div className="flex-2 flex p-4 md:px-8 m-auto w-full h-full order-2 sm:order-1">
								<div className="m-auto">
									<p className="text-4xl font-black">
										{"James Kent"}
									</p>
									<p className="text-xl font-bold mb-4 accent-grad-text">
										{"Software Developer"}
									</p>
									<p className="mb-4">
										{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit nisl, iaculis ac tempus ac, pharetra vitae orci. Pellentesque dignissim, mauris vel pellentesque suscipit, dolor mi laoreet metus, ornare euismod orci ligula at mi. In commodo arcu ligula, ac rutrum tortor tristique in."}
									</p>
									<p className="mb-2 sm:mb-0">
										<Link href="portfolio" className="px-2 py-1 bg-[rgb(var(--accent-grad-l))] hover:opacity-80 rounded-lg text-white">
											{"View my portfolio"}
										</Link>
									</p>
								</div>
							</div>
							{/* Right */}
							<div className="flex-2 flex p-4 md:px-8 m-auto w-full h-full order-1 sm:order-2">
								<div className="flex m-auto bg-[var(--bg)] w-[50%] sm:w-[60%] max-w-60 rounded-full border-double border-4 border-[rgb(var(--accent-grad-l))] overflow-hidden">
									<img src="/images/pfp.jpg" alt="Profile picture"/>
								</div>
							</div>
						</div>
						{/* Portfolio Highlights */}
						<div className="flex-1 flex flex-col md:flex-row w-full h-full">
							<div className="flex-2 //bg-blue-500 p-4">
								<PortfolioHighlight
									title={highlights["A"]["title"]}
									path={highlights["A"]["path"]}
									desc={highlights["A"]["desc"]}
									img={highlights["A"]["img"]}
								/>
							</div>
							<div className="flex-2 //bg-blue-500 p-4">
								<PortfolioHighlight
									title={highlights["B"]["title"]}
									path={highlights["B"]["path"]}
									desc={highlights["B"]["desc"]}
									img={highlights["B"]["img"]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bottom Content */}
			<div className="flex p-6 md:p-8 md:px-12">
				{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit nisl, iaculis ac tempus ac, pharetra vitae orci. Pellentesque dignissim, mauris vel pellentesque suscipit, dolor mi laoreet metus, ornare euismod orci ligula at mi. In commodo arcu ligula, ac rutrum tortor tristique in."}
			</div>
		</div>
	);
}
