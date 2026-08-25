import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowDownRight,
	BrainCircuit,
	CheckCircle2,
	ChevronDown,
	FileText,
	Flag,
	Lightbulb,
	Rocket,
	Sparkles,
	Trophy,
	Users,
} from "lucide-react";
import { useState } from "react";

const journey = [
	{
		number: "01",
		eyebrow: "BEFORE REGISTRATION",
		title: "Form Your Team",
		subtitle: "Build Your 6-Member Team",
		description:
			"Start by forming a team of 6 members. Each team must have at least 1 female member.",
		body: "Choose teammates with different skills such as development, design, AI/ML, research, documentation, and presentation to build a strong and balanced team.",
		details: ["6 members", "At least 1 female member", "A team leader to coordinate the team"],
		icon: Users,
	},
	{
		number: "02",
		eyebrow: "REGISTRATION OPEN NOW",
		title: "Register for TechThrive",
		subtitle: "Complete Your Registration",
		description: "Register your team for TechThrive 2026 through Unstop.",
		body: "The registration fee is ₹150 per team. After registration, the payment form will be shared with the team leader. Make sure all team details are entered correctly before completing the registration process.",
		details: [
			"Register through Unstop",
			"₹150 per team",
			"Complete all team details correctly",
		],
		next: "Once registered, start working on your SIH 2026 Problem Statement.",
		icon: FileText,
	},
	{
		number: "03",
		eyebrow: "BEFORE SOLUTION DEVELOPMENT",
		title: "Choose Your Problem Statement",
		subtitle: "Select Your SIH 2026 Challenge",
		description:
			"Explore the available SIH 2026 Problem Statements and select the problem your team wants to solve.",
		body: "Understand the problem carefully, identify the real-world challenges involved, research existing solutions, and define how your idea can provide a better or more practical solution.",
		details: [
			"What problem are you solving?",
			"Who is affected by the problem?",
			"Why does the problem need to be solved?",
			"What will your proposed solution do?",
			"How is your solution different or better?",
		],
		icon: Lightbulb,
	},
	{
		number: "04",
		eyebrow: "06–09 SEPTEMBER 2026",
		title: "Prepare Your Solution PPT",
		subtitle: "Turn Your Idea Into a Solution",
		description: "After selecting your problem statement, prepare your SIH 2026 Solution PPT.",
		body: "Your presentation should clearly explain the problem, your proposed solution, how it will work, the technologies you plan to use, and the expected impact. Use this stage to refine your idea, divide responsibilities among team members, and prepare for the evaluation round.",
		details: [
			"Problem understanding",
			"Proposed solution",
			"Innovation",
			"Technology and implementation",
			"Feasibility",
			"Expected impact",
			"Team presentation",
		],
		icon: Sparkles,
	},
	{
		number: "05",
		eyebrow: "07–08 SEPTEMBER 2026",
		title: "Round 01: SIH Qualification Round",
		subtitle: "Present Your Solution",
		description: "Your team will present the proposed solution before the evaluation panel.",
		body: "A team-wise presentation schedule will be shared with registered teams. This round will evaluate how well your team understands the problem and how effectively you communicate your proposed solution.",
		venue: "Computer Centre (E310)",
		details: [
			"Problem understanding",
			"Quality of the proposed solution",
			"Innovation and uniqueness",
			"Technical feasibility",
			"Impact",
			"Presentation and communication",
		],
		next: "Based on the evaluation, selected teams will qualify for the Grand Finale.",
		icon: BrainCircuit,
	},
	{
		number: "06",
		eyebrow: "QUALIFICATION",
		title: "Get Qualified for the Grand Finale",
		subtitle: "Make It to the Next Stage",
		description:
			"Teams selected from Round 01 will advance to the TechThrive 2026 Grand Finale.",
		body: "Use this time to review the feedback received during Round 01, improve your idea, strengthen your technical approach, and prepare for the intensive hackathon.",
		details: [
			"Review Round 01 feedback",
			"Improve your idea",
			"Strengthen your technical approach",
			"Prepare for the hackathon",
		],
		next: "Qualified teams: Get ready to build.",
		icon: Trophy,
	},
	{
		number: "07",
		eyebrow: "15 SEPTEMBER 2026",
		title: "Round 02: Grand Finale",
		subtitle: "7 Hours to Build & Improve",
		description: "Qualified teams will participate in a 7-hour hackathon.",
		body: "This is where your idea moves from presentation to implementation. Your team will work together to build or improve the solution and prepare it for the final SIH submission. Use your time wisely and divide responsibilities across the team.",
		details: [
			"Build and improve the project",
			"Implement important features",
			"Fix and refine the solution",
			"Test the implementation",
			"Improve the overall approach",
			"Prepare the final Solution PPT",
		],
		icon: Rocket,
	},
	{
		number: "08",
		eyebrow: "AFTER THE GRAND FINALE",
		title: "Finalize Your SIH Solution",
		subtitle: "Polish Your Final Submission",
		description:
			"Once the Grand Finale ends, your team will finalize the solution and presentation.",
		body: "Review your project, incorporate the improvements made during the hackathon, make the final changes to your Solution PPT, and ensure that everything is ready for official SIH submission.",
		details: [
			"Review the completed project",
			"Incorporate hackathon improvements",
			"Finalize the Solution PPT",
			"Prepare for official submission",
		],
		icon: CheckCircle2,
	},
	{
		number: "09",
		eyebrow: "FINAL STEP",
		title: "Final SIH Submission",
		subtitle: "Submit Your Solution to SIH",
		description:
			"The final step is to upload your completed SIH Solution PPT on the official SIH portal as part of Quantum University's SIH 2026 nomination process.",
		body: "Make sure your final submission follows the required SIH guidelines and is submitted within the university's given timeline.",
		details: [
			"Complete SIH Solution PPT",
			"Follow official SIH guidelines",
			"Submit through the SIH portal",
			"Meet the university's submission timeline",
		],
		icon: Flag,
	},
];

