import { motion, useReducedMotion } from "framer-motion";
import { GitBranch, Layers3, Sparkles } from "lucide-react";

import GithubIcon from "@/components/Icons/GithubIcon";

const developers = {
	lead: {
		username: "siddharthk8",
		name: "Siddharth",
		role: "Team Lead",
		tag: "01 / LEAD",
		description:
			"Led and coordinated the TechThrive team throughout the project, helping align ideas, content, and design direction while contributing to the development and delivery of a polished, responsive platform.",
		contributions: [
			"Team coordination and project leadership",
			"Technical planning and development support",
			"Frontend architecture and implementation",
			"Responsive design implementation",
			"Feature integration",
			"Production deployment on AWS Amplify",
		],
		github: "https://github.com/siddharthk8",
		avatar: "https://github.com/siddharthk8.png?size=400",
	},

	team: [
		{
			username: "vanshcodes05",
			name: "Vansh",
			role: "UI & Development Contributor",
			tag: "02 / DESIGN",
			description:
				"Contributed to both the visual direction and implementation of TechThrive, helping shape the initial interface and translating parts of the design into the website's codebase.",
			contributions: [
				"UI and layout concepts",
				"Visual design direction",
				"Frontend implementation",
				"UI components and styling",
				"Interface structure and ideas",
				"Code-level design refinements",
			],
			github: "https://github.com/vanshcodes05",
			avatar: "https://github.com/vanshcodes05.png?size=300",
		},

		{
			username: "chitransh9719",
			name: "Chitransh",
			role: "Content & Development Contributor",
			tag: "03 / CONTENT",
			description:
				"Contributed to the content and implementation side of TechThrive by researching and organizing the site's material while also helping integrate content and assets into the website.",
			contributions: [
				"Website content research",
				"Information collection and organization",
				"Image and visual asset sourcing",
				"Content integration into the codebase",
				"Frontend/content implementation",
				"Content verification and refinement",
			],
			github: "https://github.com/chitransh9719",
			avatar: "https://github.com/chitransh9719.png?size=300",
		},
	],
};

