"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import SearchBar from "@/components/layout/SearchBar";
import XIcon from "$/icons/XIcon";
import type { Project, TagCount } from "@/app/portfolio/projects";
import CodeSlash from "$/icons/CodeSlash";

type Props = {
	projects: Project[];
	taglist: TagCount[];
};

const TAG_ALIASES: Record<string, string[]> = {
	"JavaScript": ["js", "ecmascript"],
	"TypeScript": ["ts", "ecmascript"],
	"PostgreSQL": ["sql", "postgres"],
};

const COLLAPSED_COUNT = 8;

export default function ProjectsClient({ projects, taglist }: Props) {
	const [search, setSearch] = useState<string>("");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [tagsExpanded, setTagsExpanded] = useState(false);

	const selectedSet = useMemo(() => new Set(selectedTags), [selectedTags]);
	const shouldExpand = tagsExpanded || search.trim().length > 0;

	function normalize(str: string) {
		return str
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, " ")
			.replace(/\s+/g, " ")
			.trim();
	}

	const fuse = useMemo(() => {
		// Build on page load
		const entries = taglist.map(({tag, count}) => ({
			tag,
			count,
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
			...fuse.search(query).map(r => r.item),
			...fuse.search(normQuery).map(r => r.item),
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

	const visibleTags = useMemo(() => {
		if (shouldExpand) return filteredTags;

		const top = filteredTags.slice(0, COLLAPSED_COUNT);
		const topSet = new Set(top.map(t => t.tag));

		// Always include selected tags
		const selectedNotInTop = filteredTags.filter(
			t => selectedSet.has(t.tag) && !topSet.has(t.tag)
		);

		return [...selectedNotInTop, ...top];
	}, [shouldExpand, filteredTags, selectedSet]);

	const handleTagChange = (tag: string) => {
		setSelectedTags(prev =>
			prev.includes(tag)
				? prev.filter(t => t !== tag)
				: [...prev, tag]
		);
	};

	const showToggle = !shouldExpand && filteredTags.length > COLLAPSED_COUNT;

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
						{filteredTags.length > 0 && visibleTags.map((tagitem) => (
							<div key={`tag${tagitem.tag}`}>
								{/* Tag */}
								<label className={`
										border border-1 border-[rgb(var(--accent-grad-l))]
										bg-[var(--bg2)]/20 px-3 rounded-full
										flex flex-row
									`}
									htmlFor={`tagc_${tagitem.tag}`}
								>
									<input
										tabIndex={-1} type="checkbox" id={`tagc_${tagitem.tag}`} value={tagitem.tag}
										checked={selectedTags.includes(tagitem.tag)}
										onChange={() => handleTagChange(tagitem.tag)}
										className={`
											appearance-none
											mr-1.5 w-4 h-4 rounded-full
											m-auto
											transition border-1 border-[rgb(var(--accent-grad-l))]/50
											checked:border-0 checked:bg-[rgb(var(--accent-grad-l))]
											focus:outline-cyan-500/60
										`}
									/>
									<span className="font-light opacity-80 select-none">{`${tagitem.tag} - ${tagitem.count}`}</span>
								</label>
							</div>
						))}
						{/* Show More */}
						{filteredTags.length > COLLAPSED_COUNT && search.trim().length === 0 && (
							<button
								type="button"
								onClick={() => setTagsExpanded(v => !v)}
								className={`
									border border-1 border-[var(--fg)]/30
									bg-[var(--bg2)]/20 px-3 rounded-full
									flex flex-row font-light
									select-none text-[var(--fg)]/50
								`}
								aria-expanded={tagsExpanded}
							>
								{tagsExpanded ? "Show less" : `Show more (${filteredTags.length - COLLAPSED_COUNT})`}
							</button>
						)}
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
							{/* About This Site */}
							{proj.slug === "architecture" && (
								<div className={`
									section-bg m-auto h-full w-full
									rounded-xl overflow-hidden
									border-l-6 border-[rgb(var(--accent-grad-l))]/70
								`}>
									<Link href="architecture" className="flex w-full h-full flex-col">
										<div className="m-3 mx-8 sm:mx-12">
											<div className="flex select-none font-bold">
												<CodeSlash className={`
													my-auto mr-1 opacity-80
													stroke-[1px] stroke-[var(--fg)]/80
												`}/>
												<span className="opacity-80">{"About This Portfolio"}</span>
											</div>
											<span className="font-light text-sm text-[var(--fg)]/70">{"Learn more about how this site was built."}</span>
											{/* Project Tags */}
											<div className="flex flex-wrap gap-1 mt-1 text-sm">
												{proj.tags.slice(0, 3).map((tag, i) =>
													<div className="flex section-bg rounded-full border-1 border-[var(--fg)]/10" key={`pt${i}`}>
														<p className="font-light mx-3 opacity-80">
															{tag}	
														</p>
													</div>
												)}
												{(proj.tags.length - 3 > 0) &&
													<div className="flex section-bg rounded-full border-1 border-[var(--fg)]/10">
														<p className="font-light mx-2 opacity-80">
															{`+${proj.tags.length - 3}`}	
														</p>
													</div>
												}
											</div>
										</div>
									</Link>
								</div>
							)}
							{/* All Projects */}
							{proj.slug !== "architecture" && (
								<div className="m-auto section-bg w-full h-full rounded-xl overflow-hidden">
									<Link href={`portfolio/${proj.slug}`} className="flex w-full h-full">
										<div className="relative w-full h-full overflow-hidden">
											{/* Project Details */}
											<div className="relative flex flex-col m-8 sm:mx-12 md:my-12 z-10">
												<span className="text-xl font-bold">{proj.title}</span>
												<span className="text-[var(--fg)]/70">{proj.summary}</span>
												{/* Project Tags */}
												<div className="flex flex-wrap gap-1 mt-1">
													{proj.tags.slice(0, 3).map((tag, i) =>
														<div className="flex section-bg rounded-full border-1 border-[var(--fg)]/10" key={`pt${i}`}>
															<p className="text-md font-light mx-3 opacity-80">
																{tag}	
															</p>
														</div>
													)}
													{(proj.tags.length - 3 > 0) &&
														<div className="flex section-bg rounded-full border-1 border-[var(--fg)]/10">
															<p className="text-md font-light mx-2 opacity-80">
																{`+${proj.tags.length - 3}`}	
															</p>
														</div>
													}
												</div>
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
						</div>
					))}
				</div>
			</div>
		</main>
	);
}