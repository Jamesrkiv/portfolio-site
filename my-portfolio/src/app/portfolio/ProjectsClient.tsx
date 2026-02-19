"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import SearchBar from "@/components/layout/SearchBar";
import XIcon from "$/icons/XIcon";
import type { Project } from "@/app/portfolio/projects";

type Props = {
	projects: Project[];
	taglist: string[];
};

const TAG_ALIASES: Record<string, string[]> = {
	"JavaScript": ["js", "ecmascript"],
	"TypeScript": ["ts", "ecmascript"],
	"PostgreSQL": ["sql", "postgres"],
};

export default function ProjectsClient({ projects, taglist }: Props) {
	const [search, setSearch] = useState<string>("");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	function normalize(str: string) {
		return str
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, " ")
			.replace(/\s+/g, " ")
			.trim();
	}

	const fuse = useMemo(() => {
		// Build on page load
		const entries = taglist.map(tag => ({
			tag,
			norm: normalize(tag),
			aka: TAG_ALIASES[tag]?.map(normalize) ?? [],
		}));

		return new Fuse(entries, {
			threshold: 0.4,       // Fuzziness (0.3 stricter, 0.45 looser)
			ignoreLocation: true, // Doesn't care where match occurs
			distance: 100,
			keys: [
				{ name: "tag", weight: 0.6 },
				{ name: "norm", weight: 0.3 },
				{ name: "aka", weight: 0.1 },
			],
		});
	}, [taglist]);

	const filteredTags = useMemo(() => {
		const query = search.trim();
		if (!query) return taglist;

		// Search both raw and normalized query; merge + dedupe
		const normQuery = normalize(query);
		const hits = [
			...fuse.search(query).map(r => r.item.tag),
			...fuse.search(normQuery).map(r => r.item.tag),
		];

		return Array.from(new Set(hits));
	}, [search, taglist, fuse]);

	const filteredProjects = projects.filter(project => {
		if (selectedTags.length === 0) return true;
		for (const tag of selectedTags) {
			if (project.tags.includes(tag)) return true;
		}
		return false;
	});

	const handleTagChange = (tag: string) => {
		setSelectedTags(prev =>
			prev.includes(tag)
				? prev.filter(t => t !== tag)
				: [...prev, tag]
		);
	};

	return (
		<main className="flex flex-col min-h-[calc(100svh-16.72rem)]">
			{/* Page Header */}
			<div>
				{/* Title */}
				<div className="px-10 md:px-24 mb-2">
					<p className="text-3xl font-black">
						{"My Projects"}
					</p>
				</div>
				{/* Header Body */}
				<div className={`
						w-full section-bg
						px-10 md:px-24
						py-6 mb-6
				`}>
					<p className="mb-2 opacity-60 font-light">
						{"Filter projects by tag:"}
					</p>
					{/* Tag Search */}
					<div className="mb-2">
						<SearchBar searchValue={(value: string) => {setSearch(value)}} phText="Search tags..."/>
					</div>
					{/* Tag List */}
					<div className="flex flex-wrap gap-1">
						{filteredTags.length > 0 && filteredTags.map((tag, i) => (
							<div key={`tag${i}`}>
								{/* Tag */}
								<label className={`
										border border-1 border-[rgb(var(--accent-grad-l))]
										bg-[var(--bg2)]/20 px-3 rounded-full
										flex flex-row
									`}
									htmlFor={`tagc_${i}`}
								>
									<input
										tabIndex={-1} type="checkbox" id={`tagc_${i}`} value={tag}
										checked={selectedTags.includes(tag)}
										onChange={() => handleTagChange(tag)}
										className={`
											appearance-none
											mr-1.5 w-4 h-4 rounded-full
											m-auto
											transition border-1 border-[rgb(var(--accent-grad-l))]/50
											checked:border-0 checked:bg-[rgb(var(--accent-grad-l))]
											focus:outline-cyan-500/60
										`}
									/>
									<span className="font-light opacity-80 select-none">{tag}</span>
								</label>
							</div>
						))}
						{filteredTags.length === 0 && <p className="font-light opacity-80 select-none">{"No matching tags found."}</p>}
					</div>
					{/* Tag Clear Button */}
					{selectedTags.length > 0 &&
						<div className="flex mt-3">
							<button
								type="button"
								className="mr-1 cursor-pointer"
								onClick={() => setSelectedTags([])}
							>
								<XIcon className="my-auto text-[var(--fg)]/50 w-4 h-4"/>
							</button>
							<p className="font-light text-sm opacity-50 select-none">{`${selectedTags.length} tag(s) selected`}</p>
						</div>
					}
				</div>
			</div>
			{/* Primary Container */}
			<div className="md:px-12 px-6 pb-6 w-full flex-1">
				<div className="flex flex-col w-full h-full p-4 gap-4">
					{filteredProjects.map((proj, i) => (
						<div key={`proj${i}`} className="flex">
							{proj.slug !== "architecture" && (
								<div className="m-auto section-bg w-full h-full rounded-xl overflow-hidden">
									<Link href={`portfolio/${proj.slug}`} className="flex w-full h-full">
										<div className="relative w-full h-full overflow-hidden">
											{/* Project Details */}
											<div className="relative flex flex-col m-8 sm:mx-12 md:my-12 z-10">
												<span className="text-xl font-bold">{proj.title}</span>
												<span>{proj.summary}</span>
											</div>
											{/* Background image */}
											{ proj.cover && <Image
												src={proj!.cover} alt={`img${i}`}
												priority={true}
												height={1080} width={1920}
												className={`
													absolute inset-0 w-[100%] h-[100%] object-cover
													select-none z-0 scale-[1.1]
													opacity-40 blur-[2px] sm:opacity-60 sm:blur-[1px]
													sm:ml-5 sm:mask-l-from-20% sm:mask-l-to-100%
												`}
											/>}
										</div>
									</Link>
								</div>
							)}
							{proj.slug === "architecture" && (
								<Link
									href="architecture"
									className={`
											flex mx-auto section-bg py-1 px-4 rounded-xl
											${filteredProjects.length > 1 ? 'mt-6' : ''}
										`}
								>
									<p className="select-none">{"⚙️ Learn more about this site."}</p>
								</Link>
							)}
						</div>
					))}
				</div>
			</div>
		</main>
	);
}