import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { isRouteErrorResponse, useRouteError } from "react-router";

function ErrorHandlingPage() {
	const error = useRouteError();

	let title = "Something went wrong";
	let description =
		"We couldn't load this page. Please try again or return to the TechThrive homepage.";

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			title = "Page not found";
			description = "The page you're looking for doesn't exist or may have been moved.";
		} else if (error.status === 500) {
			title = "Server error";
			description = "Something went wrong on our side. Please try again in a moment.";
		}
	}

	return (
		<main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-20">
			<section className="w-full max-w-xl text-center">
				<div className="border-primary-500/20 bg-primary-500/10 text-primary-500 mx-auto mb-8 flex size-16 items-center justify-center rounded-2xl border">
					<AlertTriangle className="size-7" />
				</div>

				<p className="text-primary-500 mb-3 font-mono text-sm font-semibold tracking-[0.2em] uppercase">
					TechThrive 2026
				</p>

				<h1 className="font-display text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
					{title}
				</h1>

				<p className="text-muted mx-auto mt-5 max-w-md text-base leading-7">
					{description}
				</p>

				<div className="mt-9 flex flex-wrap items-center justify-center gap-3">
					<a
						href="/"
						className="bg-primary-500 hover:bg-primary-600 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-colors"
					>
						<Home className="size-4" />
						Back to Home
					</a>

					<button
						type="button"
						onClick={() => window.history.back()}
						className="border-border bg-surface-raised text-foreground hover:border-border-strong hover:bg-surface-muted inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors"
					>
						<ArrowLeft className="size-4" />
						Go Back
					</button>
				</div>
			</section>
		</main>
	);
}

export default ErrorHandlingPage;
