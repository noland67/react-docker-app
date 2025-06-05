import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Stateの型定義
interface CounterState {
  value: number;
}

// 初期状態
const initialState: CounterState = {
  value: 0
};

// Sliceの作成
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // 任意の値で加算する例（必要に応じて）
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

// Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Reducerのエクスポート
export default counterSlice.reducer;