function DeveloperCard({ developer, lead = false, index = 0 }) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.article
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
			viewport={{ once: true, amount: 0.2 }}
			transition={{
				duration: 0.55,
				delay: shouldReduceMotion ? 0 : index * 0.08,
			}}
			className={[
				"bg-background relative border transition-colors duration-300",
				lead ? "border-primary-500/50" : "border-border hover:border-primary-500/40",
			].join(" ")}
		>
			<div className={["absolute top-0 left-0 h-px transition-all duration-500"].join(" ")} />

			<div className={lead ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-6"}>
				<div className="flex items-start justify-between gap-4">
					<div className="flex items-center gap-2">
						<span className="text-primary-500 font-mono text-[8px] font-bold tracking-[0.18em]">
							{developer.tag}
						</span>

						<span className="text-muted/40 font-mono text-[7px]">/</span>

						<span className="text-muted font-mono text-[7px] tracking-[0.15em] uppercase">
							{developer.role}
						</span>
					</div>

					<a
						href={developer.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Open ${developer.username} GitHub profile`}
						className="border-border bg-surface-raised/50 text-muted hover:border-primary-500/50 hover:text-primary-500 flex size-9 shrink-0 items-center justify-center border transition-colors"
					>
						<GithubIcon className="size-4" />
					</a>
				</div>

				<div
					className={[
						"flex gap-5",
						lead ? "mt-8 flex-col sm:flex-row sm:items-center" : "mt-6 items-center",
					].join(" ")}
				>
					<motion.a
						href={developer.github}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
						whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
						className={[
							"bg-surface-raised relative block shrink-0 overflow-hidden rounded-full border",
							lead
								? "border-primary-500/60 size-28 sm:size-32"
								: "border-border size-20 sm:size-24",
						].join(" ")}
					>
						<img
							src={developer.avatar}
							alt={developer.name}
							className="size-full object-cover"
							loading="lazy"
							onError={(event) => {
								event.currentTarget.style.display = "none";
							}}
						/>

						<div className="bg-primary-500/10 absolute inset-0" />
					</motion.a>

					<div className="min-w-0">
						<h2
							className={[
								"font-display text-foreground font-semibold tracking-[-0.045em]",
								lead ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
							].join(" ")}
						>
							{developer.name}
						</h2>

						<p className="text-primary-500 mt-1 font-mono text-[9px] font-semibold tracking-[0.16em] uppercase">
							@{developer.username}
						</p>

						<p className="text-muted mt-4 max-w-xl text-sm leading-6">
							{developer.description}
						</p>
					</div>
				</div>

				<div
					className={["border-border border-t", lead ? "mt-8 pt-6" : "mt-6 pt-5"].join(
						" ",
					)}
				>
					<div className="mb-3 flex items-center gap-2">
						<Sparkles className="text-primary-500 size-3" />

						<span className="text-muted font-mono text-[7px] font-semibold tracking-[0.18em] uppercase">
							Contribution
						</span>
					</div>

					<div
						className={["grid", lead ? "gap-x-8 sm:grid-cols-2" : "gap-x-5"].join(" ")}
					>
						{developer.contributions.map((item, contributionIndex) => (
							<div
								key={item}
								className={[
									"flex items-start gap-2.5 py-2",
									contributionIndex > 0 ? "border-border border-t" : "",
								].join(" ")}
							>
								<span className="text-primary-500 w-4 shrink-0 pt-0.5 font-mono text-[7px] font-semibold">
									{String(contributionIndex + 1).padStart(2, "0")}
								</span>

								<span className="text-muted text-[11px] leading-5">{item}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="pointer-events-none absolute right-4 bottom-0 select-none">
				<span
					className={[
						"font-display leading-none font-semibold tracking-[-0.12em]",
						lead
							? "text-foreground/[0.025] text-[9rem]"
							: "text-foreground/[0.02] text-[6rem]",
					].join(" ")}
				>
					{developer.tag.slice(0, 2)}
				</span>
			</div>
		</motion.article>
	);
}

function Developers() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="developers"
			className="bg-background relative min-h-screen overflow-hidden py-16 sm:py-20 lg:py-24"
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

			<div className="relative z-10 mx-auto max-w-7xl max-w-[1500px] items-center px-10 py-12 sm:px-12 lg:px-15 lg:py-16">
				<motion.div
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
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<span className="bg-primary-500 size-1.5 rounded-full" />

							<span className="text-primary-500 font-mono text-[9px] font-semibold tracking-[0.2em] uppercase">
								Developers
							</span>
						</div>

						<span className="text-muted hidden font-mono text-[8px] tracking-[0.18em] uppercase sm:block">
							03 contributors
						</span>
					</div>

					<div className="grid gap-8 pt-9 md:grid-cols-[1.15fr_0.85fr] md:gap-10 lg:gap-20 lg:pt-14">
						<div>
							<div className="mb-4 flex items-center gap-2">
								<Layers3 className="text-primary-500 size-3.5" />

								<span className="text-muted font-mono text-[8px] tracking-[0.18em] uppercase">
									Behind the experience
								</span>
							</div>

							<h1 className="font-display text-foreground max-w-3xl text-4xl leading-[0.9] font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
								Built by a team.
								<br />
								<span className="text-muted">Driven by different strengths.</span>
							</h1>
						</div>

						<div className="md:self-end">
							<div className="border-border border-l pl-4 sm:pl-6">
								<p className="text-muted max-w-sm text-sm leading-6 sm:leading-7">
									TechThrive's digital experience came together through
									development, design direction, content and countless small
									details behind the scenes.
								</p>

								<div className="mt-5 flex items-center gap-3">
									<span className="text-primary-500 font-mono text-[8px] font-semibold tracking-[0.16em] uppercase">
										Concept
									</span>

									<GitBranch className="text-muted size-3" />

									<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
										Execution
									</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<div className="relative mt-16 sm:mt-20 lg:mt-28">
					<div className="mx-auto max-w-3xl">
						<DeveloperCard developer={developers.lead} lead index={0} />
					</div>

					<div className="relative mx-auto hidden h-20 max-w-3xl md:block">
						<div className="bg-border absolute top-0 left-1/2 h-10 w-px -translate-x-1/2" />

						<div className="bg-border absolute top-10 right-1/4 left-1/4 h-px" />

						<div className="bg-border absolute top-10 left-1/4 h-10 w-px" />

						<div className="bg-border absolute top-10 right-1/4 h-10 w-px" />

						<div className="bg-primary-500 absolute top-[7px] left-1/2 size-1.5 -translate-x-1/2 rounded-full" />

						<div className="bg-primary-500 absolute top-[37px] left-1/4 size-1.5 -translate-x-1/2 rounded-full" />

						<div className="bg-primary-500 absolute top-[37px] right-1/4 size-1.5 translate-x-1/2 rounded-full" />
					</div>

					<div className="border-primary-500/20 absolute top-1/2 left-4 h-32 w-px md:hidden" />

					<div className="grid gap-6 pt-6 md:grid-cols-2 md:gap-8 md:pt-0">
						{developers.team.map((developer, index) => (
							<DeveloperCard
								key={developer.username}
								developer={developer}
								index={index + 1}
							/>
						))}
					</div>
				</div>

				<motion.div
					initial={
						shouldReduceMotion
							? false
							: {
									opacity: 0,
									y: 15,
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
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}
					className="border-border mt-16 flex flex-col gap-5 border-t pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between"
				>
					<div>
						<p className="text-foreground text-xs font-semibold">TechThrive 2026</p>

						<p className="text-muted mt-1 font-mono text-[7px] leading-4 tracking-[0.12em] uppercase">
							Designed, developed and assembled for Quantum University
						</p>
					</div>

					<div className="flex items-center gap-3">
						<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
							People
						</span>

						<span className="bg-border h-px w-6" />

						<span className="text-primary-500 font-mono text-[8px] tracking-[0.16em] uppercase">
							Build
						</span>

						<span className="bg-border h-px w-6" />

						<span className="text-muted font-mono text-[8px] tracking-[0.16em] uppercase">
							Impact
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Developers;
