"use client";

import { saveRound } from "@/lib/features/game-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";
import { PlayerRound } from "@/types/game.types";
import TableContainer from "@/components/TableContainer";
import Table from "@/components/Table";

const CurrentRound = () => {
  const dispatch = useAppDispatch();

  // Get players from the store
  const players = useAppSelector((state) => state.game.players) ?? {};

  const playerNames = Object.keys(players) ?? [];

  const currentRoundNumber = useAppSelector((state) => {
    const rounds = state.game.rounds ?? {};
    const roundNumbers = Object.keys(rounds).map(Number);
    if (roundNumbers.length === 0) return 1;
    return Math.max(...roundNumbers) + 1;
  });

  const currentDealer =
    playerNames.length > 0
      ? playerNames[(currentRoundNumber - 1) % playerNames.length]
      : "";

  const initialRoundDataState = playerNames.map((playerName) => ({
    playerName: playerName,
    finishedPhase: false,
    score: 0,
  }));
  const [roundData, setRoundData] = useState<PlayerRound[]>(
    () => initialRoundDataState
  );

  const handleSave = () => {
    dispatch(saveRound({ roundNumber: currentRoundNumber, round: roundData }));
    setRoundData(initialRoundDataState); // Reset round data after saving
  };

  const handleCheckboxChange = (playerName: string) => {
    const playerIndex = playerNames.indexOf(playerName);
    setRoundData((prevRoundData) => {
      const newRoundData = [...prevRoundData];
      newRoundData[playerIndex] = {
        ...newRoundData[playerIndex],
        finishedPhase: !newRoundData[playerIndex].finishedPhase,
      };
      return newRoundData;
    });
  };

  const handleScoreChange = (
    playerName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const playerIndex = playerNames.indexOf(playerName);
    const newScore = Number(event.target.value);
    setRoundData((prevRoundData) => {
      const newRoundData = [...prevRoundData];
      newRoundData[playerIndex] = {
        ...newRoundData[playerIndex],
        score: isNaN(newScore) ? 0 : newScore,
      };
      return newRoundData;
    });
  };

  return (
    <div className="flex flex-col w-full h-full max-w-full mb-4 border-2 border-white rounded-md p-3 sm:p-4">
      <h2 className="text-md text-white font-bold mb-3 sm:mb-4">{`Round ${currentRoundNumber}`}</h2>

      {/* Mobile: stacked player cards */}
      <div className="flex flex-col gap-2 sm:hidden">
        {Object.entries(players).map(([playerName, player]) => {
          const idx = playerNames.indexOf(playerName);
          const isDealer = playerName === currentDealer;
          return (
            <div
              key={playerName}
              className="flex items-center justify-between gap-2 rounded-md border-2 border-blue-700 bg-blue-100 px-3 py-2"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-blue-700 truncate">
                    {playerName}
                  </span>
                  {isDealer && (
                    <span className="text-[10px] uppercase tracking-wide text-green-700 font-bold">
                      Dealer
                    </span>
                  )}
                </div>
                <div className="text-xs text-blue-600">
                  {player.phase ? `Phase ${player.phase}` : "Phase 1"}
                </div>
              </div>
              <label className="flex items-center gap-1 text-xs text-blue-900">
                <span>Done?</span>
                <input
                  type="checkbox"
                  checked={roundData[idx]?.finishedPhase ?? false}
                  onChange={() => handleCheckboxChange(playerName)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </label>
              <label className="flex items-center gap-1 text-xs text-blue-900">
                <span>Score</span>
                <input
                  type="number"
                  inputMode="numeric"
                  value={roundData[idx]?.score ?? ""}
                  onChange={(event) => handleScoreChange(playerName, event)}
                  className="w-14 px-1 py-1 border rounded bg-white text-blue-900"
                />
              </label>
            </div>
          );
        })}
      </div>

      {/* Tablet/desktop: horizontal table */}
      <div className="hidden sm:block">
        <TableContainer>
          <Table>
            <thead className="bg-blue-100 ">
              <tr>
                {Object.entries(players).map(([playerName, player]) => (
                  <th
                    key={playerName}
                    className="border border-blue-300 px-4 py-2 font-semibold text-blue-700 border-b align-bottom"
                  >
                    <div>
                      <div className="text-xs text-green-700 underline">
                        {playerName === currentDealer ? "Dealer" : ""}
                      </div>
                      <div>{playerName}</div>
                      <div className="text-xs text-blue-600">
                        {player.phase ? `Phase ${player.phase}` : "Phase 1"}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {playerNames.map((playerName) => (
                  <td
                    key={playerName}
                    className="px-4 py-2 border border-indigo-300 align-top border-b"
                  >
                    <label className="flex items-center space-x-2 mb-2">
                      <span className="text-sm">Finished phase?</span>
                      <input
                        type="checkbox"
                        checked={
                          roundData[playerNames.indexOf(playerName)]
                            ?.finishedPhase ?? false
                        }
                        onChange={() => handleCheckboxChange(playerName)}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                    </label>
                    <label className="flex items-center space-x-2">
                      <span className="text-sm">Score:</span>
                      <input
                        type="text"
                        value={
                          roundData[playerNames.indexOf(playerName)]?.score ?? ""
                        }
                        onChange={(event) => handleScoreChange(playerName, event)}
                        className="w-16 px-1 py-0.5 border rounded"
                      />
                    </label>
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </div>

      <div className="mt-4 sm:mt-6 flex justify-end">
        <button
          className="btn-primary px-6 py-2 rounded w-full sm:w-auto"
          onClick={() => handleSave()}
        >
          Save Round
        </button>
      </div>
    </div>
  );
};

export default CurrentRound;
