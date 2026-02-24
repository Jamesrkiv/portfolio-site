"use client";

import { useState } from "react";
import MagGlass from "$/icons/MagGlass";

type Props = {
	searchValue?: (value: string) => void;
	magColor?: string;
	phText?: string;
	bgColor?: string;
}

export default function SearchBar({
	searchValue,
	magColor = "text-[rgb(var(--accent-grad-l))]",
	phText = "Search",
	bgColor = "bg-[var(--bg2)]/20"
}: Props) {

	const [search, setSearch] = useState("");

	function handleChange(value: string) {
		if (value.trim() !== search.trim())
			searchValue?.(value.trim());
		setSearch(value);
	}

	return (
		<div className="relative">
			<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
				<MagGlass size={18} className={magColor}/>
			</div>
			<input
				type="text"
				className={`
					block w-full rounded-xl
					${bgColor}
					text-sm placeholder:font-light
					focus:outline-none
					p-3 ps-9
					inset-shadow-sm
					select-none
				`}
				placeholder={phText}
				value={search}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	);
}