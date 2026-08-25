import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Handshake } from "lucide-react";

import CodeCraftersDarkLogo from "@/assets/sponsors/codecrafters-logo-dark.svg";
import CodeCraftersLightLogo from "@/assets/sponsors/codecrafters-logo-light.svg";
import UnstopLogo from "@/assets/unstop-logo.svg";

const sponsors = [
	{
		number: "01",
		name: "CodeCrafters",
		description:
			"CodeCrafters creates hands-on programming challenges that help developers understand how real-world software works by building systems from scratch.",
		lightLogo: CodeCraftersLightLogo,
		darkLogo: CodeCraftersDarkLogo,
		website: "https://codecrafters.io",
	},
	{
		number: "02",
		name: "Unstop",
		description:
			"Unstop is the platform powering TechThrive 2026, where participants can discover the hackathon, register their teams, and take part in the competition.",
		lightLogo: UnstopLogo,
		darkLogo: UnstopLogo,
		website: "https://unstop.com",
	},
];

function Sponsors() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="sponsors"
			className="bg-background relative overflow-hidden py-16 sm:py-20 lg:py-24"
		>
			<div className="bg-primary-500/[0.025] pointer-events-none absolute right-[-16rem] bottom-[-14rem] size-[34rem] rounded-full blur-[150px]" />

			<div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
				<div className="flex items-center justify-between pb-3">
					<div className="flex items-center gap-3">
						<span className="bg-primary-500 size-1.5 rounded-full" />

						<span className="text-primary-500 font-mono text-[9px] font-semibold tracking-[0.2em] uppercase">
							04 / Partners
						</span>
					</div>

					<span className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
						Building together
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
							<Handshake className="text-primary-500 size-3.5" />

							<span className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
								People behind the ecosystem
							</span>
						</div>

						<h2 className="font-display text-foreground max-w-3xl text-3xl leading-[0.9] font-semibold tracking-[-0.055em] sm:text-4xl lg:text-5xl">
							Supported by people
							<br />
							<span className="text-muted">who build.</span>
						</h2>

						<h3 className="font-display text-foreground mt-5 max-w-2xl text-xl leading-[1] font-medium tracking-[-0.035em] sm:text-2xl">
							Our partners bring ideas, tools and experience that help student
							builders go further.
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
									Our partners
								</span>
							</div>

							<p className="text-muted mt-4 max-w-sm text-sm leading-7">
								We collaborate with organizations that share our interest in
								technology, engineering and creating meaningful opportunities for
								student developers.
							</p>
						</div>
					</motion.div>
				</div>

				<div className="border-border mt-12 border-t sm:mt-14 lg:mt-16">
					{sponsors.map((sponsor, index) => (
						<motion.a
							key={sponsor.name}
							href={sponsor.website}
							target="_blank"
							rel="noopener noreferrer"
							initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
							whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: 0.55,
								delay: index * 0.08,
							}}
							className={[
								"border-border group relative grid border-b",
								"transition-colors duration-300",
								"hover:bg-surface-muted/40",
								"focus-visible:bg-surface-muted/40",
								"focus-visible:outline-none",
								"lg:grid-cols-[0.3fr_0.7fr_1fr]",
							].join(" ")}
						>
							<div className="border-border flex items-center gap-3 p-6 lg:border-r lg:py-8">
								<span className="text-primary-500 font-mono text-[9px] font-semibold">
									{sponsor.number}
								</span>

								<span className="text-muted font-mono text-[7px] tracking-[0.16em] uppercase">
									Partner
								</span>
							</div>

							<div className="border-border flex items-center justify-center p-8 sm:p-10 lg:border-r">
								<div className="relative flex items-center justify-center">
									{/* Light theme */}
									<div className="dark:hidden">
										<img
											src={sponsor.darkLogo}
											alt={`${sponsor.name} logo`}
											className="mx-auto block h-auto w-[70%] max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-0"
										/>
									</div>

									{/* Dark theme */}
									<div className="hidden dark:block">
										<img
											src={sponsor.lightLogo}
											alt={`${sponsor.name} logo`}
											className="mx-auto block h-auto w-[70%] max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-0"
										/>
									</div>
								</div>
							</div>

							<div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
								<div className="flex items-center justify-between">
									<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.16em] uppercase">
										Technology partner
									</span>

									<ArrowUpRight className="text-muted group-hover:text-primary-500 size-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</div>

								<h3 className="text-foreground mt-3 text-2xl font-semibold tracking-tight">
									{sponsor.name}
								</h3>

								<p className="text-muted mt-3 max-w-xl text-sm leading-6">
									{sponsor.description}
								</p>
							</div>
						</motion.a>
					))}
				</div>

				<div className="mt-7 flex items-center justify-between">
					<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
						TechThrive 2026
					</span>

					<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
						Community → Technology → Growth
					</span>
				</div>
			</div>
		</section>
	);
}

export default Sponsors;
