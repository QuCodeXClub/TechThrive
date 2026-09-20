import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Award, CheckCircle2, Crown, Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router";

const sparklePositions = [
	{ left: "4%", top: "12%", delay: 0 },
	{ left: "10%", top: "68%", delay: 0.8 },
	{ left: "18%", top: "34%", delay: 1.4 },
	{ left: "27%", top: "82%", delay: 0.3 },
	{ left: "37%", top: "20%", delay: 1.8 },
	{ left: "46%", top: "62%", delay: 1.1 },
	{ left: "55%", top: "30%", delay: 0.6 },
	{ left: "64%", top: "78%", delay: 1.6 },
	{ left: "73%", top: "15%", delay: 0.2 },
	{ left: "82%", top: "48%", delay: 1.3 },
	{ left: "91%", top: "22%", delay: 0.5 },
	{ left: "96%", top: "76%", delay: 1.9 },
];

const winningTeams = [
	{
		position: "01",
		teamName: "GAME OF NODES",
		leader: "Ashmit Kumar",
		members: [
			"Ashmit Kumar (Leader)",
			"Aditya Gupta",
			"Aditya Kumar",
			"Dev Prakash Azad",
			"Harshita Chauhan",
			"Tanushka Gupta",
		],
	},
	{
		position: "02",
		teamName: "TECHX",
		leader: "Sakshi Bisht",
		members: [
			"Sakshi Bisht (Leader)",
			"Kanupriya",
			"Neha Sharma",
			"Ritu",
			"Ritu Kumari",
			"Riya Sharma",
		],
	},
	{
		position: "03",
		teamName: "CODE HUSTLERS",
		leader: "Vansh Saini",
		members: [
			"Vansh Saini (Leader)",
			"Kajal Singh",
			"Amitabh Raj",
			"Ansh Sachdeva",
			"Aditya Nidhi",
			"Chitransh",
		],
	},
];

function FloatingSparkles({ reduceMotion }) {
	return (
		<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
			{sparklePositions.map((star, index) => (
				<motion.span
					key={index}
					className="text-primary-400/50 absolute"
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
									y: [0, -5, 0],
								}
					}
					transition={
						reduceMotion
							? undefined
							: {
									duration: 2.8,
									delay: star.delay,
									repeat: Infinity,
									ease: "easeInOut",
								}
					}
				>
					<Sparkles size={index % 3 === 0 ? 12 : 8} />
				</motion.span>
			))}
		</div>
	);
}

function PointedCard({ children, className = "" }) {
	return (
		<div
			className={`border-border bg-card relative overflow-hidden border ${className}`}
			style={{
				clipPath:
					"polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))",
			}}
		>
			{children}
		</div>
	);
}

function StatusBadge({ children, type = "primary", icon }) {
	const styles =
		type === "success"
			? "border-success/20 bg-success/5 text-success"
			: "border-primary-400/20 bg-primary-400/5 text-primary-400";

	return (
		<div
			className={`flex items-center gap-2 border px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase ${styles}`}
		>
			{icon}
			{children}
		</div>
	);
}

function InfoCell({ label, children }) {
	return (
		<div className="bg-surface/70 p-3">
			<div className="text-muted text-[9px] tracking-widest uppercase">{label}</div>

			<div className="text-foreground mt-1 text-xs font-bold">{children}</div>
		</div>
	);
}

