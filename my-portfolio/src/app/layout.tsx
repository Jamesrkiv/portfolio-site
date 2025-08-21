import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import Scroll from "@/components/behavior/Scroll";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Home | James Kent",
	description: "Portfolio home page",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
	const cookieStore = await cookies();
	const theme = cookieStore.get("theme")?.value as "light" | "dark" | undefined;
	const htmlClass = theme === "dark" ? "dark" : theme === "light" ? "light" : "";
	return (
		<html lang="en" className={htmlClass} suppressHydrationWarning>
			<head>
				<meta name="color-scheme" content="dark light" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Scroll/>
				<main className="flex flex-col font-sans from-[var(--bg)] to-[var(--bg2)] transition-colors duration-300 bg-gradient-to-b">
					<SiteHeader/>
					{children}
					<footer className="flex w-full">
						<div className="mx-auto bg-[var(--bg)] rounded-full px-2.5 py-1 mb-2">
							<p className="font-light text-sm">© 2025 James Kent</p>
						</div>
					</footer>
				</main>
			</body>
		</html>
	);
}
