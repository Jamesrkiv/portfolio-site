import AboutMe from "./app-content/AboutMe";
import InfoSquares from "./app-content/InfoSquares";
import LandingArea from "./app-content/LandingArea";
import QuickLinks from "./app-content/QuickLinks";

export default function Home() {
	return (
		<main>
			<div id="intro">
				<LandingArea/>
			</div>
			<div id="about" className="mt-4">
				<AboutMe/>
			</div>
			<div id="experience" className="mt-10 md:mt-16">
				<InfoSquares/>
			</div>
			<div id="more" className="mt-10 md:mt-16">
				<QuickLinks/>
			</div>
		</main>
	);
}
