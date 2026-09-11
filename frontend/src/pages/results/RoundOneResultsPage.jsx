import { motion, useReducedMotion } from "framer-motion";
import { Search, Sparkles, Users } from "lucide-react";
import { useMemo, useState } from "react";

const roundOneResults = [
	{ teamName: "3 AM ENGINEERS", teamLeader: "MANAS MISHRA" },
	{ teamName: "ALPHAX", teamLeader: "VAIBHAV SAINI" },
	{ teamName: "APEX.CODERS", teamLeader: "VIDIT GOYAL" },
	{ teamName: "BUG BUSTERS", teamLeader: "GAGAN TYAGI" },
	{ teamName: "CATALYST CREW", teamLeader: "AKHLAQUE HUSSAIN" },
	{ teamName: "CODE BUDDY", teamLeader: "PUSHKAR RAJ" },
	{ teamName: "CODE HUSTLERS", teamLeader: "VANSH SAINI" },
	{ teamName: "CUREMINDS", teamLeader: "SHIVANSHU SINGH" },
	{ teamName: "CODE PREDATORS", teamLeader: "ABHIJEET KUMAR" },
	{ teamName: "CORESIX", teamLeader: "ANANT GUPTA" },
	{ teamName: "DECODERS 2.0", teamLeader: "SEJAL SINGH" },
	{ teamName: "FOCUS", teamLeader: "ARYAN VERMA" },
	{ teamName: "GAME OF NODES", teamLeader: "ASHMIT KUMAR" },
	{ teamName: "HACKING.BEAST", teamLeader: "MOHAMMAD AHMAD ALI" },
	{ teamName: "HUSTLERS", teamLeader: "SAMYAK JAIN" },
	{
		teamName: "JUGAADU ENGINEER",
		teamLeader: "ABHISHEK KUMAR SHARMA",
	},
	{ teamName: "KNIGHT CODERS", teamLeader: "HARIOM DHAKAD" },
	{ teamName: "LOGIC LORDS", teamLeader: "AARADHYA DHIMAN" },
	{ teamName: "NEXORA", teamLeader: "SHIVAM DEEP" },
	{ teamName: "NO SLEEP", teamLeader: "SHRIKANT SHUKLA" },
	{ teamName: "NULL HORIZON", teamLeader: "NAVNEET KUMAR" },
	{ teamName: "RELIABLE CODERS", teamLeader: "SHAURYA TIWARI" },
	{ teamName: "RUBIX", teamLeader: "AMAN KUMAR" },
	{ teamName: "RUNTIME REVOLUTION", teamLeader: "SOYAB RAWAT" },
	{ teamName: "SIXSEVEN", teamLeader: "GOURAV SAHU" },
	{ teamName: 'TEAM - "WHY NOT" !', teamLeader: "VEDANSH KUMAR SINGH" },
	{ teamName: "TEAM ANVESHAK", teamLeader: "VANSH BHARDWAJ" },
	{ teamName: "TEAM MAYAAVI", teamLeader: "VEDANG SHARMA" },
	{ teamName: "TECH BYTE", teamLeader: "MOHAMMAD AKIF" },
	{ teamName: "TECH SENA", teamLeader: "RITIK SAINI" },
	{ teamName: "TECH TRAILBLAZERS", teamLeader: "ANUSHKA" },
	{ teamName: "TECHX", teamLeader: "SAKSHI BISHT" },
	{ teamName: "THE DEBUGGERS", teamLeader: "RITU RAJ" },
	{ teamName: "THE RONINS", teamLeader: "NAMAN MISHRA" },
	{ teamName: "TIMEPASS", teamLeader: "ARCHI SHARMA" },
	{ teamName: "TORQUE TITANS", teamLeader: "ESHAN SACHDEVA" },
	{ teamName: "TRACKDART", teamLeader: "TRACKDART" },
	{ teamName: "TWINX", teamLeader: "LUCKY KUMAR" },
	{ teamName: "VERTEX", teamLeader: "SIDDHI GUPTA" },
	{ teamName: "VISIONARY-AI", teamLeader: "PRINCE" },
	{ teamName: "VISIONTALKERS", teamLeader: "UTKARSH SRIVASTAVA" },
	{ teamName: "X FACTOR", teamLeader: "ANANYA SINGH" },
	{ teamName: "ZERODAY", teamLeader: "ARYAN BISARIA" },
];

