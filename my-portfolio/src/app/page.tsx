import SiteHeader from "@/components/layout/SiteHeader";
import PortfolioHighlight from "@/components/layout/PortfolioHighlight";

export default function Home() {
	return (
		<div className="font-sans">
			{/* Landing Page */}
			<div className="flex flex-col h-screen">
				<SiteHeader
					linkA={{ text: "PORTFOLIO", link: "portfolio" }}
					linkB={{ text: "LINKEDIN", link: "https://www.linkedin.com/in/james-kent-918485240/" }}
					linkC={{ text: "GITHUB", link: "https://github.com/Jamesrkiv" }}
				/>
				<div className="px-8 pb-8 h-full w-full">
					<div className="flex flex-col section-bg rounded-3xl w-full h-full p-4">
						<div className="flex-1 mx-auto //bg-red-500 w-full h-full">
							<div className="flex p-4 m-auto w-full h-full">
								<div className="m-auto">
									Content goes here
								</div>
							</div>
						</div>
						<div className="flex-1 flex flex-col md:flex-row w-full h-full">
							<div className="flex-2 //bg-blue-500 p-4">
								<PortfolioHighlight/>
							</div>
							<div className="flex-2 //bg-blue-500 p-4">
								<PortfolioHighlight/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bottom Content */}
			<div className="flex p-8">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit nisl, iaculis ac tempus ac, pharetra vitae orci. Pellentesque dignissim, mauris vel pellentesque suscipit, dolor mi laoreet metus, ornare euismod orci ligula at mi. In commodo arcu ligula, ac rutrum tortor tristique in.
			</div>
		</div>
	);
}
