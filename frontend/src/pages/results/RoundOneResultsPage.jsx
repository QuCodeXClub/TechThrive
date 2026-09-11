import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Search, Sparkles, Trophy, Users } from "lucide-react";
import { useMemo, useState } from "react";

const roundOneResults = [
	{ teamName: "3 AM ENGINEERS", teamLeader: "MANAS MISHRA" },
	{ teamName: "ALPHAX", teamLeader: "VAIBHAV SAINI" },
	{ teamName: "APEX.CODERS", teamLeader: "VIDIT GOYAL" },
	{ teamName: "BUG BUSTERS", teamLeader: "GAGAN TYAGI" },
	{ teamName: "CATALYST CREW", teamLeader: "AKHLAQUE HUSSAIN" },
	{ teamName: "CODE BUDDY", teamLeader: "PUSHKAR RAJ" },
	{ teamName: "CODE HUSTLERS", teamLeader: "VANSH SAINI" },
	{ teamName: "CODE MINDS", teamLeader: "SHIVANSHU SINGH" },
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

const sparklePositions = [
	{ left: "6%", top: "15%", delay: 0 },
	{ left: "17%", top: "73%", delay: 1 },
	{ left: "31%", top: "29%", delay: 1.8 },
	{ left: "48%", top: "11%", delay: 0.5 },
	{ left: "63%", top: "76%", delay: 1.3 },
	{ left: "76%", top: "23%", delay: 0.2 },
	{ left: "91%", top: "57%", delay: 1.6 },
];

function FloatingSparkles({ reduceMotion }) {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			{sparklePositions.map((star, index) => (
				<motion.span
					key={index}
					className="text-primary-400/40 absolute"
					style={{
						left: star.left,
						top: star.top,
					}}
					animate={
						reduceMotion
							? undefined
							: {
									opacity: [0.15, 0.8, 0.15],
									scale: [0.7, 1.15, 0.7],
									y: [0, -6, 0],
								}
					}
					transition={
						reduceMotion
							? undefined
							: {
									duration: 3.2,
									delay: star.delay,
									repeat: Infinity,
									ease: "easeInOut",
								}
					}
				>
					<Sparkles size={index % 2 === 0 ? 12 : 8} />
				</motion.span>
			))}
		</div>
	);
}

function TeamMark({ name }) {
	const letters = name
		.replace(/[^a-zA-Z0-9 ]/g, "")
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word.charAt(0))
		.join("");

	return (
		<div className="border-border bg-surface font-display text-primary-400 relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border text-xs font-bold">
			<div className="bg-primary-400/5 absolute inset-0" />
			<span className="relative">{letters}</span>
		</div>
	);
}

function TeamCard({ team, index, reduceMotion }) {
	return (
		<motion.article
			initial={
				reduceMotion
					? false
					: {
							opacity: 0,
							y: 12,
						}
			}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.3,
				delay: reduceMotion ? 0 : Math.min(index * 0.018, 0.35),
			}}
			className="group border-border bg-card hover:border-primary-400/30 hover:bg-surface-raised relative overflow-hidden rounded-lg border transition duration-300"
		>
			{/* subtle accent */}
			<div className="bg-primary-400/0 group-hover:bg-primary-400 absolute top-0 bottom-0 left-0 w-px transition duration-300" />

			<div className="flex min-h-[88px] items-center gap-4 px-4 py-4 sm:px-5">
				<TeamMark name={team.teamName} />

				<div className="min-w-0 flex-1">
					<h3 className="font-display text-card-foreground truncate text-sm font-bold tracking-tight uppercase sm:text-[15px]">
						{team.teamName}
					</h3>

					<div className="mt-1.5 flex min-w-0 items-center gap-2">
						<span className="bg-primary-400 h-1 w-1 shrink-0 rounded-full" />

						<span className="text-muted truncate text-[10px] font-medium tracking-[0.12em] uppercase">
							{team.teamLeader}
						</span>
					</div>
				</div>

				<div className="hidden shrink-0 text-right sm:block">
					<div className="text-muted font-mono text-[8px] tracking-[0.2em] uppercase">
						Team Leader
					</div>
				</div>
			</div>
		</motion.article>
	);
}