function FloatingSparkles({ reducedMotion }) {
	if (reducedMotion) return null;

	const sparkles = [
		{ left: "7%", top: "17%", delay: 0 },
		{ left: "18%", top: "72%", delay: 0.8 },
		{ left: "32%", top: "27%", delay: 1.4 },
		{ left: "48%", top: "82%", delay: 0.4 },
		{ left: "63%", top: "19%", delay: 1.1 },
		{ left: "77%", top: "68%", delay: 0.2 },
		{ left: "91%", top: "31%", delay: 1.7 },
	];

	return (
		<div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
			{sparkles.map((sparkle, index) => (
				<motion.div
					key={index}
					className="text-primary-400/50 absolute"
					style={{
						left: sparkle.left,
						top: sparkle.top,
					}}
					animate={{
						opacity: [0.15, 0.8, 0.15],
						scale: [0.7, 1, 0.7],
						rotate: [0, 45, 90],
					}}
					transition={{
						duration: 3.5,
						delay: sparkle.delay,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<Sparkles size={12 + (index % 3) * 4} />
				</motion.div>
			))}
		</div>
	);
}

function TeamMark({ teamName }) {
	const initials = teamName
		.replace(/[^a-zA-Z0-9 ]/g, "")
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word[0])
		.join("")
		.toUpperCase();

	return (
		<div className="border-border bg-surface-muted font-display text-primary-400 flex size-11 shrink-0 items-center justify-center rounded-lg border text-sm font-bold tracking-tight">
			{initials || "T"}
		</div>
	);
}

function TeamCard({ team, index, reducedMotion }) {
	return (
		<motion.article
			initial={reducedMotion ? false : { opacity: 0, y: 12 }}
			whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{
				duration: 0.35,
				delay: reducedMotion ? 0 : Math.min(index * 0.025, 0.3),
			}}
			className="group border-border bg-card hover:border-border-strong relative overflow-hidden rounded-xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
		>
			<div className="bg-primary-400/0 group-hover:bg-primary-400/70 absolute inset-x-0 top-0 h-px transition-colors duration-300" />

			<div className="flex items-center gap-3">
				<TeamMark teamName={team.teamName} />

				<div className="min-w-0 flex-1">
					<h3 className="font-display text-card-foreground truncate text-sm font-bold tracking-tight">
						{team.teamName}
					</h3>

					<div className="mt-1 flex items-center gap-1.5">
						<span className="text-muted-foreground truncate text-xs font-medium">
							{team.teamLeader}
						</span>
					</div>
				</div>

				<div className="border-border bg-surface-muted text-muted group-hover:border-primary-400/30 group-hover:text-primary-400 hidden size-7 items-center justify-center rounded-md border transition-colors sm:flex">
					<span className="font-mono text-[10px]">01</span>
				</div>
			</div>
		</motion.article>
	);
}

