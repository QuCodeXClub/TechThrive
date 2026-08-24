import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowDownRight,
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
			className="bg-background relative overflow-hidden py-16 sm:py-20 lg:py-24"
		>
			<div className="relative z-10 mx-auto w-full max-w-[1500px] min-w-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
					className="min-w-0"
				>
					<div className="flex min-w-0 items-center justify-between gap-4">
						<div className="flex min-w-0 items-center gap-3">
							<span className="bg-primary-500 size-1.5 shrink-0 rounded-full" />

							<span className="text-primary-500 min-w-0 font-mono text-[9px] font-semibold tracking-[0.2em] uppercase">
								02 / Journey
							</span>
						</div>

						<span className="text-muted hidden shrink-0 font-mono text-[8px] tracking-[0.18em] uppercase sm:block">
							04 stages · 01 destination
						</span>
					</div>

					<div className="grid min-w-0 gap-8 pt-9 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-20 lg:pt-14">
						<div className="min-w-0">
							<div className="mb-4 flex items-center gap-2">
								<Sparkles className="text-primary-500 size-3.5 shrink-0" />

								<span className="text-muted min-w-0 font-mono text-[8px] tracking-[0.18em] uppercase">
									The path forward
								</span>
							</div>

							<h2 className="font-display text-foreground max-w-full text-3xl leading-[0.9] font-semibold tracking-[-0.055em] sm:text-4xl lg:max-w-2xl lg:text-5xl">
								From submission
								<br />
								<span className="text-muted">to final nomination.</span>
							</h2>
						</div>

						<div className="min-w-0 md:self-end">
							<div className="border-border min-w-0 border-l pl-4 sm:pl-6">
								<p className="text-muted max-w-sm text-sm leading-6 sm:leading-7">
									Every stage is designed to test the team, the idea and its
									readiness to move beyond TechThrive.
								</p>

								<div className="mt-4 flex min-w-0 flex-wrap items-center gap-3 sm:mt-5">
									<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.16em] uppercase">
										Submission
									</span>

									<ArrowDownRight className="text-muted size-3 shrink-0" />

									<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
										Finale
									</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<div className="mt-9 min-w-0 sm:mt-12 md:mt-14 lg:mt-16">
					<div className="hidden min-w-0 md:grid md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
						<div className="border-border min-w-0 border-y md:border-y-0 md:border-r">
							<div className="flex min-w-0 items-center justify-between gap-3 py-5 md:pr-6 lg:pr-8">
								<span className="text-muted min-w-0 font-mono text-[8px] tracking-[0.18em] uppercase">
									Selection path
								</span>

								<span className="text-primary-500 shrink-0 font-mono text-[8px] font-semibold">
									{String(active + 1).padStart(2, "0")} / 04
								</span>
							</div>

							<div className="min-w-0 md:pr-6 lg:pr-8">
								{journey.map((stage, index) => {
									const Icon = stage.icon;
									const isActive = index === active;

									return (
										<button
											key={stage.number}
											type="button"
											onClick={() => setActive(index)}
											className={[
												"border-border group relative flex w-full min-w-0 cursor-pointer items-center gap-3 border-t py-5 text-left transition-all lg:gap-4",
												isActive ? "md:pl-3 lg:pl-4" : "",
											].join(" ")}
										>
											<div
												className={[
													"flex size-8 shrink-0 items-center justify-center rounded border transition-all",
													isActive
														? "border-primary-500 bg-primary-500/5"
														: "border-border group-hover:border-primary-500",
												].join(" ")}
											>
												<Icon
													className={[
														"size-3.5 shrink-0 transition-colors",
														isActive
															? "text-primary-500"
															: "text-muted group-hover:text-primary-500",
													].join(" ")}
												/>
											</div>

											<div className="min-w-0 flex-1 overflow-hidden">
												<div className="flex min-w-0 items-center gap-2">
													<span
														className={[
															"shrink-0 font-mono text-[8px] font-semibold",
															isActive
																? "text-primary-500"
																: "text-muted",
														].join(" ")}
													>
														{stage.number}
													</span>

													<span className="text-muted/40 shrink-0 font-mono text-[7px]">
														/
													</span>

													<span className="text-muted hidden min-w-0 truncate font-mono text-[7px] tracking-[0.15em] uppercase lg:inline">
														{stage.label}
													</span>
												</div>

												<h3
													className={[
														"mt-1 min-w-0 text-xs font-semibold break-words transition-colors lg:text-sm",
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
													"size-3.5 shrink-0 transition-all",
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
							className="relative min-h-[380px] min-w-0 overflow-hidden border-b md:border-y"
						>
							<div className="pointer-events-none absolute top-[-3rem] right-[-1rem] select-none">
								<span className="font-display text-foreground/[0.025] text-[10rem] leading-none font-semibold tracking-[-0.12em] lg:text-[14rem]">
									{activeStage.number}
								</span>
							</div>

							<div className="pointer-events-none absolute right-0 bottom-0 h-1/2 w-1/2 max-w-full opacity-[0.025]">
								<div
									className="h-full w-full"
									style={{
										backgroundImage:
											"linear-gradient(90deg, var(--foreground) 1px, transparent 1px), linear-gradient(var(--foreground) 1px, transparent 1px)",
										backgroundSize: "32px 32px",
									}}
								/>
							</div>

							<div className="relative flex h-full min-w-0 flex-col justify-between p-6 md:p-7 lg:p-10 xl:p-12">
								<div className="min-w-0">
									<div className="flex min-w-0 items-start justify-between gap-4">
										<div className="flex min-w-0 items-center gap-3">
											<div className="border-primary-500 flex size-10 shrink-0 items-center justify-center border">
												<ActiveIcon className="text-primary-500 size-4" />
											</div>

											<div className="min-w-0">
												<p className="text-primary-500 truncate font-mono text-[8px] font-semibold tracking-[0.18em] uppercase">
													{activeStage.label}
												</p>

												<p className="text-muted mt-1 font-mono text-[7px] tracking-[0.15em] uppercase">
													Stage {activeStage.number}
												</p>
											</div>
										</div>
									</div>

									<div className="mt-8 min-w-0 lg:mt-10">
										<div className="flex min-w-0 items-end gap-3 lg:gap-4">
											<span className="font-display min-w-0 text-5xl leading-[0.8] font-semibold tracking-[-0.08em] break-words sm:text-6xl lg:text-8xl">
												{activeStage.date}
											</span>

											<div className="shrink-0 pb-1">
												<p className="text-primary-500 font-mono text-[10px] font-bold">
													{activeStage.month}
												</p>

												<p className="text-muted mt-1 font-mono text-[8px]">
													{activeStage.year}
												</p>
											</div>
										</div>

										<h3 className="font-display text-foreground mt-6 max-w-full text-3xl leading-[0.9] font-semibold tracking-[-0.045em] break-words lg:mt-8 lg:max-w-xl lg:text-5xl">
											{activeStage.title}
										</h3>

										<p className="text-muted mt-4 max-w-full text-sm leading-6 break-words lg:mt-5 lg:max-w-lg lg:leading-7">
											{activeStage.description}
										</p>
									</div>
								</div>

								<div className="mt-8 min-w-0 lg:mt-10">
									<div className="border-border grid min-w-0 border-t pt-4 sm:grid-cols-3 lg:pt-5">
										{activeStage.details.map((detail, index) => (
											<div
												key={detail}
												className="flex min-w-0 items-start gap-2 py-1.5 sm:py-0 sm:pr-4 lg:pr-5"
											>
												<span className="text-primary-500 shrink-0 font-mono text-[8px] font-semibold">
													0{index + 1}
												</span>

												<span className="text-muted min-w-0 text-[10px] leading-5 break-words lg:text-[11px]">
													{detail}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					<div className="min-w-0 md:hidden">
						<div className="border-border min-w-0 border-y">
							<div className="flex min-w-0 items-center justify-between gap-3 py-4">
								<span className="text-muted min-w-0 font-mono text-[8px] tracking-[0.18em] uppercase">
									Selection path
								</span>

								<span className="text-primary-500 shrink-0 font-mono text-[8px] font-semibold">
									{String(active + 1).padStart(2, "0")} / 04
								</span>
							</div>

							<div className="border-border grid min-w-0 grid-cols-4 border-t">
								{journey.map((stage, index) => {
									const Icon = stage.icon;
									const isActive = index === active;

									return (
										<button
											key={stage.number}
											type="button"
											onClick={() => setActive(index)}
											className={[
												"flex max-w-full min-w-0 flex-col items-center justify-center gap-2 overflow-hidden px-0.5 py-3.5 transition-colors",
												index !== 0 ? "border-border border-l" : "",
												isActive ? "bg-primary-500/[0.035]" : "",
											].join(" ")}
										>
											<div
												className={[
													"flex size-8 shrink-0 items-center justify-center border",
													isActive
														? "border-primary-500 bg-primary-500/5"
														: "border-border",
												].join(" ")}
											>
												<Icon
													className={[
														"size-3.5 shrink-0",
														isActive
															? "text-primary-500"
															: "text-muted",
													].join(" ")}
												/>
											</div>

											<div className="w-full min-w-0 overflow-hidden px-0.5 text-center">
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

												<p
													className={[
														"mt-0.5 w-full min-w-0 overflow-hidden text-[7px] leading-3 font-medium break-words sm:text-[8px]",
														isActive ? "text-foreground" : "text-muted",
													].join(" ")}
												>
													{stage.title}
												</p>
											</div>
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
											y: 8,
										}
							}
							animate={
								shouldReduceMotion
									? {}
									: {
											opacity: 1,
											y: 0,
										}
							}
							transition={{ duration: 0.3 }}
							className="border-border relative mt-3 w-full min-w-0 overflow-hidden border"
						>
							<div className="pointer-events-none absolute top-[-1.5rem] right-[-0.5rem] select-none">
								<span className="font-display text-foreground/[0.025] text-[8rem] leading-none font-semibold tracking-[-0.12em]">
									{activeStage.number}
								</span>
							</div>

							<div className="pointer-events-none absolute right-0 bottom-0 h-1/2 w-2/3 max-w-full opacity-[0.025]">
								<div
									className="h-full w-full"
									style={{
										backgroundImage:
											"linear-gradient(90deg, var(--foreground) 1px, transparent 1px), linear-gradient(var(--foreground) 1px, transparent 1px)",
										backgroundSize: "28px 28px",
									}}
								/>
							</div>

							<div className="relative min-w-0 p-4 sm:p-5">
								<div className="flex min-w-0 items-center justify-between gap-3">
									<div className="flex min-w-0 items-center gap-2.5">
										<div className="border-primary-500 flex size-9 shrink-0 items-center justify-center border">
											<ActiveIcon className="text-primary-500 size-3.5" />
										</div>

										<div className="min-w-0">
											<p className="text-primary-500 truncate font-mono text-[8px] font-semibold tracking-[0.18em] uppercase">
												{activeStage.label}
											</p>

											<p className="text-muted mt-0.5 font-mono text-[7px] tracking-[0.15em] uppercase">
												Stage {activeStage.number}
											</p>
										</div>
									</div>
								</div>

								<div className="mt-7 flex min-w-0 items-end gap-3">
									<span className="font-display min-w-0 text-5xl leading-[0.8] font-semibold tracking-[-0.08em] break-words">
										{activeStage.date}
									</span>

									<div className="shrink-0 pb-0.5">
										<p className="text-primary-500 font-mono text-[9px] font-bold">
											{activeStage.month}
										</p>

										<p className="text-muted mt-0.5 font-mono text-[7px]">
											{activeStage.year}
										</p>
									</div>
								</div>

								<h3 className="font-display text-foreground mt-5 max-w-full text-2xl leading-[0.95] font-semibold tracking-[-0.045em] break-words">
									{activeStage.title}
								</h3>

								<p className="text-muted mt-3 max-w-full text-[13px] leading-6 break-words">
									{activeStage.description}
								</p>

								<div className="border-border mt-6 min-w-0 border-t pt-3">
									{activeStage.details.map((detail, index) => (
										<div
											key={detail}
											className={[
												"flex min-w-0 items-start gap-2.5 py-2",
												index !== 0 ? "border-border border-t" : "",
											].join(" ")}
										>
											<span className="text-primary-500 w-4 shrink-0 font-mono text-[8px] font-semibold">
												0{index + 1}
											</span>

											<span className="text-muted min-w-0 text-[11px] leading-5 break-words">
												{detail}
											</span>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				<div className="border-border mt-7 flex min-w-0 flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex min-w-0 items-start gap-3">
						<MapPin className="text-primary-500 mt-0.5 size-3.5 shrink-0" />

						<div className="min-w-0">
							<p className="text-foreground text-xs font-semibold break-words">
								Quantum University, Roorkee
							</p>

							<p className="text-muted mt-1 font-mono text-[7px] leading-4 tracking-[0.12em] break-words uppercase">
								Computer Centre E310 · Shyamji Auditorium
							</p>
						</div>
					</div>

					<div className="flex min-w-0 flex-wrap items-center gap-3 sm:justify-end sm:gap-4">
						<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
							Ideas
						</span>

						<span className="bg-border h-px w-5 shrink-0 sm:w-6" />

						<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
							Execution
						</span>

						<span className="bg-border h-px w-5 shrink-0 sm:w-6" />

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
