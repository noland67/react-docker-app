import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import tabacoReducer from './tabacoFeatures/tabaco/tabacoSlice';
import playerReducer from './tabacoFeatures/player/playerSlice';
import zukanReducer from './tabacoFeatures/zukan/zukanSlice';
import equipmentReducer from './tabacoFeatures/equipment/equipmentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tabaco: tabacoReducer,
    player: playerReducer,
    zukan: zukanReducer,
    equipment: equipmentReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
