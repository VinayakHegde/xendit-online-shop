import { createSlice } from "@reduxjs/toolkit";
import { endpoints } from './endpoints';

export const slice = createSlice({
  name: "products",
  initialState: {
    error: null,
    data: [],
  },
  reducers: {
    products: (state, action) => {
      const [res, status] = action.payload;
      if (status >= 300) {
        state.error = res;
      } else {
        state.data = res;
        state.error = null;
      }
    }
  },
});

export const { products } = slice.actions;

export const getProducts = () => async (dispatch) => {
  try {
    const response = await fetch(endpoints.products, {
      method: "GET",
    });
    return dispatch(products([await response.json(), response.status]));
  } catch {
    return dispatch(products(['Server not running', 500]));
  }
};

export default slice.reducer;
