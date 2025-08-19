"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MagGlass from "$/icons/MagGlass";

export default function NotFound() {
	const slug = usePathname();
	return (
		<div className="font-sans flex w-screen h-screen">
			<div className="m-auto place-items-center">
				<p className="text-sm font-light bg-[var(--section-bg)] rounded p-1">
					{slug}
				</p>
				<div className="flex my-2">
					<MagGlass size={36}/>
					<p className="text-2xl md:text-4xl ml-2 my-auto font-black">
						<span className="text-[var(--error-color)]">404</span> PAGE NOT FOUND
					</p>
				</div>
				<p className="font-light text-sm opacity-70">
					{"The page you're looking for doesn't exist or was moved"}
				</p>
				<p className="mt-6 text-medium">
					<Link className="hover:text-[var(--link-color)]" href="/">
						RETURN HOME
					</Link>
				</p>
			</div>
		</div>
	);
}