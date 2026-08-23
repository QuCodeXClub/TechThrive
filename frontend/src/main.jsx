import React from "react";
import { createRoot } from "react-dom/client";

import { Deck } from "@/components/deck/Deck";
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
import "./styles.css";

const slides = [
  { id: "top", label: "Intro", render: () => <HeroSlide /> },
  { id: "about", label: "About", render: () => <AboutSlide /> },
  { id: "details", label: "Details", render: () => <DetailsSlide /> },
  { id: "journey", label: "Journey", render: () => <JourneySlide /> },
  { id: "rules", label: "Rules", render: () => <RulesSlide /> },
  { id: "problem-statements", label: "Problems", render: () => <ProblemsSlide /> },
  { id: "previous-winners", label: "Previous Winners", render: () => <WinnersSlide /> },
  { id: "prizes", label: "Prizes", render: () => <PrizesSlide /> },
  { id: "faq", label: "FAQ", render: () => <FaqSlide /> },
  { id: "register", label: "Register", render: () => <RegisterSlide /> },
];

function App() {
  return <Deck slides={slides} chrome={<DeckChrome slides={slides} />} />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
