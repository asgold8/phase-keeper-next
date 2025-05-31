import { useAppSelector } from "@/lib/hooks";

const PlayerList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const players = useAppSelector((state: any) => state.score.scores) ?? {};
  const playerNames = Object.keys(players) ?? [];
  return (
    <ul>
      {playerNames.map((playerName: string) => (
        <li key={playerName} className="my-2">
          <span
            className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm shadow-sm"
            style={{ minWidth: 0 }}
          >
            {playerName}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