function WinnerCard({ team, index, reduceMotion }) {
	return (
		<motion.div
			initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
			whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
			}}
			whileHover={reduceMotion ? undefined : { y: -4 }}
		>
			<PointedCard className="h-full">
				<div className="relative p-5 sm:p-6">
					{/* Ambient glow */}
					<div className="bg-primary-500/5 pointer-events-none absolute -top-20 -right-20 h-40 w-40 blur-3xl" />

					<div className="relative z-10 flex items-start justify-between gap-4">
						<div>
							<div className="text-primary-400 font-mono text-[10px] font-bold tracking-[0.25em] uppercase">
								Winning Team
							</div>

							<h2 className="font-display mt-2 text-xl font-bold tracking-tight uppercase sm:text-2xl">
								{team.teamName}
							</h2>
						</div>

						<div className="border-primary-400/20 bg-primary-400/5 text-primary-400 shrink-0 border p-2">
							<Award size={20} />
						</div>
					</div>

					{/* Position */}
					<div className="relative z-10 mt-5 flex items-center gap-3">
						<div className="text-primary-400/30 font-display text-5xl leading-none font-bold">
							{team.position}
						</div>

						<div>
							<div className="text-muted text-[9px] tracking-widest uppercase">
								Finalist
							</div>

							<div className="text-foreground mt-1 text-xs font-bold uppercase">
								Grand Finale
							</div>
						</div>
					</div>

					{/* Team info */}
					<div className="border-border bg-border relative z-10 mt-5 grid grid-cols-2 gap-px border">
						<InfoCell label="Status">
							<span className="text-success flex items-center gap-1.5">
								<span className="bg-success h-1.5 w-1.5" />
								WINNER
							</span>
						</InfoCell>

						<InfoCell label="Team Size">06 MEMBERS</InfoCell>
					</div>

					{/* Members */}
					<div className="relative z-10 mt-6">
						<div className="mb-3 flex items-center gap-2">
							<Crown size={13} className="text-primary-400" />

							<span className="text-primary-400 text-[10px] font-bold tracking-[0.2em] uppercase">
								Team Members
							</span>
						</div>

						<div className="space-y-2">
							{team.members.map((member, memberIndex) => {
								const isLeader = memberIndex === 0;

								return (
									<div
										key={member}
										className={`flex items-center gap-3 border px-3 py-2.5 ${
											isLeader
												? "border-primary-400/20 bg-primary-400/5"
												: "border-border bg-surface/50"
										}`}
									>
										<div
											className={`flex h-6 w-6 shrink-0 items-center justify-center text-[9px] font-bold ${
												isLeader
													? "bg-primary-400 text-background"
													: "bg-surface-raised text-muted"
											}`}
										>
											{String(memberIndex + 1).padStart(2, "0")}
										</div>

										<span
											className={`text-xs ${
												isLeader
													? "text-foreground font-bold"
													: "text-muted-foreground"
											}`}
										>
											{member}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</PointedCard>
		</motion.div>
	);
}

export default function GrandFinaleResultsPage() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<main className="bg-background text-foreground relative min-h-screen overflow-hidden py-16 sm:py-20 lg:py-24">
			{/* Ambient background */}
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/5 absolute top-0 left-1/2 h-[420px] w-[700px] -translate-x-1/2 blur-[140px]" />

				<div className="bg-primary-500/5 absolute bottom-0 left-0 h-[300px] w-[300px] blur-[100px]" />
			</div>

			{/* Global sparkle layer */}
			<FloatingSparkles reduceMotion={shouldReduceMotion} />

			<div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
				{/* Hero */}
				<section className="border-border bg-surface/70 relative mb-6 overflow-hidden border px-5 py-8 sm:px-8 sm:py-10">
					{/* Animated top edge */}
					<motion.div
						className="bg-primary-400 absolute top-0 right-0 left-0 h-px"
						animate={
							shouldReduceMotion
								? undefined
								: {
										opacity: [0.25, 0.8, 0.25],
									}
						}
						transition={{
							duration: 2.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>

					{/* Shimmer */}
					<motion.div
						className="via-primary-400/5 pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent to-transparent"
						animate={
							shouldReduceMotion
								? undefined
								: {
										x: ["0%", "500%"],
									}
						}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "linear",
						}}
					/>

					<div className="relative z-10">
						<div className="mb-3 flex items-center gap-2">
							<span className="bg-primary-400 h-1.5 w-1.5 animate-pulse" />

							<span className="text-primary-400 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
								TechThrive 2026
							</span>
						</div>

						<h1 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-5xl">
							The champions
							<span className="text-primary-400 block">are here.</span>
						</h1>

						<p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6 sm:text-base">
							The Grand Finale has come to an end. Meet the teams who made their mark
							and emerged as the champions of TechThrive.
						</p>

						<div className="mt-6 flex flex-wrap gap-2">
							<StatusBadge type="success" icon={<CheckCircle2 size={13} />}>
								Grand Finale Completed
							</StatusBadge>

							<StatusBadge icon={<Trophy size={13} />}>03 Winning Teams</StatusBadge>
						</div>
					</div>
				</section>

				{/* Winners heading */}
				<div className="mb-5 flex items-end justify-between gap-4">
					<div>
						<div className="text-primary-400 font-mono text-[10px] font-bold tracking-[0.25em] uppercase">
							Final Standings
						</div>

						<h2 className="font-display mt-2 text-2xl font-bold tracking-tight uppercase sm:text-3xl">
							The Winning Teams
						</h2>
					</div>

					<div className="text-muted hidden items-center gap-2 text-[10px] font-bold tracking-wider uppercase sm:flex">
						<Trophy size={14} />
						18 Participants
					</div>
				</div>

				{/* Winner cards */}
				<section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{winningTeams.map((team, index) => (
						<WinnerCard
							key={team.teamName}
							team={team}
							index={index}
							reduceMotion={shouldReduceMotion}
						/>
					))}
				</section>

				{/* Closing message */}
				<section className="border-border bg-surface/50 relative mt-6 overflow-hidden border px-5 py-7 text-center sm:px-8">
					<div className="relative z-10">
						<Trophy className="text-primary-400 mx-auto mb-3" size={24} />

						<h2 className="font-display text-xl font-bold tracking-tight uppercase sm:text-2xl">
							Every challenge. Every idea. Every team.
						</h2>

						<p className="text-muted mx-auto mt-3 max-w-xl text-sm leading-6">
							Congratulations to all the participants who made TechThrive a memorable
							experience. The journey doesn't end here.
						</p>

						<Link
							to="/"
							className="border-primary-400/30 bg-primary-400/5 text-primary-400 hover:border-primary-400/60 hover:bg-primary-400/10 group mx-auto mt-5 flex w-fit items-center gap-3 border px-5 py-3 text-xs font-bold tracking-wider uppercase transition"
						>
							Return to Home
							<ArrowLeft
								size={15}
								className="rotate-180 transition-transform duration-200 group-hover:translate-x-0.5"
							/>
						</Link>
					</div>
				</section>
			</div>
		</main>
	);
}
