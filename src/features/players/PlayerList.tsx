import { removePlayer } from "@/lib/features/game-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PlayerList = () => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.game.players) ?? {};

  const handleRemovePlayer = (playerName: string) => {
    if (playerName) {
      // Dispatch an action to remove the player
      // Assuming you have a removePlayer action in your game slice
      dispatch(removePlayer(playerName));
    }
  };

  const playerNames = Object.keys(players) ?? [];
  return (
    <ul className="mt-4 flex flex-col items-start gap-2">
      {playerNames.map((playerName: string) => (
        <li
          key={playerName}
          className="inline-flex items-center gap-2 pl-4 pr-2 py-1 rounded-full bg-blue-500 text-white font-medium text-sm"
        >
          <span>{playerName}</span>
          <button
            type="button"
            className="flex items-center justify-center w-5 h-5 rounded-full text-white hover:bg-white/20 cursor-pointer"
            aria-label={`Remove ${playerName}`}
            onClick={() => handleRemovePlayer(playerName)}
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
