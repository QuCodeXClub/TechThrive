import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowUpRight,
	BrainCircuit,
	Globe2,
	HeartPulse,
	Landmark,
	ShieldCheck,
	Sparkles,
} from "lucide-react";
import { useState } from "react";

const problems = [
	{
		id: "SIH25001",
		title: "Smart Community Health Monitoring & Early Warning System",
		ministry: "Ministry of Development of NER",
		domain: "MedTech / HealthTech",
		icon: HeartPulse,
		short: "Community health",
	},
	{
		id: "SIH25002",
		title: "Smart Tourist Safety Monitoring & Incident Response System",
		ministry: "Ministry of Development of NER",
		domain: "Travel & Tourism",
		icon: ShieldCheck,
		short: "Tourist safety",
	},
	{
		id: "SIH25004",
		title: "Image based Breed Recognition for Cattle & Buffaloes",
		ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
		domain: "Computer Vision",
		icon: BrainCircuit,
		short: "Breed recognition",
	},
	{
		id: "SIH25040",
		title: "FloatChat: AI-Powered Conversational Interface for ARGO Ocean Data",
		ministry: "Ministry of Earth Sciences",
		domain: "Ocean Data",
		icon: Globe2,
		short: "Ocean intelligence",
	},
	{
		id: "SIH25066",
		title: "Development of AI-driven ChatBOT for INGRES",
		ministry: "Ministry of Jal Shakti",
		domain: "Smart Automation",
		icon: BrainCircuit,
		short: "Groundwater AI",
	},
	{
		id: "SIH25071",
		title: "AI-Based Rockfall Prediction and Alert System for Open-Pit Mines",
		ministry: "Ministry of Mines",
		domain: "Disaster Management",
		icon: ShieldCheck,
		short: "Mining safety",
	},
	{
		id: "SIH25092",
		title: "Development of a Digital Mental Health and Psychological Support System",
		ministry: "Government of Jammu & Kashmir",
		domain: "HealthTech",
		icon: HeartPulse,
		short: "Mental health",
	},
	{
		id: "SIH12508",
		title: "AI-powered FRA Atlas and WebGIS-based Decision Support System",
		ministry: "Ministry of Tribal Affairs",
		domain: "GIS / Decision Support",
		icon: Landmark,
		short: "FRA intelligence",
	},
];

