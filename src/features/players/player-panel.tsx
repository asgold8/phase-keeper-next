import React from "react";
import AddPlayer from "./add-player";
import PlayerList from "./player-list";

const PlayerPanel = ({ onStartGame }: { onStartGame: () => void }) => {
  return (
    <div>
      <AddPlayer />
      <PlayerList />
      <button
        onClick={onStartGame}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Start Game
      </button>
    </div>
  );
};

export default PlayerPanel;
