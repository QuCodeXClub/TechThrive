import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

const benefits = ["Exactly 6 members", "₹150 per team", "SIH qualification pathway"];

function CTA() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="register"
			className="bg-background relative overflow-hidden py-24 sm:py-32 lg:py-40"
		>
			<div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
				{/* Top label */}
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="mb-12 flex items-center justify-between sm:mb-16"
				>
					<div className="flex items-center gap-3">
						<span className="bg-primary-500 size-2 rounded-full" />

						<span className="text-primary-500 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
							05 / Registration
						</span>
					</div>

					<span className="text-muted hidden font-mono text-[9px] tracking-[0.18em] uppercase sm:block">
						TechThrive 2026
					</span>
				</motion.div>

				{/* Main CTA */}
				<div className="grid lg:grid-cols-[1fr_0.42fr]">
					{/* Left */}
					<motion.div
						initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
						whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.7 }}
						className="relative"
					>
						<div className="max-w-5xl">
							<p className="text-muted mb-6 text-sm">
								Your team has the idea.
								<br />
								Now give it a stage.
							</p>

							<h2 className="font-display text-foreground text-[4rem] leading-[0.82] font-semibold tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
								Build.
								<br />
								<span className="text-muted">Compete.</span>
								<br />
								<span className="text-primary-500">Advance.</span>
							</h2>
						</div>

						<div className="mt-10 flex max-w-2xl flex-col gap-7 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
							<p className="text-muted max-w-lg text-sm leading-6 sm:text-base">
								Join TechThrive 2026 at Quantum University, Roorkee. Solve a real
								problem, build with your team and take your first step toward SIH.
							</p>

							<div className="shrink-0">
								<div className="text-primary-500 font-mono text-[9px] tracking-[0.18em] uppercase">
									Registration window
								</div>

								<div className="text-foreground mt-2 font-mono text-sm font-semibold">
									20 — 25 AUG 2026
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right action panel */}
					<motion.div
						initial={
							shouldReduceMotion
								? false
								: {
										opacity: 0,
										x: 30,
									}
						}
						whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="mt-12 lg:mt-0 lg:pl-10"
					>
						<div className="bg-primary-500 relative flex min-h-[25rem] flex-col justify-between overflow-hidden p-7 sm:p-9 lg:min-h-[32rem]">
							{/* Decorative element */}
							<div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full border border-white/20" />

							<div className="pointer-events-none absolute top-8 right-8">
								<Sparkles className="size-5 text-white/50" />
							</div>

							<div className="relative">
								<div className="flex items-center gap-2">
									<span className="size-1.5 rounded-full bg-white" />

									<span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-white/70 uppercase">
										Open now
									</span>
								</div>

								<h3 className="mt-10 text-3xl leading-[0.95] font-semibold tracking-[-0.04em] text-white sm:text-4xl">
									Ready to
									<br />
									build?
								</h3>
							</div>

							<div className="relative">
								<div className="mb-6 space-y-3">
									{benefits.map((benefit) => (
										<div
											key={benefit}
											className="flex items-center gap-3 text-sm text-white/80"
										>
											<span className="flex size-5 items-center justify-center rounded-full bg-white/15">
												<Check className="size-3 text-white" />
											</span>

											{benefit}
										</div>
									))}
								</div>

								<a
									href="REGISTRATION_URL_TO_BE_ADDED"
									className="group bg-background text-foreground flex min-h-14 w-full items-center justify-between px-5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1"
								>
									<span>Register your team</span>

									<span className="bg-primary-500 text-primary-foreground flex size-9 items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
										<ArrowUpRight className="size-4" />
									</span>
								</a>

								<a
									href="#rules"
									className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-white"
								>
									Read the rules
									<ArrowUpRight className="size-3.5" />
								</a>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Bottom metadata */}
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="border-border mt-12 grid gap-6 border-t pt-6 sm:mt-16 sm:grid-cols-3"
				>
					<div>
						<p className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
							Location
						</p>

						<p className="text-foreground mt-2 text-sm font-medium">
							Quantum University, Roorkee
						</p>
					</div>

					<div>
						<p className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
							Team format
						</p>

						<p className="text-foreground mt-2 text-sm font-medium">
							6 members · Min. 1 female member
						</p>
					</div>

					<div className="sm:text-right">
						<p className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
							The pathway
						</p>

						<p className="text-primary-500 mt-2 text-sm font-medium">
							Problem → Prototype → SIH
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default CTA;
