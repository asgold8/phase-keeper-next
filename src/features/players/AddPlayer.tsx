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
      className="flex flex-row items-center gap-2 w-full"
    >
      <input
        id="playerName"
        type="text"
        disabled={disabled}
        value={playerName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPlayerName(e.target.value)
        }
        className="bg-white border border-gray-300 px-3 py-2 rounded w-full text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:text-gray-400 transition"
        placeholder="Enter player name"
        required
      />
      <button
        type="submit"
        className="bg-yellow-300 text-blue-900 font-bold px-5 py-2 rounded hover:bg-yellow-400 disabled:bg-gray-200 disabled:text-gray-400 cursor-pointer transition"
        disabled={disabled}
      >
        Add
      </button>
    </form>
  );
};

export default AddPlayer;
