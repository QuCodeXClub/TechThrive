import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowDownRight,
	ArrowUpRight,
	BrainCircuit,
	ChevronRight,
	Flag,
	MapPin,
	Rocket,
	Sparkles,
} from "lucide-react";
import { useState } from "react";

const journey = [
	{
		number: "01",
		date: "06–09",
		month: "SEP",
		year: "2026",
		title: "Submission",
		label: "STAGE 01",
		description: "Submit the SIH 2026 Solution PPT in the prescribed format for review.",
		details: ["SIH PPT template", "Unstop submission", "06 Sep to 09 Sep"],
		icon: Sparkles,
	},
	{
		number: "02",
		date: "07–08",
		month: "SEP",
		year: "2026",
		title: "SIH Qualification & Screening",
		label: "ROUND 01",
		description:
			"Scheduled time-slot presentations, problem screening and evaluation by a panel.",
		details: [
			"Computer Centre (E310)",
			"09:55 AM to 04:20 PM IST",
			"Presentation and screening",
		],
		icon: BrainCircuit,
	},
	{
		number: "03",
		date: "15",
		month: "SEP",
		year: "2026",
		title: "TechThrive Grand Finale",
		label: "ROUND 02",
		description:
			"Selected teams turn their ideas into working prototypes in a 7-hour build hackathon.",
		details: ["09:30 AM to 04:00 PM IST", "7-hour build hackathon", "Prototype demonstration"],
		icon: Rocket,
	},
	{
		number: "04",
		date: "AFTER",
		month: "ROUND 02",
		year: "2026",
		title: "Final Selection",
		label: "NEXT",
		description:
			"Top teams are considered for the university's SIH 2026 nomination and further mentorship.",
		details: ["Evaluation review", "Mentorship follow-up", "SIH consideration"],
		icon: Flag,
	},
];

