"use client";
import { useState } from "react";

import PlayerPanel from "@/features/players/PlayerPanel";
import GamePanel from "@/features/game/GamePanel";
import { useAppDispatch } from "@/lib/hooks";
import { resetScores } from "@/lib/features/game-slice";

const ScoreKeeperPanel = () => {
  const [gameStart, setGameStart] = useState(false);
  const dispatch = useAppDispatch();

  const handleEndGame = () => {
    setGameStart(false);
    dispatch(resetScores());
  };
  return (
    <div className="min-h-screen flex flex-col items-center px-2 sm:px-4 pt-6 sm:pt-12">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white text-center underline decoration-[3px] underline-offset-[6px] sm:underline-offset-[10px] mb-6 sm:mb-10">
        Phase Score Keeper
      </h1>
      <div
        className={`border border-white rounded-2xl p-3 sm:p-8 w-full bg-white/5 backdrop-blur-md ${gameStart ? "max-w-5xl" : "max-w-md"
          }`}
      >
        {gameStart ? (
          <GamePanel onEndGame={() => handleEndGame()} />
        ) : (
          <PlayerPanel onStartGame={() => setGameStart(true)} />
        )}
      </div>
    </div>
  );
};

export default ScoreKeeperPanel;
