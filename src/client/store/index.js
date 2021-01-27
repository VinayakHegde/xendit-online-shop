import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./config-slice";
import productsReducer from "./product-slice";
import cartReducer from "./cart-slice";

export default configureStore({
  reducer: {
    config: configReducer,
    products: productsReducer,
    cart: cartReducer
  }
});
