// types/tabaco.ts

// 銘柄定義用（マスタ用）
export type TabacoDefinition = {
  name: string;
  rarity: number;
  spawn_rate: number;
  value: number;
};

// 実際に生えているたばこ（インスタンス）
export type Tabaco = {
  id: string;
  name: string;
  rarity: number;
  spawn_rate: number;
  value: number;
  growth_time: number;
  wither_time: number;
  status: 'growing' | 'ready' | 'withered';
  startTime: number;
  positionIndex: number;
};
