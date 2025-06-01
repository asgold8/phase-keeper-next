import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/game-slice";
// Ensure that scoreReducer is a valid reducer function exported as default from score-slice.ts

const rootReducer = combineReducers({
  game: gameReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
