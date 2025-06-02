import TableContainer from "@/components/table-container";
import Table from "@/components/table";
import { useAppSelector } from "@/lib/hooks";

const RoundList = () => {
  const players = useAppSelector((state) => state.game.players);
  const rounds = useAppSelector((state) => state.game.rounds);

  const playerNames = Object.keys(players) ?? [];

  return (
    <TableContainer>
      <Table>
        <thead className="bg-indigo-100 ">
          <tr>
            <th />
            {playerNames.map((playerName) => (
              <th
                key={playerName}
                className="border-b border-l border-indigo-300 px-4 py-2 font-semibold text-indigo-700 "
              >
                {playerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(rounds).map(([roundNumber, round]) => (
            <tr key={roundNumber} className="even:bg-indigo-50">
              <td className="border-t border-indigo-300 px-4 py-2 border-b font-medium text-indigo-800">
                {roundNumber}
              </td>
              {round.map((playerRound) => {
                return (
                  <td
                    key={playerRound.playerName}
                    className="px-4 py-2 border-l border-t border-indigo-300 text-center"
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
            <td className="text-indigo-700 px-4 py-2 font-semibold">Total</td>
            {Object.entries(players).map(([playerName, player]) => (
              <td
                className="border-l border-t border-indigo-300 text-center text-indigo-700 font-semibold"
                key={`${playerName}-total`}
              >
                {player.totalScore}
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default RoundList;
