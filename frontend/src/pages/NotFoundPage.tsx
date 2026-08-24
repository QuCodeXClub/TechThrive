import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router";

function NotFoundPage() {
	return (
		<main className="bg-background relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-6 py-16">
			<div className="pointer-events-none absolute inset-0">
				<div
					className="absolute inset-0 opacity-[0.025]"
					style={{
						backgroundImage:
							"linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
					}}
				/>

				<div className="bg-primary-500/[0.045] absolute top-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[100px]" />
			</div>

			<div className="relative z-10 w-full max-w-4xl">
				<div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="mx-auto w-full max-w-[280px]"
					>
						<div className="relative aspect-square">
							<div className="border-border absolute inset-[8%] rounded-full border" />
							<div className="border-border absolute inset-[23%] rounded-full border" />

							<motion.div
								animate={{ rotate: 360 }}
								transition={{
									duration: 24,
									repeat: Infinity,
									ease: "linear",
								}}
								className="border-primary-500/20 absolute inset-[14%] rounded-full border border-dashed"
							/>

							<div className="bg-primary-500 absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full" />

							<div className="absolute inset-0 flex items-center justify-center">
								<div className="border-border bg-surface-raised flex h-28 w-28 items-center justify-center rounded-full border shadow-sm">
									<div className="bg-primary-500 h-2.5 w-2.5 rounded-full shadow-[0_0_18px_rgba(34,197,94,0.45)]" />
								</div>
							</div>
						</div>
					</motion.div>

					<motion.section
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
						className="text-center md:text-left"
					>
						<div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
							<span className="bg-primary-500 h-1.5 w-1.5 rounded-full" />
							<span className="text-primary-600 dark:text-primary-400 font-mono text-[11px] font-medium tracking-[0.16em] uppercase">
								Error 404
							</span>
						</div>

						<h1 className="font-display text-foreground text-6xl font-bold tracking-[-0.06em] sm:text-7xl">
							404
						</h1>

						<h2 className="font-display text-foreground mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
							This page could not be found.
						</h2>

						<p className="text-muted mx-auto mt-4 max-w-md text-sm leading-6 sm:text-base md:mx-0">
							The page may have moved or the address may be incorrect. Head back to
							TechThrive and continue exploring.
						</p>

						<div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
							<Link
								to="/"
								className="group bg-primary-500 hover:bg-primary-600 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_24px_rgba(34,197,94,0.18)]"
							>
								<Home className="size-4" />
								Back to Home
								<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
							</Link>

							<button
								type="button"
								onClick={() => window.history.back()}
								className="group border-border bg-surface-raised text-foreground hover:border-border-strong hover:bg-surface-muted inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all duration-200"
							>
								<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
								Go Back
							</button>
						</div>

						<div className="border-border mt-9 border-t pt-4">
							<p className="text-muted text-xs">
								TechThrive 2026 <span className="text-border-strong mx-2">·</span>{" "}
								CodeX Club <span className="text-border-strong mx-2">·</span>{" "}
								Quantum University
							</p>
						</div>
					</motion.section>
				</div>
			</div>
		</main>
	);
}

export default NotFoundPage;
