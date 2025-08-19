import Link from "next/link";
import SimpleArrow from "$/icons/SimpleArrow";
import "@/app/globals.css";

type Props = {
	title: string,
	path: string,
	desc: string,
	img: string
};

export default function PortfolioHighlight({ title, path, desc, img }: Props) {
	return (
		<div className="relative flex rounded-3xl w-full h-full overflow-hidden shadow-md from-[var(--bg)] to-[var(--bg2)] transition-colors duration-300 bg-gradient-to-b">
			<img src={img} alt="" className="absolute inset-0 w-[120%] h-[120%] object-cover"/>
			<Link
				className="absolute inset-0 w-full h-full object-cover peer z-20"
				href={path}
			></Link>
			<div className="flex w-full h-full z-10">
				<div className="flex w-full mt-auto h-10 bg-[var(--bg)]/80">
					<p className="font-light text-sm my-auto ml-6">
						{title}
					</p>
				</div>
			</div>
		</div>
	);
}