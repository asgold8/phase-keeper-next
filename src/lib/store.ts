import { combineReducers, configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./features/score-slice";
// Ensure that scoreReducer is a valid reducer function exported as default from score-slice.ts

const rootReducer = combineReducers({
  score: scoreReducer,
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
