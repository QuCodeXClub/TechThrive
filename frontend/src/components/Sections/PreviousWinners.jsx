import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";

import teamV1_1 from "@/assets/team-v1-1.jpg";
import teamV1_2 from "@/assets/team-v1-2.jpg";
import teamV1_3 from "@/assets/team-v1-3.jpg";
import teamV2_1 from "@/assets/team-V2-1.jpeg";
import teamV2_2 from "@/assets/team-V2-2.jpeg";
import teamV2_3 from "@/assets/team-V2-3.jpeg";

const editions = [
	{
		name: "TechThrive 2.0",
		year: "2026",
		images: [teamV2_1, teamV2_2, teamV2_3],
	},
	{
		name: "TechThrive 1.0",
		year: "2025",
		images: [teamV1_1, teamV1_2, teamV1_3],
	},
];

const positions = ["Winner", "Finalist", "Finalist"];

function PreviousWinners() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="previous-winners"
			className="bg-background relative overflow-hidden py-16 sm:py-20 lg:py-24"
		>
			{/* Background atmosphere */}
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/[0.035] absolute top-[-12rem] right-[-12rem] size-[34rem] rounded-full blur-[140px]" />

				<div className="bg-primary-500/[0.025] absolute bottom-[-14rem] left-[-14rem] size-[32rem] rounded-full blur-[140px]" />
			</div>

			<div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
				{/* HEADER */}
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex items-center justify-between pb-3">
						<div className="flex items-center gap-3">
							<span className="bg-primary-500 size-1.5 rounded-full" />

							<span className="text-primary-500 font-mono text-[9px] font-semibold tracking-[0.2em] uppercase">
								04 / Previous Winners
							</span>
						</div>

						<span className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
							Archive / 01—02
						</span>
					</div>

					<div className="border-border grid gap-8 border-b pt-10 pb-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:pt-14">
						<h2 className="font-display text-foreground max-w-3xl text-3xl leading-[0.9] font-semibold tracking-[-0.055em] sm:text-4xl lg:text-5xl">
							Proof that ideas
							<br />
							<span className="text-muted">can go further.</span>
						</h2>

						<div className="lg:justify-self-end">
							<p className="text-muted max-w-sm text-sm leading-6">
								A look back at the teams who took the TechThrive stage before you.
							</p>

							<div className="mt-5 flex items-center gap-3">
								<Trophy className="text-primary-500 size-3.5" />

								<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
									TechThrive 1.0 — 2.0
								</span>
							</div>
						</div>
					</div>
				</motion.div>

				{/* EDITIONS */}
				<div className="mt-12 sm:mt-14 lg:mt-16">
					{editions.map((edition, editionIndex) => (
						<motion.article
							key={edition.name}
							initial={
								shouldReduceMotion
									? false
									: {
											opacity: 0,
											y: 20,
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
							viewport={{ once: true, amount: 0.15 }}
							transition={{
								duration: 0.65,
								delay: editionIndex * 0.08,
							}}
							className={
								editionIndex > 0
									? "border-border mt-16 border-t pt-16 sm:mt-20 sm:pt-20"
									: ""
							}
						>
							<div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-12">
								{/* EDITION LABEL */}
								<div className="lg:pt-2">
									<div className="flex items-end gap-3 lg:block">
										<span className="text-primary-500 font-mono text-[10px] font-semibold tracking-[0.16em]">
											0{editionIndex + 1}
										</span>

										<div className="lg:mt-5">
											<h3 className="font-display text-foreground text-2xl leading-none font-semibold tracking-[-0.04em] sm:text-3xl">
												{edition.name}
											</h3>

											<p className="text-muted mt-2 font-mono text-[9px] tracking-[0.16em] uppercase">
												Edition / {edition.year}
											</p>
										</div>
									</div>

									<div className="mt-6 hidden lg:block">
										<div className="bg-primary-500 h-px w-10" />

										<p className="text-muted mt-4 max-w-[145px] text-xs leading-5">
											Three teams. One stage. A new benchmark.
										</p>
									</div>
								</div>

								{/* WINNER GRID */}
								<div className="relative">
									<div className="grid gap-4 sm:grid-cols-[1.45fr_0.55fr]">
										{/* MAIN WINNER */}
										<div className="group">
											<div className="bg-surface-raised relative aspect-[1.18/1] overflow-hidden">
												<div className="h-full w-full overflow-hidden rounded">
													<img
														src={edition.images[0]}
														alt={`${edition.name} winner`}
														className="z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
													/>
												</div>

												<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-70" />

												<div className="absolute top-4 left-4 flex items-center gap-2">
													<span className="bg-background/90 flex size-7 items-center justify-center rounded-full backdrop-blur-sm">
														<Trophy className="text-primary-500 size-3.5" />
													</span>

													<span className="bg-background/90 px-2.5 py-1 font-mono text-[8px] font-semibold tracking-[0.14em] uppercase backdrop-blur-sm">
														01 / Winner
													</span>
												</div>

												<div className="absolute right-4 bottom-4 left-4 flex items-end justify-between">
													<div>
														<p className="font-mono text-[8px] tracking-[0.16em] text-white/60 uppercase">
															First Place
														</p>

														<p className="mt-1 text-lg font-semibold text-white">
															TechThrive Winner
														</p>
													</div>

													<div className="flex size-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
														<ArrowUpRight className="size-4 text-white" />
													</div>
												</div>
											</div>
										</div>

										{/* SECONDARY IMAGES */}
										<div className="grid gap-4 sm:pt-12">
											{edition.images.slice(1).map((image, index) => (
												<div key={image} className="group">
													<div className="bg-surface-raised relative aspect-[1.35/1] overflow-hidden">
														<div className="h-full w-full overflow-hidden rounded">
															<img
																src={image}
																alt={`${edition.name} finalist`}
																className="z-20 h-full w-full transform-gpu object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
															/>
														</div>

														<div className="absolute top-3 left-3">
															<span className="bg-background/90 px-2 py-1 font-mono text-[7px] tracking-[0.14em] uppercase backdrop-blur-sm">
																0{index + 2} /{" "}
																{positions[index + 1]}
															</span>
														</div>
													</div>

													<div className="mt-3 flex items-center justify-between">
														<span className="text-muted text-[10px]">
															{index === 0
																? "Second Place"
																: "Third Place"}
														</span>

														<ArrowUpRight className="text-muted size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
													</div>
												</div>
											))}
										</div>
									</div>

									{/* Decorative corner */}
									<div className="border-primary-500/25 pointer-events-none absolute -right-2 -bottom-2 size-20 border-r border-b sm:-right-3 sm:-bottom-3 sm:size-28" />
								</div>
							</div>
						</motion.article>
					))}
				</div>

				{/* FOOTER STRIP */}
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55 }}
					className="border-border mt-14 border-t pt-6 sm:mt-16"
				>
					<div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
						<div className="flex items-center gap-3">
							<span className="bg-primary-500/10 flex size-8 items-center justify-center rounded-full">
								<Trophy className="text-primary-500 size-3.5" />
							</span>

							<div>
								<p className="text-foreground text-xs font-semibold">
									The next chapter starts here.
								</p>

								<p className="text-muted mt-0.5 text-[10px]">
									TechThrive 2026 is waiting for its next winning team.
								</p>
							</div>
						</div>

						<a
							href="#cta"
							className="text-primary-500 hover:text-primary-400 group inline-flex items-center gap-2 text-[9px] font-semibold tracking-[0.12em] uppercase transition-colors"
						>
							Make your mark
							<ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default PreviousWinners;
