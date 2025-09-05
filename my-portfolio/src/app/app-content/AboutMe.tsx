import Image from "next/image";
import LogoIcon from "@/components/layout/LogoIcon";

export default function AboutMe() {
	return (
		<div className="relative flex flex-col md:flex-row gap-12 accent-grad px-6 py-12 md:py-16 md:px-12 2xl:px-32 w-full h-full overflow-hidden">
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
					md:mask-t-from-100% md: md:mask-r-from-0% md:mask-r-to-70%
				`}
			/>
			{/* Left */}
			<div className="flex-1 flex-col order-2 md: my-auto md:order-1 z-10">
				{/* Logo Display */}
				<div className="flex flex-wrap gap-2 md:flex-row mt-1">
					<LogoIcon src="/logos/node.svg" size={14} alt="Node logo" title="Node.js"/>
					<LogoIcon src="/logos/react.svg" size={14} alt="React logo" title="React"/>
					<LogoIcon src="/logos/next.svg" size={14} alt="Next logo" title="Next.js" glow={true} />
					<LogoIcon src="/logos/js.svg" size={14} alt="JavaScript logo" title="JavaScript"/>
					<LogoIcon src="/logos/ts.svg" size={14} alt="TypeScript logo" title="TypeScript"/>
					<LogoIcon src="/logos/postgresql.svg" size={14} alt="Postgres logo" title="PostgreSQL"/>
					<LogoIcon src="/logos/tailwind.svg" size={14} alt="Tailwind logo" title="TailwindCSS"/>
				</div>
				<p className="text-white font-bold mt-8">
					{"Core technologies:"}
				</p>
				<p className="text-white mt-1 font-light">
					{"Node.js • React • Next.js • JavaScript • TypeScript • PostgreSQL • TailwindCSS"}
				</p>
				<p className="text-white mt-2 font-bold">
					{"Also familiar with:"}
				</p>
				<p className="text-white mt-1 font-light">
					{"Python • Java • C# • PowerShell • VBA • Docker • Git • REST APIs • Microsoft Graph SDK"}
				</p>
			</div>
			{/* Right */}
			<div className="flex-1 order-1 my-auto md:order-2 z-10">
				{/* Section Title */}
				<p className="text-white font-bold text-2xl mb-4">
					{"About Me"}
				</p>
				<p className="text-white">
					{`
						I’m a developer with a background in IT and automation, and a growing focus on full-stack web applications.
						I enjoy designing systems that are both efficient and user-friendly, turning complex workflows into simple,
						intuitive tools.
					`}
				</p>
				<p className="text-white mt-2">
					{`
						Outside of coding, I’m always learning—whether it’s experimenting with new frameworks, optimizing existing
						processes, or tackling creative projects that push my skills further.
					`}
				</p>
			</div>
		</div>
	);
}