export default function RoundOneResultsPage() {
	const shouldReduceMotion = useReducedMotion();
	const [search, setSearch] = useState("");

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
		<main className="bg-background text-foreground relative min-h-screen overflow-hidden py-16 sm:py-20 lg:py-24">
			{/* Background atmosphere */}
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/5 absolute top-[-180px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[150px]" />

				<div className="bg-primary-500/5 absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rounded-full blur-[130px]" />

				<div
					className="absolute inset-0 opacity-[0.025]"
					style={{
						backgroundImage:
							"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
						backgroundSize: "42px 42px",
					}}
				/>
			</div>

			<FloatingSparkles reduceMotion={shouldReduceMotion} />

			<div className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
				{/* Hero */}
				<section className="relative mb-10">
					<div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
						<div>
							<div className="mb-4 flex items-center gap-2">
								<div className="bg-primary-400 h-px w-8" />

								<span className="text-primary-400 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
									Competition / Round 01
								</span>
							</div>

							<h1 className="font-display max-w-3xl text-4xl leading-[0.95] font-bold tracking-[-0.04em] uppercase sm:text-6xl lg:text-7xl">
								The first
								<span className="text-primary-400 block">battle.</span>
							</h1>

							<p className="text-muted-foreground mt-5 max-w-xl text-sm leading-6 sm:text-base">
								Round 01 results are in. Explore the teams and the people leading
								them into the competition.
							</p>
						</div>

						{/* Big count */}
						<div className="border-border bg-card relative overflow-hidden rounded-2xl border px-6 py-5 sm:min-w-[190px]">
							<div className="bg-primary-400/5 absolute top-0 right-0 h-20 w-20 rounded-full blur-2xl" />

							<div className="relative">
								<div className="text-primary-400 flex items-center gap-2">
									<Users size={14} />

									<span className="font-mono text-[9px] font-bold tracking-[0.22em] uppercase">
										Teams
									</span>
								</div>

								<div className="font-display mt-1 text-5xl font-bold tracking-tight">
									44
								</div>

								<div className="text-muted mt-1 text-[9px] tracking-[0.2em] uppercase">
									Participating
								</div>
							</div>
						</div>
					</div>

					{/* Hero divider */}
					<div className="bg-border mt-8 h-px" />
				</section>

				{/* Results header */}
				<section className="mb-5">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<div className="mb-1 flex items-center gap-2">
								<Trophy size={14} className="text-primary-400" />

								<span className="text-primary-400 font-mono text-[9px] font-bold tracking-[0.25em] uppercase">
									Results Directory
								</span>
							</div>

							<h2 className="font-display text-2xl font-bold tracking-tight uppercase">
								All Teams
							</h2>
						</div>

						<div className="text-muted flex items-center gap-2 text-[9px] tracking-widest uppercase">
							<CheckCircle2 size={13} className="text-success" />
							Round Completed
						</div>
					</div>
				</section>

				{/* Search */}
				<div className="relative mb-5">
					<Search
						size={17}
						className="text-muted pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
					/>

					<input
						type="text"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
						placeholder="Find a team or team leader..."
						className="border-border bg-card text-foreground placeholder:text-muted focus:border-primary-400/40 focus:bg-surface-raised h-12 w-full rounded-lg border pr-4 pl-11 text-sm transition outline-none"
					/>

					{search && (
						<div className="text-muted pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 font-mono text-[9px] tracking-wider uppercase">
							{filteredTeams.length} found
						</div>
					)}
				</div>

				{/* Team grid */}
				{filteredTeams.length > 0 ? (
					<div className="grid gap-3 sm:grid-cols-2">
						{filteredTeams.map((team, index) => (
							<TeamCard
								key={team.teamName}
								team={team}
								index={index}
								reduceMotion={shouldReduceMotion}
							/>
						))}
					</div>
				) : (
					<div className="border-border bg-card rounded-lg border px-6 py-16 text-center">
						<div className="bg-surface text-muted mx-auto flex h-12 w-12 items-center justify-center rounded-lg">
							<Search size={20} />
						</div>

						<h3 className="font-display mt-4 text-sm font-bold uppercase">
							No results
						</h3>

						<p className="text-muted mt-1 text-xs">
							No team or team leader matches your search.
						</p>
					</div>
				)}

				{/* Footer */}
				<div className="border-border mt-6 flex flex-col gap-2 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-muted text-[9px] tracking-[0.18em] uppercase">
						Showing {filteredTeams.length} of {roundOneResults.length} teams
					</p>

					<div className="flex items-center gap-2">
						<span className="bg-success h-1.5 w-1.5 rounded-full" />

						<span className="text-muted font-mono text-[9px] tracking-[0.18em] uppercase">
							Round 01 Complete
						</span>
					</div>
				</div>
			</div>
		</main>
	);
}
