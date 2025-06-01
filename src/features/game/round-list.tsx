import { useAppSelector } from "@/lib/hooks";

const RoundList = () => {
  const players = useAppSelector((state) => state.game.players);
  const rounds = useAppSelector((state) => state.game.rounds);

  const playerNames = Object.keys(players) ?? [];

  return (
    <div className="flex flex-col w-full h-full max-w-full border-2 border-indigo-700 rounded-md p">
      <table className="min-w-full border-4 border-indigo-700 rounded-lg overflow-hidden">
        <thead className="bg-indigo-100 ">
          <tr>
            <th />
            {playerNames.map((playerName) => (
              <th
                key={playerName}
                className="border border-indigo-300 px-4 py-2 font-semibold text-indigo-700 border-b"
              >
                {playerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(rounds).map(([roundNumber, round]) => (
            <tr key={roundNumber} className="even:bg-indigo-50">
              <td className="border border-indigo-300 px-4 py-2 border-b font-medium text-indigo-800">
                {roundNumber}
              </td>
              {round.map((playerRound) => {
                return (
                  <td
                    key={playerRound.playerName}
                    className="px-4 py-2 border border-indigo-300 text-center"
                  >
                    {playerRound.finishedPhase ? (
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="accent-green-500 cursor-default"
                      />
                    ) : (
                      <span className="text-red-500 font-bold">X</span>
                    )}
                    <span className="ml-2 text-indigo-700">
                      {playerRound.score}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
          <tr key="total" className="bg-indigo-100">
            <td className="border border-indigo-300 text-indigo-700 px-4 py-2 font-semibold">
              Total
            </td>
            {Object.entries(players).map(([playerName, player]) => (
              <td
                className="border border-indigo-300 text-center text-indigo-700 font-semibold"
                key={`${playerName}-total`}
              >
                {player.totalScore}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RoundList;
