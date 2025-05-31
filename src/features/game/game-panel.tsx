"use client";

const GamePanel = ({ onEndGame }: { onEndGame: () => void }) => {
  return (
    <div>
      <h2>Game Panel</h2>
      <p>This is a placeholder for the game panel.</p>
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
