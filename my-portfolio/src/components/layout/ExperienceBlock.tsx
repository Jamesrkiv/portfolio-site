import { ReactNode } from "react";

type Props = {
	title: string,
	business: string,
	duration: string,
	desc: ReactNode,
	w?: number
}

export default function ExperienceBlock({ title, business, duration, desc }: Props) {
	return (
		<div className="w-90 p-2 rounded-2xl section-bg">
			<article className="p-6 my-auto">
				<p>{business}</p>
				<p className="font-black text-[rgb(var(--accent-grad-l))] text-lg">{title}</p>
				<p className="opacity-80 font-light text-sm">{duration}</p>
				<ul className="mt-3 whitespace-pre-line list-disc list-outside space-y-2">{desc}</ul>
			</article>
		</div>
	);
}