import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Lightbulb, Rocket, Sparkles } from "lucide-react";

const principles = [
	{
		number: "01",
		icon: BrainCircuit,
		title: "Understand",
		text: "Start with the problem, not the technology. Strong teams understand what they are solving before deciding how to solve it.",
	},
	{
		number: "02",
		icon: Lightbulb,
		title: "Build",
		text: "Turn an idea into something tangible through technical thinking, experimentation and disciplined execution.",
	},
	{
		number: "03",
		icon: Rocket,
		title: "Go further",
		text: "The strongest solutions are not built to stop at the hackathon. They are built with the potential to move forward.",
	},
];

function About() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="about"
			className="bg-background relative overflow-hidden py-14 sm:py-16 lg:py-20"
		>
			<div className="bg-primary-500/[0.025] pointer-events-none absolute top-[-10rem] right-[-16rem] size-[34rem] rounded-full blur-[150px]" />

			<div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
				<div className="flex items-center justify-between pb-3">
					<div className="flex items-center gap-3">
						<span className="bg-primary-500 size-1.5 rounded-full" />

						<span className="text-primary-500 font-mono text-[9px] font-semibold tracking-[0.2em] uppercase">
							01 / About
						</span>
					</div>

					<span className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
						Internal SIH Qualification
					</span>
				</div>

				<div className="grid gap-10 pt-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20 lg:pt-14">
					<motion.div
						initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
						whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.7 }}
					>
						<div className="mb-5 flex items-center gap-2">
							<Sparkles className="text-primary-500 size-3.5" />

							<span className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
								The idea behind TechThrive
							</span>
						</div>

						<h2 className="font-display text-foreground max-w-3xl text-3xl leading-[0.9] font-semibold tracking-[-0.055em] sm:text-4xl lg:text-5xl">
							We are not looking
							<br />
							<span className="text-muted">for perfect ideas.</span>
						</h2>

						<h3 className="font-display text-foreground mt-5 max-w-2xl text-xl leading-[1] font-medium tracking-[-0.035em] sm:text-2xl">
							We are looking for teams capable of making good ideas real.
						</h3>
					</motion.div>

					<motion.div
						initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
						whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="lg:self-end"
					>
						<div className="border-border border-l pl-5 sm:pl-6">
							<div className="flex items-center justify-between">
								<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.18em] uppercase">
									Why it exists
								</span>

								<ArrowUpRight className="text-muted size-3.5" />
							</div>

							<p className="text-muted mt-4 max-w-sm text-sm leading-7">
								TechThrive is Quantum University's internal hackathon, organized by
								CodeX Club to identify, evaluate and mentor student teams with the
								potential to reach the Smart India Hackathon stage.
							</p>

							<div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
								<span className="text-muted font-mono text-[8px] tracking-[0.14em] uppercase">
									CodeX Club
								</span>

								<span className="text-muted font-mono text-[8px] tracking-[0.14em] uppercase">
									Quantum University
								</span>
							</div>
						</div>
					</motion.div>
				</div>

				<div className="border-border mt-12 border-t sm:mt-14 lg:mt-16">
					<div className="grid lg:grid-cols-[0.3fr_1fr]">
						<div className="border-border hidden border-r py-6 pr-8 lg:block">
							<p className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
								The standard
							</p>

							<p className="text-muted mt-3 max-w-[150px] text-xs leading-5">
								Three things define what we expect from every team.
							</p>
						</div>

						<div>
							{principles.map((item, index) => {
								const Icon = item.icon;

								return (
									<motion.article
										key={item.number}
										initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
										whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.2 }}
										transition={{
											duration: 0.55,
											delay: index * 0.08,
										}}
										className={[
											"border-border grid border-b py-6 sm:grid-cols-[90px_0.7fr_1fr] sm:gap-8 sm:py-7",
											index === 1 ? "lg:ml-[8%]" : "",
											index === 2 ? "lg:ml-[16%]" : "",
										].join(" ")}
									>
										<div className="flex items-center gap-3 pl-2">
											<Icon className="text-primary-500 size-4" />

											<span className="text-primary-500 font-mono text-[9px] font-semibold">
												{item.number}
											</span>
										</div>

										<div className="mt-4 sm:mt-0">
											<span className="text-muted font-mono text-[7px] tracking-[0.16em] uppercase">
												Signal
											</span>

											<h3 className="text-foreground mt-1 text-xl font-semibold tracking-tight">
												{item.title}
											</h3>
										</div>

										<p className="text-muted mt-3 max-w-lg text-sm leading-6 sm:mt-0">
											{item.text}
										</p>
									</motion.article>
								);
							})}
						</div>
					</div>
				</div>

				<div className="mt-7 flex items-center justify-between">
					<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
						TechThrive 2026
					</span>

					<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
						Ideas → Execution → Potential
					</span>
				</div>
			</div>
		</section>
	);
}

export default About;
