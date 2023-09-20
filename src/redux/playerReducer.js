import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  difficulty: "easy",
  isGameStarted: false,
  isModalOpen: false,
  target: 10,
  status: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    reset(state) {
      state.difficulty = initialState.difficulty;
      state.email = initialState.email;
      state.mobile = initialState.mobile;
      state.name = initialState.name;
      state.isGameStarted = initialState.isGameStarted;
      state.isModalOpen = initialState.isModalOpen;
      state.status = initialState.status;
    },

    setDifficulty: (state, action) => {
      if (action.payload === "") {
        state.difficulty = "easy";
        state.target = 10;
      } else {
        state.difficulty = action.payload;
        if (action.payload === "easy") {
          state.target = 10;
        } else if (action.payload === "medium") {
          state.target = 15;
        } else {
          state.target = 25;
        }
      }
    },
    setIsGameStarted: (state, action) => {
      state.isGameStarted = action.payload;
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setPlayer: (state, action) => {
      const { name, mobile, email } = action.payload;
      state.mobile = mobile;
      state.name = name;
      state.email = email;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default playerSlice.reducer;
export const {
  reset,
  setDifficulty,
  setIsGameStarted,
  setIsModalOpen,
  setPlayer,
  setStatus,
} = playerSlice.actions;
