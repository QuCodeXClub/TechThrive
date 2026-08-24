import { motion, useReducedMotion } from "framer-motion";
import {
	ArrowUpRight,
	BrainCircuit,
	CloudSun,
	Dumbbell,
	Gamepad2,
	Globe2,
	HeartPulse,
	Landmark,
	Leaf,
	LockKeyhole,
	Plane,
	Recycle,
	Bot as Robot,
	School,
	ShieldCheck,
	Sparkles,
	Tractor,
	Truck,
} from "lucide-react";

const themes = [
	{
		title: "Agriculture, FoodTech & Rural Development",
		count: 12,
		icon: Tractor,
		label: "Agriculture",
	},
	{
		title: "Blockchain & Cybersecurity",
		count: 22,
		icon: LockKeyhole,
		label: "Security",
	},
	{
		title: "Clean & Green Technology",
		count: 2,
		icon: Leaf,
		label: "Environment",
	},
	{
		title: "Disaster Management",
		count: 29,
		icon: ShieldCheck,
		label: "Resilience",
	},
	{
		title: "Fitness & Sports",
		count: 8,
		icon: Dumbbell,
		label: "Wellness",
	},
	{
		title: "Heritage & Culture",
		count: 7,
		icon: Landmark,
		label: "Culture",
	},
	{
		title: "MedTech / BioTech / HealthTech",
		count: 14,
		icon: HeartPulse,
		label: "Healthcare",
	},
	{
		title: "Miscellaneous",
		count: 38,
		icon: Sparkles,
		label: "Open innovation",
	},
	{
		title: "Renewable / Sustainable Energy",
		count: 4,
		icon: CloudSun,
		label: "Energy",
	},
	{
		title: "Robotics and Drones",
		count: 10,
		icon: Robot,
		label: "Robotics",
	},
	{
		title: "Smart Automation",
		count: 31,
		icon: BrainCircuit,
		label: "Automation",
	},
	{
		title: "Smart Education",
		count: 13,
		icon: School,
		label: "Education",
	},
	{
		title: "Smart Resource Conservation",
		count: 5,
		icon: Recycle,
		label: "Resources",
	},
	{
		title: "Smart Vehicles",
		count: 4,
		icon: Truck,
		label: "Mobility",
	},
	{
		title: "Space Technology",
		count: 11,
		icon: Globe2,
		label: "Space",
	},
	{
		title: "Toys & Games",
		count: 2,
		icon: Gamepad2,
		label: "Play",
	},
	{
		title: "Transportation & Logistics",
		count: 8,
		icon: Truck,
		label: "Logistics",
	},
	{
		title: "Travel & Tourism",
		count: 6,
		icon: Plane,
		label: "Tourism",
	},
];

const featuredThemes = themes.slice(0, 8);

