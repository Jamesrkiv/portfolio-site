import DarkModeSwitch from "./header-components/DarkModeSwitch";
import HeaderBehavior from "./header-components/HeaderBehavior";

export default function SiteHeader() {
	return (
		<header className="header transition-colors duration-500 [&_*]:!transition-none flex sticky top-4 py-4 px-8 my-4 mx-auto rounded-full">
			<HeaderBehavior/>
			<span className="flex space-x-12 my-auto font-light">
				<a
					href="portfolio"
					className="hover:text-pink-300"
				>PORTFOLIO</a>
				<a
					href="https://www.linkedin.com/in/james-kent-918485240/"
					target="_blank"
					className="hover:text-pink-300"
				>LINKEDIN</a>
				<a
					href="https://github.com/Jamesrkiv"
					target="_blank"
					className="hover:text-pink-300"
				>GITHUB</a>
				<span className="shrink-0 inline-flex items-center">
					<DarkModeSwitch/>
				</span>
			</span>
		</header>
	);
}