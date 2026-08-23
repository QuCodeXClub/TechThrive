import { createFileRoute } from "@tanstack/react-router";
import { Deck, type DeckSlide } from "@/components/deck/Deck";
import { DeckChrome } from "@/components/deck/DeckChrome";
import { HeroSlide } from "@/components/deck/slides/HeroSlide";
import { AboutSlide } from "@/components/deck/slides/AboutSlide";
import { DetailsSlide } from "@/components/deck/slides/DetailsSlide";
import { JourneySlide } from "@/components/deck/slides/JourneySlide";
import { RulesSlide } from "@/components/deck/slides/RulesSlide";
import { ProblemsSlide } from "@/components/deck/slides/ProblemsSlide";
import { WinnersSlide } from "@/components/deck/slides/WinnersSlide";
import { PrizesSlide } from "@/components/deck/slides/PrizesSlide";
import { FaqSlide } from "@/components/deck/slides/FaqSlide";
import { RegisterSlide } from "@/components/deck/slides/RegisterSlide";

const title = "TechThrive 2026 | CodeX Club Hackathon, Quantum University";

const description =
  "TechThrive 2026 — Quantum University's internal hackathon by CodeX Club. Round 1 SIH screening, 7-hour Round 2 build sprint, rules, problem statements and registration.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: Index,
});

const slides: DeckSlide[] = [
  {
    id: "top",
    label: "Intro",
    render: () => <HeroSlide />,
  },

  {
    id: "about",
    label: "About",
    render: () => <AboutSlide />,
  },

  {
    id: "details",
    label: "Details",
    render: () => <DetailsSlide />,
  },

  {
    id: "journey",
    label: "Journey",
    render: () => <JourneySlide />,
  },

  {
    id: "rules",
    label: "Rules",
    render: () => <RulesSlide />,
  },

  {
    id: "problem-statements",
    label: "Problems",
    render: () => <ProblemsSlide />,
  },

  {
    id: "previous-winners",
    label: "Previous Winners",
    render: () => <WinnersSlide />,
  },

  {
    id: "prizes",
    label: "Prizes",
    render: () => <PrizesSlide />,
  },

  {
    id: "faq",
    label: "FAQ",
    render: () => <FaqSlide />,
  },

  {
    id: "register",
    label: "Register",
    render: () => <RegisterSlide />,
  },
];

function Index() {
  return <Deck slides={slides} chrome={<DeckChrome slides={slides} />} />;
}
