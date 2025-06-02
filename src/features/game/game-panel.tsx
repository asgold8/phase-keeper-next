"use client";

import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import CurrentRound from "./current-round";
import RoundList from "./round-list";
import PhasesModal from "./phases-modal";

const GamePanel = ({ onEndGame }: { onEndGame: () => void }) => {
  const rounds = useAppSelector((state) => state.game.rounds) ?? {};
  const [showPhasesModal, setShowPhasesModal] = useState(false);

  // TODO: add confirmation dialog before ending the game
  return (
    <div>
      <h2 className="text-xl text-indigo-700 font-bold">Phase Score Keeper</h2>
      <button
        className="hover:cursor-pointer mt-2 mb-2 bg-indigo-600 text-white px-2 py rounded hover:bg-indigo-700 transition"
        onClick={() => setShowPhasesModal(true)}
      >
        Phases Reference
      </button>
      <CurrentRound />
      {Object.keys(rounds).length > 0 && <RoundList />}
      <button
        onClick={onEndGame}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        End Game
      </button>
      {showPhasesModal && (
        <PhasesModal
          onClose={() => setShowPhasesModal(false)}
          open={showPhasesModal}
        />
      )}
    </div>
  );
};

export default GamePanel;
