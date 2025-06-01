export type Player = {
  totalScore: number;
  phase: number;
};

export type PlayerRound = {
  playerName: string;
  finishedPhase: boolean;
  score: number;
};

export type GameState = {
  rounds: Record<number, PlayerRound[]>;
  players: Record<string, Player>;
};