export default function RoundOneResultsPage() {
	const reducedMotion = useReducedMotion();
	const [search, setSearch] = useState("");

	const totalTeams = roundOneResults.length;

	const filteredTeams = useMemo(() => {
		const query = search.trim().toLowerCase();

		if (!query) return roundOneResults;

		return roundOneResults.filter(
			(team) =>
				team.teamName.toLowerCase().includes(query) ||
				team.teamLeader.toLowerCase().includes(query),
		);
	}, [search]);

	return (
		<div className="bg-background text-foreground relative min-h-screen overflow-hidden py-16 sm:py-20 lg:py-24">
			<FloatingSparkles reducedMotion={reducedMotion} />

			{/* Background atmosphere */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 overflow-hidden"
			>
				<div className="bg-primary-400/5 absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl" />

				<div
					className="absolute inset-0 opacity-[0.035]"
					style={{
						backgroundImage:
							"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
						backgroundSize: "44px 44px",
					}}
				/>
			</div>

			<main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
				{/* Hero */}
				<section className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-end">
					<div>
						<div className="mb-5 flex items-center gap-3">
							<div className="border-primary-400/20 bg-primary-400/5 flex items-center gap-2 rounded-full border px-3 py-1.5">
								<span className="bg-primary-400 size-1.5 rounded-full" />
								<span className="text-primary-400 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
									Results / Round 01
								</span>
							</div>
						</div>

						<motion.h1
							initial={reducedMotion ? false : { opacity: 0, y: 18 }}
							animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
							transition={{ duration: 0.55 }}
							className="font-display text-foreground max-w-4xl text-5xl font-bold tracking-[-0.055em] sm:text-6xl lg:text-8xl"
						>
							The first
							<span className="text-primary-400"> battle.</span>
						</motion.h1>

						<p className="text-muted-foreground mt-5 max-w-2xl text-sm leading-7 sm:text-base">
							Round 01 brought together teams ready to test their speed, logic,
							creativity, and ability to build under pressure.
						</p>
					</div>

					<motion.div
						initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
						animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="border-border bg-card relative overflow-hidden rounded-lg border p-6 shadow-sm"
					>
						<div className="bg-primary-400/5 absolute top-0 right-0 size-24 rounded-full blur-2xl" />

						<div className="relative">
							<div className="text-muted flex items-center gap-2">
								<Users size={15} />
								<span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
									Teams
								</span>
							</div>

							<div className="font-display text-foreground mt-2 text-6xl font-bold tracking-[-0.06em]">
								{totalTeams}
							</div>

							<p className="text-muted-foreground mt-1 text-xs">
								registered for Round 01
							</p>
						</div>
					</motion.div>
				</section>

				{/* Divider */}
				<div className="bg-border my-10 h-px lg:my-14" />

				{/* Directory header */}
				<section>
					<div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-primary-400 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
								Team directory
							</p>

							<h2 className="font-display text-foreground mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
								Every team that entered the arena.
							</h2>

							<p className="text-muted-foreground mt-2 text-sm">
								Showing {filteredTeams.length} of {totalTeams} teams.
							</p>
						</div>

						<div className="relative w-full md:max-w-xs">
							<Search
								size={16}
								className="text-muted pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2"
							/>

							<input
								type="search"
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								placeholder="Search team or leader..."
								className="border-border bg-surface-raised text-foreground placeholder:text-muted focus:border-primary-400/60 focus:ring-primary-400/10 h-11 w-full rounded-lg border pr-4 pl-10 text-sm transition-colors outline-none focus:ring-2"
							/>
						</div>
					</div>

					{/* Teams */}
					<div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{filteredTeams.map((team, index) => (
							<TeamCard
								key={`${team.teamName}-${team.teamLeader}`}
								team={team}
								index={index}
								reducedMotion={reducedMotion}
							/>
						))}
					</div>

					{/* Empty state */}
					{filteredTeams.length === 0 && (
						<div className="border-border-strong bg-surface mt-7 rounded-xl border border-dashed p-10 text-center">
							<div className="border-border bg-surface-raised text-muted mx-auto flex size-11 items-center justify-center rounded-lg border">
								<Search size={18} />
							</div>

							<h3 className="font-display text-foreground mt-4 text-base font-bold">
								No teams found
							</h3>

							<p className="text-muted-foreground mt-1 text-sm">
								Try searching with a different team name or team leader.
							</p>
						</div>
					)}
				</section>

				{/* Footer note */}
				<div className="border-border mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
					<div className="text-muted flex items-center gap-2">
						<Sparkles size={14} className="text-primary-400" />
						<span className="font-mono text-[10px] tracking-[0.18em] uppercase">
							Round 01 / Complete
						</span>
					</div>

					<p className="text-muted-foreground text-xs">
						{totalTeams} teams listed in the official Round 01 results.
					</p>
				</div>
			</main>
		</div>
	);
}
