"use client";

import { useState } from "react";
import { addPlayer } from "@/lib/features/game-slice";
import { useAppDispatch } from "@/lib/hooks";

interface AddPlayerProps {
  disabled?: boolean;
}

const AddPlayer: React.FC<AddPlayerProps> = (props) => {
  const { disabled } = props;
  const [playerName, setPlayerName] = useState<string>("");

  const dispatch = useAppDispatch();

  // TODO: add max # of players validation
  // TODO: add max length validation for player name

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        disabled={disabled}
        value={playerName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPlayerName(e.target.value)
        }
        className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none transition"
        placeholder="Enter player name"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none transition"
        disabled={disabled}
      >
        Add
      </button>
    </form>
  );
};

export default AddPlayer;
