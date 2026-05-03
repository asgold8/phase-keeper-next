import TableContainer from "@/components/TableContainer";
import Table from "@/components/Table";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { TrashIcon } from "@heroicons/react/24/outline";
import { removeRound } from "@/lib/features/game-slice";

const RoundList = () => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.game.players);
  const rounds = useAppSelector((state) => state.game.rounds);

  const playerNames = Object.keys(players) ?? [];

  function handleDeleteRound(roundNumber: string): void {
    dispatch(removeRound(roundNumber));
  }

  return (
    <TableContainer>
      <Table>
        <thead className="bg-blue-100 ">
          <tr>
            <th />
            {playerNames.map((playerName) => (
              <th
                key={playerName}
                className="border-b border-l border-blue-300 px-4 py-2 font-semibold text-blue-700 "
              >
                {playerName}
              </th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {Object.entries(rounds).map(
            ([roundNumber, round], index, roundArray) => (
              <tr key={roundNumber} className="even:bg-blue-50 odd:bg-blue-300">
                <td className="border-t border-blue-300 px-4 py-2 border-b font-medium text-blue-800">
                  {roundNumber}
                </td>
                {round.map((playerRound) => {
                  return (
                    <td
                      key={playerRound.playerName}
                      className="px-4 py-2 border-l border-t border-blue-300 text-center"
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
                      <span className="ml-2 text-blue-700">
                        {playerRound.score}
                      </span>
                    </td>
                  );
                })}
                {index === roundArray.length - 1 ? (
                  <td className="py-2 border-t border-blue-300 text-center">
                    <button
                      type="button"
                      className="p-1 rounded hover:bg-blue-200 focus:outline-none"
                      aria-label="Delete round"
                      onClick={() => handleDeleteRound(roundNumber)}
                    >
                      <TrashIcon className="w-5 h-5 stroke-blue-800 stroke-2" />
                    </button>
                  </td>
                ) : (
                  <td className=" py-2 border-t w-1 border-blue-300 text-center" />
                )}
              </tr>
            )
          )}
          <tr key="total" className="bg-blue-100">
            <td className="text-blue-700 px-4 py-2 font-semibold">Total</td>
            {Object.entries(players).map(([playerName, player]) => (
              <td
                className="border-l border-t border-blue-300 text-center text-blue-700 font-semibold"
                key={`${playerName}-total`}
              >
                {player.totalScore}
              </td>
            ))}
            <td className="border-t border-blue-300" />
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default RoundList;
