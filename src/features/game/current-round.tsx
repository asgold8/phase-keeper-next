"use client";

import { saveRound } from "@/lib/features/game-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";
import { PlayerRound } from "@/types/game.types";

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
    <div className="flex flex-col w-full h-full max-w-full mb-4 border-2 border-indigo-700 rounded-md p-4">
      <h2 className="text-md font-semibold mb-4">{`Round ${currentRoundNumber}`}</h2>
      <div className="flex-1 overflow-x-auto">
        <table className="min-w-full w-full border-collapse table-fixed">
          <thead>
            <tr>
              {Object.entries(players).map(([playerName, player]) => (
                <th
                  key={playerName}
                  className="px-4 py-2 border border-gray-300 bg-gray-100 text-gray-800 font-semibold"
                >
                  <div>
                    <div className="truncate">{playerName}</div>
                    <div className="text-xs text-gray-600">
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
                  className="px-4 py-2 border border-gray-300 align-top"
                >
                  <label className="inline-flex space-x-2 mb-2">
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
                  <label className="inline-flex items-center space-x-2">
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
        </table>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 hover:cursor-pointer transition"
          onClick={() => handleSave()}
        >
          Save Round
        </button>
      </div>
    </div>
  );
};

export default CurrentRound;
