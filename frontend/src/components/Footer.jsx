import { Link } from "react-router";

import logo from "@/assets/techthrive-logo.svg";

const socialLinks = [
	{
		label: "LinkedIn",
		href: "https://linkedin.com/company/qucodex",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
				<path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03c0 1.12.91 2.02 2.03 2.02s2.02-.9 2.02-2.02A2.03 2.03 0 0 0 5.25 3ZM20.8 13.4c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.36 1.85V8.5H9.76V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.87 1.72 1.87 3.05V20h3.38l.27-6.6Z" />
			</svg>
		),
	},
	{
		label: "GitHub",
		href: "https://github.com/QuCodeXClub",
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
				<path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.2.7-1.47-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.44.11-2.99 0 0 .95-.3 3.1 1.16a10.74 10.74 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.28-5.14 5.55.4.35.75 1.04.75 2.1v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
			</svg>
		),
	},
	{
		label: "Instagram",
		href: "https://instagram.com/qucodex",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				className="size-4"
				aria-hidden="true"
			>
				<rect x="3" y="3" width="18" height="18" rx="5" />
				<circle cx="12" cy="12" r="4.2" />
				<circle cx="17.3" cy="6.8" r="1" fill="currentColor" stroke="none" />
			</svg>
		),
	},
];

function Footer() {
	return (
		<footer className="border-border bg-background relative overflow-hidden border-t">
			<div className="pointer-events-none absolute inset-0">
				<div className="bg-primary-500/5 absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full blur-3xl" />
				<div className="bg-primary-500/[0.03] absolute right-0 bottom-0 h-72 w-72 rounded-full blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8 lg:px-10">
				<div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
					<div className="max-w-md">
						<Link to="/" className="inline-flex items-center">
							<img
								src={logo}
								alt="CodeX Club"
								className="z-20 h-11 w-auto object-contain"
							/>
						</Link>

						<div className="mt-5 flex items-center gap-2">
							<span className="bg-primary-500 relative flex size-2 rounded-full">
								<span className="bg-primary-500 absolute inset-0 animate-ping rounded-full opacity-60" />
							</span>

							<span className="text-muted font-mono text-[10px] tracking-[0.2em] uppercase">
								TechThrive 2026
							</span>
						</div>

						<p className="text-muted mt-5 max-w-sm text-sm leading-6">
							A developer-focused hackathon built for ambitious minds, real-world
							problems, and ideas worth shipping.
						</p>
					</div>

					<div className="grid gap-10 sm:grid-cols-2">
						<div>
							<p className="text-foreground font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
								Connect
							</p>

							<div className="mt-5 flex flex-wrap gap-2">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										aria-label={social.label}
										target="_blank"
										rel="noreferrer"
										className="border-border bg-surface-raised/50 text-muted hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-primary-500 flex size-10 items-center justify-center rounded-lg border transition-all duration-200"
									>
										{social.icon}
									</a>
								))}
							</div>

							<p className="text-muted mt-5 max-w-xs text-xs leading-5">
								Follow CodeX Club for updates, announcements, and future events.
							</p>
						</div>

						<div>
							<p className="text-foreground font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
								Legal & Compliance
							</p>

							<div className="mt-5 flex flex-col items-start gap-3">
								<a
									href="https://qucodex.com/privacy-policy"
									target="_blank"
									rel="noreferrer"
									className="text-muted hover:text-primary-500 text-xs transition-colors"
								>
									Privacy Policy
								</a>

								<a
									href="https://qucodex.com/terms-conditions"
									target="_blank"
									rel="noreferrer"
									className="text-muted hover:text-primary-500 text-xs transition-colors"
								>
									Terms & Conditions
								</a>

								<a
									href="https://qucodex.com/accessibility"
									target="_blank"
									rel="noreferrer"
									className="text-muted hover:text-primary-500 text-xs transition-colors"
								>
									Accessibility
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="border-border mt-14 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-muted text-xs">© 2026 CodeX Club. All rights reserved.</p>

					<div className="text-muted flex items-center gap-4 text-xs">
						<span className="bg-border size-1 rounded-full" />
						<span className="font-mono">Built by CodeX</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
