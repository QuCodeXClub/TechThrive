import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock3, Sparkles, Trophy } from "lucide-react";
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

export default function ResultsPage() {
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
				<section className="border-border bg-surface/70 relative mb-6 overflow-hidden border px-5 py-7 sm:px-8">
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
								Competition Results
							</span>
						</div>

						<h1 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-5xl">
							The results are
							<span className="text-primary-400 block">in.</span>
						</h1>

						<p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6 sm:text-base">
							Track every stage of the competition, explore published results, and see
							who is moving closer to the Grand Finale.
						</p>

						<div className="mt-6 flex flex-wrap gap-2">
							<StatusBadge type="success" icon={<CheckCircle2 size={13} />}>
								Round 01 Published
							</StatusBadge>

							<StatusBadge icon={<Clock3 size={13} />}>Finale Upcoming</StatusBadge>
						</div>
					</div>
				</section>

				{/* Result cards */}
				<section className="grid gap-4 md:grid-cols-2">
					{/* Round 01 */}
					<motion.div
						whileHover={shouldReduceMotion ? undefined : { y: -3 }}
						transition={{ duration: 0.2 }}
					>
						<PointedCard className="h-full">
							<div className="relative p-5 sm:p-6">
								<div className="bg-primary-500/5 pointer-events-none absolute -top-20 -right-20 h-40 w-40 blur-3xl" />

								<div className="relative z-10 flex items-start justify-between gap-4">
									<div>
										<div className="text-primary-400 font-mono text-[10px] font-bold tracking-[0.25em] uppercase">
											Round 01
										</div>

										<h2 className="font-display mt-2 text-xl font-bold tracking-tight uppercase sm:text-2xl">
											Results Published
										</h2>
									</div>

									<div className="border-success/20 bg-success/5 text-success shrink-0 border p-2">
										<CheckCircle2 size={20} />
									</div>
								</div>

								<p className="text-muted relative z-10 mt-3 max-w-lg text-sm leading-6">
									See the complete Round 01 standings, scores, rankings, and
									qualifying participants.
								</p>

								<div className="border-border bg-border relative z-10 mt-5 grid grid-cols-2 gap-px border">
									<InfoCell label="Status">
										<span className="text-success flex items-center gap-1.5">
											<span className="bg-success h-1.5 w-1.5" />
											COMPLETED
										</span>
									</InfoCell>

									<InfoCell label="Next">GRAND FINALE</InfoCell>
								</div>

								<Link
									to="/results/round-1"
									className="group border-primary-400/30 bg-primary-400/5 text-primary-400 hover:border-primary-400/60 hover:bg-primary-400/10 relative z-10 mt-5 flex items-center justify-between border px-4 py-3 text-xs font-bold tracking-wider uppercase transition"
								>
									<span>View Round 01 Results</span>

									<ArrowUpRight
										size={16}
										className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</Link>
							</div>
						</PointedCard>
					</motion.div>

					{/* Grand Finale */}
					<motion.div
						whileHover={shouldReduceMotion ? undefined : { y: -3 }}
						transition={{ duration: 0.2 }}
					>
						<PointedCard className="h-full">
							<div className="relative p-5 sm:p-6">
								<div className="bg-primary-500/5 pointer-events-none absolute -top-20 -right-20 h-40 w-40 blur-3xl" />

								<div className="relative z-10 flex items-start justify-between gap-4">
									<div>
										<div className="text-primary-400 font-mono text-[10px] font-bold tracking-[0.25em] uppercase">
											Grand Finale
										</div>

										<h2 className="font-display mt-2 text-xl font-bold tracking-tight uppercase sm:text-2xl">
											Results Coming Soon
										</h2>
									</div>

									<motion.div
										className="border-primary-400/20 bg-primary-400/5 text-primary-400 shrink-0 border p-2"
										animate={
											shouldReduceMotion
												? undefined
												: {
														y: [0, -3, 0],
														rotate: [0, 2, 0],
													}
										}
										transition={{
											duration: 3,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									>
										<Trophy size={20} />
									</motion.div>
								</div>

								<p className="text-muted relative z-10 mt-3 max-w-lg text-sm leading-6">
									The final battle is approaching. Final rankings will be
									published here after the competition concludes.
								</p>

								<div className="border-border bg-border relative z-10 mt-5 grid grid-cols-2 gap-px border">
									<InfoCell label="Status">
										<span className="text-primary-400 flex items-center gap-1.5">
											<span className="bg-primary-400 h-1.5 w-1.5 animate-pulse" />
											UPCOMING
										</span>
									</InfoCell>

									<InfoCell label="Date">15 SEP</InfoCell>
								</div>

								<Link
									to="/results/grand-finale"
									className="group border-border-strong bg-surface-raised text-muted hover:border-primary-400/30 hover:bg-primary-400/5 hover:text-primary-400 relative z-10 mt-5 flex items-center justify-between border px-4 py-3 text-xs font-bold tracking-wider uppercase transition"
								>
									<span>View Finale</span>

									<ArrowUpRight
										size={16}
										className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</Link>
							</div>
						</PointedCard>
					</motion.div>
				</section>
			</div>
		</main>
	);
}
