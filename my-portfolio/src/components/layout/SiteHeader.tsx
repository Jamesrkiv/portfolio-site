import DarkModeSwitch from "./header-components/DarkModeSwitch";
import HeaderBehavior from "./header-components/HeaderBehavior";
import NavLink from "@/components/behavior/NavLink";

export default function SiteHeader() {
	return (
		<header className="header transition-colors duration-500 [&_*]:!transition-none flex sticky top-4 py-4 sm:px-8 px-4 my-4 mx-auto rounded-full z-40">
			<HeaderBehavior scrollThreshold={15}/>
			<span className="flex sm:space-x-12 space-x-4 my-auto font-light">
				<NavLink href="/">{"HOME"}</NavLink>
				<NavLink href="/portfolio">{"PORTFOLIO"}</NavLink>
				<NavLink href="/contact">{"CONTACT"}</NavLink>
				<span className="shrink-0 inline-flex items-center">
					<DarkModeSwitch/>
				</span>
			</span>
		</header>
	);
}