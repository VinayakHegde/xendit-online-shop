import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    toCart: (state, action) => {
      state.data = action.payload;
    },
    clear: (state) => {
      state.data = [];
    },
  },
});

export const { toCart, clear } = slice.actions;

export const addToCart = (product) => async (dispatch, getState) => {
  const { cart: { data: cart }, products: {data: products} } = getState();
  const exist = cart.find(prod => prod.id === product.id);

  const newProduct = JSON.parse(JSON.stringify(product));
  if (exist) {
    const exisitingProd = products.find(prod => prod.id === product.id);
    const quantity = Number(exist.quantity) + 1;
    newProduct.quantity = Math.min(exisitingProd.quantity, quantity);
  } else {
    newProduct.quantity = 1;
  }
  const filtered = cart.filter(product => product.id !== newProduct.id);
  dispatch(toCart([...filtered, newProduct]));
};

export const clearCart = () => async (dispatch) => {
  dispatch(clear());
};

export default slice.reducer;
