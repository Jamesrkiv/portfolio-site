import AboutMe from "./app-content/AboutMe";
import InfoSquares from "./app-content/InfoSquares";
import LandingArea from "./app-content/LandingArea";
import QuickLinks from "./app-content/QuickLinks";

export default function Home() {
	return (
		<main>
			<div className="">
				<LandingArea/>
			</div>
			<div className="mt-4">
				<AboutMe/>
			</div>
			<div className="mt-10 md:mt-16">
				<InfoSquares/>
			</div>
			<div className="mt-10 md:mt-16">
				<QuickLinks/>
			</div>
		</main>
	);
}
