"use client";

import HeroSection from "@/components/HeroSection";
import ScoreKeeperPanel from "@/components/ScoreKeeperPanel";
import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <HeroSection onGetStarted={() => setStarted(true)} />;
  }

  return <ScoreKeeperPanel />;
}
