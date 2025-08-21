import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
	title: "Portfolio | James Kent",
	description: "My portfolio",
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
	return (
		<section>
			{children}
		</section>
	);
}
