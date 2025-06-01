import React from "react";
import AddPlayer from "./add-player";
import PlayerList from "./player-list";
import { useAppSelector } from "@/lib/hooks";

const PlayerPanel = ({ onStartGame }: { onStartGame: () => void }) => {
  const players = useAppSelector((state) => state.game.players) ?? {};
  const playerNames = Object.keys(players) ?? [];
  const minPlayers = 2;
  const isGameReady = playerNames.length >= minPlayers;

  return (
    <div>
      <AddPlayer />
      <PlayerList />
      <button
        disabled={!isGameReady}
        onClick={onStartGame}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none transition"
      >
        Start Game
      </button>
    </div>
  );
};

export default PlayerPanel;
