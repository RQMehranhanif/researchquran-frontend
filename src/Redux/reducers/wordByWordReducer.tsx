import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState = {
  WordData: {} as any,
};

export const WordByWordSlice = createSlice({
  name: "WordByWord",
  initialState,
  reducers: {
    setdiagnosis: (state, action: PayloadAction<any>) => {
        return { ...state, WordData: action.payload };
      },
  },
});

export const { setdiagnosis } =
  WordByWordSlice.actions;
export default WordByWordSlice.reducer;