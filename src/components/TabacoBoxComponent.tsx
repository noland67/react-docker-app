import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { harvestTabaco } from '../redux/tabacoFeatures/tabaco/tabacoSlice';
import { Tabaco } from '../types/tabaco';
import { addTP } from '../redux/tabacoFeatures/player/playerSlice';
import { addCollectedTabaco } from '../redux/tabacoFeatures/zukan/zukanSlice';
import { TOBACCO_POSITIONS } from '../data/tabacoPositions';

const MAX_TOBACCOS = 20;

const TabacoBoxComponent = () => {
  const dispatch = useAppDispatch();
  const tabacos = useAppSelector((state) => state.tabaco.list);
  const collected = useAppSelector((state) => state.zukan.collected_tabacos);

  const handleHarvest = (tabaco: Tabaco) => {
    dispatch(harvestTabaco(tabaco.id));

    if (tabaco.status === 'ready') {
      dispatch(addTP(tabaco.value));
      dispatch(addCollectedTabaco(tabaco.name));
    }
    // withered → TP加算/図鑑登録なし
  };

  const visibleTabacos = tabacos.slice(0, MAX_TOBACCOS);

  return (
    <div className="relative w-[240px] h-[240px] bg-white border rounded-lg shadow">
      {visibleTabacos.map((tabaco) => {
        const isReady = tabaco.status === 'ready';
        const isWithered = tabaco.status === 'withered';
        const isGrowing = tabaco.status === 'growing';
        const pos = TOBACCO_POSITIONS[tabaco.positionIndex];

        return (
          <div
            key={tabaco.id}
            onClick={() => (isReady || isWithered) && handleHarvest(tabaco)}
            className={`
              absolute w-[40px] h-[40px] text-[10px] flex items-center justify-center
              border rounded cursor-pointer select-none
              transition-all duration-200
              ${isReady ? 'bg-green-300 hover:bg-green-400 text-black' : ''}
              ${isWithered ? 'bg-gray-300 text-gray-600 line-through opacity-50' : ''}
              ${isGrowing ? 'bg-gray-100 text-gray-400' : ''}
            `}
            style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
          >
            {tabaco.name}
            {(isReady || isWithered) && (
              <div className="absolute bottom-0 text-[9px] text-white bg-black bg-opacity-60 px-1 rounded">
                {isReady ? '収穫OK' : '廃棄'}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TabacoBoxComponent;
