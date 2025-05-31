"use client";

import HeroSection from "@/components/hero-section";
import ScoreKeeperPanel from "@/components/score-keeper-panel";
import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {!started ? (
          <HeroSection onGetStarted={() => setStarted(true)} />
        ) : (
          <ScoreKeeperPanel />
        )}
      </main>
    </div>
  );
}
