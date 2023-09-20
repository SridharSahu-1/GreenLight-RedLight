import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playerReducer";
import leaderboardReducer from "./leaderboardReducer";
const store = configureStore({
  reducer: {
    player: playerReducer,
    leaderboard: leaderboardReducer,
  },
});

export default store;
