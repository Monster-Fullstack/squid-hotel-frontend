import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./rooms";
import authReducer from "./auth";
import productsReducer from "./products";

const store = configureStore({
  reducer: {
    roomsReducer,
    productsReducer,
    authReducer,
  },
});

export default store;
