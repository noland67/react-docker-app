import React, { useEffect } from 'react';
import TabacoLayout from '../components/TabacoLayout';
import TabacoBoxComponent from '../components/TabacoBoxComponent';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateTabacoStatus, harvestTabaco, addTabacoByLevel } from '../redux/tabacoFeatures/tabaco/tabacoSlice';
import { TOBACCO_POSITIONS } from '../data/tabacoPositions';
import { selectEffectRate } from '../redux/tabacoFeatures/equipment/equipmentSlice';

const MAX_TOBACCOS = 20;
const SPAWN_INTERVAL = 5000; // 5秒ごとに生える

const TabacoPage = () => {
  const dispatch = useAppDispatch();
  const tabacos = useAppSelector((state) => state.tabaco.list);
  const effectRate = useAppSelector(selectEffectRate);
  const level = useAppSelector((state) => state.player.level);

  // 自動生成（ランダムな空き座標を選んで追加）
  useEffect(() => {
    const interval = setInterval(() => {
      if (tabacos.length >= MAX_TOBACCOS) return;

      const usedPositions = tabacos.map((t) => t.positionIndex);
      const availablePositions = TOBACCO_POSITIONS.map((_, index) => index).filter((i) => !usedPositions.includes(i));

      if (availablePositions.length === 0) return;

      const randomIndex = Math.floor(Math.random() * availablePositions.length);
      const positionIndex = availablePositions[randomIndex];

      dispatch(addTabacoByLevel({ level, positionIndex, effectRate }));
    }, SPAWN_INTERVAL);

    return () => clearInterval(interval);
  }, [tabacos, level, effectRate, dispatch]);

  // 成長・しおれ状態の更新
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      tabacos.forEach((tabaco) => {
        const elapsed = now - tabaco.startTime;

        if (tabaco.status === 'growing' && elapsed >= tabaco.growth_time) {
          dispatch(updateTabacoStatus({ id: tabaco.id, status: 'ready' }));
        } else if (tabaco.status === 'ready' && elapsed >= tabaco.wither_time) {
          dispatch(updateTabacoStatus({ id: tabaco.id, status: 'withered' }));
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [tabacos, dispatch]);

  return (
    <div className="mt-36">
      <TabacoLayout>
        <TabacoBoxComponent />
      </TabacoLayout>
    </div>
  );
};

export default TabacoPage;
