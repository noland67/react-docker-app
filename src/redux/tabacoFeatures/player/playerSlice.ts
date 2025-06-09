import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
  tp: number;
  level: number;
}

const initialState: PlayerState = {
  tp: 0,
  level: 1 // 🔰 初期レベル
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addTP: (state, action: PayloadAction<number>) => {
      state.tp += action.payload;
    },
    levelUp: (state) => {
      state.level += 1;
    },
    setLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    }
  }
});

export const { addTP, levelUp, setLevel } = playerSlice.actions;
export default playerSlice.reducer;
