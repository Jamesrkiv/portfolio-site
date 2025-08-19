import SiteHeader from "@/components/layout/SiteHeader";
import PortfolioHighlight from "@/components/layout/PortfolioHighlight";
import highlights from "./portfolio/highlights.json";

export default function Home() {
	return (
		<div className="font-sans">
			{/* Landing Page */}
			<div className="flex flex-col h-screen min-h-150">
				<SiteHeader
					linkA={{ text: "PORTFOLIO", link: "portfolio" }}
				/>
				<div className="md:px-12 px-6 pb-8 h-full w-full">
					<div className="flex flex-col section-bg rounded-3xl w-full h-full p-4">
						{/* Landing Bio */}
						<div className="flex-1 flex mx-auto flex-col md:flex-row w-full h-full">
							{/* Left */}
							<div className="flex-2 flex p-4 md:px-8 m-auto w-full h-full">
								<div className="m-auto">
									<p className="text-xl font-bold">
										{"Hello, I'm"}
									</p>
									<p className="text-4xl font-black">
										{"James Kent"}
									</p>
									<p className="text-xl font-bold mb-4 accent-grad-text">
										{"Software Developer"}
									</p>
									<p className="">
										{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit nisl, iaculis ac tempus ac, pharetra vitae orci. Pellentesque dignissim, mauris vel pellentesque suscipit, dolor mi laoreet metus, ornare euismod orci ligula at mi. In commodo arcu ligula, ac rutrum tortor tristique in."}
									</p>
								</div>
							</div>
							{/* Right */}
							<div className="flex-2 flex p-4 md:px-8 m-auto w-full h-full">
								<div className="m-auto">
									IMAGE HERE
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
