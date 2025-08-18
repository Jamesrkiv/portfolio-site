import Link from "next/link";
import DarkModeSwitch from "./header-components/DarkModeSwitch";
import HeaderBehavior from "./header-components/HeaderBehavior";

type Props = {
	linkA: { text: string, link: string }
}

export default function SiteHeader({ linkA }: Props) {
	return (
		<header className="header transition-colors duration-500 [&_*]:!transition-none flex sticky top-4 py-4 sm:px-8 px-4 my-4 mx-auto rounded-full z-40">
			<HeaderBehavior/>
			<span className="flex sm:space-x-12 space-x-4 my-auto font-light">
				<Link
					href={linkA.link}
					className="hover:text-[var(--link-color)]"
				>{linkA.text}</Link>
				<a
					href="https://www.linkedin.com/in/james-kent-918485240/"
					target="_blank"
					className="hover:text-[var(--link-color)]"
				>LINKEDIN</a>
				<a
					href="https://github.com/Jamesrkiv"
					target="_blank"
					className="hover:text-[var(--link-color)]"
				>GITHUB</a>
				<span className="shrink-0 inline-flex items-center">
					<DarkModeSwitch/>
				</span>
			</span>
		</header>
	);
}