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
			className="bg-background relative overflow-hidden py-14 sm:py-16 lg:py-20"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/[0.03] absolute top-[-12rem] right-[-10rem] size-[30rem] rounded-full blur-[140px]" />

				<div className="bg-primary-500/[0.02] absolute bottom-[-14rem] left-[-10rem] size-[28rem] rounded-full blur-[140px]" />
			</div>

			<div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
				{/* HEADER */}

				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
				>
					<div>
						<div className="mb-4 flex items-center gap-3">
							<span className="bg-primary-500 size-1.5 rounded-full" />

							<span className="text-primary-500 font-mono text-[9px] font-semibold tracking-[0.2em] uppercase">
								03 / Problem Statements
							</span>
						</div>

						<h2 className="font-display text-foreground max-w-xl text-3xl leading-[0.9] font-semibold tracking-[-0.055em] sm:text-4xl lg:text-5xl">
							Find a problem.
							<br />
							<span className="text-muted">Make it matter.</span>
						</h2>
					</div>

					<div className="flex items-end gap-8 lg:pb-1">
						<div>
							<p className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
								Challenge pool
							</p>

							<p className="font-display text-foreground mt-1 text-3xl leading-none font-semibold tracking-[-0.05em]">
								08
							</p>
						</div>

						<div className="bg-border hidden h-10 w-px sm:block" />

						<p className="text-muted max-w-xs text-xs leading-5">
							Official SIH 2026 problem statements selected for TechThrive 2026.
						</p>
					</div>
				</motion.div>

				{/* MAIN BOARD */}

				<div className="mt-10 grid gap-1 lg:mt-12 lg:grid-cols-[0.95fr_1.05fr]">
					{/* FEATURED PROBLEM */}

					<motion.div
						key={active.id}
						initial={
							shouldReduceMotion
								? false
								: {
										opacity: 0,
										x: -15,
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
						transition={{ duration: 0.4 }}
						className="bg-surface-raised/40 border-border relative min-h-[390px] overflow-hidden border p-6 sm:p-8 lg:min-h-[440px] lg:p-10"
					>
						{/* Decorative number */}

						<div className="pointer-events-none absolute top-[-2rem] right-[-1rem]">
							<span className="font-display text-foreground/[0.025] text-[12rem] leading-none font-semibold tracking-[-0.1em]">
								{String(activeIndex + 1).padStart(2, "0")}
							</span>
						</div>

						<div className="relative flex h-full flex-col">
							<div className="flex items-start justify-between">
								<div className="flex items-center gap-3">
									<div className="border-border bg-background flex size-10 items-center justify-center border">
										<ActiveIcon className="text-primary-500 size-4" />
									</div>

									<div>
										<p className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.16em]">
											{active.id}
										</p>

										<p className="text-muted mt-1 font-mono text-[7px] tracking-[0.14em] uppercase">
											Selected challenge
										</p>
									</div>
								</div>

								<Sparkles className="text-primary-500/50 size-4" />
							</div>

							<div className="mt-auto pt-20">
								<p className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
									{active.domain}
								</p>

								<h3 className="font-display text-foreground mt-3 max-w-xl text-2xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-3xl lg:text-4xl">
									{active.title}
								</h3>

								<div className="mt-6 flex items-center gap-3">
									<span className="bg-primary-500 size-1.5 rounded-full" />

									<p className="text-muted max-w-md text-xs leading-5">
										{active.ministry}
									</p>
								</div>
							</div>

							<div className="border-border mt-7 flex items-center justify-between border-t pt-5">
								<span className="text-muted font-mono text-[7px] tracking-[0.14em] uppercase">
									Problem {String(activeIndex + 1).padStart(2, "0")} / 08
								</span>

								<button
									type="button"
									className="text-primary-500 hover:text-primary-400 group inline-flex cursor-pointer items-center gap-2 text-[9px] font-semibold transition-colors"
								>
									View challenge
									<ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</button>
							</div>
						</div>
					</motion.div>

					{/* PROBLEM SELECTOR */}

					<div className="border-border border-x border-b lg:border-b-0 lg:border-l-0">
						<div className="grid sm:grid-cols-2">
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
											duration: 0.4,
											delay: index * 0.04,
										}}
										className={[
											"group border-border relative min-h-[135px] cursor-pointer border-t p-5 text-left transition-all duration-300",
											index % 2 === 0 ? "sm:border-r" : "",
											isActive
												? "bg-primary-500/[0.045]"
												: "hover:bg-surface-raised/50",
										].join(" ")}
									>
										<div className="flex items-start justify-between">
											<div
												className={[
													"flex size-8 items-center justify-center border transition-colors",
													isActive
														? "border-primary-500/40 bg-primary-500/10"
														: "border-border",
												].join(" ")}
											>
												<Icon
													className={[
														"size-3.5",
														isActive
															? "text-primary-500"
															: "text-muted",
													].join(" ")}
												/>
											</div>

											<span
												className={[
													"font-mono text-[8px] font-semibold",
													isActive ? "text-primary-500" : "text-muted",
												].join(" ")}
											>
												{problem.id}
											</span>
										</div>

										<div className="mt-5">
											<p
												className={[
													"text-xs font-medium transition-colors",
													isActive
														? "text-foreground"
														: "text-muted group-hover:text-foreground",
												].join(" ")}
											>
												{problem.short}
											</p>

											<p className="text-muted mt-1 font-mono text-[7px] tracking-[0.1em] uppercase">
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

				{/* BOTTOM SIGNAL */}

				<div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-3">
						<span className="text-primary-500 font-mono text-[9px] font-semibold">
							08
						</span>

						<span className="bg-border h-px w-8" />

						<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
							Selected SIH challenges
						</span>
					</div>

					<a
						href="#journey"
						className="text-primary-500 hover:text-primary-400 group inline-flex items-center gap-2 text-[10px] font-semibold transition-colors"
					>
						Understand the selection process
						<ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Problems;
