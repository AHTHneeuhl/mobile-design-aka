import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "config/newArrivals";

const initialState = {
  newArrivals: [] as TProduct[],
};

export const newArrivals = createSlice({
  name: "newArrivals",
  initialState,
  reducers: {
    setNewArrivals: (state, action: PayloadAction<TProduct[]>) => {
      return {
        ...state,
        newArrivals: action.payload,
      };
    },
  },
});

export default newArrivals.reducer;
