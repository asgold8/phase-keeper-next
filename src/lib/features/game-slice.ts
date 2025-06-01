import { createSlice } from "@reduxjs/toolkit";
import { GameState, Player, PlayerRound } from "@/types/game.types";

const initialState: GameState = {
  rounds: {},
  players: {},
};

const initialPlayerState: Player = {
  totalScore: 0,
  phase: 1,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setScore: (state, action) => {
      const { params = {}, key, value } = action.payload;
      if (key && value !== undefined) {
        params[key] = value;
      }
      state.rounds = { ...state.rounds, ...params };
    },
    addPlayer: (state, action) => {
      const playerName = action.payload;
      if (playerName && !state.players[playerName]) {
        state.players[playerName] = initialPlayerState;
      }
    },
    removePlayer: (state, action) => {
      const playerName = action.payload;
      if (playerName && state.players[playerName]) {
        delete state.players[playerName];
      }
    },
    saveRound: (state, action) => {
      const { roundNumber, round } = action.payload;
      if (roundNumber && round) {
        state.rounds[roundNumber] = round;
        // Update player scores based on the round data
        round.forEach((playerRound: PlayerRound) => {
          const { playerName, finishedPhase, score } = playerRound;
          if (state.players[playerName]) {
            state.players[playerName].totalScore += score;
            if (finishedPhase) {
              state.players[playerName].phase += 1; // Increment phase for the player
            }
          }
        });
      }
    },
    endGame: () => initialState,
    resetScores: (state) => {
      state.rounds = {};
      Object.keys(state.players).forEach((playerName) => {
        state.players[playerName] = { ...initialPlayerState };
      });
    },
  },
});

export const {
  addPlayer,
  removePlayer,
  saveRound,
  setScore,
  endGame,
  resetScores,
} = gameSlice.actions;
export default gameSlice.reducer;
export { gameSlice };
