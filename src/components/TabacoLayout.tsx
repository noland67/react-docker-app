// src/components/TabacoLayout.tsx
import React from 'react';
import { useAppSelector } from '../redux/hooks';

type LayoutProps = {
  children: React.ReactNode;
};

const TabacoLayout = ({ children }: LayoutProps) => {
  const tp = useAppSelector((state) => state.player.tp);

  return (
    <div className="relative w-[375px] h-[667px] mx-auto border border-gray-300 bg-green-50 overflow-hidden rounded-lg">
      {/* 主人公 */}
      <div className="absolute top-2 left-2">
        <div className="w-16 h-16 bg-yellow-300 rounded shadow text-xs flex items-center justify-center">主人公</div>
      </div>

      {/* TP */}
      <div className="absolute top-2 right-2 text-sm text-right">
        <div className="text-gray-700 font-semibold">TP: {tp}</div>
      </div>

      {/* 除湿器（常時ON） */}
      <div className="absolute top-14 right-2">
        <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">除湿器 稼働中</div>
      </div>

      {/* タスク（設備2） */}
      <div className="absolute top-32 right-2 w-20 h-12 bg-purple-100 border border-purple-300 rounded shadow text-center text-xs">
        タスク（仮）
      </div>

      {/* 箱 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{children}</div>

      {/* アイテム欄 */}
      <div className="absolute bottom-2 left-2 space-x-2">
        <button className="bg-pink-300 px-2 py-1 rounded text-xs">栄養剤</button>
        <button className="bg-pink-300 px-2 py-1 rounded text-xs">レア薬</button>
      </div>
    </div>
  );
};

export default TabacoLayout;
