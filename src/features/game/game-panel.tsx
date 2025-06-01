"use client";

import { useAppSelector } from "@/lib/hooks";
import CurrentRound from "./current-round";
import RoundList from "./round-list";

const GamePanel = ({ onEndGame }: { onEndGame: () => void }) => {
  const rounds = useAppSelector((state) => state.game.rounds) ?? {};

  // TODO: add confirmation dialog before ending the game
  return (
    <div>
      <h2 className="text-lg text-indigo-700 font-bold">Phase Score Keeper</h2>
      <CurrentRound />
      {Object.keys(rounds).length > 0 && <RoundList />}
      <button
        onClick={onEndGame}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        End Game
      </button>
    </div>
  );
};

export default GamePanel;
