import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Architecture | James Kent",
	description: "Site architecture",
};

export default function ProjectLayout({ children }: { children: ReactNode }) {
	return (
		<section>
			{children}
		</section>
	);
}
