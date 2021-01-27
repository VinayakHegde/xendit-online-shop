import { createSlice } from "@reduxjs/toolkit";
import { endpoints } from './endpoints';

export const slice = createSlice({
  name: "config",
  initialState: {
    error: null,
    data: null,
  },
  reducers: {
    configuration: (state, action) => {
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

export const { configuration } = slice.actions;

export const getConfiguration = () => async (dispatch) => {
  try {
    const response = await fetch(endpoints.config, {
      method: "GET",
    });
    return dispatch(configuration([await response.json(), response.status]));
  } catch {
    return dispatch(configuration(['Server not running', 500]));
  }
};

export default slice.reducer;
