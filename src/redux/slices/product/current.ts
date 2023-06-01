import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "config/newArrivals";

const initialState = {
  product: {} as TProduct,
};

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<TProduct>) => {
      return {
        ...state,
        product: action.payload,
      };
    },
    incrementQuantity: (state) => {
      return {
        ...state,
        product: {
          ...state.product,
          quantity: state.product.quantity + 1,
        },
      };
    },
    decrementQuantity: (state) => {
      return {
        ...state,
        product: {
          ...state.product,
          quantity:
            state.product.quantity > 1
              ? state.product.quantity - 1
              : state.product.quantity,
        },
      };
    },
  },
});

export const { setProduct, incrementQuantity, decrementQuantity } =
  product.actions;
export default product.reducer;
