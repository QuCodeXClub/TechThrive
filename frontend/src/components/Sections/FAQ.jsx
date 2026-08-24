import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, CircleHelp, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";

const faqs = [
	{
		q: "How many members should be in a team?",
		a: "Each team must have exactly 6 members.",
	},
	{
		q: "Is there a female-member requirement?",
		a: "Yes. Each team must include at least 1 female member.",
	},
	{
		q: "What is the registration fee?",
		a: "The registration fee is ₹150 per team.",
	},
	{
		q: "Where can we register?",
		a: "Registration is conducted through Unstop.",
	},
	{
		q: "Which problem statements will be used?",
		a: "Round 1 uses the official SIH problem statements selected for TechThrive 2026.",
	},
	{
		q: "When is Round 1?",
		a: "Round 1 will be conducted on 7th and 8th September 2026 at Computer Centre (E310).",
	},
	{
		q: "What is the format of Round 1?",
		a: "Round 1 consists of scheduled time-slot presentations, problem screening and evaluation by a panel.",
	},
	{
		q: "When is Round 2?",
		a: "Round 2 is scheduled for 15 September 2026.",
	},
	{
		q: "How long is Round 2?",
		a: "Round 2 is an intensive 7-hour internal hackathon.",
	},
	{
		q: "What happens after Round 1?",
		a: "Selected teams advance to Round 2. High-potential teams also receive faculty mentorship to refine their concepts, technical approach and documentation.",
	},
	{
		q: "How does SIH nomination work?",
		a: "Top-performing teams will be finalized for official SIH nomination through Unstop, official SIH channels and university guidelines.",
	},
];

