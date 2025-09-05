"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
	href: string,
	children: ReactNode,
	startsWith?: boolean
}

export default function NavLink({ href, children }: Props) {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			aria-current={isActive ? "page" : undefined}
			className={`hover:text-[var(--link-color)] ${isActive ? "underline" : ""}`}
		>
			{children}
		</Link>
	);
}