import DarkModeSwitch from "./header-components/DarkModeSwitch";
import HeaderBehavior from "./header-components/HeaderBehavior";

type Props = {
	linkA: { text: string, link: string },
	linkB: { text: string, link: string },
	linkC: { text: string, link: string },
}

export default function SiteHeader({ linkA, linkB, linkC }: Props) {
	return (
		<header className="header transition-colors duration-500 [&_*]:!transition-none flex sticky top-4 py-4 sm:px-8 px-4 my-4 mx-auto rounded-full">
			<HeaderBehavior/>
			<span className="flex sm:space-x-12 space-x-4 my-auto font-light">
				<a
					href={linkA.link}
					className="hover:text-pink-300"
				>{linkA.text}</a>
				<a
					href={linkB.link}
					target="_blank"
					className="hover:text-pink-300"
				>{linkB.text}</a>
				<a
					href={linkC.link}
					target="_blank"
					className="hover:text-pink-300"
				>{linkC.text}</a>
				<span className="shrink-0 inline-flex items-center">
					<DarkModeSwitch/>
				</span>
			</span>
		</header>
	);
}