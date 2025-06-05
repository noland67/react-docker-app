import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'; // パスは実際の構成に合わせてください

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;

// ルートステートとディスパッチの型をエクスポート
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
