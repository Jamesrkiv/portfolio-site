"use client";

import { useEffect, useState } from "react";
import Switch from "./Switch";

type Theme = "light" | "dark" | "system";

export default function DarkModeSwitch() {
	const [mounted, setMounted] = useState(false);
	const [systemDark, setSystemDark] = useState(false);
	const [theme, setTheme] = useState<Theme>("system");

	// Set initial theme
	useEffect(() => {
		const html = document.documentElement;
		if (html.classList.contains("dark")) setTheme("dark");
		else if (html.classList.contains("light")) setTheme("light");
		else setTheme("system");
		html.classList.add("theme-ready");
	}, []);

	// Set system theme
	useEffect(() => {
		setMounted(true);
		if (typeof window === "undefined" || !window.matchMedia) return;

		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const update = () => setSystemDark(mq.matches);
		update();
	}, []);

	// Apply theme, set cookie
	async function applyTheme(next: Theme) {
		const html = document.documentElement;

		html.classList.remove("light", "dark");
		if (next === "dark") html.classList.add("dark");
		if (next === "light") html.classList.add("light");
		setTheme(next);

		await fetch("/api/theme", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ theme: next }),
		});
	}

	const checked = theme === "dark" || (theme === "system" && systemDark);

	return (
		<Switch
			onChange={(checked) => applyTheme(checked ? "dark" : "light")}
			checked={mounted ? checked : false}
		/>
	);
}