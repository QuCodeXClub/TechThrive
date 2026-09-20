import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Menu, Moon, Sparkles, Sun, Trophy, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import logo from "@/assets/techthrive-logo.svg";
import { getTheme, setTheme } from "@/utils/storage";

const navigation = [
	{ label: "Journey", href: "#journey" },
	{ label: "About", href: "#about" },
	{ label: "Themes", href: "#themes" },
	{ label: "Sponsors", href: "#sponsors" },
	{ label: "Winners", href: "#previous-winners" },
	{ label: "Prizes", href: "#prizes" },
	{ label: "FAQ", href: "#faq" },
];

const REGISTER_URL = "https://unstop.com/p/techthrive-2026-quantum-university-roorkee-1740052";

function Navbar() {
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const isResultsPage = location.pathname.startsWith("/results");

	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	const [darkMode, setDarkMode] = useState(() => {
		const savedTheme = getTheme();

		if (savedTheme) {
			return savedTheme === "dark";
		}

		return document.documentElement.classList.contains("dark");
	});

	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20;

			setScrolled((current) => (current === isScrolled ? current : isScrolled));
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll, {
			passive: true,
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const theme = darkMode ? "dark" : "light";

		document.documentElement.classList.toggle("dark", darkMode);
		document.documentElement.classList.toggle("light", !darkMode);

		setTheme(theme);
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
		if (!isHomePage) {
			setActiveSection("");
			return;
		}

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
	}, [isHomePage]);

	useEffect(() => {
		setMobileOpen(false);
	}, [location.pathname]);

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
						initial={shouldReduceMotion ? false : { opacity: 0 }}
						animate={shouldReduceMotion ? {} : { opacity: 1 }}
						exit={shouldReduceMotion ? {} : { opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={closeMobileMenu}
						className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm min-[1200px]:hidden dark:bg-black/50"
					/>
				)}
			</AnimatePresence>

			<motion.header
				initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
				animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
				transition={{
					duration: 0.35,
					ease: "easeOut",
				}}
				className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8"
			>
				<div
					className={`border-border/60 bg-background/85 relative mx-auto max-w-7xl overflow-hidden border backdrop-blur-2xl transition-all duration-300 ${
						mobileOpen
							? "rounded-2xl shadow-2xl"
							: scrolled
								? "rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
								: "rounded-2xl"
					}`}
				>
					{scrolled && (
						<motion.div
							initial={shouldReduceMotion ? false : { scaleX: 0 }}
							animate={shouldReduceMotion ? {} : { scaleX: 1 }}
							transition={{
								duration: 0.3,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="bg-primary-500 absolute inset-x-8 top-0 z-10 h-px origin-left"
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
								<p className="font-display text-foreground text-lg font-bold tracking-tight">
									TechThrive
								</p>

								<p className="text-muted flex items-center gap-1.5 font-mono text-[8px] font-bold tracking-[0.18em] uppercase">
									<span className="relative flex size-1.5">
										<span className="bg-primary-500 absolute inset-0 animate-ping rounded-full opacity-60" />
										<span className="bg-primary-500 relative size-1.5 rounded-full" />
									</span>
									2026
								</p>
							</div>
						</Link>

						{isHomePage && (
							<nav className="absolute left-1/2 hidden -translate-x-1/2 min-[1200px]:block">
								<div className="border-border/50 bg-surface-raised/60 flex items-center gap-0.5 rounded-xl border p-1">
									{navigation.map((item) => {
										const isActive = activeSection === item.href;

										return (
											<a
												key={item.href}
												href={item.href}
												onClick={(event) =>
													handleNavigation(event, item.href)
												}
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
						)}

						<div className="ml-auto flex items-center gap-2">
							<motion.div
								whileHover={shouldReduceMotion ? {} : { y: -1 }}
								whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
								className="hidden md:block"
							>
								<Link
									to="/developers"
									className="border-border/60 bg-surface-raised/40 text-muted hover:border-primary-500/40 hover:bg-primary-500/5 hover:text-foreground group flex h-10 items-center gap-2 rounded-lg border px-3 transition-all"
								>
									<span className="text-primary-500 bg-primary-500/10 flex size-5 items-center justify-center rounded-md font-mono text-[10px] font-bold">
										{"</>"}
									</span>

									<span className="text-xs font-medium">Developers</span>
								</Link>
							</motion.div>

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
										transition={{
											duration: 0.18,
										}}
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
								rel="noopener noreferrer"
								href={REGISTER_URL}
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
								className="border-border/70 bg-surface-raised/60 text-foreground flex size-9 items-center justify-center rounded-lg border transition-colors min-[1200px]:hidden sm:size-10"
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
										transition={{
											duration: 0.16,
										}}
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
								initial={
									shouldReduceMotion
										? false
										: {
												opacity: 0,
												height: 0,
											}
								}
								animate={
									shouldReduceMotion
										? {}
										: {
												opacity: 1,
												height: "auto",
											}
								}
								exit={
									shouldReduceMotion
										? {}
										: {
												opacity: 0,
												height: 0,
											}
								}
								transition={{
									duration: 0.25,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="relative z-10 overflow-hidden min-[1200px]:hidden"
							>
								<div className="border-border/50 border-t px-3 pt-2 pb-3">
									<nav className="flex flex-col gap-0.5">
										{isHomePage &&
											navigation.map((item, index) => {
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
											rel="noopener noreferrer"
											href={REGISTER_URL}
											onClick={closeMobileMenu}
											initial={
												shouldReduceMotion
													? false
													: {
															opacity: 0,
															y: 8,
														}
											}
											animate={
												shouldReduceMotion
													? {}
													: {
															opacity: 1,
															y: 0,
														}
											}
											transition={{
												delay: isHomePage ? 0.2 : 0,
												duration: 0.25,
											}}
											className="bg-primary-500 hover:bg-primary-600 mt-2 flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-sm font-semibold text-white transition-colors"
										>
											Register for TechThrive
											<ArrowUpRight className="size-4" />
										</motion.a>

										<motion.div
											initial={
												shouldReduceMotion
													? false
													: {
															opacity: 0,
															y: 6,
														}
											}
											animate={
												shouldReduceMotion
													? {}
													: {
															opacity: 1,
															y: 0,
														}
											}
											transition={{
												delay: isHomePage ? 0.25 : 0.05,
												duration: 0.2,
											}}
										>
											<Link
												to="/developers"
												onClick={closeMobileMenu}
												className="border-border/60 bg-surface-raised/40 text-muted hover:border-primary-500/40 hover:bg-primary-500/5 hover:text-foreground group mt-2 flex h-11 items-center justify-center gap-2 rounded-lg border transition-all"
											>
												<span className="text-primary-500 bg-primary-500/10 flex size-5 items-center justify-center rounded-md font-mono text-[10px] font-bold">
													{"</>"}
												</span>

												<span className="text-xs font-medium">
													Meet the Developers
												</span>

												<ArrowUpRight className="size-3.5 opacity-60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
											</Link>
										</motion.div>
									</nav>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{!isResultsPage && (
					<div className="relative mx-auto mt-2 flex max-w-7xl items-stretch justify-center gap-1 overflow-hidden px-1 sm:gap-1">
						{[
							{ left: "13%", top: "18%", size: "size-1.5", delay: 0 },
							{ left: "34%", top: "70%", size: "size-1", delay: 0.8 },
							{ left: "48%", top: "20%", size: "size-1", delay: 1.5 },
							{ left: "76%", top: "72%", size: "size-1.5", delay: 2.1 },
						].map((star, index) => (
							<motion.div
								key={`left-star-${index}`}
								style={{
									left: star.left,
									top: star.top,
								}}
								animate={
									shouldReduceMotion
										? { opacity: 0.35 }
										: {
												opacity: [0.15, 0.8, 0.2, 0.6, 0.15],
												scale: [0.6, 1.2, 0.8, 1.05, 0.6],
												y: [0, -4, 2, -3, 0],
												rotate: [0, 45, 90, 135, 180],
											}
								}
								transition={{
									duration: 3.5 + index * 0.5,
									delay: star.delay,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className={`pointer-events-none absolute z-20 ${star.size} text-amber-200`}
							>
								<Sparkles className="size-full fill-current" />
							</motion.div>
						))}

						{[
							{ left: "12%", top: "70%", size: "size-1", delay: 0.4 },
							{ left: "30%", top: "18%", size: "size-1.5", delay: 1.1 },
							{ left: "57%", top: "75%", size: "size-1", delay: 1.8 },
							{ left: "76%", top: "22%", size: "size-1.5", delay: 2.4 },
							{ left: "91%", top: "64%", size: "size-1", delay: 0.9 },
						].map((star, index) => (
							<motion.div
								key={`right-star-${index}`}
								style={{
									left: star.left,
									top: star.top,
								}}
								animate={
									shouldReduceMotion
										? { opacity: 0.3 }
										: {
												opacity: [0.1, 0.75, 0.2, 0.65, 0.1],
												scale: [0.7, 1.25, 0.8, 1.1, 0.7],
												y: [0, 3, -4, 2, 0],
												rotate: [0, -45, -90, -135, -180],
											}
								}
								transition={{
									duration: 4 + index * 0.35,
									delay: star.delay,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className={`pointer-events-none absolute z-20 ${star.size} text-amber-200`}
							>
								<Sparkles className="size-full fill-current" />
							</motion.div>
						))}

						<motion.div
							initial={
								shouldReduceMotion
									? false
									: {
											opacity: 0,
											x: -16,
										}
							}
							animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
							transition={{
								duration: 0.45,
								delay: 0.1,
								ease: [0.22, 1, 0.36, 1],
							}}
							whileHover={shouldReduceMotion ? {} : { y: -2 }}
							whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
							className="relative z-10 min-w-0 flex-1"
						>
							<Link
								to="/results/round-1"
								className="group bg-primary-500 hover:bg-primary-600 relative flex min-h-[54px] items-center overflow-hidden border border-amber-300/45 px-3 py-2.5 text-white shadow-[0_8px_28px_rgba(245,158,11,0.12)] transition-all duration-300 hover:border-amber-200/80 hover:shadow-[0_12px_34px_rgba(245,158,11,0.22)] sm:px-5"
								style={{
									clipPath:
										"polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)",
								}}
							>
								{/* Golden animated edge */}
								<motion.div
									animate={
										shouldReduceMotion
											? {}
											: {
													opacity: [0.35, 0.9, 0.35],
												}
									}
									transition={{
										duration: 2.8,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"
								/>

								{/* Golden bottom edge */}
								<div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />

								{/* Moving light */}
								<motion.div
									animate={
										shouldReduceMotion
											? {}
											: {
													x: ["-130%", "150%"],
												}
									}
									transition={{
										duration: 3.2,
										repeat: Infinity,
										repeatDelay: 2.5,
										ease: "easeInOut",
									}}
									className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-amber-100/15 to-transparent"
								/>

								<div className="relative flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
									{/* Icon */}
									<motion.div
										whileHover={
											shouldReduceMotion
												? {}
												: {
														scale: 1.08,
														rotate: 5,
													}
										}
										className="relative flex size-8 shrink-0 items-center justify-center border border-amber-200/30 bg-white/10"
										style={{
											clipPath:
												"polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
										}}
									>
										<motion.div
											animate={
												shouldReduceMotion
													? {}
													: {
															opacity: [0.2, 0.55, 0.2],
														}
											}
											transition={{
												duration: 2,
												repeat: Infinity,
											}}
											className="absolute inset-0 bg-amber-300/10"
										/>

										<CheckCircle2 className="relative size-4 text-amber-100" />
									</motion.div>

									{/* Text */}
									<div className="flex min-w-0 flex-1 flex-col">
										<div className="flex items-center gap-2">
											<span className="font-mono text-[8px] font-bold tracking-[0.16em] text-white/60 uppercase">
												Round 01
											</span>

											<span className="h-px w-4 bg-amber-200/30" />

											<div className="flex items-center gap-1.5">
												<motion.span
													animate={
														shouldReduceMotion
															? {}
															: {
																	scale: [1, 1.4, 1],
																	opacity: [0.4, 1, 0.4],
																}
													}
													transition={{
														duration: 1.7,
														repeat: Infinity,
													}}
													className="size-1.5 bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.7)]"
												/>

												<span className="hidden font-mono text-[7px] font-bold tracking-wider text-amber-200 uppercase sm:block">
													Completed
												</span>
											</div>
										</div>

										<span className="truncate text-xs font-bold tracking-tight text-white sm:text-sm">
											Results Published
										</span>
									</div>

									{/* Arrow */}
									<motion.div
										animate={
											shouldReduceMotion
												? {}
												: {
														x: [0, 2, 0],
														y: [0, -2, 0],
													}
										}
										transition={{
											duration: 2.2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
										className="flex size-7 shrink-0 items-center justify-center border border-amber-200/20 bg-white/10 transition-all group-hover:border-amber-200/40 group-hover:bg-amber-200/10"
										style={{
											clipPath:
												"polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
										}}
									>
										<ArrowUpRight className="size-4 text-amber-100" />
									</motion.div>
								</div>
							</Link>
						</motion.div>

						<motion.div
							initial={
								shouldReduceMotion
									? false
									: {
											opacity: 0,
											x: 16,
										}
							}
							animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
							transition={{
								duration: 0.45,
								delay: 0.16,
								ease: [0.22, 1, 0.36, 1],
							}}
							whileHover={shouldReduceMotion ? {} : { y: -1 }}
							className="relative z-10 min-w-0 flex-1"
						>
							<Link
								to="/results/grand-finale"
								className="group bg-primary-500 hover:bg-primary-600 relative flex min-h-[54px] items-center overflow-hidden border border-amber-300/45 px-3 py-2.5 text-white shadow-[0_8px_28px_rgba(245,158,11,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-amber-200/80 hover:shadow-[0_12px_34px_rgba(245,158,11,0.22)] sm:px-5"
								style={{
									clipPath: "polygon(8px 0, 100% 0, 100% 100%, 8px 100%, 0 50%)",
								}}
							>
								{/* Animated golden edge */}
								<motion.div
									animate={
										shouldReduceMotion
											? {}
											: {
													opacity: [0.25, 0.75, 0.25],
												}
									}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"
								/>

								{/* Golden right edge */}
								<motion.div
									animate={
										shouldReduceMotion
											? {}
											: {
													opacity: [0.3, 0.8, 0.3],
												}
									}
									transition={{
										duration: 2.5,
										repeat: Infinity,
									}}
									className="pointer-events-none absolute inset-y-0 right-0 w-px bg-amber-300"
								/>

								{/* Moving shimmer */}
								<motion.div
									animate={
										shouldReduceMotion
											? {}
											: {
													x: ["-130%", "150%"],
												}
									}
									transition={{
										duration: 4,
										repeat: Infinity,
										repeatDelay: 3,
										ease: "easeInOut",
									}}
									className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-amber-100/10 to-transparent"
								/>

								<div className="relative flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
									{/* Trophy */}
									<motion.div
										animate={
											shouldReduceMotion
												? {}
												: {
														y: [0, -2, 0],
														rotate: [0, -3, 3, 0],
													}
										}
										transition={{
											duration: 3,
											repeat: Infinity,
											ease: "easeInOut",
										}}
										className="relative flex size-8 shrink-0 items-center justify-center border border-amber-200/25 bg-amber-300/10"
										style={{
											clipPath:
												"polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
										}}
									>
										<motion.div
											animate={
												shouldReduceMotion
													? {}
													: {
															scale: [0.8, 1.2, 0.8],
															opacity: [0.1, 0.3, 0.1],
														}
											}
											transition={{
												duration: 2.4,
												repeat: Infinity,
											}}
											className="absolute inset-0 bg-amber-300 blur-md"
										/>

										<Trophy className="relative size-4 text-amber-300" />
									</motion.div>

									{/* Text */}
									<div className="flex min-w-0 flex-1 flex-col">
										<div className="flex items-center gap-2">
											<span className="font-mono text-[8px] font-bold tracking-[0.16em] text-white/50 uppercase">
												Grand Finale
											</span>

											<span className="h-px w-4 bg-amber-200/20" />

											<div className="flex items-center gap-1.5">
												<motion.span
													animate={
														shouldReduceMotion
															? {}
															: {
																	scale: [1, 1.4, 1],
																	opacity: [0.35, 1, 0.35],
																}
													}
													transition={{
														duration: 1.8,
														repeat: Infinity,
													}}
													className="size-1.5 bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.7)]"
												/>

												<span className="hidden font-mono text-[7px] font-bold tracking-wider text-amber-200/80 uppercase sm:block">
													Completed
												</span>
											</div>
										</div>

										<span className="truncate text-xs font-bold tracking-tight text-white/90 sm:text-sm">
											Results Published
										</span>
									</div>

									{/* Date */}
									<div
										className="hidden shrink-0 items-center gap-1.5 border border-amber-200/20 bg-amber-300/10 px-2.5 py-1.5 sm:flex"
										style={{
											clipPath:
												"polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)",
										}}
									>
										<motion.span
											animate={
												shouldReduceMotion
													? {}
													: {
															opacity: [0.4, 1, 0.4],
														}
											}
											transition={{
												duration: 1.7,
												repeat: Infinity,
											}}
											className="size-1.5 bg-amber-300 shadow-[0_0_7px_rgba(251,191,36,0.7)]"
										/>

										<span className="font-mono text-[7px] font-bold tracking-wider text-amber-100 uppercase">
											15 Sep
										</span>
									</div>
								</div>
							</Link>
						</motion.div>
					</div>
				)}
			</motion.header>
		</>
	);
}

export default Navbar;