function Problems() {
	const shouldReduceMotion = useReducedMotion();
	const [activeIndex, setActiveIndex] = useState(0);

	const active = problems[activeIndex];
	const ActiveIcon = active.icon;

	const selectProblem = (index) => {
		setActiveIndex(index);
	};

	return (
		<section
			id="problems"
			className="bg-background relative overflow-hidden py-16 sm:py-20 lg:py-24"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/[0.03] absolute top-[-10rem] right-[-12rem] size-[24rem] rounded-full blur-[120px] sm:size-[30rem] sm:blur-[140px]" />

				<div className="bg-primary-500/[0.02] absolute bottom-[-12rem] left-[-10rem] size-[24rem] rounded-full blur-[120px] sm:size-[28rem] sm:blur-[140px]" />
			</div>

			<div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
					className="grid gap-7 sm:gap-8 md:gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12"
				>
					<div className="min-w-0">
						<div className="mb-4 flex items-center gap-3">
							<span className="bg-primary-500 size-1.5 shrink-0 rounded-full" />

							<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.16em] uppercase sm:text-[9px] sm:tracking-[0.2em]">
								03 / Problem Statements
							</span>
						</div>

						<h2 className="font-display text-foreground max-w-xl text-[2rem] leading-[0.92] font-semibold tracking-[-0.055em] sm:text-4xl md:text-[2.65rem] lg:text-5xl">
							Find a problem.
							<br />
							<span className="text-muted">Make it matter.</span>
						</h2>
					</div>

					<div className="flex min-w-0 items-start gap-5 sm:gap-8 lg:pb-1">
						<div className="shrink-0">
							<p className="text-muted font-mono text-[7px] tracking-[0.14em] uppercase sm:text-[8px] sm:tracking-[0.16em]">
								Challenge pool
							</p>

							<p className="font-display text-foreground mt-1 text-2xl leading-none font-semibold tracking-[-0.05em] sm:text-3xl">
								08
							</p>
						</div>

						<div className="bg-border hidden h-10 w-px sm:block" />

						<p className="text-muted max-w-[19rem] text-[11px] leading-5 sm:text-xs">
							Official SIH 2026 problem statements selected for TechThrive 2026.
						</p>
					</div>
				</motion.div>

				<div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-1">
					<motion.div
						key={active.id}
						initial={
							shouldReduceMotion
								? false
								: {
										opacity: 0,
										x: -12,
									}
						}
						animate={
							shouldReduceMotion
								? {}
								: {
										opacity: 1,
										x: 0,
									}
						}
						transition={{ duration: 0.35, ease: "easeOut" }}
						className="bg-surface-raised/40 border-border relative flex h-full min-h-[420px] flex-col overflow-hidden border p-5 sm:p-7 md:p-8 lg:min-h-[460px] lg:p-10"
					>
						<div className="pointer-events-none absolute -top-6 -right-2 select-none sm:-top-8 sm:-right-4">
							<span className="font-display text-foreground/[0.025] text-[7rem] leading-none font-semibold tracking-[-0.1em] sm:text-[10rem] lg:text-[12rem]">
								{String(activeIndex + 1).padStart(2, "0")}
							</span>
						</div>

						<div className="relative flex min-h-0 flex-1 flex-col justify-between">
							{/* Top */}
							<div className="flex min-w-0 items-start justify-between gap-4">
								<div className="flex min-w-0 items-center gap-3">
									<div className="border-border/80 bg-background/70 flex size-10 shrink-0 items-center justify-center rounded-md border sm:size-11">
										<ActiveIcon className="text-primary-500 size-4" />
									</div>

									<div className="min-w-0">
										<p className="text-primary-500 truncate font-mono text-[8px] font-semibold tracking-[0.16em] uppercase sm:text-[9px]">
											{active.id}
										</p>

										<p className="text-muted mt-1 truncate font-mono text-[6px] tracking-[0.14em] uppercase sm:text-[7px]">
											Selected challenge
										</p>
									</div>
								</div>

								<Sparkles className="text-primary-500/40 size-4 shrink-0" />
							</div>

							{/* Bottom content */}
							<div className="mt-12 sm:mt-16">
								<p className="text-primary-500/70 font-mono text-[7px] font-medium tracking-[0.16em] uppercase sm:text-[8px]">
									{active.domain}
								</p>

								<h3 className="font-display text-foreground mt-2 max-w-2xl text-[1.6rem] leading-[0.98] font-semibold tracking-[-0.045em] break-words sm:mt-3 sm:text-3xl md:text-[2.1rem] lg:text-4xl">
									{active.title}
								</h3>

								<div className="mt-5 flex min-w-0 items-start gap-3 sm:mt-6 sm:items-center">
									<span className="bg-primary-500 mt-1.5 size-1.5 shrink-0 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.45)] sm:mt-0" />

									<p className="text-muted max-w-lg text-[11px] leading-relaxed sm:text-xs">
										{active.ministry}
									</p>
								</div>

								<div className="border-border/70 mt-8 border-t pt-4 sm:mt-10 sm:pt-5">
									<div className="flex items-center justify-between gap-4">
										<span className="text-muted font-mono text-[7px] tracking-[0.14em] uppercase sm:text-[8px] sm:tracking-[0.16em]">
											Problem {String(activeIndex + 1).padStart(2, "0")} / 08
										</span>

										<span className="text-primary-500/40 font-mono text-[7px] tracking-[0.14em] uppercase sm:text-[8px]">
											CodeX Club
										</span>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<div className="overflow-hidden">
						<div className="grid grid-cols-2 md:grid-cols-2">
							{problems.map((problem, index) => {
								const Icon = problem.icon;
								const isActive = index === activeIndex;

								return (
									<motion.button
										key={problem.id}
										type="button"
										onClick={() => selectProblem(index)}
										initial={
											shouldReduceMotion
												? false
												: {
														opacity: 0,
														y: 10,
													}
										}
										whileInView={
											shouldReduceMotion
												? {}
												: {
														opacity: 1,
														y: 0,
													}
										}
										viewport={{ once: true }}
										transition={{
											duration: 0.35,
											delay: index * 0.03,
										}}
										className={[
											"group border-border relative flex min-w-0 cursor-pointer flex-col border-t p-4 text-left transition-all duration-300 sm:min-h-[135px] sm:p-5 md:min-h-[145px] md:p-5",
											index % 2 === 0 ? "border-r" : "",
											isActive
												? "bg-primary-500/[0.045]"
												: "hover:bg-surface-raised/50",
										].join(" ")}
									>
										<div className="flex min-w-0 items-start justify-between gap-2">
											<div
												className={[
													"flex size-7 shrink-0 items-center justify-center border transition-colors sm:size-8",
													isActive
														? "border-primary-500/40 bg-primary-500/10"
														: "border-border",
												].join(" ")}
											>
												<Icon
													className={[
														"size-3 sm:size-3.5",
														isActive
															? "text-primary-500"
															: "text-muted",
													].join(" ")}
												/>
											</div>

											<span
												className={[
													"shrink-0 font-mono text-[7px] font-semibold sm:text-[8px]",
													isActive ? "text-primary-500" : "text-muted",
												].join(" ")}
											>
												{problem.id}
											</span>
										</div>

										<div className="mt-4 min-w-0 sm:mt-5">
											<p
												className={[
													"truncate text-[11px] font-medium sm:text-xs",
													isActive
														? "text-foreground"
														: "text-muted group-hover:text-foreground",
												].join(" ")}
											>
												{problem.short}
											</p>

											<p className="text-muted mt-1 truncate font-mono text-[6px] tracking-[0.08em] uppercase sm:text-[7px] sm:tracking-[0.1em]">
												{problem.domain}
											</p>
										</div>

										{isActive && (
											<motion.span
												layoutId="activeProblem"
												className="bg-primary-500 absolute top-0 bottom-0 left-0 w-0.5"
											/>
										)}
									</motion.button>
								);
							})}
						</div>
					</div>
				</div>

				<div className="border-border mt-6 flex flex-col gap-4 border-t pt-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex min-w-0 items-center gap-3">
						<span className="text-primary-500 shrink-0 font-mono text-[9px] font-semibold">
							08
						</span>

						<span className="bg-border h-px w-6 shrink-0 sm:w-8" />

						<span className="text-muted truncate font-mono text-[7px] tracking-[0.12em] uppercase sm:text-[8px] sm:tracking-[0.16em]">
							Selected SIH challenges
						</span>
					</div>

					<a
						href="#journey"
						className="text-primary-500 hover:text-primary-400 group inline-flex w-fit shrink-0 items-center gap-2 text-[9px] font-semibold transition-colors sm:text-[10px]"
					>
						<span>Understand the selection process</span>

						<ArrowUpRight className="size-3 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-3.5" />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Problems;
