import Image from "next/image";
import Link from "next/link";

export default function QuickLinks() {
	return (
		<div className="relative flex flex-col overflow-hidden w-full h-full accent-grad">
			{/* Background Image */}
			<Image
				src="/images/charlotte.jpg"
				priority={true}
				height={1080} width={1920}
				alt=""
				className={`
					absolute inset-0 w-[100%] h-[100%] object-cover select-none
					mix-blend-luminosity opacity-30 blur-[2px]
					mask-t-from-0% mask-t-to-50%
					md:mask-t-from-100% md: md:mask-l-from-0% md:mask-l-to-70%
				`}
			/>
			<div className="relative flex flex-col md:flex-row px-6 pt-10 md:pt-12 md:px-12 2xl:px-32 mb-6">
				<div className="flex flex-col m-auto">
					{/* Section Title */}
					<p className="flex justify-center text-white font-bold text-2xl mb-4">
						{"Want to know more?"}
					</p>
					{/* Quick Links */}
					<div className="flex flex-col md:flex-row gap-4 md:gap-6 m-auto z-10 justify-center text-white">
						<Link
							href="/portfolio"
							className="flex justify-center hover:text-[var(--link-color)]"
						>
							{"View my work"}
						</Link>
						<p className="hidden md:block">{"•"}</p>
						<a
							href="/082225.pdf"
							download="Resume-JamesKent.pdf"
							className="flex justify-center hover:text-[var(--link-color)]"
						>
							{"Download my résumé"}
						</a>
						<p className="hidden md:block">{"•"}</p>
						<Link
							href="/contact"
							className="flex justify-center hover:text-[var(--link-color)]"
						>
							{"Contact me"}
						</Link>
					</div>
				</div>
			</div>
			<div className="mx-auto mb-2 rounded-full px-2.5 py-1 z-10 opacity-70">
				<p className="font-light text-sm text-white">© 2025 James Kent</p>
			</div>
		</div>
	);
}