function Journey() {
	const shouldReduceMotion = useReducedMotion();
	const [active, setActive] = useState(0);

	const activeStage = journey[active];
	const ActiveIcon = activeStage.icon;

	return (
		<section
			id="journey"
			className="bg-background relative overflow-hidden py-14 sm:py-16 lg:py-20"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/[0.025] absolute top-[-10rem] right-[-15rem] size-[34rem] rounded-full blur-[150px]" />

				<div
					className="absolute inset-0 opacity-[0.01]"
					style={{
						backgroundImage:
							"linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
						backgroundSize: "80px 80px",
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<span className="bg-primary-500 size-1.5 rounded-full" />

							<span className="text-primary-500 font-mono text-[9px] font-semibold tracking-[0.2em] uppercase">
								02 / Journey
							</span>
						</div>

						<span className="text-muted hidden font-mono text-[8px] tracking-[0.18em] uppercase sm:block">
							04 stages · 01 destination
						</span>
					</div>

					<div className="grid gap-8 pt-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20 lg:pt-14">
						<div>
							<div className="mb-4 flex items-center gap-2">
								<Sparkles className="text-primary-500 size-3.5" />

								<span className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
									The path forward
								</span>
							</div>

							<h2 className="font-display text-foreground max-w-2xl text-3xl leading-[0.9] font-semibold tracking-[-0.055em] sm:text-4xl lg:text-5xl">
								From submission
								<br />
								<span className="text-muted">to final nomination.</span>
							</h2>
						</div>

						<div className="lg:self-end">
							<div className="border-border border-l pl-5 sm:pl-6">
								<p className="text-muted max-w-sm text-sm leading-7">
									Every stage is designed to test the team, the idea and its
									readiness to move beyond TechThrive.
								</p>

								<div className="mt-5 flex items-center gap-3">
									<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.16em] uppercase">
										Submission
									</span>

									<ArrowDownRight className="text-muted size-3" />

									<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
										Finale
									</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<div className="mt-12 sm:mt-14 lg:mt-16">
					<div className="grid lg:grid-cols-[0.72fr_1.28fr]">
						<div className="border-border border-y lg:border-y-0 lg:border-r">
							<div className="flex items-center justify-between py-5 lg:pr-8">
								<span className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
									Selection path
								</span>

								<span className="text-primary-500 font-mono text-[8px] font-semibold">
									{String(active + 1).padStart(2, "0")} / 04
								</span>
							</div>

							<div className="lg:pr-8">
								{journey.map((stage, index) => {
									const Icon = stage.icon;
									const isActive = index === active;

									return (
										<button
											key={stage.number}
											type="button"
											onClick={() => setActive(index)}
											className={[
												"border-border group relative flex w-full cursor-pointer items-center gap-4 border-t py-5 text-left transition-all",
												isActive ? "lg:pl-4" : "",
											].join(" ")}
										>
											<div
												className={[
													"flex size-8 shrink-0 items-center justify-center border transition-all",
													isActive
														? "border-primary-500 bg-primary-500/5"
														: "border-border group-hover:border-primary-500",
												].join(" ")}
											>
												<Icon
													className={[
														"size-3.5 transition-colors",
														isActive
															? "text-primary-500"
															: "text-muted group-hover:text-primary-500",
													].join(" ")}
												/>
											</div>

											<div className="min-w-0 flex-1">
												<div className="flex items-center gap-2">
													<span
														className={[
															"font-mono text-[8px] font-semibold",
															isActive
																? "text-primary-500"
																: "text-muted",
														].join(" ")}
													>
														{stage.number}
													</span>

													<span className="text-muted/40 font-mono text-[7px]">
														/
													</span>

													<span className="text-muted font-mono text-[7px] tracking-[0.15em] uppercase">
														{stage.label}
													</span>
												</div>

												<h3
													className={[
														"mt-1 truncate text-sm font-semibold transition-colors",
														isActive
															? "text-foreground"
															: "text-muted group-hover:text-foreground",
													].join(" ")}
												>
													{stage.title}
												</h3>
											</div>

											<ChevronRight
												className={[
													"size-3.5 transition-all",
													isActive
														? "text-primary-500 translate-x-0"
														: "text-muted/40 -translate-x-1 group-hover:translate-x-0",
												].join(" ")}
											/>
										</button>
									);
								})}
							</div>
						</div>

						<motion.div
							key={activeStage.number}
							initial={
								shouldReduceMotion
									? false
									: {
											opacity: 0,
											x: 15,
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
							className="relative min-h-[400px] overflow-hidden border-b lg:border-y"
						>
							<div className="pointer-events-none absolute top-[-3rem] right-[-1rem] select-none">
								<span className="font-display text-foreground/[0.025] text-[14rem] leading-none font-semibold tracking-[-0.12em]">
									{activeStage.number}
								</span>
							</div>

							<div className="pointer-events-none absolute right-0 bottom-0 h-1/2 w-1/2 opacity-[0.025]">
								<div
									className="h-full w-full"
									style={{
										backgroundImage:
											"linear-gradient(90deg, var(--foreground) 1px, transparent 1px), linear-gradient(var(--foreground) 1px, transparent 1px)",
										backgroundSize: "32px 32px",
									}}
								/>
							</div>

							<div className="relative flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12">
								<div>
									<div className="flex items-start justify-between">
										<div className="flex items-center gap-3">
											<div className="border-primary-500 flex size-10 items-center justify-center border">
												<ActiveIcon className="text-primary-500 size-4" />
											</div>

											<div>
												<p className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.18em] uppercase">
													{activeStage.label}
												</p>

												<p className="text-muted mt-1 font-mono text-[7px] tracking-[0.15em] uppercase">
													Stage {activeStage.number}
												</p>
											</div>
										</div>

										<ArrowUpRight className="text-muted size-4" />
									</div>

									<div className="mt-10">
										<div className="flex items-end gap-4">
											<span className="font-display text-6xl leading-[0.8] font-semibold tracking-[-0.08em] sm:text-7xl lg:text-8xl">
												{activeStage.date}
											</span>

											<div className="pb-1">
												<p className="text-primary-500 font-mono text-[10px] font-bold">
													{activeStage.month}
												</p>

												<p className="text-muted mt-1 font-mono text-[8px]">
													{activeStage.year}
												</p>
											</div>
										</div>

										<h3 className="font-display text-foreground mt-8 max-w-xl text-3xl leading-[0.9] font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
											{activeStage.title}
										</h3>

										<p className="text-muted mt-5 max-w-lg text-sm leading-7">
											{activeStage.description}
										</p>
									</div>
								</div>

								<div className="mt-10">
									<div className="border-border grid border-t pt-5 sm:grid-cols-3">
										{activeStage.details.map((detail, index) => (
											<div
												key={detail}
												className="flex items-start gap-2 py-2 sm:py-0 sm:pr-5"
											>
												<span className="text-primary-500 font-mono text-[8px] font-semibold">
													0{index + 1}
												</span>

												<span className="text-muted text-[11px] leading-5">
													{detail}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				<div className="border-border mt-7 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-3">
						<MapPin className="text-primary-500 size-3.5" />

						<div>
							<p className="text-foreground text-xs font-semibold">
								Quantum University, Roorkee
							</p>

							<p className="text-muted mt-1 font-mono text-[7px] tracking-[0.12em] uppercase">
								Computer Centre E310 · Shyamji Auditorium
							</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
							Ideas
						</span>

						<span className="bg-border h-px w-6" />

						<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
							Execution
						</span>

						<span className="bg-border h-px w-6" />

						<span className="text-primary-500 font-mono text-[8px] tracking-[0.16em] uppercase">
							Potential
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Journey;
