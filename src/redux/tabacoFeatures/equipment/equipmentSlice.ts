// src/redux/tabacoFeatures/equipment/equipmentSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type EquipmentKey = 'dehumidifier' | 'fertilizer' | 'geneticBooster';

interface EquipmentState {
  owned: {
    [key in EquipmentKey]: boolean;
  };
}

const initialState: EquipmentState = {
  owned: {
    dehumidifier: false,
    fertilizer: false,
    geneticBooster: false
  }
};

export const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
    purchaseEquipment: (state, action: PayloadAction<EquipmentKey>) => {
      state.owned[action.payload] = true;
    }
  }
});

export const { purchaseEquipment } = equipmentSlice.actions;

// 🔧 効果セレクター（例：枯れ時間倍率）
export const selectEffectRate = (state: RootState): number => {
  return state.equipment.owned.dehumidifier ? 1.5 : 1.0;
};
export default equipmentSlice.reducer;
