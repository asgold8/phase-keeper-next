"use client";
import { useState } from "react";

import PlayerPanel from "@/features/players/player-panel";
import GamePanel from "@/features/game/game-panel";
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
    <div className="border border-indigo-600 rounded-lg p-4 w-full">
      {gameStart ? (
        <GamePanel onEndGame={() => handleEndGame()} />
      ) : (
        <PlayerPanel onStartGame={() => setGameStart(true)} />
      )}
    </div>
  );
};

export default ScoreKeeperPanel;
