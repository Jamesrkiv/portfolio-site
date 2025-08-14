import SiteHeader from "@/components/layout/SiteHeader";

export default function Home() {
	return (
		<div className="font-sans">
			{/* Landing Page */}
			<div className="flex flex-col h-screen">
				<SiteHeader/>
				<div className="flex-1 px-8 pb-8">
					<div className="flex section-bg rounded-3xl w-full h-full">
						<p className="m-auto">Test</p>
					</div>
				</div>
			</div>
			{/* Bottom Content */}
			<div className="flex p-8">
				Test
			</div>
		</div>
	);
}
