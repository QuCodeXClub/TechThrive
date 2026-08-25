import { motion, useReducedMotion } from "framer-motion";
import { Award, Check, GraduationCap, Medal, Trophy } from "lucide-react";

const prizes = [
	{
		number: "01",
		title: "1st Place",
		kicker: "TOP HONOURS",
		description:
			"The top-performing team will be recognized with premium sponsor rewards and the strongest pathway toward the university's SIH 2026 nomination.",
		benefits: [
			"2-Year CodeCrafters VIP Membership",
			"Trophy",
			"Certificate",
			"SIH Nomination Pathway",
			"Faculty Mentorship",
		],
		icon: Trophy,
		featured: true,
	},
	{
		number: "02",
		title: "2nd Place",
		kicker: "RUNNER-UP",
		description:
			"The second-place team earns a year of CodeCrafters VIP Membership along with official recognition for their achievement.",
		benefits: ["1-Year CodeCrafters VIP Membership", "Trophy", "Certificate"],
		icon: Trophy,
		featured: false,
	},
	{
		number: "03",
		title: "3rd Place",
		kicker: "THIRD PLACE",
		description:
			"The third-place team receives sponsor-backed learning benefits and recognition for their performance.",
		benefits: ["6-Month CodeCrafters VIP Membership", "Medal", "Certificate"],
		icon: Medal,
		featured: false,
	},
];

function Prizes() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="prizes"
			className="bg-background relative overflow-hidden py-16 sm:py-20 lg:py-24"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/[0.025] absolute top-[-8rem] right-[-12rem] size-[30rem] rounded-full blur-[130px]" />

				<div
					className="absolute top-0 right-0 h-full w-[42%] opacity-[0.012]"
					style={{
						backgroundImage:
							"linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
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
									05 / Rewards & Prizes
								</span>
							</div>

							<h2 className="font-display text-foreground max-w-2xl text-3xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
								Recognition that
								<br />
								<span className="text-muted">takes you further.</span>
							</h2>
						</div>

						<div className="lg:pb-1">
							<p className="text-muted max-w-sm text-sm leading-6">
								TechThrive 2026 rewards the top-performing teams with CodeCrafters
								VIP Memberships, trophies, medals and certificates.
							</p>

							<div className="mt-4 flex items-center gap-3">
								<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.18em] uppercase">
									Build · Prove · Earn
								</span>

								<span className="bg-border h-px w-8" />

								<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
									2026
								</span>
							</div>
						</div>
					</div>
				</motion.div>

				<div className="mt-10 grid gap-0 lg:grid-cols-[0.3fr_1fr]">
					<div className="border-border hidden border-r pr-8 lg:block">
						<div className="sticky top-24">
							<p className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
								The rewards
							</p>

							<p className="text-muted mt-3 max-w-[150px] text-xs leading-5">
								From VIP memberships to trophies, medals and certificates, every
								achievement gets recognized.
							</p>

							<div className="bg-primary-500 mt-8 h-px w-10" />

							<p className="text-muted mt-4 font-mono text-[8px] tracking-[0.14em] uppercase">
								03 winning places
							</p>
						</div>
					</div>

					<div className="lg:pl-10 xl:pl-14">
						{/* 1st Place */}
						<motion.article
							initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
							whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.65 }}
							className="group border-primary-500/40 relative border-y py-8 sm:py-10"
						>
							<div className="grid gap-8 sm:grid-cols-[90px_1fr_auto] sm:gap-8">
								<div className="relative">
									<span className="font-display text-primary-500 text-5xl leading-none font-semibold tracking-[-0.07em]">
										01
									</span>

									<div className="bg-primary-500 mt-5 hidden h-px w-7 sm:block" />
								</div>

								<div>
									<div className="flex flex-wrap items-center gap-2">
										<Trophy className="text-primary-500 size-4" />

										<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.18em] uppercase">
											Top Honours
										</span>

										<span className="bg-primary-500/10 text-primary-500 ml-1 inline-flex items-center gap-1.5 px-2 py-1 font-mono text-[7px] font-semibold tracking-[0.14em] uppercase">
											<Award className="size-3" />
											Winning Team
										</span>
									</div>

									<h3 className="font-display text-foreground mt-3 max-w-xl text-3xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-4xl">
										1st Place
									</h3>

									<p className="text-muted mt-4 max-w-xl text-sm leading-6">
										{prizes[0].description}
									</p>

									<div className="mt-6 grid gap-3 sm:grid-cols-2">
										{prizes[0].benefits.map((benefit) => (
											<div
												key={benefit}
												className="text-foreground flex items-center gap-2 text-xs"
											>
												<Check className="text-primary-500 size-3.5 shrink-0" />
												{benefit}
											</div>
										))}
									</div>
								</div>

								<div className="flex items-start justify-between sm:justify-end">
									<span className="text-muted font-mono text-[8px] tracking-[0.15em] uppercase sm:hidden">
										01 / 03
									</span>
								</div>
							</div>

							<div className="bg-primary-500 absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full" />
						</motion.article>

						{/* 2nd & 3rd Place */}
						<div className="grid sm:grid-cols-2">
							{prizes.slice(1).map((prize, index) => {
								const Icon = prize.icon;

								return (
									<motion.article
										key={prize.number}
										initial={
											shouldReduceMotion
												? false
												: {
														opacity: 0,
														y: 18,
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
										viewport={{ once: true, amount: 0.2 }}
										transition={{
											duration: 0.55,
											delay: index * 0.08,
										}}
										className={[
											"group border-border relative py-8 sm:py-9",
											index === 0
												? "border-b sm:border-r sm:pr-8"
												: "border-b sm:pl-8",
										].join(" ")}
									>
										<div className="flex items-start justify-between">
											<div className="flex items-center gap-3">
												<Icon className="text-primary-500 size-4" />

												<span className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
													{prize.kicker}
												</span>
											</div>

											<span className="text-muted font-mono text-[9px] font-semibold">
												{prize.number}
											</span>
										</div>

										<h3 className="font-display text-foreground mt-6 text-2xl leading-[0.95] font-semibold tracking-[-0.035em]">
											{prize.title}
										</h3>

										<p className="text-muted mt-4 text-sm leading-6">
											{prize.description}
										</p>

										<div className="mt-6 space-y-2.5">
											{prize.benefits.map((benefit) => (
												<div
													key={benefit}
													className="text-muted flex items-center gap-2 text-xs"
												>
													<Check className="text-primary-500 size-3.5" />
													{benefit}
												</div>
											))}
										</div>

										<div className="bg-primary-500 absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full" />
									</motion.article>
								);
							})}
						</div>
					</div>
				</div>

				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="border-border mt-6 flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between"
				>
					<div className="flex items-center gap-3">
						<GraduationCap className="text-primary-500 size-4" />

						<p className="text-muted text-xs">
							<strong className="text-foreground font-medium">
								All participants receive certificates.
							</strong>{" "}
							Your participation is part of the achievement.
						</p>
					</div>

					<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
						TechThrive 2026
					</span>
				</motion.div>
			</div>
		</section>
	);
}

export default Prizes;
