import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, CalendarDays, ChevronRight, MapPin } from "lucide-react";

import CodeXLogo from "@/assets/codex-logo.svg";
import HeroImage from "@/assets/hero-image.jpeg";
import SIHLogo from "@/assets/sih-logo.jpeg";
import SIHComplete from "@/assets/sih.jpeg";

function Hero() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="home"
			className="bg-background relative min-h-[100svh] overflow-hidden pt-20 sm:pt-24 lg:pt-20"
		>
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="bg-primary-500/[0.035] absolute top-20 right-[-12rem] size-[32rem] rounded-full blur-[120px]" />

				<div className="bg-primary-500/[0.025] absolute bottom-[-12rem] left-[-12rem] size-[28rem] rounded-full blur-[110px]" />

				<div
					className="absolute inset-0 opacity-[0.012]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(128,128,128,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.7) 1px, transparent 1px)",
						backgroundSize: "90px 90px",
					}}
				/>
			</div>

			<div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl items-center px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
				<div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_360px] lg:gap-20 xl:grid-cols-[1fr_420px]">
					<div className="relative z-10 max-w-4xl">
						<motion.div
							initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
							animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="mb-8 flex items-center gap-3"
						>
							<div className="border-border bg-surface-raised flex h-10 items-center rounded-md border px-1">
								<img
									alt="Quantum University"
									className="z-20 h-6 w-auto"
									src="https://res.cloudinary.com/fswmfdcp/image/upload/f_auto,q_auto/v1784629535/university-logo-icon_ekaqcj.svg"
								/>
							</div>

							<div className="bg-border h-5 w-px" />

							<div className="border-border bg-surface-raised flex h-10 items-center rounded-md border px-1">
								<img src={CodeXLogo} alt="CodeX Club" className="z-20 h-6 w-auto" />
							</div>

							<div className="bg-border h-5 w-px" />

							<div className="border-border bg-surface-raised flex h-10 items-center rounded-md border px-1">
								<img
									src={SIHLogo}
									alt="CodeX Club"
									className="z-20 h-6 w-auto rounded"
								/>
							</div>
						</motion.div>

						<motion.div
							initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
							animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
							transition={{ duration: 0.55, delay: 0.08 }}
							className="mb-5 flex items-center gap-3"
						>
							<span className="bg-primary-500 h-px w-10" />

							<span className="text-primary-500 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
								Hackathon
							</span>
						</motion.div>

						<motion.h1
							initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
							animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.12 }}
							className="font-display text-foreground text-[4rem] leading-[0.86] font-bold tracking-[-0.065em] min-[400px]:text-[4.5rem] sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem]"
						>
							Tech
							<span className="text-primary-500">Thrive</span>
							<span className="text-foreground/20">.</span>
						</motion.h1>

						<motion.div
							initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
							animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="mt-5 flex items-center gap-3"
						>
							<span className="bg-border h-px w-10 sm:w-16" />

							<p className="text-muted text-sm font-medium sm:text-base">
								Build. Refine. Represent.
							</p>
						</motion.div>

						<motion.p
							initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
							animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.28 }}
							className="text-muted mt-7 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8"
						>
							TechThrive 2026 is CodeX Club's internal hackathon at Quantum
							University, conducted under the supervision of the CSE & CA Departments
							to identify, evaluate and mentor student teams for the
							<span className="text-foreground font-medium">
								Smart India Hackathon 2026.
							</span>
						</motion.p>

						<img
							src={SIHComplete}
							alt="Smart India Hackathon 2026"
							className="z-20 my-4 h-16 w-auto rounded-xl"
						/>

						<motion.div
							initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
							animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.36 }}
							className="border-border mt-8 grid max-w-2xl gap-3 border-y py-4 sm:grid-cols-3 sm:gap-0 sm:py-0"
						>
							<div className="sm:py-5 sm:pr-5">
								<div className="flex items-center gap-2">
									<CalendarDays className="text-primary-500 size-3.5" />

									<span className="text-muted font-mono text-[8px] tracking-[0.14em] uppercase">
										Submission
									</span>
								</div>

								<p className="text-foreground mt-2 text-sm leading-5 font-semibold">
									06–09 Sep 2026
								</p>

								<p className="text-muted mt-1 text-[10px] leading-4">
									SIH 2026 Solution PPT
								</p>
							</div>

							<div className="border-border sm:border-l sm:px-5 sm:py-5">
								<div className="flex items-center gap-2">
									<CalendarDays className="text-primary-500 size-3.5" />

									<span className="text-muted font-mono text-[8px] tracking-[0.14em] uppercase">
										Round 01
									</span>
								</div>

								<p className="text-foreground mt-2 text-sm leading-5 font-semibold">
									07–08 Sep 2026
								</p>

								<p className="text-muted mt-1 text-[10px] leading-4">
									Computer Centre (E310)
								</p>
							</div>

							<div className="border-border sm:border-l sm:px-5 sm:py-5">
								<div className="flex items-center gap-2">
									<CalendarDays className="text-primary-500 size-3.5" />

									<span className="text-muted font-mono text-[8px] tracking-[0.14em] uppercase">
										Round 02
									</span>
								</div>

								<p className="text-foreground mt-2 text-sm leading-5 font-semibold">
									15 Sep 2026
								</p>

								<p className="text-muted mt-1 text-[10px] leading-4">
									7-hour Grand Finale
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
							animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.44 }}
							className="mt-8 flex flex-col gap-3 sm:flex-row"
						>
							<motion.a
								target="_blank"
								href="https://unstop.com/p/techthrive-2026-quantum-university-roorkee-1740052"
								whileHover={shouldReduceMotion ? {} : { y: -2 }}
								whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
								className="group bg-primary-500 hover:bg-primary-600 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(34,197,94,0.15)] transition-colors"
							>
								Register Your Team
								<ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</motion.a>

							<a
								href="#problems"
								className="border-border bg-surface-raised/40 text-foreground hover:border-primary-500/40 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-6 py-3.5 text-sm font-medium transition-colors"
							>
								Explore Challenges
								<ChevronRight className="size-4" />
							</a>
						</motion.div>

						<motion.div
							initial={shouldReduceMotion ? false : { opacity: 0 }}
							animate={shouldReduceMotion ? {} : { opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.55 }}
							className="mt-6 flex items-center gap-3"
						>
							<span className="relative flex size-2">
								<span className="bg-primary-500 absolute inset-0 animate-ping rounded-full opacity-40" />
								<span className="bg-primary-500 relative size-2 rounded-full" />
							</span>

							<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
								6 members · ₹150 / team
							</span>
						</motion.div>
					</div>

					<motion.div
						initial={shouldReduceMotion ? false : { opacity: 0, x: 25, y: 10 }}
						animate={shouldReduceMotion ? {} : { opacity: 1, x: 0, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.25,
							ease: [0.16, 1, 0.3, 1],
						}}
						className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto"
					>
						<div className="text-primary-500/20 pointer-events-none absolute -top-10 -left-4 font-mono text-7xl font-bold tracking-[-0.08em] select-none">
							01
						</div>

						<div className="relative">
							<div className="border-border bg-surface-raised relative overflow-hidden rounded-2xl border p-2 shadow-2xl shadow-black/10">
								<div className="relative aspect-[4/5] overflow-hidden rounded-xl">
									<img
										src={HeroImage}
										alt="TechThrive participants"
										className="z-20 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
									/>

									<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

									{/* Image label */}
									<div className="absolute top-4 right-4 left-4 flex items-center justify-between">
										<span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 font-mono text-[8px] tracking-[0.15em] text-white backdrop-blur-md">
											TECHTHRIVE 2026
										</span>

										<span className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md">
											<ArrowUpRight className="size-3.5" />
										</span>
									</div>

									<div className="absolute right-4 bottom-4 left-4">
										<div className="mb-2 flex items-center gap-2">
											<span className="bg-primary-400 h-px w-5" />

											<span className="font-mono text-[7px] font-medium tracking-[0.16em] text-white/70 uppercase">
												Build for impact
											</span>
										</div>

										<p className="text-xl leading-tight font-semibold tracking-[-0.03em] text-white sm:text-2xl">
											Where ideas
											<br />
											become solutions.
										</p>
									</div>
								</div>
							</div>

							<div className="border-border bg-background absolute -bottom-5 -left-5 hidden w-52 rounded-xl border p-3 shadow-xl sm:block">
								<div className="flex items-center gap-3">
									<div className="bg-primary-500/10 flex size-9 shrink-0 items-center justify-center rounded-lg">
										<MapPin className="text-primary-500 size-4" />
									</div>

									<div className="min-w-0">
										<p className="text-muted font-mono text-[7px] tracking-[0.12em] uppercase">
											Venue
										</p>

										<p className="text-foreground mt-1 truncate text-[11px] font-semibold">
											Quantum University
										</p>

										<p className="text-muted text-[9px]">
											Roorkee, Uttarakhand
										</p>
									</div>
								</div>
							</div>

							<div className="border-border bg-background absolute -top-4 -right-4 hidden w-48 rounded-xl border p-3 shadow-xl md:block">
								<div className="flex items-center gap-3">
									<div className="border-border bg-surface-raised flex size-9 shrink-0 items-center justify-center rounded-lg border">
										<img
											src={SIHLogo}
											alt="Smart India Hackathon"
											className="z-20 max-h-6 max-w-7 object-contain"
										/>
									</div>

									<div>
										<p className="text-muted font-mono text-[7px] tracking-[0.1em] uppercase">
											Next destination
										</p>

										<p className="text-foreground mt-1 text-[10px] leading-tight font-bold">
											Smart India Hackathon
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="border-border mt-8 flex items-center justify-between border-t pt-4">
							<div>
								<p className="text-muted font-mono text-[7px] tracking-[0.14em] uppercase">
									Timeline
								</p>

								<p className="text-foreground mt-1 text-xs font-semibold">
									Submission → Screening → Grand Finale
								</p>
							</div>

							<div className="text-primary-500 flex items-center gap-2">
								<span className="bg-primary-500 size-1.5 rounded-full" />

								<span className="font-mono text-[7px] tracking-[0.12em] uppercase">
									2026
								</span>
							</div>
						</div>
					</motion.div>
				</div>

				<motion.a
					href="#about"
					initial={shouldReduceMotion ? false : { opacity: 0 }}
					animate={shouldReduceMotion ? {} : { opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.9 }}
					className="text-muted hover:text-primary-500 absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 transition-colors lg:flex"
				>
					<span className="font-mono text-[8px] tracking-[0.24em] uppercase">
						Scroll to explore
					</span>

					<span className="bg-border h-px w-8" />

					<motion.span
						animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<ArrowDown className="size-3.5" />
					</motion.span>
				</motion.a>
			</div>
		</section>
	);
}

export default Hero;