function FAQ() {
	const shouldReduceMotion = useReducedMotion();
	const [activeIndex, setActiveIndex] = useState(0);

	const activeFAQ = faqs[activeIndex];

	return (
		<section
			id="faq"
			className="bg-background relative overflow-hidden py-16 sm:py-20 lg:py-24"
		>
			{/* Background detail */}
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/[0.025] absolute top-[-10rem] right-[-12rem] size-[30rem] rounded-full blur-[140px]" />

				<div
					className="absolute right-0 bottom-0 h-[70%] w-[45%] opacity-[0.012]"
					style={{
						backgroundImage:
							"linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
				{/* HEADER */}
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="border-border border-b pb-8"
				>
					<div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
						<div>
							<div className="mb-4 flex items-center gap-3">
								<span className="bg-primary-500 size-1.5 rounded-full" />

								<span className="text-primary-500 font-mono text-[9px] font-semibold tracking-[0.2em] uppercase">
									06 / Frequently Asked
								</span>
							</div>

							<h2 className="font-display text-foreground max-w-2xl text-3xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
								Questions,
								<br />
								<span className="text-muted">answered clearly.</span>
							</h2>
						</div>

						<div className="lg:pb-1">
							<p className="text-muted max-w-sm text-sm leading-6">
								Everything you need to know before registering, presenting and
								moving through the TechThrive selection process.
							</p>

							<div className="mt-4 flex items-center gap-3">
								<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.18em] uppercase">
									11 Questions
								</span>

								<span className="bg-border h-px w-8" />

								<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
									2026
								</span>
							</div>
						</div>
					</div>
				</motion.div>

				{/* FAQ EXPLORER */}
				<div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
					{/* QUESTIONS */}
					<motion.div
						initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
						whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={{ duration: 0.6 }}
					>
						<div className="mb-4 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<MessageCircleQuestion className="text-primary-500 size-3.5" />

								<span className="text-muted font-mono text-[8px] font-semibold tracking-[0.18em] uppercase">
									Select a question
								</span>
							</div>

							<span className="text-muted font-mono text-[8px]">
								{String(faqs.length).padStart(2, "0")}
							</span>
						</div>

						<div className="border-border border-t">
							{faqs.map((faq, index) => {
								const isActive = activeIndex === index;

								return (
									<button
										key={faq.q}
										type="button"
										onClick={() => setActiveIndex(index)}
										aria-selected={isActive}
										className="group border-border relative flex w-full cursor-pointer items-start gap-4 border-b py-4 text-left transition-colors sm:py-5"
									>
										{/* Number */}
										<span
											className={[
												"w-7 shrink-0 pt-0.5 font-mono text-[9px] font-semibold transition-colors",
												isActive
													? "text-primary-500"
													: "text-muted/50 group-hover:text-primary-500",
											].join(" ")}
										>
											{String(index + 1).padStart(2, "0")}
										</span>

										{/* Question */}
										<span
											className={[
												"flex-1 pr-4 text-sm leading-5 font-medium transition-colors",
												isActive
													? "text-foreground"
													: "text-muted group-hover:text-foreground",
											].join(" ")}
										>
											{faq.q}
										</span>

										<ChevronDown
											className={[
												"mt-0.5 size-3.5 shrink-0 transition-all duration-300",
												isActive
													? "text-primary-500 rotate-[-90deg]"
													: "text-muted group-hover:text-foreground",
											].join(" ")}
										/>

										{/* Active indicator */}
										<motion.span
											initial={false}
											animate={{
												scaleY: isActive ? 1 : 0,
												opacity: isActive ? 1 : 0,
											}}
											className="bg-primary-500 absolute top-0 bottom-0 left-0 w-px origin-center"
										/>
									</button>
								);
							})}
						</div>
					</motion.div>

					{/* ANSWER */}
					<motion.div
						initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
						whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={{ duration: 0.6, delay: 0.08 }}
						className="relative lg:pt-7"
					>
						<div className="border-border relative min-h-[23rem] border-y py-8 sm:min-h-[25rem] sm:py-10 lg:border-t-0 lg:border-b lg:py-9 lg:pl-10">
							{/* Decorative vertical line */}
							<div className="bg-primary-500/30 absolute top-0 bottom-0 left-0 hidden w-px lg:block" />

							{/* Background number */}
							<div className="text-foreground/[0.025] pointer-events-none absolute top-4 right-0 font-mono text-[7rem] leading-none font-semibold tracking-[-0.08em] select-none sm:text-[9rem]">
								{String(activeIndex + 1).padStart(2, "0")}
							</div>

							<motion.div
								key={activeIndex}
								initial={
									shouldReduceMotion
										? false
										: {
												opacity: 0,
												y: 10,
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
								className="relative flex h-full flex-col"
							>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="border-primary-500/30 bg-primary-500/[0.05] flex size-9 items-center justify-center border">
											<CircleHelp className="text-primary-500 size-4" />
										</div>

										<div>
											<p className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.18em] uppercase">
												Answer
											</p>

											<p className="text-muted mt-1 font-mono text-[7px] tracking-[0.14em] uppercase">
												Question {String(activeIndex + 1).padStart(2, "0")}
											</p>
										</div>
									</div>

									<span className="text-muted font-mono text-[8px]">
										{String(activeIndex + 1).padStart(2, "0")} /{" "}
										{String(faqs.length).padStart(2, "0")}
									</span>
								</div>

								<div className="mt-12 max-w-2xl sm:mt-14">
									<h3 className="font-display text-foreground text-2xl leading-[0.98] font-semibold tracking-[-0.035em] sm:text-3xl lg:text-4xl">
										{activeFAQ.q}
									</h3>

									<div className="bg-border my-7 h-px w-full" />

									<p className="text-muted max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
										{activeFAQ.a}
									</p>
								</div>

								<div className="mt-auto pt-10">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<span className="bg-primary-500 size-1.5 rounded-full" />

											<span className="text-muted font-mono text-[8px] tracking-[0.15em] uppercase">
												TechThrive 2026
											</span>
										</div>

										<a
											href="#rules"
											className="text-primary-500 hover:text-primary-400 group inline-flex items-center gap-2 text-[10px] font-semibold transition-colors"
										>
											Rules & evaluation
											<ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
										</a>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* FOOTER */}
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="border-border mt-6 flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between"
				>
					<p className="text-muted text-xs">
						Still unsure? Start with the rules, then choose your challenge.
					</p>

					<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
						11 answers · one pathway
					</span>
				</motion.div>
			</div>
		</section>
	);
}

export default FAQ;
