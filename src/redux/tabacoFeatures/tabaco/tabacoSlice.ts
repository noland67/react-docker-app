import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tabaco, TabacoDefinition } from '../../../types/tabaco'; // ← ✅ 型を明確に分離して使う

// --- 銘柄マスタ ---
const TabacoMasterList: TabacoDefinition[] = [
  { name: 'メビウス', rarity: 1, spawn_rate: 1, value: 50 },
  { name: 'マールボロ', rarity: 2, spawn_rate: 0.9, value: 55 },
  { name: 'セブンスター', rarity: 3, spawn_rate: 0.85, value: 60 },
  { name: 'アメリカンスピリット', rarity: 4, spawn_rate: 0.8, value: 65 },
  { name: 'ラーク', rarity: 5, spawn_rate: 0.75, value: 70 },
  { name: 'キャメル', rarity: 6, spawn_rate: 0.7, value: 75 },
  { name: 'ウィンストン', rarity: 7, spawn_rate: 0.65, value: 80 },
  { name: 'ピース', rarity: 8, spawn_rate: 0.6, value: 85 },
  { name: 'ピアニッシモ', rarity: 9, spawn_rate: 0.55, value: 90 },
  { name: 'ケント', rarity: 10, spawn_rate: 0.5, value: 95 },
  { name: 'パーラメント', rarity: 11, spawn_rate: 0.48, value: 100 },
  { name: 'ホープ', rarity: 12, spawn_rate: 0.46, value: 105 },
  { name: 'ラッキーストライク', rarity: 13, spawn_rate: 0.44, value: 110 },
  { name: 'ハイライト', rarity: 14, spawn_rate: 0.42, value: 115 },
  { name: 'ゴールデンバット', rarity: 15, spawn_rate: 0.4, value: 120 },
  { name: 'クール', rarity: 16, spawn_rate: 0.38, value: 125 },
  { name: 'バージニアスリム', rarity: 17, spawn_rate: 0.36, value: 130 },
  { name: 'アークローヤル', rarity: 18, spawn_rate: 0.34, value: 135 },
  { name: 'ブラックデビル', rarity: 19, spawn_rate: 0.32, value: 140 },
  { name: 'キャスター', rarity: 20, spawn_rate: 0.3, value: 145 },
  { name: 'ジタン', rarity: 21, spawn_rate: 0.28, value: 150 },
  { name: 'ゴロワーズ', rarity: 22, spawn_rate: 0.26, value: 155 },
  { name: 'ダビドフ', rarity: 23, spawn_rate: 0.24, value: 160 },
  { name: 'ガラム', rarity: 24, spawn_rate: 0.22, value: 165 },
  { name: 'ソブラニー', rarity: 25, spawn_rate: 0.2, value: 170 },
  { name: 'ペペ', rarity: 26, spawn_rate: 0.18, value: 175 },
  { name: 'プエブロ', rarity: 27, spawn_rate: 0.16, value: 180 },
  { name: 'ベヴェル', rarity: 28, spawn_rate: 0.14, value: 185 },
  { name: 'ピール', rarity: 29, spawn_rate: 0.12, value: 190 },
  { name: 'わかば', rarity: 30, spawn_rate: 0.1, value: 195 },
  { name: 'エコー', rarity: 31, spawn_rate: 0.08, value: 200 },
  { name: 'ネクスト', rarity: 32, spawn_rate: 0.06, value: 210 },
  { name: 'エクスプレス', rarity: 33, spawn_rate: 0.04, value: 220 },
  { name: 'ルーシア', rarity: 34, spawn_rate: 0.02, value: 250 }
];

interface TabacoState {
  list: Tabaco[];
}

const initialState: TabacoState = {
  list: []
};

const getMaxRarityByLevel = (level: number) => {
  return Math.min(2 + level * 2, 34);
};

const createRandomTabaco = (level: number, positionIndex: number, effectRate: number): Tabaco => {
  const maxRarity = getMaxRarityByLevel(level);
  const candidates = TabacoMasterList.filter((t) => t.rarity <= maxRarity);
  const totalWeight = candidates.reduce((acc, cur) => acc + cur.spawn_rate, 0);
  let r = Math.random() * totalWeight;
  let selected = candidates[0];

  for (const candidate of candidates) {
    r -= candidate.spawn_rate;
    if (r <= 0) {
      selected = candidate;
      break;
    }
  }

  return {
    id: crypto.randomUUID(),
    name: selected.name,
    rarity: selected.rarity,
    spawn_rate: selected.spawn_rate,
    value: selected.value,
    growth_time: 5000,
    wither_time: 10000 * effectRate,
    status: 'growing',
    startTime: Date.now(),
    positionIndex
  };
};

export const tabacoSlice = createSlice({
  name: 'tabaco',
  initialState,
  reducers: {
    addTabaco: (state, action: PayloadAction<Tabaco>) => {
      state.list.push(action.payload);
    },
    updateTabacoStatus: (state, action: PayloadAction<{ id: string; status: Tabaco['status'] }>) => {
      const t = state.list.find((t) => t.id === action.payload.id);
      if (t) t.status = action.payload.status;
    },
    harvestTabaco: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
    addTabacoByLevel: (state, action: PayloadAction<{ level: number; positionIndex: number; effectRate: number }>) => {
      const { level, positionIndex, effectRate } = action.payload;
      const newTabaco = createRandomTabaco(level, positionIndex, effectRate);
      state.list.push(newTabaco);
    }
  }
});

export const { addTabaco, updateTabacoStatus, harvestTabaco, addTabacoByLevel } = tabacoSlice.actions;
export default tabacoSlice.reducer;
