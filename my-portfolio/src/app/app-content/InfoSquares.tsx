import ExperienceBlock from "@/components/layout/ExperienceBlock";

export default function InfoSquares() {
	return (
		<div className="flex flex-wrap justify-center gap-10 px-6 md:px-12 md:gap-16 overflow-hidden">
			<ExperienceBlock
				title={"Software / IT Lead"}
				business={"Helms Home Care, LLC"}
				duration={"2023 - PRESENT"}
				desc={(<>
					<li>{"Builds and maintains internal software and automations used across operations."}</li>
					<li>{"Integrations and scripting across Microsoft Graph/Entra ID; general system administration."}</li>
				</>)}
			/>
			<ExperienceBlock
				title={"Guidewire Developer Training"}
				business={"GenSpark"}
				duration={"2023"}
				desc={(<>
					<li>{"Hands-on configuration and integration on Guidewire PolicyCenter using Gosu."}</li>
					<li>{"Team labs and sprints focused on workflows, data models, and extensions."}</li>
				</>)}
			/>
			<ExperienceBlock
				title={"B.S. Computer Science"}
				business={"East Carolina University"}
				duration={"2018 - 2022"}
				desc={(<>
					<li>{"Reviewed assignments and supported students across Python, Haskell, Prolog, and finite automata."}</li>
				</>)}
			/>
		</div>
	);
}