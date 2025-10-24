import fs from "node:fs/promises";
import path from "node:path";

export default async function AboutPage() {
	// Get folders in directory to find portfolio pieces
	const ROOT = path.join(process.cwd(), "./src/app/portfolio");
	const names = await fs.readdir(ROOT);
	const stats = await Promise.all( names.map(name => fs.stat(path.join(ROOT, name))) );
	const folders: string[] = names.filter((_, i) => stats[i].isDirectory());

	return (
		<main>
			<div className="flex flex-col">
				<div className="md:px-12 md:pb-12 px-6 pb-6 w-full h-[calc(100svh-5.5rem)] min-h-180">
					<div className="flex flex-col section-bg rounded-3xl w-full h-full p-4">
						<p className="m-auto">My portfolio</p>
					</div>
				</div>
			</div>
		</main>
	);
}