import { createSlice } from "@reduxjs/toolkit";
import { isUndefined } from "lodash";

const initialState = {
  scores: {},
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setScore: (state, action) => {
      console.log("setScore action:", action);
      const { params = {}, key, value } = action.payload;
      if (key && !isUndefined(value)) {
        params[key] = value;
      }
      state.scores = { ...state.scores, ...params };
    },
    resetScores: (state) => {
      state.scores = {};
    },
  },
});

export const { setScore, resetScores } = scoreSlice.actions;
export default scoreSlice.reducer;
export { scoreSlice };