function Journey() {
	const shouldReduceMotion = useReducedMotion();
	const [active, setActive] = useState(0);

	const toggleStage = (index) => {
		setActive((current) => (current === index ? -1 : index));
	};

	return (
		<section
			id="journey"
			className="bg-background relative overflow-hidden py-16 sm:py-20 lg:py-24"
		>
			<div className="pointer-events-none absolute inset-0 opacity-[0.025]">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(90deg, var(--foreground) 1px, transparent 1px), linear-gradient(var(--foreground) 1px, transparent 1px)",
						backgroundSize: "48px 48px",
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex min-w-0 items-center justify-between gap-4">
						<div className="flex min-w-0 items-center gap-3">
							<span className="bg-primary-500 size-1.5 shrink-0 rounded-full" />

							<span className="text-primary-500 min-w-0 font-mono text-[9px] font-semibold tracking-[0.2em] uppercase">
								01 / Journey
							</span>
						</div>

						<span className="text-muted hidden shrink-0 font-mono text-[8px] tracking-[0.18em] uppercase sm:block">
							01 destination
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

				<div className="relative mt-16 sm:mt-20 lg:mt-28">
					<div className="bg-border absolute top-0 bottom-0 left-[17px] w-px md:left-1/2 md:-translate-x-1/2" />

					<div className="space-y-6 sm:space-y-8 lg:space-y-10">
						{journey.map((stage, index) => {
							const Icon = stage.icon;
							const isOpen = active === index;
							const isLeft = index % 2 === 0;

							return (
								<motion.article
									key={stage.number}
									initial={
										shouldReduceMotion
											? false
											: {
													opacity: 0,
													y: 24,
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
									viewport={{
										once: true,
										amount: 0.1,
									}}
									transition={{
										duration: 0.5,
									}}
									className="relative"
								>
									<div className="absolute top-0 left-0 z-20 md:left-1/2 md:-translate-x-1/2">
										<div
											className={[
												"bg-background flex size-[35px] items-center justify-center rounded-full border transition-all duration-300 md:size-11",
												isOpen ? "border-primary-500" : "border-border",
											].join(" ")}
										>
											<Icon
												className={[
													"size-3.5 transition-colors md:size-4",
													isOpen ? "text-primary-500" : "text-muted",
												].join(" ")}
											/>
										</div>
									</div>

									<div className="md:grid md:grid-cols-2">
										<div
											className={[
												"pl-14 md:pl-0",
												isLeft
													? "md:pr-12 lg:pr-20"
													: "md:col-start-2 md:pl-12 lg:pl-20",
											].join(" ")}
										>
											<div
												className={[
													"border transition-colors duration-300",
													isOpen
														? "border-primary-500/50"
														: "border-border",
												].join(" ")}
											>
												<button
													type="button"
													onClick={() => toggleStage(index)}
													aria-expanded={isOpen}
													className="group flex w-full min-w-0 items-center gap-4 p-4 text-left sm:p-5 lg:p-6"
												>
													<div className="min-w-0 flex-1">
														<div className="flex min-w-0 items-center gap-2">
															<span
																className={[
																	"font-mono text-[8px] font-bold",
																	isOpen
																		? "text-primary-500"
																		: "text-muted",
																].join(" ")}
															>
																{stage.number}
															</span>

															<span className="text-muted/40 font-mono text-[7px]">
																/
															</span>

															<span className="text-muted min-w-0 truncate font-mono text-[7px] tracking-[0.15em] uppercase">
																{stage.eyebrow}
															</span>
														</div>

														<h3
															className={[
																"font-display mt-2 flex flex-wrap items-center gap-2 text-lg leading-none font-semibold tracking-[-0.035em] transition-colors sm:text-xl lg:text-2xl",
																isOpen
																	? "text-foreground"
																	: "text-muted group-hover:text-foreground",
															].join(" ")}
														>
															{stage.number === "05" ||
															stage.number === "07" ? (
																<>
																	<span className="bg-primary-500 text-background inline-flex items-center px-2 py-1 font-mono text-[11px] font-bold tracking-[0.12em] uppercase sm:text-[12px]">
																		Round{" "}
																		{stage.number === "05"
																			? "01"
																			: "02"}
																	</span>

																	<span>
																		{stage.number === "05"
																			? ": SIH Qualification Round"
																			: ": Grand Finale"}
																	</span>
																</>
															) : (
																stage.title
															)}
														</h3>

														<p className="text-primary-500 mt-2 font-mono text-[8px] font-semibold tracking-[0.12em] uppercase">
															{stage.subtitle}
														</p>

														<p className="text-muted mt-3 max-w-2xl text-[12px] leading-5 sm:text-[13px]">
															{stage.description}
														</p>
													</div>

													<div className="bg-primary-500 hover:bg-primary-600 border-primary-500 flex size-9 shrink-0 items-center justify-center border transition-colors sm:size-10">
														<ChevronDown
															className={[
																"text-background size-4 transition-transform duration-300",
																isOpen ? "rotate-180" : "",
															].join(" ")}
														/>
													</div>
												</button>

												<motion.div
													initial={false}
													animate={{
														height: isOpen ? "auto" : 0,
														opacity: isOpen ? 1 : 0,
													}}
													transition={{
														duration: shouldReduceMotion ? 0 : 0.3,
														ease: "easeInOut",
													}}
													className="overflow-hidden"
												>
													<div className="border-border border-t">
														<div className="relative overflow-hidden p-5 sm:p-6 lg:p-8">
															<div className="pointer-events-none absolute -top-8 -right-2 select-none">
																<span className="font-display text-foreground/[0.025] text-[8rem] leading-none font-semibold tracking-[-0.12em] sm:text-[10rem]">
																	{stage.number}
																</span>
															</div>

															<div className="relative">
																<p className="text-muted text-[13px] leading-6 sm:text-sm sm:leading-7">
																	{stage.body}
																</p>

																{"venue" in stage &&
																	stage.venue && (
																		<div className="border-primary-500/40 bg-primary-500/[0.025] mt-5 border-l px-4 py-3">
																			<p className="text-muted font-mono text-[7px] tracking-[0.16em] uppercase">
																				Venue
																			</p>

																			<p className="text-foreground mt-1 text-xs font-semibold">
																				{stage.venue}
																			</p>
																		</div>
																	)}

																<div className="border-border mt-6 border-t pt-5">
																	<p className="text-muted mb-3 font-mono text-[7px] font-semibold tracking-[0.18em] uppercase">
																		{stage.number === "03"
																			? "Your team should clearly understand"
																			: stage.number === "07"
																				? "During the 7 hours, your team will"
																				: stage.number ===
																					  "04"
																					? "Focus on"
																					: "Key points"}
																	</p>

																	<div className="grid gap-x-6 sm:grid-cols-2">
																		{stage.details.map(
																			(
																				detail,
																				detailIndex,
																			) => (
																				<div
																					key={detail}
																					className={[
																						"flex min-w-0 items-start gap-2.5 py-2",
																						detailIndex >
																						0
																							? "border-border border-t"
																							: "",
																					].join(" ")}
																				>
																					<span className="text-primary-500 w-4 shrink-0 pt-0.5 font-mono text-[8px] font-semibold">
																						{String(
																							detailIndex +
																								1,
																						).padStart(
																							2,
																							"0",
																						)}
																					</span>

																					<span className="text-muted min-w-0 text-[11px] leading-5">
																						{detail}
																					</span>
																				</div>
																			),
																		)}
																	</div>
																</div>

																{"next" in stage && stage.next && (
																	<div className="border-border mt-5 border-t pt-4">
																		<p className="text-primary-500 font-mono text-[7px] font-semibold tracking-[0.16em] uppercase">
																			Next
																		</p>

																		<p className="text-muted mt-1 text-[11px] leading-5">
																			{stage.next}
																		</p>
																	</div>
																)}
															</div>
														</div>
													</div>
												</motion.div>
											</div>
										</div>
									</div>
								</motion.article>
							);
						})}
					</div>
				</div>

				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}
					className="relative mt-16 sm:mt-20 lg:mt-24"
				>
					<div className="bg-border absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 md:block" />

					<div className="border-primary-500 bg-background relative mx-auto flex max-w-2xl flex-col items-center border px-6 py-8 text-center sm:px-10">
						<div className="bg-primary-500 flex size-11 items-center justify-center rounded-full">
							<Flag className="text-background size-4" />
						</div>

						<p className="text-primary-500 mt-5 font-mono text-[8px] font-semibold tracking-[0.2em] uppercase">
							Your TechThrive Journey
						</p>

						<h3 className="font-display text-foreground mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
							From team formation to SIH submission.
						</h3>

						<div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[8px] tracking-[0.12em] uppercase">
							{[
								"Form Your Team",
								"Register",
								"Choose Problem",
								"Prepare PPT",
								"Round 01",
								"Get Qualified",
								"Grand Finale",
								"Finalize",
								"SIH Submission",
							].map((item, index) => (
								<span key={item} className="flex items-center gap-2">
									<span
										className={index === 8 ? "text-primary-500" : "text-muted"}
									>
										{item}
									</span>

									{index < 8 && <span className="text-muted/40">→</span>}
								</span>
							))}
						</div>
					</div>
				</motion.div>

				<div className="border-border mt-12 flex flex-col gap-5 border-t pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-foreground text-xs font-semibold">
							Quantum University, Roorkee
						</p>

						<p className="text-muted mt-1 font-mono text-[7px] leading-4 tracking-[0.12em] uppercase">
							Computer Centre E310 · Shyamji Auditorium
						</p>
					</div>

					<div className="flex flex-wrap items-center gap-3 sm:justify-end sm:gap-4">
						<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
							Ideas
						</span>

						<span className="bg-border h-px w-5 sm:w-6" />

						<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
							Execution
						</span>

						<span className="bg-border h-px w-5 sm:w-6" />

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
