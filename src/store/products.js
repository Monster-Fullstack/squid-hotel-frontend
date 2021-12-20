import { createSlice } from "@reduxjs/toolkit";

const initialProducts = { products: [] };

const products = createSlice({
  name: "room",
  initialState: initialProducts,
  reducers: {
    getMoreProducts(state, action) {
      const products = action.payload;
      const join = state.products.concat(products);
      state.products = join;
    },
  },
});

const productsReducer = products.reducer;

export const productsActions = products.actions;
export default productsReducer;
