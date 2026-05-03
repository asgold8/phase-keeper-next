import React from "react";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";
import { useAppSelector } from "@/lib/hooks";

const PlayerPanel = ({ onStartGame }: { onStartGame: () => void }) => {
  const players = useAppSelector((state) => state.game.players) ?? {};
  const playerNames = Object.keys(players) ?? [];
  const minPlayers = 2;
  const maxPlayers = 6;
  const isGameReady = playerNames.length >= minPlayers;
  const disableAddPlayer = playerNames.length >= maxPlayers;

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-1">Name your players:</h2>
      <p className="text-white text-sm mb-4">Please add 2 - 6 players.</p>
      <AddPlayer disabled={disableAddPlayer} />
      <PlayerList />
      <button
        disabled={!isGameReady}
        onClick={onStartGame}
        className={`mt-6 px-4 py-2 rounded font-semibold transition ${
          isGameReady
            ? "bg-green-700 text-white hover:bg-green-800 cursor-pointer"
            : "bg-white/90 text-gray-500"
        }`}
      >
        Start Game
      </button>
    </div>
  );
};

export default PlayerPanel;