function Themes() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="themes"
			className="bg-background relative overflow-hidden py-16 sm:py-20 lg:py-24"
		>
			{/* Ambient background */}
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/[0.035] absolute top-[-12rem] right-[-10rem] size-[28rem] rounded-full blur-[130px] sm:size-[36rem]" />

				<div className="bg-primary-500/[0.02] absolute bottom-[-14rem] left-[-12rem] size-[26rem] rounded-full blur-[130px]" />
			</div>

			<div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
				{/* Header */}
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
					className="flex flex-col gap-7 sm:gap-8 lg:flex-row lg:items-end lg:justify-between"
				>
					<div className="min-w-0">
						<div className="mb-4 flex items-center gap-3">
							<span className="bg-primary-500 size-1.5 shrink-0 rounded-full" />

							<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.18em] uppercase sm:text-[9px]">
								03 / SIH 2026 Themes
							</span>
						</div>

						<h2 className="font-display text-foreground max-w-3xl text-[2.1rem] leading-[0.9] font-semibold tracking-[-0.06em] sm:text-4xl md:text-5xl lg:text-[4rem]">
							Explore the themes.
							<br />
							<span className="text-muted">Choose your challenge.</span>
						</h2>
					</div>

					<div className="flex shrink-0 items-center gap-6 sm:gap-8">
						<div>
							<p className="text-muted font-mono text-[7px] tracking-[0.16em] uppercase">
								Featured here
							</p>

							<p className="font-display text-foreground mt-1 text-3xl leading-none font-semibold tracking-[-0.06em]">
								08
							</p>
						</div>
					</div>
				</motion.div>

				{/* Theme grid */}
				<div className="border-border mt-10 grid grid-cols-1 border-t border-l sm:grid-cols-2 lg:grid-cols-4">
					{featuredThemes.map((theme, index) => {
						const Icon = theme.icon;

						return (
							<motion.article
								key={theme.title}
								initial={
									shouldReduceMotion
										? false
										: {
												opacity: 0,
												y: 12,
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
									duration: 0.35,
									delay: index * 0.04,
								}}
								className="group border-border hover:bg-surface-raised/40 relative min-h-[190px] overflow-hidden border-r border-b p-5 transition-colors duration-300 sm:p-6"
							>
								{/* Background number */}
								<span className="font-display text-foreground/[0.025] pointer-events-none absolute -top-2 right-2 text-[6rem] leading-none font-semibold tracking-[-0.1em] transition-transform duration-500 group-hover:-translate-y-1">
									{String(index + 1).padStart(2, "0")}
								</span>

								<div className="relative flex h-full flex-col">
									<div className="flex items-start justify-between gap-4">
										<div className="border-border bg-background group-hover:border-primary-500/40 group-hover:bg-primary-500/[0.06] flex size-9 shrink-0 items-center justify-center border transition-colors duration-300">
											<Icon className="text-muted group-hover:text-primary-500 size-3.5 transition-colors duration-300" />
										</div>

										<span className="text-muted font-mono text-[7px] font-semibold tracking-[0.12em]">
											{String(index + 1).padStart(2, "0")}
										</span>
									</div>

									<div className="mt-auto pt-8">
										<div className="mb-2 flex items-center gap-2">
											<span className="text-primary-500 font-mono text-[7px] font-semibold tracking-[0.1em] uppercase">
												{theme.label}
											</span>

											<span className="bg-border size-1 rounded-full" />

											<span className="text-muted font-mono text-[7px] tracking-[0.1em] uppercase">
												{theme.count} PS
											</span>
										</div>

										<h3 className="font-display text-foreground text-base leading-[1.05] font-medium tracking-[-0.03em] sm:text-lg">
											{theme.title}
										</h3>
									</div>
								</div>

								{/* Hover line */}
								<span className="bg-primary-500 absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full" />
							</motion.article>
						);
					})}
				</div>

				{/* Actions */}
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
					whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
				>
					<p className="text-muted max-w-lg text-[10px] leading-5 sm:text-[11px]">
						SIH 2026 themes span technology, sustainability, healthcare, mobility,
						culture and more.
					</p>

					<div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
						<motion.a
							target="_blank"
							href="https://www.sih.gov.in/#sihthemes"
							rel="noreferrer"
							whileHover={shouldReduceMotion ? {} : { y: -2 }}
							whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
							className="group border-border bg-surface-raised/30 text-foreground hover:border-primary-500/50 hover:bg-primary-500/[0.05] inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border px-6 py-3.5 text-sm font-semibold transition-colors"
						>
							Explore all themes
							<ArrowUpRight className="text-primary-500 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</motion.a>

						<motion.a
							target="_blank"
							href="https://www.sih.gov.in/sih2026PS"
							rel="noreferrer"
							whileHover={shouldReduceMotion ? {} : { y: -2 }}
							whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
							className="group bg-primary-500 hover:bg-primary-600 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(34,197,94,0.15)] transition-colors"
						>
							View problem statements
							<ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Themes;
