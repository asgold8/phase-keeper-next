"use client";

import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import CurrentRound from "./CurrentRound";
import RoundList from "./RoundList";
import PhasesModal from "./PhasesModal";

const GamePanel = ({ onEndGame }: { onEndGame: () => void }) => {
  const rounds = useAppSelector((state) => state.game.rounds) ?? {};
  const [showPhasesModal, setShowPhasesModal] = useState(false);
  const [confirmEnd, setConfirmEnd] = useState(false);

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
      <div className="flex justify-end">
        {!confirmEnd ? (
          <button
            onClick={() => setConfirmEnd(true)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            End Game
          </button>
        ) : (
          <div className="mt-4 flex gap-2 items-center">
            <span className="text-red-700 font-semibold">
              Confirm End Game?
            </span>
            <button
              onClick={() => {
                setConfirmEnd(false);
                onEndGame();
              }}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Yes
            </button>
            <button
              onClick={() => setConfirmEnd(false)}
              className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 transition"
            >
              No
            </button>
          </div>
        )}
      </div>
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
