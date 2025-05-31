"use client";
import { useState } from "react";

import PlayerPanel from "@/features/players/player-panel";
import GamePanel from "@/features/game/game-panel";

const ScoreKeeperPanel = () => {
  const [gameStart, setGameStart] = useState(false);
  return (
    <div className="border border-indigo-600 rounded-lg p-4 w-full">
      {gameStart ? (
        <GamePanel onEndGame={() => setGameStart(false)} />
      ) : (
        <PlayerPanel onStartGame={() => setGameStart(true)} />
      )}
    </div>
  );
};

export default ScoreKeeperPanel;
