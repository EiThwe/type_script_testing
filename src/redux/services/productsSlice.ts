/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductsType } from "../../App";


interface ProductType {
  products: ProductsType[];
}

const initialState: ProductType = {
  products: [],
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, { payload }: PayloadAction<ProductsType[]>) => {
      state.products.push(...payload);
    },
  },
});

export const { getProducts } = counterSlice.actions;

export default counterSlice.reducer;
