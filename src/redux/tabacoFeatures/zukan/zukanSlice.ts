import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ZukanState {
  seen_tabacos: string[]; // 見かけたことのあるID
  collected_tabacos: string[]; // 吸ったことのあるID
}

const initialState: ZukanState = {
  seen_tabacos: [],
  collected_tabacos: []
};

export const zukanSlice = createSlice({
  name: 'zukan',
  initialState,
  reducers: {
    addSeenTabaco: (state, action: PayloadAction<string>) => {
      if (!state.seen_tabacos.includes(action.payload)) {
        state.seen_tabacos.push(action.payload);
      }
    },
    addCollectedTabaco: (state, action: PayloadAction<string>) => {
      if (!state.collected_tabacos.includes(action.payload)) {
        state.collected_tabacos.push(action.payload);
      }
    }
  }
});

export const { addSeenTabaco, addCollectedTabaco } = zukanSlice.actions;
export default zukanSlice.reducer;
