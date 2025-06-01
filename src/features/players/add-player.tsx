"use client";

import { useState } from "react";
import { addPlayer } from "@/lib/features/game-slice";
import { useAppDispatch } from "@/lib/hooks";

const AddPlayer = () => {
  const [playerName, setPlayerName] = useState("");

  const dispatch = useAppDispatch();

  // TODO: add max # of players validation
  // TODO: add max length validation for player name

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) return;
    dispatch(addPlayer(playerName));
    setPlayerName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center gap-2 w-full max-w-sm"
    >
      <input
        id="playerName"
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter player name"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default AddPlayer;
