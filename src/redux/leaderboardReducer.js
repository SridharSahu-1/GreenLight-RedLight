import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    addToLeaderboard: (state, action) => {
      const player = { ...action.payload, id: Date.now().toString() }; //* add id to the player object
      const sortedData = [...state.data, player]
        .sort((a, b) => a.time - b.time)
        .slice(0, 5);
      state.data = sortedData;
    },
  },
});
export default leaderboardSlice.reducer;
export const { addToLeaderboard } = leaderboardSlice.actions;
