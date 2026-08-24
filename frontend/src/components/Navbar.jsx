import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import logo from "@/assets/techthrive-logo.svg";

const navigation = [
	{ label: "About", href: "#about" },
	{ label: "Journey", href: "#journey" },
	{ label: "Problems", href: "#problems" },
	{ label: "Previous Winners", href: "#previous-winners" },
	{ label: "Prizes", href: "#prizes" },
	{ label: "FAQ", href: "#faq" },
];

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const [darkMode, setDarkMode] = useState(() =>
		document.documentElement.classList.contains("dark"),
	);

	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
		document.documentElement.classList.toggle("light", !darkMode);
	}, [darkMode]);

	useEffect(() => {
		const previousOverflow = document.body.style.overflow;

		if (mobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = previousOverflow;
		}

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [mobileOpen]);

	useEffect(() => {
		const updateActiveSection = () => {
			const offset = window.scrollY + window.innerHeight * 0.28;

			let currentSection = "";

			for (const item of navigation) {
				const section = document.querySelector(item.href);

				if (!section) continue;

				const rect = section.getBoundingClientRect();
				const top = rect.top + window.scrollY;

				if (top <= offset) {
					currentSection = item.href;
				}
			}

			setActiveSection(currentSection);
		};

		updateActiveSection();

		window.addEventListener("scroll", updateActiveSection, {
			passive: true,
		});

		window.addEventListener("resize", updateActiveSection);

		return () => {
			window.removeEventListener("scroll", updateActiveSection);
			window.removeEventListener("resize", updateActiveSection);
		};
	}, []);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setMobileOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const closeMobileMenu = () => {
		setMobileOpen(false);
	};

	const handleNavigation = (event, href) => {
		event.preventDefault();

		const target = document.querySelector(href);

		setMobileOpen(false);

		if (!target) {
			return;
		}

		window.history.pushState(null, "", href);

		window.requestAnimationFrame(() => {
			const headerOffset = 100;
			const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

			window.scrollTo({
				top: Math.max(0, targetTop),
				behavior: shouldReduceMotion ? "auto" : "smooth",
			});
		});
	};

	const toggleTheme = () => {
		setDarkMode((current) => !current);
	};

	return (
		<>
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={closeMobileMenu}
						className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden dark:bg-black/50"
					/>
				)}
			</AnimatePresence>

			<motion.header
				initial={shouldReduceMotion ? false : { y: -70, opacity: 0 }}
				animate={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
				transition={{
					duration: 0.55,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8"
			>
				<div
					className={`border-border/60 bg-background/85 relative mx-auto max-w-7xl border backdrop-blur-2xl transition-all duration-300 ${
						mobileOpen
							? "rounded-2xl shadow-2xl"
							: scrolled
								? "rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
								: "rounded-2xl"
					}`}
				>
					{scrolled && (
						<motion.div
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							className="bg-primary-500 absolute inset-x-8 top-0 h-px origin-left"
						/>
					)}

					<div className="flex h-[68px] items-center px-3 sm:px-4">
						<Link
							to="/"
							onClick={closeMobileMenu}
							className="group flex min-w-0 items-center gap-2.5"
						>
							<motion.img
								src={logo}
								alt="CodeX Club"
								whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
								whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
								className="h-9 w-auto shrink-0 object-contain sm:h-10"
							/>

							<div className="bg-border hidden h-8 w-px sm:block" />

							<div className="block min-w-0 leading-none">
								<p className="font-display text-foreground text-sm font-bold tracking-tight">
									TechThrive
								</p>

								<p className="text-muted mt-1 flex items-center gap-1.5 font-mono text-[8px] tracking-[0.18em] uppercase">
									<span className="relative flex size-1.5">
										<span className="bg-primary-500 absolute inset-0 animate-ping rounded-full opacity-60" />
										<span className="bg-primary-500 relative size-1.5 rounded-full" />
									</span>
									2026
								</p>
							</div>
						</Link>

						<nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
							<div className="border-border/50 bg-surface-raised/60 flex items-center gap-0.5 rounded-xl border p-1">
								{navigation.map((item) => {
									const isActive = activeSection === item.href;

									return (
										<a
											key={item.href}
											href={item.href}
											onClick={(event) => handleNavigation(event, item.href)}
											className={`relative rounded-lg px-3 py-2 text-xs font-medium transition-colors xl:px-3.5 xl:text-sm ${
												isActive
													? "text-primary-500"
													: "text-muted hover:text-foreground"
											}`}
										>
											{isActive && (
												<motion.span
													layoutId="navbar-active"
													transition={{
														type: "spring",
														stiffness: 420,
														damping: 32,
													}}
													className="bg-primary-500/10 absolute inset-0 rounded-lg"
												/>
											)}

											<span className="relative z-10">{item.label}</span>
										</a>
									);
								})}
							</div>
						</nav>

						<div className="ml-auto flex items-center gap-2">
							<button
								type="button"
								onClick={toggleTheme}
								aria-label={
									darkMode ? "Switch to light mode" : "Switch to dark mode"
								}
								className="border-border/70 bg-surface-raised/60 text-muted hover:border-primary-500/40 hover:text-foreground flex size-9 items-center justify-center rounded-lg border transition-colors sm:size-10"
							>
								<AnimatePresence mode="wait" initial={false}>
									<motion.span
										key={darkMode ? "sun" : "moon"}
										initial={
											shouldReduceMotion
												? false
												: {
														opacity: 0,
														rotate: -35,
														scale: 0.7,
													}
										}
										animate={
											shouldReduceMotion
												? {}
												: {
														opacity: 1,
														rotate: 0,
														scale: 1,
													}
										}
										exit={
											shouldReduceMotion
												? {}
												: {
														opacity: 0,
														rotate: 35,
														scale: 0.7,
													}
										}
										transition={{ duration: 0.18 }}
									>
										{darkMode ? (
											<Sun className="size-4" />
										) : (
											<Moon className="size-4" />
										)}
									</motion.span>
								</AnimatePresence>
							</button>

							<motion.a
								target="_blank"
								href="https://unstop.com/p/techthrive-2026-quantum-university-roorkee-1740052"
								whileHover={
									shouldReduceMotion
										? {}
										: {
												y: -1,
												boxShadow: "0 8px 25px rgba(34, 197, 94, 0.18)",
											}
								}
								whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
								className="bg-primary-500 hover:bg-primary-600 group hidden items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold text-white transition-colors sm:inline-flex sm:text-sm"
							>
								Register
								<ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</motion.a>

							<button
								type="button"
								onClick={() => setMobileOpen((current) => !current)}
								aria-label={mobileOpen ? "Close menu" : "Open menu"}
								aria-expanded={mobileOpen}
								className="border-border/70 bg-surface-raised/60 text-foreground flex size-9 items-center justify-center rounded-lg border transition-colors sm:size-10 lg:hidden"
							>
								<AnimatePresence mode="wait" initial={false}>
									<motion.span
										key={mobileOpen ? "close" : "menu"}
										initial={
											shouldReduceMotion
												? false
												: {
														opacity: 0,
														rotate: -30,
														scale: 0.8,
													}
										}
										animate={
											shouldReduceMotion
												? {}
												: {
														opacity: 1,
														rotate: 0,
														scale: 1,
													}
										}
										exit={
											shouldReduceMotion
												? {}
												: {
														opacity: 0,
														rotate: 30,
														scale: 0.8,
													}
										}
										transition={{ duration: 0.16 }}
									>
										{mobileOpen ? (
											<X className="size-5" />
										) : (
											<Menu className="size-5" />
										)}
									</motion.span>
								</AnimatePresence>
							</button>
						</div>
					</div>

					<AnimatePresence initial={false}>
						{mobileOpen && (
							<motion.div
								initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
								animate={shouldReduceMotion ? {} : { opacity: 1, height: "auto" }}
								exit={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
								transition={{
									duration: 0.25,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="relative z-10 overflow-hidden lg:hidden"
							>
								<div className="border-border/50 border-t px-3 pt-2 pb-3">
									<nav className="flex flex-col gap-0.5">
										{navigation.map((item, index) => {
											const isActive = activeSection === item.href;

											return (
												<motion.a
													key={item.href}
													href={item.href}
													onClick={(event) =>
														handleNavigation(event, item.href)
													}
													initial={
														shouldReduceMotion
															? false
															: {
																	opacity: 0,
																	x: -8,
																}
													}
													animate={
														shouldReduceMotion
															? {}
															: {
																	opacity: 1,
																	x: 0,
																}
													}
													transition={{
														delay: index * 0.035,
														duration: 0.2,
													}}
													className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
														isActive
															? "bg-primary-500/10 text-primary-500"
															: "text-muted hover:bg-surface-raised hover:text-foreground"
													}`}
												>
													<span className="flex items-center gap-3">
														<span className="text-primary-500 w-5 font-mono text-[9px]">
															{String(index + 1).padStart(2, "0")}
														</span>

														{item.label}
													</span>

													<ArrowUpRight className="size-4" />
												</motion.a>
											);
										})}

										<motion.a
											target="_blank"
											href="https://unstop.com/p/techthrive-2026-quantum-university-roorkee-1740052"
											onClick={closeMobileMenu}
											initial={
												shouldReduceMotion ? false : { opacity: 0, y: 8 }
											}
											animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
											transition={{
												delay: 0.2,
												duration: 0.25,
											}}
											className="bg-primary-500 mt-2 flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-sm font-semibold text-white"
										>
											Register for TechThrive
											<ArrowUpRight className="size-4" />
										</motion.a>
									</nav>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</motion.header>
		</>
	);
}

export default Navbar;
