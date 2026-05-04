import { removePlayer } from "@/lib/features/game-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

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
    <ul>
      {playerNames.map((playerName: string) => (
        <li
          key={playerName}
          className="mt-2 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm shadow-sm"
          style={{ minWidth: 0, width: "fit-content" }}
        >
          <span className="inline-block px-3">{playerName}</span>
          <button
            type="button"
            className="px-3 text-indigo-500 hover:text-indigo-700 font-bold rounded-full hover:cursor-pointer"
            aria-label={`Remove ${playerName}`}
            onClick={() => handleRemovePlayer(playerName)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
