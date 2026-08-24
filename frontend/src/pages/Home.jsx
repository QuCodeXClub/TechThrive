import CTA from "@/components/BottomCTA";
import About from "@/components/Sections/About";
import FAQ from "@/components/Sections/FAQ";
import Hero from "@/components/Sections/Hero";
import Journey from "@/components/Sections/Journey";
import PreviousWinners from "@/components/Sections/PreviousWinners";
import Prizes from "@/components/Sections/Prizes";
import Sponsors from "@/components/Sections/Sponsers";
import Themes from "@/components/Sections/Themes";

function Home() {
	return (
		<main className="relative isolate">
			{/* <div className="pointer-events-none fixed inset-0 z-11 overflow-hidden">
				<div className="bg-primary-500/[0.07] absolute top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] sm:size-[44rem]" />

				<div
					className="absolute inset-0 opacity-[0.018]"
					style={{
						backgroundImage:
							"linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
						backgroundSize: "80px 80px",
					}}
				/>
			</div> */}

			<div className="relative z-10">
				<Hero />
				<About />
				<Journey />
				<Themes />
				<Sponsors />
				<PreviousWinners />
				<Prizes />
				<FAQ />
				<CTA />
			</div>
		</main>
	);
}

export default Home;
